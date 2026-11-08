"""Zax level editor (PySide6) based on zaxtools.

zaxtools, the format library, is zax-formats (its own repository since the split of 2026-11-07): ZAX_FORMATS, else the
folder zax-formats next to this repository (or, in a git worktree, next to its main checkout), else an installed
zaxtools. Importing this package puts it on sys.path."""
from __future__ import annotations

import os
import subprocess
import sys
from pathlib import Path


def _formats() -> Path:
    if os.environ.get('ZAX_FORMATS'):
        return Path(os.environ['ZAX_FORMATS'])
    here = Path(__file__).resolve().parent.parent
    if getattr(sys, 'frozen', False) or (here / 'zaxtools').is_dir():
        return here         # a package (tools/package/) ships zaxtools next to zaxeditor: no git call
    near = here.parent / 'zax-formats'
    if near.is_dir():
        return near
    try:
        common = subprocess.run(['git', '-C', str(here), 'rev-parse', '--path-format=absolute', '--git-common-dir'],
                                capture_output=True, text=True).stdout.strip()
    except OSError:
        common = ''
    return Path(common).parent.parent / 'zax-formats' if common else near


FORMATS = _formats()
# a package (tools/package/: the macOS app, the Windows folder) carries zaxtools itself and lies outside the workspace
PACKAGED = getattr(sys, 'frozen', False) or FORMATS == Path(__file__).resolve().parent.parent


def default_output() -> Path | None:
    """The output folder until one is chosen: the workspace's editor-output/ next to the repositories. None for a
    package: its user chooses one at the first start (``MainWindow.ask_output``, suggested
    ``zaxeditor.outputdir.suggestion``), and the editor never writes before that."""
    if PACKAGED:
        return None
    return Path(__file__).resolve().parents[2] / 'editor-output'


def package_root() -> Path | None:
    """The package's own folder, never an output folder: the macOS app bundle (``….app``) or the portable Windows
    folder (the starter, ``runtime\\``, ``app\\``); None in the development checkout."""
    if not PACKAGED:
        return None
    if getattr(sys, 'frozen', False):
        exe = Path(sys.executable).resolve()
        return next((p for p in exe.parents if p.suffix.lower() == '.app'), exe.parent)
    return FORMATS.resolve().parent     # app\ (zaxeditor, zaxtools) lies in the package folder


if (FORMATS / 'zaxtools').is_dir() and str(FORMATS) not in sys.path:
    sys.path.insert(0, str(FORMATS))
