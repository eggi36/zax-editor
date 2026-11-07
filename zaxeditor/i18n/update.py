"""Update the translation files from the code and compile them.

    python -m zaxeditor.i18n.update              # all zaxeditor_<code>.ts in this folder, then .qm
    python -m zaxeditor.i18n.update --new fr     # add a language: zaxeditor_fr.ts with every text unfinished
    python -m zaxeditor.i18n.update --check      # only report, change nothing (exit status 1 if not current)

The texts are found with Python's ``ast`` instead of ``pyside6-lupdate``: lupdate's Python parser misses
calls whose count argument is an expression (``len(parts)``) and then loses the plural form. Found are
``translate(context, text[, disambiguation[, n]])`` and ``QT_TRANSLATE_NOOP(context, text)`` with literal
context and text in ``zaxeditor/*.py`` and ``zaxtools/*.py``; a call with a count is a plural text
(``%n``). The ``.ts`` files keep the format of Qt Linguist: existing translations stay, new texts are
added unfinished, texts that left the code are marked ``vanished`` (and dropped by the next update).
``zaxeditor_en.ts`` holds only the plural texts (the English singular and plural forms).
The ``.qm`` files are compiled with the ``lrelease`` of PySide6.
"""
from __future__ import annotations

import argparse
import ast
import subprocess
import sys
import xml.etree.ElementTree as ET
from dataclasses import dataclass, field
from pathlib import Path
from xml.sax.saxutils import escape

DIR = Path(__file__).resolve().parent
ROOT = DIR.parent.parent


def _formats_root() -> Path:
    """The folder holding zaxtools/ (zax-formats, its own repository since 2026-11-07; zaxeditor/__init__.py finds it)."""
    from zaxeditor import FORMATS
    return FORMATS


# (root, pattern): the editor's texts and those zaxtools makes for a UI (zaxtools.i18n); the .ts locations stay
# relative to each root (zaxeditor/..., zaxtools/...), as before the split
SOURCES = ((lambda: ROOT, 'zaxeditor/*.py'), (_formats_root, 'zaxtools/*.py'))
SOURCE_LANG = 'en'
NUMERUS = {'en': 2, 'de': 2}          # plural forms per language (Qt's rules; others: see Qt Linguist)


@dataclass
class Message:
    context: str
    source: str
    numerus: bool = False
    disambiguation: str = ''
    locations: list[tuple[str, int]] = field(default_factory=list)


@dataclass
class Entry:
    """A message as stored in a .ts file."""
    context: str
    source: str
    numerus: bool
    kind: str                 # '' (finished) | 'unfinished' | 'vanished' | 'obsolete'
    text: str | list[str]     # translation, list of forms for plural texts
    disambiguation: str = ''


def source_files() -> list[Path]:
    files = [p for root, pat in SOURCES for p in root().glob(pat)]
    if not any(p.parent.name == 'zaxtools' for p in files):
        raise SystemExit('zaxtools not found (zax-formats next to this repository, or ZAX_FORMATS)')
    return sorted(files, key=lambda p: (p.parent.name, p.name))


def _literal(node) -> str | None:
    return node.value if isinstance(node, ast.Constant) and isinstance(node.value, str) else None


def extract(files: list[Path] | None = None) -> dict[tuple[str, str], Message]:
    """(context, source text) -> Message, in the order of the files."""
    out: dict[tuple[str, str], Message] = {}
    for path in files or source_files():
        tree = ast.parse(path.read_text(encoding='utf-8'), str(path))
        rel = f'{path.parent.name}/{path.name}'
        calls = sorted((n for n in ast.walk(tree) if isinstance(n, ast.Call)), key=lambda n: (n.lineno, n.col_offset))
        for n in calls:
            name = n.func.id if isinstance(n.func, ast.Name) else n.func.attr if isinstance(n.func, ast.Attribute) else ''
            if name not in ('translate', 'QT_TRANSLATE_NOOP') or len(n.args) < 2:
                continue
            ctx, text = _literal(n.args[0]), _literal(n.args[1])
            if ctx is None or text is None:
                continue            # a text from a table, marked where it is defined
            dis = _literal(n.args[2]) if len(n.args) > 2 else None
            numerus = name == 'translate' and (len(n.args) > 3 or any(k.arg == 'n' for k in n.keywords))
            m = out.setdefault((ctx, text), Message(ctx, text, numerus, dis or ''))
            m.numerus |= numerus
            m.locations.append((rel, n.lineno))
    return out


def read_ts(path: Path) -> tuple[str, dict[tuple[str, str], Entry]]:
    root = ET.parse(path).getroot()
    out: dict[tuple[str, str], Entry] = {}
    for c in root.iter('context'):
        ctx = c.findtext('name') or ''
        for m in c.iter('message'):
            src = m.findtext('source') or ''
            tr = m.find('translation')
            numerus = m.get('numerus') == 'yes'
            text = [f.text or '' for f in tr.iter('numerusform')] if numerus else (tr.text or '')
            out[(ctx, src)] = Entry(ctx, src, numerus, tr.get('type', ''), text, m.findtext('comment') or '')
    return root.get('language', ''), out


def _x(text: str) -> str:
    return escape(text, {'"': '&quot;', "'": '&apos;'})


def write_ts(path: Path, lang: str, messages: dict[tuple[str, str], Message], entries: dict[tuple[str, str], Entry]):
    """``messages``: the texts of the code; ``entries``: translations so far (also of vanished texts)."""
    lines = ['<?xml version="1.0" encoding="utf-8"?>', '<!DOCTYPE TS>', f'<TS version="2.1" language="{lang}">']
    contexts: dict[str, list] = {}
    for key, m in messages.items():
        contexts.setdefault(m.context, []).append((m, entries.get(key)))
    for key, e in entries.items():
        if key not in messages and e.kind not in ('vanished', 'obsolete'):
            contexts.setdefault(e.context, []).append((None, e))
    forms = NUMERUS.get(lang, 2)
    for ctx in sorted(contexts):
        lines += ['<context>', f'    <name>{_x(ctx)}</name>']
        for m, e in contexts[ctx]:
            numerus = m.numerus if m is not None else e.numerus
            attr = ' numerus="yes"' if numerus else ''
            lines.append(f'    <message{attr}>')
            # the files only, without line numbers: edits elsewhere in a file do not change the .ts
            for f in dict.fromkeys(f for f, _ in (m.locations if m is not None else [])):
                lines.append(f'        <location filename="../../{f}"/>')
            lines.append(f'        <source>{_x(m.source if m is not None else e.source)}</source>')
            dis = m.disambiguation if m is not None else e.disambiguation
            if dis:
                lines.append(f'        <comment>{_x(dis)}</comment>')
            if m is None:
                kind = 'vanished'
            elif e is None or e.kind in ('unfinished', 'vanished', 'obsolete') or e.numerus != numerus:
                kind = 'unfinished'
            else:
                kind = ''
            t = f' type="{kind}"' if kind else ''
            if numerus:
                old = e.text if e is not None and isinstance(e.text, list) else []
                old = (old + [''] * forms)[:forms]
                lines.append(f'        <translation{t}>')
                lines += [f'            <numerusform>{_x(x)}</numerusform>' for x in old]
                lines.append('        </translation>')
            else:
                old = e.text if e is not None and isinstance(e.text, str) else ''
                lines.append(f'        <translation{t}>{_x(old)}</translation>')
            lines.append('    </message>')
        lines.append('</context>')
    lines.append('</TS>')
    path.write_text('\n'.join(lines) + '\n', encoding='utf-8')


def lrelease_path() -> Path:
    import PySide6
    d = Path(PySide6.__file__).resolve().parent
    return next((p for p in (d / 'lrelease', d / 'lrelease.exe', d / 'Qt' / 'libexec' / 'lrelease') if p.exists()),
                d / 'lrelease')


def release(ts: Path, qm: Path | None = None) -> None:
    qm = qm or ts.with_suffix('.qm')
    subprocess.run([str(lrelease_path()), '-silent', str(ts), '-qm', str(qm)], check=True)


def wanted(lang: str, messages: dict[tuple[str, str], Message]) -> dict[tuple[str, str], Message]:
    """The texts a language's file holds: all, English only the plural texts."""
    return {k: m for k, m in messages.items() if m.numerus} if lang == SOURCE_LANG else messages


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--new', metavar='CODE', help='create zaxeditor_CODE.ts')
    ap.add_argument('--check', action='store_true', help='report only')
    a = ap.parse_args(argv)
    messages = extract()
    files = sorted(DIR.glob('zaxeditor_*.ts'))
    if a.new:
        p = DIR / f'zaxeditor_{a.new}.ts'
        if p.exists():
            sys.exit(f'{p.name} exists already')
        write_ts(p, a.new, wanted(a.new, messages), {})
        files = sorted(set(files) | {p})
    stale = 0
    for ts in files:
        lang, entries = read_ts(ts)
        want = wanted(lang, messages)
        new = [k for k in want if k not in entries]
        gone = [k for k in entries if k not in want and entries[k].kind not in ('vanished', 'obsolete')]
        open_ = [k for k in want if k in entries and entries[k].kind == 'unfinished']
        print(f'{ts.name}: {len(want)} texts, {len(new)} new, {len(gone)} vanished, {len(open_)} unfinished')
        if a.check:
            stale += bool(new or gone)
            continue
        write_ts(ts, lang, want, entries)
        release(ts)
    return 1 if stale else 0


if __name__ == '__main__':
    raise SystemExit(main())
