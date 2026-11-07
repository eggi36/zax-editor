"""Zax level editor (PySide6) based on zaxtools.

zaxtools, the format library, is zax-formats (its own repository since the split of 2026-11-07): ZAX_FORMATS, else the
folder zax-formats next to this repository (or, in a git worktree, next to its main checkout), else an installed
zaxtools. Importing this package puts it on sys.path."""
import os
import subprocess
import sys
from pathlib import Path


def _formats() -> Path:
    if os.environ.get('ZAX_FORMATS'):
        return Path(os.environ['ZAX_FORMATS'])
    here = Path(__file__).resolve().parent.parent
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
if (FORMATS / 'zaxtools').is_dir() and str(FORMATS) not in sys.path:
    sys.path.insert(0, str(FORMATS))
