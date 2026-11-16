"""The output folder (own levels, graphics, dialogue scripts, Rules.txt): the folder suggested to a package's user at
the first start and the checks a chosen folder must pass (``MainWindow.set_output``)."""
from __future__ import annotations

import os
import tempfile
from pathlib import Path

from PySide6.QtCore import QStandardPaths

from zaxtools import safepath

from .i18n import translate

SUGGESTED_NAME = 'Zax-Editor-Output'

# The port's own copy of the game (zax-redone, its import helper zax-import): DATA.dat, the language packs and
# PORT_MARKER, the pieces of Zax.exe the port's start reads, written last, so its presence means a complete import.
# The folder holds no Zax.exe (the port never needs one there); the game runs in that folder and reads its loose
# files from PORT_DATA below it, before DATA.dat. That Data folder may be the output folder: the game's own Load Map
# then lists the editor's levels, and a saved shipped level covers the original. Its DATA.dat, packs and marker stay
# read only like any game installation.
PORT_MARKER = 'zax-data.bin'
PORT_DATA = 'Data'
PORT_FOLDER_NAME = 'Zax'        # the port's folder in the user's application data (macOS: Application Support/Zax)


def suggestion() -> Path:
    """Zax-Editor-Output in the user's documents folder (macOS ~/Documents, Windows the Documents known folder, also
    when it is redirected)."""
    docs = QStandardPaths.writableLocation(QStandardPaths.DocumentsLocation)
    return (Path(docs) if docs else Path.home() / 'Documents') / SUGGESTED_NAME


def _within(p: Path, root: Path) -> bool:
    return p == root or root in p.parents


def _names(folder: Path) -> dict[str, str]:
    """The entries of ``folder`` by their lower-case name (the game's file names have no case); {} if unreadable."""
    try:
        return {n.lower(): n for n in os.listdir(folder)}
    except OSError:
        return {}


def is_port_copy(folder: str | os.PathLike) -> bool:
    """Is ``folder`` the port's imported copy of the game: a complete import of zax-import (PORT_MARKER and DATA.dat,
    both files) and no Zax.exe (a folder with Zax.exe is an installation of the original game)?"""
    f = Path(folder)
    names = _names(f)
    return ('zax.exe' not in names and PORT_MARKER in names and 'data.dat' in names
            and (f / names[PORT_MARKER]).is_file() and (f / names['data.dat']).is_file())


def port_data(path: str | os.PathLike) -> Path | None:
    """The Data folder of the port's copy that ``path`` (a file or folder, existing or not) lies in or equals, or
    None. The folder's own spelling where it exists (``Data`` or ``DATA``), else PORT_DATA."""
    p = Path(path).expanduser().resolve()
    for copy in p.parents:
        if is_port_copy(copy):
            if any(_marks_game(f) for f in copy.parents):
                return None     # inside another installation (a game folder, a share): that one counts
            data = copy / _names(copy).get(PORT_DATA.lower(), PORT_DATA)
            return data if _within(p, data.resolve() if data.exists() else data) else None
    return None


def _marks_game(folder: Path) -> bool:
    """Does ``folder`` hold Zax.exe, Data.dat or a language pack (``zaxtools.safepath``'s marks of a game)?"""
    return any(n in safepath.GAME_FILES or n.endswith(safepath.PACK_SUFFIX) for n in _names(folder))


def port_output(folder: str | os.PathLike) -> Path | None:
    """The port's Data folder for a chosen folder: the copy itself (the user picked the port's folder) or its Data
    folder; None for anything else."""
    f = Path(folder).expanduser().resolve()
    if is_port_copy(f):
        return f / _names(f).get(PORT_DATA.lower(), PORT_DATA)
    data = port_data(f)
    return data if data is not None and f == data.resolve() else None


def port_candidates() -> list[Path]:
    """Where the port's copy usually lies: ZAX_APP_SUPPORT_DIR (the port's own override of its folder), then the
    user's application data folder (macOS ~/Library/Application Support/Zax, where the port's first start imports
    the game; Windows %LOCALAPPDATA%/Zax). The Windows port keeps its copy beside its own program, wherever the user put
    it: that folder is chosen by hand and recognised by its content."""
    out = []
    env = os.environ.get('ZAX_APP_SUPPORT_DIR')
    if env:
        out.append(Path(env).expanduser())
    base = QStandardPaths.writableLocation(QStandardPaths.GenericDataLocation)
    if base:
        out.append(Path(base) / PORT_FOLDER_NAME)
    return out


def port_suggestion() -> Path | None:
    """The Data folder of the port's copy when one is found (``port_candidates``), else None."""
    for c in port_candidates():
        if is_port_copy(c):
            return c / _names(c).get(PORT_DATA.lower(), PORT_DATA)
    return None


def data_folder(data: str | os.PathLike | None) -> Path | None:
    """The folder the game data occupies: the folder "Data" itself, or the folder that holds Data.dat."""
    if not data:
        return None
    d = Path(data).expanduser().resolve()
    return d.parent if d.is_file() else d


_workspace_games: list[Path] | None = None


def _workspace_game_data() -> list[Path]:
    """The workspace's gamedata folder (every edition, ``zaxtools.game_paths.root``) when it exists; none in a
    package (it carries no workspace)."""
    global _workspace_games
    if _workspace_games is None:
        from . import PACKAGED
        _workspace_games = []
        if not PACKAGED:
            try:
                from zaxtools import game_paths
                r = game_paths.root()
                if r.is_dir():
                    _workspace_games = [r.resolve()]
            except Exception:       # noqa: BLE001 - only an extra guard
                pass
    return _workspace_games


def _in_workspace(path: str | os.PathLike) -> bool:
    """Does ``path`` lie in the workspace's gamedata folder (never written, even an imported copy there)?"""
    p = Path(path).expanduser().resolve()
    return any(_within(p, r) for r in _workspace_game_data())


def read_only(path: str | os.PathLike, data: str | os.PathLike | None, pack: str | os.PathLike | None) -> bool:
    """Is ``path`` a file of a game installation that the editor never writes or deletes: inside the configured game
    data (``data``: the folder "Data", or the Data.dat, whose folder counts), the folder of the language pack, the
    workspace's gamedata folder, or below any folder holding Zax.exe, Data.dat or a *.RED (another edition, an
    unpacked DATA of a game folder, a VM share)? The Data folder of the port's copy (``port_data``) is not: the editor
    may write there (outside the workspace's gamedata folder), as into any output folder."""
    if port_data(path) is not None and not _in_workspace(path):
        return False
    roots = [r for r in (data_folder(data), data_folder(pack)) if r is not None] + _workspace_game_data()
    return safepath.is_game_data(path, roots)


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
    "Data" or the Data.dat, whose folder counts) or any game installation (``read_only``), or nothing can be written
    there. The Data folder of the port's copy (``port_output``) is allowed, unless it lies in the workspace's
    gamedata folder; a folder below it is not (the output folder is laid out as Data/ is)."""
    p = Path(folder).expanduser().resolve()
    port = port_output(p)
    if port is not None and not _in_workspace(p):
        p = port
        err = writable(p)
        if err is not None:
            return translate('outputdir', 'Nothing can be written into this folder:\n{path}\n\n{error}').format(
                path=p, error=err)
        return None
    inner = port_data(p)
    if inner is not None:
        return translate('outputdir', 'This folder lies inside the Data folder of the port\'s game copy:\n{path}\n\n'
                                      'Choose that Data folder itself, so that the game finds the levels.').format(
            path=inner)
    if package is not None and _within(p, Path(package).resolve()):
        return translate('outputdir', 'This folder lies inside the editor itself:\n{path}\n\nAn update replaces it, '
                                      'and it may be read-only. Please choose a folder outside it, for example in '
                                      'your documents.').format(path=package)
    game = data_folder(data)
    if game is not None and _within(p, game) or safepath.is_game_data(p, _workspace_game_data()):
        game = game if game is not None and _within(p, game) else p
        return translate('outputdir', 'This folder lies inside the game data:\n{path}\n\nThe editor never writes '
                                      'into the game data. Please choose another folder.').format(path=game)
    err = writable(p)
    if err is not None:
        return translate('outputdir', 'Nothing can be written into this folder:\n{path}\n\n{error}').format(
            path=p, error=err)
    return None
