"""Mod ground textures from TGA files (``Data/Textures/<name>.tga``) beside the shipped ones, for the port.

The original game (``ImageList::Init`` 0x4d7920) names the ground texture list from ``Data/Textures/*.TGA`` as soon as one
such file exists and from the cached frames ``Cache/Textures/*.frm16`` only without any: one TGA hides all shipped ground
textures, and the TGA itself is never read, so a level naming it ends the game while loading (zax-redone
``docs/ORIGINAL_BUGS.md`` 2.26). zax-redone's port has two switches for it, both off by default:

- ``[Fix] GroundTga=1``: a ground texture without a cached frame is read from its TGA (128 x 128, 24 or 32 bits, raw or
  RLE without a packet running past a row's end); anything else becomes a black 128 x 128 texture.
- ``[Fix] GroundTgaAppend=1``: the shipped names stay first in their order (each keeps its index), the TGA names are
  appended after them, sorted among themselves; a TGA with a shipped name is left out, the shipped texture stays.

A level that uses an appended name therefore needs the port with both switches. The editor offers these names only when
the user switches them on (Ground → Offer mod ground textures (TGA), also in the settings), in a group of their own below
the shipped textures, marks them in the ground panel, and the level check warns about a level that uses one
(``check``, the check ``ground-tga``). The TGAs come from the game data (``Textures/`` of the folder or Data.dat) and from
the editor's output folder (``<output>/Textures/``, copied into the game's ``Data/Textures`` with the level); the output
folder wins. Nothing here writes a TGA or any game file.
"""
from __future__ import annotations

from pathlib import Path

import numpy as np

from zaxtools import levelcheck as lc
from zaxtools.datasource import DataSource
from zaxtools.level import Level
from zaxtools.render import Assets

from .i18n import QT_TRANSLATE_NOOP, translate

TEXTURES = 'Cache/Textures/'        # the shipped (cached) ground textures
TGA_FOLDER = 'Textures/'            # the TGAs, below Data
SIZE = 128                          # every band mapper masks with 0x7f
SWITCHES = '[Fix] GroundTga=1, GroundTgaAppend=1'
SETTING = 'ground_tga'              # QSettings key of the opt-in
SOURCE = ('zax-redone docs/ORIGINAL_BUGS.md 2.26 and docs/STEP3_PLAN.md, batch TGA-append; '
          'ImageList::Init 0x4d7920, TextureList::LoadEntry 0x4b4240')

CHECK = 'ground-tga'
# registered with the format library's checks, so the level check dock groups and titles these findings like its own
lc.CHECKS.setdefault(CHECK, ('warning', QT_TRANSLATE_NOOP('levelcheck', 'Mod ground texture (TGA): needs the port')))


def _key(name: str) -> str:
    """The game compares and sorts the names with _stricmp (ASCII lower case)."""
    return name.lower()


def _clean(stem: str) -> str:
    """A listed file's name as the game's list keeps it: without folder and extension and without a leading '-'."""
    return stem[1:] if stem.startswith('-') else stem


def shipped_names(ds: DataSource) -> list[str]:
    """The shipped ground textures in the order of the game's list: ``Cache/Textures/*.frm16`` sorted by _stricmp."""
    names = [f[len(TEXTURES):-len('.frm16')] for f in ds.list(TEXTURES, '.frm16')]
    return sorted(names, key=_key)


def tga_files(ds: DataSource | None, roots=()) -> dict[str, tuple[str, object]]:
    """Every TGA below ``Textures/``: lower-case name -> (name, source), the source being a ``Path`` (output folder) or
    the data path in ``ds``. Subfolders count, as for the shipped list (``Volcanic Pits/01Rock Dirt``): the game lists
    the TGAs with the same file search as the cached frames; a name is the path below ``Textures/`` without the extension.
    The extra ``roots`` (the output folder) win over the game data."""
    out: dict[str, tuple[str, object]] = {}
    if ds is not None:
        for rel in ds.list(TGA_FOLDER, '.tga'):
            name = _clean(rel[len(TGA_FOLDER):-len('.tga')])
            if name:
                out[_key(name)] = (name, rel)
    for root in roots:
        folder = Path(root) / TGA_FOLDER
        if not folder.is_dir():
            continue
        for f in sorted(folder.rglob('*')):
            if f.is_file() and f.suffix.lower() == '.tga':
                name = _clean(f.relative_to(folder).with_suffix('').as_posix())
                if name:
                    out[_key(name)] = (name, f)
    return out


def appended_names(ds: DataSource | None, roots=(), shipped: list[str] | None = None) -> list[str]:
    """The TGA names the port appends after the shipped ones: without the shipped names, sorted by _stricmp."""
    if shipped is None:
        shipped = shipped_names(ds) if ds is not None else []
    have = {_key(n) for n in shipped}
    return sorted((name for k, (name, _src) in tga_files(ds, roots).items() if k not in have), key=_key)


def ground_list(ds: DataSource, roots=()) -> list[str]:
    """The ground texture list of the port with ``GroundTgaAppend`` (the shipped names, then the TGA names)."""
    shipped = shipped_names(ds)
    return shipped + appended_names(ds, roots, shipped)


def usable(data: bytes) -> bool:
    """What the port's ``GroundTga`` reads (zax-redone ``reimpl/src/frame_rest4a.cpp``, ``ground_tga_usable``): a true
    colour TGA (type 2 raw or 10 RLE, no colour map), 128 x 128, 24 or 32 bits, complete, no RLE packet past a row."""
    d = data
    if len(d) < 18 or d[0] >= 0x80 or d[1] or d[2] not in (2, 10):
        return False
    w, h, depth = d[12] | d[13] << 8, d[14] | d[15] << 8, d[16]
    if w != SIZE or h != SIZE or depth not in (24, 32):
        return False
    size, nbytes, p = len(d), depth // 8, 18 + d[0]
    if p > size:
        return False
    if d[2] == 2:
        return size - p >= w * h * nbytes
    for _y in range(h):
        done = 0
        while done < w:
            if p >= size:
                return False
            head = d[p]
            p += 1
            n = (head & 0x7f) + 1
            done += n
            if done > w:
                return False
            take = nbytes if head & 0x80 else n * nbytes
            if take > size - p:
                return False
            p += take
    return True


def decode(data: bytes) -> np.ndarray | None:
    """RGB (float32, 128 x 128) of a usable TGA, else None (the port draws black then)."""
    if not usable(data):
        return None
    import io

    from PIL import Image
    try:
        with Image.open(io.BytesIO(data)) as im:
            rgb = np.asarray(im.convert('RGB'), np.float32)
    except (OSError, ValueError):
        return None
    return rgb if rgb.shape[:2] == (SIZE, SIZE) else None


def read(source, ds: DataSource | None) -> bytes | None:
    try:
        return source.read_bytes() if isinstance(source, Path) else ds.read(source)
    except (OSError, KeyError):
        return None


class GroundAssets(Assets):
    """``zaxtools.render.Assets`` whose ``texture`` falls back to a TGA of ``Textures/`` when a name has no cached frame,
    as the port with ``GroundTga`` does: the editor draws a level with mod ground textures as the port shows it (an
    unusable TGA black). ``roots``: a callable giving the extra roots (the output folder) at the time of the lookup."""

    def __init__(self, ds: DataSource, roots=lambda: []):
        super().__init__(ds)
        self.tga_roots = roots
        self._tga: dict[str, tuple[str, object]] | None = None

    def tga(self) -> dict[str, tuple[str, object]]:
        if self._tga is None:
            self._tga = tga_files(self.ds, self.tga_roots())
        return self._tga

    def refresh_tga(self) -> None:
        """List the TGAs again and forget their images (a file added or changed in the output folder)."""
        old = self._tga or {}
        for name in [n for n in self._tex if _key(n) in old]:
            self._tex.pop(name, None)
        self._tga = None
        self._tex = {n: t for n, t in self._tex.items() if t is not None}   # a name that may now be a TGA

    def is_tga(self, name: str) -> bool:
        """A ground texture that only a TGA provides (no cached frame of that name)."""
        return bool(name) and _key(name) in self.tga() and not self.ds.exists(f'{TEXTURES}{name}.frm16')

    def texture(self, name: str) -> np.ndarray | None:
        tex = super().texture(name)
        if tex is None and name and _key(name) in self.tga():
            data = read(self.tga()[_key(name)][1], self.ds)
            tex = decode(data) if data is not None else None
            if tex is None:
                tex = np.zeros((SIZE, SIZE, 3), np.float32)
            self._tex[name] = tex
        return tex


def check(level: Level, ds: DataSource, roots=()) -> list[lc.Finding]:
    """Warnings for the ground textures of ``level`` that only a TGA provides (one per texture)."""
    out: list[lc.Finding] = []
    if level is None or ds is None:
        return out
    tgas = tga_files(ds, roots)
    if not tgas:
        return out
    shipped = {_key(n) for n in shipped_names(ds)}
    for i, name in enumerate(level.ground_textures):
        k = _key(name or '')
        if not k or k in shipped or k not in tgas:
            continue
        data = read(tgas[k][1], ds)
        if data is not None and usable(data):
            msg = translate('tgaground', '“{name}” is a mod ground texture (Textures/{name}.tga). The level needs the port '
                                         'with {switches}. The original game drops all shipped ground textures as soon as '
                                         'a TGA lies in Data/Textures and ends while loading this level.')
        else:
            msg = translate('tgaground', '“{name}” is a mod ground texture whose TGA the port cannot read (it needs '
                                         '128×128, 24 or 32 bits, raw or RLE): the port shows it black. The level needs '
                                         'the port with {switches}; the original game ends while loading it.')
        out.append(lc.Finding(lc.CHECKS[CHECK][0], CHECK, msg.format(name=name, switches=SWITCHES), SOURCE, None,
                              f'Plasma Ground › Texture {i}', name))
    return out


def output_tgas(level: Level, ds: DataSource, roots=()) -> list[Path]:
    """The TGA files of the output folder that the level's ground uses (for Test in game)."""
    tgas = tga_files(ds, roots)
    shipped = {_key(n) for n in shipped_names(ds)}
    files = []
    for name in level.ground_textures:
        k = _key(name or '')
        if k and k not in shipped and k in tgas and isinstance(tgas[k][1], Path):
            files.append(tgas[k][1])
    return files
