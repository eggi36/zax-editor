"""Smoke test of a packaged editor (tools/package_macos.sh, tools/package_windows.sh).

Runs the real editor (zaxeditor.app.main) with its own settings and cache name, so the user's settings are never read
or written, opens a level, waits until the event loop runs, saves a screenshot of the main window (window.grab()) and a
report (report.json: start time, UI language, a translated sample text, window title, menus), removes its settings and
cache again and ends the process.

    macOS app:  ZAX_EDITOR_SMOKE=<out dir> [ZAX_EDITOR_SMOKE_LANG=de] [ZAX_EDITOR_SMOKE_T0=<epoch s>] \
                ZAX_DATA=<Data.dat> "Zax Editor.app/Contents/MacOS/Zax Editor" "Levels/…/x.zax"
    Windows:    runtime\\python.exe -I -m zax_pkg_smoke --out DIR --data DATA.dat --level "Levels/…/x.zax" [--lang de]

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


def install(out: str, lang: str = 'de', keep_cache: bool = False) -> None:
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
        cache = Path(QStandardPaths.writableLocation(QStandardPaths.GenericCacheLocation)) / NAME
        settings = QSettings(NAME, NAME)
        report['settings_file'] = settings.fileName()
        report['output_dir_exists'] = app_mod.DEFAULT_OUT.exists()
        settings.clear()
        settings.sync()
        (out_dir / 'report.json').write_text(json.dumps(report, indent=1, ensure_ascii=False), encoding='utf-8')
        report['cache_kept'] = keep_cache
        if not keep_cache and cache.name == NAME and cache.is_dir():
            shutil.rmtree(cache, ignore_errors=True)
        if Path(report['settings_file']).is_file() and Path(report['settings_file']).stem.endswith(NAME):
            Path(report['settings_file']).unlink()
        sys.stdout.flush()
        sys.stderr.flush()
        os._exit(0)     # also from a nested event loop (the catalogue's progress), threads and all

    def show(self) -> None:
        orig_show(self)
        if state['shown'] is None:
            state['shown'] = round(time.time() - t0, 3)
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
    p.add_argument('--keep-cache', action='store_true', help='keep the catalogue cache for a second, warm run')
    p.add_argument('--delay-ms', type=int, help=f'how long the loaded level stays on screen (default {DELAY_MS})')
    a = p.parse_args(argv)
    if a.delay_ms is not None:
        DELAY_MS = a.delay_ms
    os.environ['ZAX_DATA'] = a.data
    install(a.out, a.lang, a.keep_cache)
    from zaxeditor.app import main as editor_main
    return editor_main([sys.argv[0]] + ([a.level] if a.level else []))


if __name__ == '__main__':
    sys.exit(main())
