"""Links as arrows on the map: from the object with the script to the object it names.

The arrows lie above all objects, take no mouse clicks (selection passes through) and show on
hover which action names which field. Colours per kind (``KIND_COLORS``), the same as in the
reference list of the properties.
"""
from __future__ import annotations

import math

from PySide6.QtCore import QPointF, Qt
from PySide6.QtGui import QPainterPath, QPen
from PySide6.QtWidgets import QGraphicsPathItem

from zaxtools.links import Link

from .props import KIND_COLORS, describe, link_text
from .scene import Z_POLY, PolyItem

Z_LINKS = Z_POLY + 2


def anchor(item) -> QPointF:
    """Anchor point of a map object: position or centre of the polygon."""
    if isinstance(item, PolyItem):
        return item.mapToScene(item.boundingRect().center())
    return item.pos()


class LinkItem(QGraphicsPathItem):
    def __init__(self, lk: Link, a: QPointF, b: QPointF, strong: bool):
        super().__init__()
        color = KIND_COLORS[lk.kind]
        pen = QPen(color, 3 if strong else 1.5, Qt.SolidLine if lk.exact else Qt.DashLine)
        pen.setCosmetic(True)
        self.setPen(pen)
        self.setZValue(Z_LINKS)
        self.setAcceptedMouseButtons(Qt.NoButton)
        path = QPainterPath(a)
        path.lineTo(b)
        d = b - a
        n = math.hypot(d.x(), d.y())
        if n > 1:
            ux, uy = d.x() / n, d.y() / n
            s = max(16.0, min(48.0, n * 0.12))          # arrow head in world pixels
            tip = b
            for side in (1, -1):
                path.moveTo(tip)
                path.lineTo(QPointF(tip.x() - s * ux - side * s * 0.45 * uy,
                                    tip.y() - s * uy + side * s * 0.45 * ux))
        self.setPath(path)

    def shape(self):
        # only the line itself (for the tooltip), not the enclosed area
        return self.path()


class LinkOverlay:
    """Arrows in a scene: ``show`` replaces the links shown."""

    def __init__(self):
        self.scene = None
        self.items: list[LinkItem] = []

    def clear(self) -> None:
        for it in self.items:
            if it.scene() is not None:
                it.scene().removeItem(it)
        self.items = []

    def show(self, scene, links: list[Link], strong: set[int] = frozenset()) -> None:
        """``strong`` = id(node) of the objects whose arrows are highlighted."""
        self.clear()
        self.scene = scene
        if scene is None:
            return
        for lk in links:
            src = scene.item_for(lk.source)
            if src is None:
                continue
            for t in lk.targets:
                dst = scene.item_for(t)
                if dst is None:
                    continue
                it = LinkItem(lk, anchor(src), anchor(dst),
                              id(lk.source.node) in strong or id(t.node) in strong)
                it.setToolTip(f'{describe(lk.source)}\n→ {describe(t)}\n{link_text(lk)}')
                scene.addItem(it)
                self.items.append(it)
