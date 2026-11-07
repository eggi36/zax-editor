"""Paint the ground on the Plasma Ground grid (without Qt, so it is testable).

The ground is a grid of bytes (one point every 64 world pixels, ``Level.elevations``). The value
selects the texture band: index = value * number of textures / 256 (FORMATS.md 2.2). Painting a
texture therefore means setting grid points to the start of its band: in the upper ``Blending``
share of the band the game already mixes in the next texture (``render.blend_weight``).
The game interpolates between grid points; if two textures are far apart in the list, the bands
in between appear at the transition [confirmed, mini map comparison].
"""
from __future__ import annotations

import numpy as np

from zaxtools.level import GRID_CELL
from zaxtools.render import band_start


def band_value(index: int, count: int) -> int:
    """Grid value that shows texture ``index`` (of ``count``) pure: start of the band."""
    return band_start(index, count)


def band_of(value: int, count: int) -> int:
    return min(count - 1, int(value) * count // 256)


def brush_radius(size: int) -> float:
    """Brush radius in world pixels: size 1 hits exactly the nearest grid point."""
    return GRID_CELL * 0.75 + (size - 1) * GRID_CELL


def points_in_brush(shape, x: float, y: float, size: int):
    """(rows, columns) of the grid points in the brush around the world position (x, y)."""
    R = brush_radius(size)
    rows, cols = shape
    r0, r1 = max(0, int((y - R) // GRID_CELL)), min(rows - 1, int((y + R) // GRID_CELL) + 1)
    c0, c1 = max(0, int((x - R) // GRID_CELL)), min(cols - 1, int((x + R) // GRID_CELL) + 1)
    if r0 > r1 or c0 > c1:
        return np.empty(0, int), np.empty(0, int)
    rr, cc = np.mgrid[r0:r1 + 1, c0:c1 + 1]
    inside = (cc * GRID_CELL - x) ** 2 + (rr * GRID_CELL - y) ** 2 <= R * R
    return rr[inside], cc[inside]


def paint(grid: np.ndarray, x: float, y: float, size: int, value: int):
    """Set the grid points in the brush to ``value`` (in place). Returns the affected world area
    (x0, y0, x1, y1) for redrawing or None if nothing changes."""
    rr, cc = points_in_brush(grid.shape, x, y, size)
    if rr.size == 0:
        return None
    changed = grid[rr, cc] != value
    if not changed.any():
        return None
    rr, cc = rr[changed], cc[changed]
    grid[rr, cc] = value
    return dirty_box(rr, cc)


def dirty_box(rr, cc):
    """World area affected by changed grid points (one cell of margin each)."""
    return ((int(cc.min()) - 1) * GRID_CELL, (int(rr.min()) - 1) * GRID_CELL,
            (int(cc.max()) + 1) * GRID_CELL, (int(rr.max()) + 1) * GRID_CELL)


def band_range(index: int, count: int) -> tuple[int, int]:
    """Smallest and largest grid value of band ``index``."""
    lo = -(-index * 256 // count)
    hi = min(255, -(-(index + 1) * 256 // count) - 1)
    return lo, hi


def remap(grid: np.ndarray, count: int, mapping: list[int], new_count: int) -> np.ndarray:
    """Convert the grid for a changed texture list. ``mapping[i]`` = new index of the former
    texture i (for removed ones: the replacement texture). Every point keeps its texture and
    its position within the band; that also determines the transitions to the neighbours."""
    b = grid.astype(np.float64) * count / 256
    i = np.minimum(b.astype(int), count - 1)
    m = np.asarray(mapping)[i]
    v = np.round((m + (b - i)) * 256 / new_count)
    lo = np.array([band_range(k, new_count)[0] for k in range(new_count)])[m]
    hi = np.array([band_range(k, new_count)[1] for k in range(new_count)])[m]
    return np.clip(v, lo, hi).astype(np.uint8)


def usage(grid: np.ndarray, count: int) -> np.ndarray:
    """Number of grid points per texture."""
    return np.bincount((grid.astype(int) * count // 256).ravel(), minlength=count)[:count]


def texture_at(grid: np.ndarray, x: float, y: float, count: int) -> int:
    """Texture index at the nearest grid point (eyedropper)."""
    r = min(grid.shape[0] - 1, max(0, round(y / GRID_CELL)))
    c = min(grid.shape[1] - 1, max(0, round(x / GRID_CELL)))
    return band_of(grid[r, c], count)
