"""The output folder (own levels, graphics, dialogue scripts, Rules.txt): the folder suggested to a package's user at
the first start and the checks a chosen folder must pass (``MainWindow.set_output``)."""
from __future__ import annotations

import os
import tempfile
from pathlib import Path

from PySide6.QtCore import QStandardPaths

from .i18n import translate

SUGGESTED_NAME = 'Zax-Editor-Output'


def suggestion() -> Path:
    """Zax-Editor-Output in the user's documents folder (macOS ~/Documents, Windows the Documents known folder, also
    when it is redirected)."""
    docs = QStandardPaths.writableLocation(QStandardPaths.DocumentsLocation)
    return (Path(docs) if docs else Path.home() / 'Documents') / SUGGESTED_NAME


def _within(p: Path, root: Path) -> bool:
    return p == root or root in p.parents


def data_folder(data: str | os.PathLike | None) -> Path | None:
    """The folder the game data occupies: the folder "Data" itself, or the folder that holds Data.dat."""
    if not data:
        return None
    d = Path(data).expanduser().resolve()
    return d.parent if d.is_file() else d


def writable(folder: Path) -> str | None:
    """None if a file can be created and deleted in ``folder`` (created with its missing parents first; they stay,
    unless the test fails), else the error."""
    made: list[Path] = []
    try:
        missing, q = [], folder
        while not q.exists():
            missing.append(q)
            q = q.parent
        for m in reversed(missing):
            m.mkdir()
            made.append(m)
        fd, name = tempfile.mkstemp(prefix='.zax-editor-write-test-', dir=folder)
        os.close(fd)
        os.unlink(name)
        return None
    except OSError as e:
        for m in reversed(made):
            try:
                m.rmdir()
            except OSError:
                pass
        return e.strerror or str(e)


def problem(folder: str | os.PathLike, data: str | os.PathLike | None, package: Path | None) -> str | None:
    """Why ``folder`` cannot be the output folder (a message for the user), or None: it lies inside the editor's own
    package (the macOS app or the Windows folder, ``package``), inside or equal to the game data (``data``: the folder
    "Data" or the Data.dat, whose folder counts), or nothing can be written there."""
    p = Path(folder).expanduser().resolve()
    if package is not None and _within(p, Path(package).resolve()):
        return translate('outputdir', 'This folder lies inside the editor itself:\n{path}\n\nAn update replaces it, '
                                      'and it may be read-only. Please choose a folder outside it, for example in '
                                      'your documents.').format(path=package)
    game = data_folder(data)
    if game is not None and _within(p, game):
        return translate('outputdir', 'This folder lies inside the game data:\n{path}\n\nThe editor never writes '
                                      'into the game data. Please choose another folder.').format(path=game)
    err = writable(p)
    if err is not None:
        return translate('outputdir', 'Nothing can be written into this folder:\n{path}\n\n{error}').format(
            path=p, error=err)
    return None
