"""Self-test of the editor's UI texts (section 9 of the former zax-formats/tools/selftest.py; the format library's
sections 1-8 are zax-formats/tools/selftest.py since the split of 2026-11-07).

    python tools/selftest_ui.py

The .ts files against the texts of the code, the compiled .qm files against a fresh lrelease, no German string literal
in the editor outside translate(). Needs no game data.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
import zaxeditor  # noqa: E402,F401  puts zax-formats (zaxtools) on the path


def main():
    failures = 0

    def report(title, ok, total, extra=''):
        nonlocal failures
        failures += total - ok
        mark = 'OK ' if ok == total else 'FAIL'
        print(f'[{mark}] {title}: {ok}/{total} {extra}')

    # 9. UI translations (zaxeditor/i18n): English source texts, German translation complete and current
    _check_translations(report)
    print(f'\nDone, {failures} failures.')
    raise SystemExit(1 if failures else 0)


_GERMAN = re.compile(r'[äöüÄÖÜß„]|\b(der|die|das|und|nicht|ist|ein|eine|einen|einem|kein|keine|mit|für|oder|wird|'
                     r'werden|auf|aus|zu|von|bei|nach|im|vom|zum|beim|dem|den|des|sich|wenn|noch|schon|nur|auch|'
                     r'ohne|Bitte|Datei|Ordner|wählen|Spiel|Objekt|Objekte|Fläche|Boden|Textur|Ziel|Startpunkt|'
                     r'Fehler|Warnung|Hinweis|Musik|Neues|Neue|Eigene|Modell|Modelle|Speichern|Abbrechen|Alle|'
                     r'Keine|Zeichnen|zeichnen|lesen|Punkt|Punkte|Bilder|Grenzen|Schritt|Einheit|Standard|Level '
                     r'öffnen|Verweis|Verweise|Übergang|Auswahl)\b')
# string literals of zaxeditor/*.py that are German on purpose (none: the defaults written into files are
# English since 2026-10-29)
_GERMAN_ALLOWED = set()
_PLACEHOLDER = re.compile(r'\{[a-z_]+\}|%n')


def _check_translations(report):
    """The .ts files against the texts of the code (zaxeditor.i18n.update.extract), the compiled .qm files
    against a fresh lrelease, and no German string literal in the editor outside translate()."""
    import ast
    import tempfile
    from zaxeditor.i18n import update as up
    msgs = up.extract()
    lang, de = up.read_ts(up.DIR / 'zaxeditor_de.ts')
    _, en = up.read_ts(up.DIR / 'zaxeditor_en.ts')
    bad = []
    for k, m in msgs.items():
        e = de.get(k)
        forms = (e.text if isinstance(e.text, list) else [e.text]) if e is not None else []
        if e is None or e.kind or e.numerus != m.numerus or not forms or not all(forms):
            bad.append(f'not translated: {k[0]}: {k[1][:60]!r}')
        elif any(sorted(_PLACEHOLDER.findall(f)) != sorted(_PLACEHOLDER.findall(k[1])) for f in forms):
            bad.append(f'placeholders differ: {k[0]}: {k[1][:60]!r}')
    bad += [f'obsolete in zaxeditor_de.ts: {k[0]}: {k[1][:60]!r}' for k in de if k not in msgs]
    report('UI texts: German translation of every source text (zaxeditor_de.ts), none obsolete',
           len(msgs) + len(de) - len(bad), len(msgs) + len(de), bad[:3] or {'texts': len(msgs), 'language': lang})
    plural = {k for k, m in msgs.items() if m.numerus}
    bad = [k for k in plural if k not in en or en[k].kind or not all(en[k].text)] + [k for k in en if k not in plural]
    report('UI texts: English plural forms (zaxeditor_en.ts)', len(plural) + len(en) - len(bad),
           len(plural) + len(en), [f'{k[0]}: {k[1][:60]!r}' for k in bad[:3]] or '')
    ok, bad = 0, []
    with tempfile.TemporaryDirectory() as tmp:
        for ts in sorted(up.DIR.glob('zaxeditor_*.ts')):
            fresh = Path(tmp) / ts.with_suffix('.qm').name
            up.release(ts, fresh)
            if ts.with_suffix('.qm').is_file() and ts.with_suffix('.qm').read_bytes() == fresh.read_bytes():
                ok += 1
            else:
                bad.append(f'{ts.with_suffix(".qm").name} not current: python -m zaxeditor.i18n.update')
    report('UI texts: compiled .qm current', ok, ok + len(bad), bad[:3] or '')
    hits = []
    for path in sorted((ROOT / 'zaxeditor').glob('*.py')):
        tree = ast.parse(path.read_text(encoding='utf-8'))
        skip = set()
        for n in ast.walk(tree):
            if isinstance(n, (ast.Module, ast.FunctionDef, ast.ClassDef)) and n.body and isinstance(n.body[0], ast.Expr) \
                    and isinstance(n.body[0].value, ast.Constant):
                skip.add(id(n.body[0].value))                       # docstrings
            if isinstance(n, ast.Call) and getattr(n.func, 'id', getattr(n.func, 'attr', None)) in (
                    'translate', 'QT_TRANSLATE_NOOP'):
                if len(n.args) > 1 and isinstance(n.args[1], ast.JoinedStr):
                    hits.append(f'{path.name}:{n.lineno}: f-string as source text')
                skip.update(id(a) for a in n.args)
        for n in ast.walk(tree):
            if isinstance(n, ast.Constant) and isinstance(n.value, str) and id(n) not in skip \
                    and n.value not in _GERMAN_ALLOWED and _GERMAN.search(n.value):
                hits.append(f'{path.name}:{n.lineno}: {n.value[:50]!r}')
    files = len(list((ROOT / 'zaxeditor').glob('*.py')))
    report('UI texts: no German string literal outside translate() in zaxeditor/*.py',
           files - len({h.split(':')[0] for h in hits}), files, hits[:3] or '')



if __name__ == '__main__':
    main()
