"""Smoke test of a packaged editor (tools/package_macos.sh, tools/package_windows.sh).

Runs the real editor (zaxeditor.app.main) with its own settings and cache name, so the user's settings are never read
or written, opens a level, waits until the event loop runs, saves a screenshot of the main window (window.grab()) and a
report (report.json: start time, UI language, a translated sample text, window title, menus), optionally plays one WAV
and one OGG of the game data through the viewer's QAudioSink player (``sound``: decode, bytes the sink consumed, its
state and error, the media plugin and whether any FFmpeg library is loaded), removes its settings and cache again and
ends the process.

The first-start question of the output folder is driven programmatically (``OutputFlow``): with the setting empty the
editor asks right after the game data; a folder inside the package and the game data folder are refused with a message,
"Later" postpones it (the level still opens, nothing is written); in the report's ``output`` section the question comes
again before the first write, a folder is chosen and stored, then the suggestion (redirected below the out dir, so the
real documents folder stays untouched) is accepted and stored; on macOS/Linux also a read-only folder is refused.

    macOS app:  ZAX_EDITOR_SMOKE=<out dir> [ZAX_EDITOR_SMOKE_LANG=de] [ZAX_EDITOR_SMOKE_T0=<epoch s>] \
                [ZAX_EDITOR_SMOKE_SOUND=1] ZAX_DATA=<Data.dat> "Zax Editor.app/Contents/MacOS/Zax Editor" "Levels/…/x.zax"
    Windows:    runtime\\python.exe -I -m zax_pkg_smoke --out DIR --data DATA.dat --level "Levels/…/x.zax" [--lang de]
                [--sound]

Only active when asked for (the environment variable or the module run as a program); the shipped start does not import it.
"""
from __future__ import annotations

import json
import os
import shutil
import sys
import time
from pathlib import Path

NAME = 'Zax-Editor-Smoke'           # settings and cache name instead of the editor's 'Zax-Editor'
DELAY_MS = int(os.environ.get('ZAX_EDITOR_SMOKE_DELAY_MS', '4000'))
WAIT_S = float(os.environ.get('ZAX_EDITOR_SMOKE_WAIT_S', '90'))


def loaded_libraries() -> list[str]:
    """File names of the shared libraries loaded into this process (macOS: dyld, Windows: the module list)."""
    import ctypes
    names = []
    if sys.platform == 'darwin':
        dyld = ctypes.CDLL('/usr/lib/libSystem.B.dylib')
        dyld._dyld_image_count.restype = ctypes.c_uint32
        dyld._dyld_get_image_name.restype = ctypes.c_char_p
        dyld._dyld_get_image_name.argtypes = [ctypes.c_uint32]
        for i in range(dyld._dyld_image_count()):
            n = dyld._dyld_get_image_name(i)
            if n:
                names.append(n.decode('utf-8', 'replace'))
    elif sys.platform == 'win32':
        from ctypes import wintypes
        psapi, k32 = ctypes.WinDLL('psapi'), ctypes.WinDLL('kernel32')
        k32.GetCurrentProcess.restype = wintypes.HANDLE
        psapi.EnumProcessModules.argtypes = [wintypes.HANDLE, ctypes.POINTER(wintypes.HMODULE), wintypes.DWORD,
                                             ctypes.POINTER(wintypes.DWORD)]
        k32.GetModuleFileNameW.argtypes = [wintypes.HMODULE, wintypes.LPWSTR, wintypes.DWORD]
        proc, need = k32.GetCurrentProcess(), wintypes.DWORD()
        mods = (wintypes.HMODULE * 2048)()
        if psapi.EnumProcessModules(proc, mods, ctypes.sizeof(mods), ctypes.byref(need)):
            buf = ctypes.create_unicode_buffer(1024)
            for m in mods[:need.value // ctypes.sizeof(wintypes.HMODULE)]:
                if k32.GetModuleFileNameW(m, buf, 1024):
                    names.append(buf.value)
    return [Path(n).name for n in names]


def sound_check(data: str) -> dict:
    """Decode one WAV and one OGG of the game data and play each through the viewer's player (QAudioSink) to its end
    (at most 8 s each); which media plugin and FFmpeg libraries got loaded."""
    from PySide6.QtCore import QEventLoop, QTimer
    from zaxtools.datasource import DataSource
    from zaxeditor import sound
    out: dict = {'qtmultimedia': sound.QAudioSink is not None}
    if sound.QAudioSink is None:
        return out
    from PySide6.QtMultimedia import QMediaDevices
    dev = QMediaDevices.defaultAudioOutput()
    out['device'] = None if dev.isNull() else dev.description()
    ds = DataSource(data)
    picks = {}
    for ext in ('.wav', '.ogg'):
        for n in ds.list('Sounds/' if ext == '.wav' else '', ext):     # the first one of 20-120 KB (a few seconds)
            if 20_000 <= ds.size(n) <= 120_000:
                picks[ext] = n
                break
    player = sound.Player()
    for ext, rel in picks.items():
        r: dict = {'file': rel}
        try:
            pcm = sound.decode(ds.read(rel))
        except sound.DecodeError as e:
            r['decode_error'] = str(e)
            out[ext[1:]] = r
            continue
        r.update(rate=pcm.rate, channels=pcm.channels, seconds=round(pcm.seconds, 3))
        loop = QEventLoop()
        ev = {'finished': False, 'failed': None}
        player.finished.connect(loop.quit)
        player.failed.connect(loop.quit)

        def fin():
            ev['finished'] = True

        def fail(e):
            ev['failed'] = e
        player.finished.connect(fin)
        player.failed.connect(fail)
        player.play(pcm)
        sink = player.sink
        f = player.format
        r['format'] = None if f is None else [f.sampleRate(), f.channelCount(), f.sampleFormat().name]
        r['bytes'] = player.bytes
        samples = {}
        if sink is not None:
            QTimer.singleShot(300, lambda: samples.update(consumed_300ms=player.consumed(),
                                                          state_300ms=sink.state().name,
                                                          processed_us_300ms=sink.processedUSecs()))
        QTimer.singleShot(int(min(pcm.seconds + 1.0, 8.0) * 1000), loop.quit)
        loop.exec()
        r.update(samples)
        r['consumed_end'] = player.consumed() if player.sink is not None else player.bytes if ev['finished'] else None
        r['finished'] = ev['finished']
        r['failed'] = ev['failed']
        r['error_end'] = player.sink.error().name if player.sink is not None else None
        player.stop()
        for sig, slot in ((player.finished, loop.quit), (player.failed, loop.quit), (player.finished, fin),
                          (player.failed, fail)):
            sig.disconnect(slot)
        out[ext[1:]] = r
    libs = loaded_libraries()
    out['media_plugins'] = sorted(n for n in libs if 'mediaplugin' in n.lower())
    out['ffmpeg_libraries'] = sorted(n for n in libs if any(k in n.lower() for k in (
        'avcodec', 'avformat', 'avutil', 'swresample', 'swscale', 'ffmpeg')))
    out['multimedia_libraries'] = sorted(n for n in libs if 'multimedia' in n.lower())
    return out


class OutputFlow:
    """Answers the editor's output folder question and its refusals by script: a timer looks for the modal message box,
    records its text and clicks the scripted button; ``MainWindow._pick_output_folder`` returns the scripted folders."""

    def __init__(self, app_mod):
        from PySide6.QtCore import QTimer
        self.answers: list[str] = []        # 'use', 'choose', 'later' for a question; 'ok' for a refusal
        self.picks: list[str] = []
        self.events: list[dict] = []
        self.timer = QTimer()
        self.timer.setInterval(100)
        self.timer.timeout.connect(self.tick)
        self._seen = None
        flow = self
        app_mod.MainWindow._pick_output_folder = lambda _self, start: flow.pick(start)

    def pick(self, start: str) -> str:
        path = self.picks.pop(0) if self.picks else ''
        self.events.append({'pick': path, 'start': start})
        return path

    def tick(self) -> None:
        from PySide6.QtWidgets import QApplication, QMessageBox
        box = QApplication.activeModalWidget()
        if not isinstance(box, QMessageBox) or box is self._seen or not box.isVisible():
            return
        self._seen = box
        roles = {box.buttonRole(b): b for b in box.buttons()}
        question = QMessageBox.ActionRole in roles
        want = self.answers.pop(0) if self.answers else None
        self.events.append({'box': 'question' if question else 'message', 'text': box.text(),
                            'informative': box.informativeText(), 'answer': want})
        role = {'use': QMessageBox.AcceptRole, 'choose': QMessageBox.ActionRole,
                'later': QMessageBox.RejectRole}.get(want) if question else None
        button = roles.get(role) if role is not None else (box.buttons()[0] if box.buttons() else None)
        if button is not None:
            button.click()


def install(out: str, lang: str = 'de', keep_cache: bool = False, show_report: bool = False,
            sound: bool = False) -> None:
    """Patch the editor's settings name, preset the UI language and hook the main window's first show."""
    from PySide6.QtCore import QSettings, QStandardPaths, QTimer
    from PySide6.QtWidgets import QApplication
    import zaxeditor.app as app_mod
    from zaxeditor import dialogue, gametest, viewer
    from zaxeditor.i18n import translate
    for mod in (app_mod, viewer, dialogue, gametest):
        mod.APP = NAME
    out_dir = Path(out)
    out_dir.mkdir(parents=True, exist_ok=True)
    t0 = float(os.environ.get('ZAX_EDITOR_SMOKE_T0') or time.time())
    s = QSettings(NAME, NAME)
    s.clear()
    s.setValue('language', lang)
    s.sync()
    state = {'shown': None, 'loop': None, 'loaded': None, 'polls': 0}
    orig_show = app_mod.MainWindow.show
    from zaxeditor import outputdir, package_root
    real_suggestion = outputdir.suggestion
    suggestion_existed = real_suggestion().exists()
    pkg = package_root()
    data_dir = outputdir.data_folder(os.environ.get('ZAX_DATA'))
    flow: dict = {'obj': None}

    def output_check(win) -> dict:
        """The rest of the flow on the opened editor: asked again before the first write, choose (after a refused
        read-only folder where the platform has one) and store, then accept the (redirected) suggestion."""
        f = flow['obj']
        r: dict = {'startup_events': list(f.events), 'after_later': str(win.output_dir())}
        f.events.clear()
        if sys.platform != 'win32':
            ro = out_dir / 'read-only'
            ro.mkdir(exist_ok=True)
            os.chmod(ro, 0o500)
            f.answers += ['choose', 'ok']
            f.picks.append(str(ro))
        chosen = out_dir / 'chosen-output'
        f.answers.append('choose')
        f.picks.append(str(chosen))
        got = win.need_output()
        r['chosen'] = {'expected': str(chosen.resolve()), 'returned': str(got),
                       'setting': QSettings(NAME, NAME).value('output'), 'events': list(f.events)}
        f.events.clear()
        if sys.platform != 'win32':
            os.chmod(out_dir / 'read-only', 0o700)
        win.settings.remove('output')
        redirected = out_dir / 'suggested' / outputdir.SUGGESTED_NAME
        outputdir.suggestion = lambda: redirected
        f.answers.append('use')
        got = win.need_output()
        outputdir.suggestion = real_suggestion
        r['suggested'] = {'expected': str(redirected.resolve()), 'returned': str(got),
                          'setting': QSettings(NAME, NAME).value('output'), 'exists': redirected.is_dir(),
                          'events': list(f.events)}
        start = r['startup_events']
        boxes = [e for e in start if 'box' in e]
        r['summary'] = {        # one short line for the on-screen report (Windows VM)
            'asked_at_start': bool(boxes) and boxes[0]['box'] == 'question',
            'package_refused': len(boxes) > 1 and boxes[1]['box'] == 'message' and str(pkg) in boxes[1]['text'],
            'data_refused': len(boxes) > 3 and boxes[3]['box'] == 'message' and str(data_dir) in boxes[3]['text'],
            'later_left_none': r['after_later'] == 'None',
            'read_only_refused': (sys.platform == 'win32' or any(e.get('box') == 'message'
                                                                 for e in r['chosen']['events'])),
            'chosen_stored': r['chosen']['returned'] == r['chosen']['expected'] == r['chosen']['setting'],
            'suggested_stored': (r['suggested']['returned'] == r['suggested']['expected'] == r['suggested']['setting']
                                 and r['suggested']['exists']),
        }
        r['summary']['all_ok'] = all(r['summary'].values())
        r['real_suggestion'] = str(real_suggestion())
        r['real_suggestion_created'] = real_suggestion().exists() and not suggestion_existed
        r['package_root'] = str(pkg)
        r['data_folder'] = str(data_dir)
        return r

    def finish(win) -> None:
        report = {
            'shown_s': state['shown'], 'first_events_s': state['loop'], 'level_loaded_s': state['loaded'],
            'frozen': bool(getattr(sys, 'frozen', False)), 'python': sys.version.split()[0],
            'platform': sys.platform, 'qpa': QApplication.platformName(),
            'language_setting': lang,
            'sample_open_level': translate('app', 'Open level'),
            'sample_where_data': translate('app', 'Where is the game data?'),
            'window_title': win.windowTitle(),
            'menus': [a.text() for a in win.menuBar().actions()],
            'source': list(win.source) if getattr(win, 'source', None) else None,
        }
        try:
            import PySide6
            report['pyside6'] = PySide6.__version__
            import numpy
            import PIL
            report['numpy'], report['pillow'] = numpy.__version__, PIL.__version__
        except Exception as e:  # noqa: BLE001 - the report records it
            report['version_error'] = repr(e)
        report['grab_saved'] = win.grab().save(str(out_dir / 'window.png'))
        if sound:
            try:
                report['sound'] = sound_check(os.environ['ZAX_DATA'])
            except Exception as e:  # noqa: BLE001 - the report records it
                import traceback
                report['sound'] = {'exception': traceback.format_exc()}
        cache = Path(QStandardPaths.writableLocation(QStandardPaths.GenericCacheLocation)) / NAME
        settings = QSettings(NAME, NAME)
        report['settings_file'] = settings.fileName()
        report['default_output'] = str(app_mod.DEFAULT_OUT)
        try:
            report['output'] = output_check(win)
        except Exception:  # noqa: BLE001 - the report records it
            import traceback
            report['output'] = {'exception': traceback.format_exc()}
        settings.clear()
        settings.sync()
        (out_dir / 'report.json').write_text(json.dumps(report, indent=1, ensure_ascii=False), encoding='utf-8')
        report['cache_kept'] = keep_cache
        if not keep_cache and cache.name == NAME and cache.is_dir():
            shutil.rmtree(cache, ignore_errors=True)
        if Path(report['settings_file']).is_file() and Path(report['settings_file']).stem.endswith(NAME):
            Path(report['settings_file']).unlink()
        if show_report:
            # the report on screen for a screenshot (Windows VM: the folder's files cannot be fetched)
            from PySide6.QtWidgets import QMessageBox
            # one line per key (wrapped by the box), so the sound section still fits a 800-pixel-high screen
            short = dict(report)
            out_r = report.get('output') or {}
            short['output'] = {k: out_r.get(k) for k in ('summary', 'real_suggestion', 'real_suggestion_created',
                                                         'package_root', 'exception') if k in out_r}
            text = '\n'.join(f'{k}: {json.dumps(v, ensure_ascii=False)}' for k, v in short.items())
            box = QMessageBox(QMessageBox.Information, NAME, text)
            box.setModal(False)
            box.show()
            state['box'] = box
            QTimer.singleShot(20000, end)
        else:
            end()

    def end() -> None:
        for stream in (sys.stdout, sys.stderr):     # None under pythonw.exe
            if stream is not None:
                stream.flush()
        os._exit(0)     # also from a nested event loop (the catalogue's progress), threads and all

    def show(self) -> None:
        orig_show(self)
        if state['shown'] is None:
            state['shown'] = round(time.time() - t0, 3)
            # first start: the question right after the game data; the package folder and the game data folder
            # refused, then "Later"
            f = flow['obj'] = OutputFlow(app_mod)
            f.answers += ['choose', 'ok', 'choose', 'ok', 'later']
            f.picks += [str((pkg or out_dir) / 'inside-package'), str(data_dir or out_dir)]
            f.timer.start()
            self.resize(1440, 900)

            def loop_started() -> None:
                state['loop'] = round(time.time() - t0, 3)
                poll()

            def poll() -> None:
                # wait for the level given on the command line (or WAIT_S without one), then DELAY_MS for the ground
                state['polls'] += 1
                if getattr(self, 'source', None) is not None or state['polls'] * 0.1 >= WAIT_S:
                    if getattr(self, 'source', None) is not None:
                        state['loaded'] = round(time.time() - t0, 3)
                    QTimer.singleShot(DELAY_MS, lambda: finish(self))
                else:
                    QTimer.singleShot(100, poll)
            QTimer.singleShot(0, loop_started)

    app_mod.MainWindow.show = show


def main(argv: list[str] | None = None) -> int:
    global DELAY_MS
    import argparse
    p = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    p.add_argument('--out', required=True)
    p.add_argument('--data', required=True, help='the game data (Data.dat or a Data folder)')
    p.add_argument('--level', help='a level below the game data, e.g. "Levels/ACT 1/M1M2/01 Main.zax"')
    p.add_argument('--lang', default='de')
    p.add_argument('--show-report', action='store_true', help='show the report in a message box for 20 s before the end')
    p.add_argument('--sound', action='store_true', help='play one WAV and one OGG through QAudioSink (report "sound")')
    p.add_argument('--keep-cache', action='store_true', help='keep the catalogue cache for a second, warm run')
    p.add_argument('--delay-ms', type=int, help=f'how long the loaded level stays on screen (default {DELAY_MS})')
    a = p.parse_args(argv)
    if a.delay_ms is not None:
        DELAY_MS = a.delay_ms
    os.environ['ZAX_DATA'] = a.data
    install(a.out, a.lang, a.keep_cache, a.show_report, a.sound)
    from zaxeditor.app import main as editor_main
    return editor_main([sys.argv[0]] + ([a.level] if a.level else []))


if __name__ == '__main__':
    sys.exit(main())
