"""Edit polygon points (without Qt, so it is testable).

Polygons are stored as a point list in the field ``Polygon``. Almost all are written closed
(last point = first point: 4,085 of 4,198 in the original levels), just under 900 way point
polygons are not [verified]. Editing works on the "ring" without the duplicated closing point;
writing back keeps the polygon's notation. The edge from the last to the first point always
belongs to it (area).
"""
from __future__ import annotations

Pt = tuple[float, float]
MIN_POINTS = 3


def ring(pts: list[Pt]) -> tuple[list[Pt], bool]:
    """(points without the duplicated closing point, written closed?)"""
    closed = len(pts) > 1 and pts[0] == pts[-1]
    return (list(pts[:-1]) if closed else list(pts)), closed


def unring(pts: list[Pt], closed: bool) -> list[Pt]:
    return pts + [pts[0]] if closed and pts else list(pts)


def moved(pts: list[Pt], i: int, xy: Pt) -> list[Pt]:
    u, c = ring(pts)
    u[i] = xy
    return unring(u, c)


def inserted(pts: list[Pt], i: int, xy: Pt) -> list[Pt]:
    """Insert a new point on the edge i -> i+1."""
    u, c = ring(pts)
    u.insert(i + 1, xy)
    return unring(u, c)


def deleted(pts: list[Pt], i: int) -> list[Pt] | None:
    """Remove point i; None if fewer than 3 points would remain."""
    u, c = ring(pts)
    if len(u) <= MIN_POINTS:
        return None
    del u[i]
    return unring(u, c)


def closed_new(pts: list[Pt]) -> list[Pt]:
    """Write a newly drawn polygon like most originals: closed."""
    return unring(list(pts), True)


def nearest_edge(pts: list[Pt], x: float, y: float) -> tuple[int, Pt, float] | None:
    """(edge i -> i+1, nearest point on the edge, distance) to the point (x, y)."""
    u, _ = ring(pts)
    if len(u) < 2:
        return None
    best = None
    for i in range(len(u)):
        (ax, ay), (bx, by) = u[i], u[(i + 1) % len(u)]
        dx, dy = bx - ax, by - ay
        ll = dx * dx + dy * dy
        t = 0.0 if ll == 0 else max(0.0, min(1.0, ((x - ax) * dx + (y - ay) * dy) / ll))
        px, py = ax + t * dx, ay + t * dy
        d = ((x - px) ** 2 + (y - py) ** 2) ** 0.5
        if best is None or d < best[2]:
            best = (i, (px, py), d)
    return best
