"""Self-test of the editor's UI texts (section 9 of the former zax-formats/tools/selftest.py; the format library's
sections 1-8 are zax-formats/tools/selftest.py since the split of 2026-11-07).

    python tools/selftest_ui.py

The .ts files against the texts of the code, the compiled .qm files against a fresh lrelease, no German string literal
in the editor outside translate(). Then the editor's guards when it writes files (offscreen, no window, no settings
read or written): game files read-only, derived paths inside the output folder, the dialogue label rename as one undo
step, dialogue lines the game would read as labels, the way point worker's context. Needs no game data.
"""
import os
import re
import sys
from pathlib import Path

os.environ.setdefault('QT_QPA_PLATFORM', 'offscreen')

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
    # the editor's guards when writing (review fix 2026-11-14)
    _check_write_guards(report)
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


def _check_write_guards(report):
    import tempfile
    import threading
    from PySide6.QtCore import QCoreApplication
    from PySide6.QtGui import QUndoStack
    from PySide6.QtWidgets import QApplication, QGraphicsScene
    from zaxtools import newlevel, rds, textformat as tf
    from zaxeditor import msgbox, outputdir
    from zaxeditor.app import MainWindow, _data_relative
    from zaxeditor.dialogue import DialoguePanel, RenameLabelCommand
    from zaxeditor.waynet import WayNetwork
    app = QApplication.instance() or QApplication([])
    warnings = []
    saved_warning = msgbox.warning
    msgbox.warning = lambda *a, **k: warnings.append(a)          # never a modal box in the test

    class Action:
        def __init__(self, on=True):
            self.on = on

        def isChecked(self):
            return self.on

    class Status:
        def showMessage(self, *a):
            pass

        def clearMessage(self):
            pass

    class Win:
        """The parts of MainWindow the guards use, without a window or QSettings."""
        _inside_data = MainWindow._inside_data
        _target = MainWindow._target
        _game_file = MainWindow._game_file
        _companion_root = MainWindow._companion_root
        _companion = MainWindow._companion
        _game_minimap = MainWindow._game_minimap

        def __init__(self, out):
            self.out, self.ds, self.level, self.source = out, None, None, None
            self.minimap_game_action = Action(True)
            self.undo = QUndoStack()
            self.props = type('P', (), {'dialogs': None})()
            self._check_ctx = None
            self.changed = []

        def output_dir(self):
            return self.out

        def need_output(self):
            return self.out

        def output_roots(self):
            return [self.out]

        def statusBar(self):
            return Status()

        def _part_changed(self, part):
            self.changed.append(part)

        def _show_selection(self):
            pass

    checks = []
    try:
        with tempfile.TemporaryDirectory() as tmp:
            t = Path(tmp).resolve()
            game = t / 'Other Edition'
            lv_dir = game / 'Data' / 'Levels' / 'ACT 1'
            lv_dir.mkdir(parents=True)
            (game / 'Zax.exe').write_bytes(b'')
            orig = lv_dir / '01 Main.zax'
            orig.write_bytes(b'original')
            out = t / 'output'
            (out / 'Levels').mkdir(parents=True)
            win = Win(out)
            # a level opened from any game installation is saved into the output folder, never in place
            win.source = ('file', str(orig))
            checks += [win._inside_data(orig), win._game_file(),
                       win._target() == out / 'Levels/ACT 1/01 Main.zax',
                       not win._inside_data(out / 'Levels' / 'x.zax'),
                       outputdir.problem(game, None, None) is not None,
                       outputdir.problem(out, None, None) is None]
            own = out / 'Levels' / 'own.zax'
            win.source = ('file', str(own))
            checks += [not win._game_file(), win._target() == own]
            # the mini map and Rules.txt only inside the output folder, only for a safe Partial File Name
            lv = newlevel.new_level('Test/Own', 1000, 1000, ['11 Dirt', '13 Rock'], ground=1)
            win.level = lv
            root, why = win._companion_root(own)
            checks += [root == out and why is None]
            lv.root.set('Partial File Name', '../../../escape')
            root, why = win._companion_root(own)
            checks += [root is None and bool(why)]
            lv.root.set('Partial File Name', 'Test/Own')
            root, why = win._companion_root(t / 'elsewhere' / 'x.zax')
            checks += [root is None and bool(why)]
            (out / 'link').symlink_to(t)
            checks += [win._companion(out, 'link/victim.frm16') is None, win._companion(out, '../x') is None,
                       win._companion(out, 'Cache/Levels/Test/Own.frm16') == out / 'Cache/Levels/Test/Own.frm16']
            # "let the game draw the mini map" deletes only inside the output folder
            victim = t / 'victim.frm16'
            victim.write_bytes(b'keep')
            (out / 'Cache' / 'Levels').mkdir(parents=True)
            (out / 'Cache' / 'Levels' / 'link').symlink_to(t)       # a link out of the output folder
            lv.root.set('Partial File Name', 'link/victim')
            res = win._game_minimap(out)
            checks += [res is None and victim.read_bytes() == b'keep']
            lv.root.set('Partial File Name', 'Test/Own')
            res = win._game_minimap(out)
            checks += [res is not None and (out / 'Cache/Levels/Test/Own.frm16').is_file()]
            checks += [_data_relative(orig) == 'Levels/ACT 1/01 Main.zax']

            # the port's game copy (zax-import: DATA.dat and Zax-Data.bin, no Zax.exe): its Data folder may be the
            # output folder (also chosen as the copy itself), not a folder below it; DATA.dat stays read only;
            # a folder with Zax.exe is an original installation even with the marker
            import os
            port = t / 'Port Copy'
            (port / 'Data' / 'Levels').mkdir(parents=True)
            (port / 'DATA.dat').write_bytes(b'')
            (port / 'GERMAN.RED').write_bytes(b'')
            (port / 'Zax-Data.bin').write_bytes(b'x')
            pdata = port / 'Data'
            checks += [outputdir.is_port_copy(port), outputdir.port_output(port) == pdata,
                       outputdir.port_output(pdata) == pdata, outputdir.problem(pdata, None, None) is None,
                       outputdir.problem(port, None, None) is None,
                       outputdir.problem(pdata / 'Levels', None, None) is not None,
                       outputdir.problem(pdata, str(port / 'DATA.dat'), None) is None,
                       not outputdir.read_only(pdata / 'Levels' / 'x.zax', str(port / 'DATA.dat'), None),
                       outputdir.read_only(port / 'DATA.dat', str(port / 'DATA.dat'), None),
                       outputdir.read_only(port / 'Zax-Data.bin', None, None)]
            pwin = Win(pdata)
            pwin.source = ('file', str(pdata / 'Levels' / 'x.zax'))
            checks += [not pwin._game_file(), pwin._target() == pdata / 'Levels' / 'x.zax']
            saved_env = os.environ.get('ZAX_APP_SUPPORT_DIR')
            os.environ['ZAX_APP_SUPPORT_DIR'] = str(port)
            try:
                checks += [outputdir.port_suggestion() == pdata]
            finally:
                if saved_env is None:
                    del os.environ['ZAX_APP_SUPPORT_DIR']
                else:
                    os.environ['ZAX_APP_SUPPORT_DIR'] = saved_env
            (port / 'zax.exe').write_bytes(b'')
            checks += [not outputdir.is_port_copy(port), outputdir.problem(pdata, None, None) is not None,
                       outputdir.read_only(pdata / 'Levels' / 'x.zax', None, None)]
            (port / 'zax.exe').unlink()
            nested = game / 'Port Copy'           # a copy inside an original installation counts as that one
            (nested / 'Data').mkdir(parents=True)
            (nested / 'DATA.dat').write_bytes(b'')
            (nested / 'Zax-Data.bin').write_bytes(b'x')
            checks += [outputdir.problem(nested / 'Data', None, None) is not None]

            # renaming a dialogue label and its Line= fields is one undo step
            text = ('\t\tLevel Part=CEntityBase\r\n\t\t{\r\n\t\t\tName=Talker\r\n'
                    '\t\t\tAction=CZaxDialogAction\r\n\t\t\t{\r\n\t\t\t\tScript=Test/Talk\r\n'
                    '\t\t\t\tLine=Hello\r\n\t\t\t}\r\n\t\t}\r\n')
            node = tf.root(tf.load_bytes(text.encode('latin-1')))
            line = node.block('Action').item('Line')
            part = type('Part', (), {'node': node})()
            panel = DialoguePanel(win)
            panel.script_name, panel.script = 'Test/Talk', rds.loads(b':Hello\r\nZax: hi\r\n\r\n')
            win.undo.push(RenameLabelCommand(panel, 'Test/Talk', 'Hello', 'Greeting', [(part, line, 'Greeting')],
                                             'rename'))
            after = (panel.script.labels(), line.value, panel.dirty)
            win.undo.undo()
            back = (panel.script.labels(), line.value)
            win.undo.redo()
            checks += [after == (['Greeting'], 'Greeting', True), back == (['Hello'], 'Hello'),
                       (panel.script.labels(), line.value) == (['Greeting'], 'Greeting'), win.undo.count() == 1]
            # dialogue lines the game would read as a label or a comment are refused with a message
            n = len(warnings)
            checks += [panel._checked_body('Zax: hi\n:Valeth leaves') is None,
                       panel._checked_body('// note') is None, len(warnings) == n + 2,
                       panel._checked_body('Zax: hi\n :Valeth leaves') is not None]
            # a dialogue script named "../x" is never saved outside the output folder
            panel.script_name = '../../escape'
            n = len(warnings)
            checks += [panel.target('../../escape') is None, panel.save() is False, len(warnings) == n + 1,
                       not (t / 'escape.RDS').exists()]
            panel.dirty = False

            # the way point worker gets the model function from the GUI thread, never the window's context
            seen = {}

            def model(m):
                seen.setdefault('worker', threading.current_thread() is not threading.main_thread())
                return None

            def provider():
                seen['provider_main'] = threading.current_thread() is threading.main_thread()
                return model

            wn = WayNetwork()
            lv2 = newlevel.new_level('Test/Way', 1000, 1000, ['11 Dirt', '13 Rock'], ground=1)
            wn.scene, wn._level_fn, wn.model_data, wn.enabled = QGraphicsScene(), lambda: lv2, provider, True
            done = []
            wn._sig.done.connect(lambda g, r: done.append(r))
            wn._start()
            for _ in range(500):
                if done:
                    break
                QCoreApplication.processEvents()
                threading.Event().wait(0.01)
            checks += [seen.get('provider_main') is True, bool(done) and not isinstance(done[0], Exception)]
    finally:
        msgbox.warning = saved_warning
    del app
    report('Write guards: game files read-only, derived paths in the output folder, label rename one undo step, '
           'dialogue lines, way point worker', sum(checks), len(checks),
           [i for i, c in enumerate(checks) if not c] or '')


if __name__ == '__main__':
    main()
