"""AI overlays on the map: the areas, paths and directions the AIs' debug drawing of Zax.exe shows
(geometry in ``zaxtools.overlays``).

Every shape becomes an item above all objects that takes no mouse clicks (selection passes through)
and names its AI and fields on hover. The items join the ``extras`` of the object's map item, so they
move along while it is dragged; after every change (undo stack) the main window builds them anew,
so they follow edits of the defining fields.
"""
from __future__ import annotations

from PySide6.QtCore import QPointF, Qt
from PySide6.QtGui import QColor, QFont, QPainterPath, QPen
from PySide6.QtWidgets import QGraphicsPathItem, QGraphicsPixmapItem

from zaxtools import overlays as ov
from zaxtools.catalog import MODEL_DIR

from .i18n import QT_TRANSLATE_NOOP
from .scene import Z_POLY, to_pixmap

Z_OVERLAY = Z_POLY + 1.5          # above polygons, below the link arrows

# Menu texts of the groups (zaxtools.overlays.GROUPS), shown translated: translate('overlays', text)
GROUP_TEXTS = {
    'trigger': QT_TRANSLATE_NOOP('overlays', 'Triggers (oval, polygon, collision)'),
    'spawn': QT_TRANSLATE_NOOP('overlays', 'Start points (facing direction)'),
    'sound': QT_TRANSLATE_NOOP('overlays', 'Ambient sounds (radii, fall-off)'),
    'patrol': QT_TRANSLATE_NOOP('overlays', 'Patrol (area, path, way home)'),
    'enemy': QT_TRANSLATE_NOOP('overlays', 'Enemies (facing direction, turret range, distances)'),
    'scan': QT_TRANSLATE_NOOP('overlays', 'Looking around (limit angles, facing direction)'),
    'area': QT_TRANSLATE_NOOP('overlays', 'Landscape and damage (Landscape, radius)'),
}
DEFAULT_GROUPS = ('trigger', 'spawn', 'sound', 'patrol', 'scan', 'area')


class BoundsCache:
    """The models' "Bounds Poly" from their header (needs the class schema of Zax.exe)."""

    def __init__(self, ds, schema):
        from zaxtools.modelhead import ModelHead
        self.ds = ds
        self.head = ModelHead(schema) if schema is not None else None
        self._cache: dict[str, list | None] = {}

    def __call__(self, model: str):
        key = model.lower()
        if key not in self._cache:
            pts = None
            if self.head is not None:
                try:
                    pts = self.head.decode(self.ds.read(f'{MODEL_DIR}{model}.mdl16')).values.get('Bounds Poly') or []
                except Exception:           # noqa: BLE001 - missing or unreadable model
                    pts = None
            self._cache[key] = pts
        return self._cache[key]


class FontCache:
    def __init__(self, ds):
        self.ds = ds
        self._fonts: dict[str, object] = {}

    def get(self, name: str):
        if name not in self._fonts:
            from zaxtools import font
            f = None
            for suffix in ('.seq16',):
                path = f'Cache/Fonts/{name}{suffix}'
                if self.ds is not None and self.ds.exists(path):
                    try:
                        f = font.load(self.ds.read(path))
                    except (ValueError, IndexError):
                        f = None
            self._fonts[name] = f
        return self._fonts[name]


class AIOverlay:
    """Overlay items in a scene: ``show`` replaces the shapes shown."""

    def __init__(self):
        self.items: list = []
        self.fonts: FontCache | None = None

    def clear(self) -> None:
        for it in self.items:
            owner = getattr(it, 'owner', None)
            if owner is not None and it in owner.extras:
                owner.extras.remove(it)
            if it.scene() is not None:
                it.scene().removeItem(it)
        self.items = []

    def show(self, scene, parts, groups, bounds) -> None:
        """Shapes of ``parts`` (shown objects only) for the ``groups``."""
        self.clear()
        if scene is None or not groups:
            return
        geo = ov.Geometry(scene.level, bounds)
        for p in parts:
            it = scene.item_for(p)
            if it is None or not it.isVisible() or not ov.has_overlay(p):
                continue
            for s in ov.part_shapes(geo, p, set(groups)):
                self._add(scene, s)

    def _add(self, scene, s: ov.Shape) -> None:
        owner = scene.item_for(s.anchor)
        if owner is None:
            return
        # local coordinates relative to the owner's model position: the item stands at the owner's
        # position and moves with it (PartItem/PolyItem extras)
        base = owner.model_pos()
        x0, y0 = s.points[0][0] - base.x(), s.points[0][1] - base.y()
        if s.text:
            item = self._text_item(s, x0, y0)
        else:
            path = QPainterPath(QPointF(x0, y0))
            for x, y in s.points[1:]:
                path.lineTo(QPointF(x - base.x(), y - base.y()))
            item = _PathItem(path)
            pen = QPen(QColor(*s.color), 1.5)
            pen.setCosmetic(True)
            item.setPen(pen)
        item.setZValue(Z_OVERLAY)
        item.setAcceptedMouseButtons(Qt.NoButton)
        item.setToolTip(s.source)
        item.owner = owner
        owner.extras.append(item)
        scene.addItem(item)
        item.setPos(owner.pos())
        self.items.append(item)

    def _text_item(self, s: ov.Shape, x: float, y: float):
        f = self.fonts.get(s.font) if (self.fonts is not None and s.font) else None
        if f is not None:                   # the game's bitmap font, at world scale
            item = QGraphicsPixmapItem(to_pixmap(f.render(s.text)))
            item.setOffset(x, y)
            return item
        # the game's font of this text is not known: a plain one in the shape's colour
        font = QFont('Helvetica')
        font.setPixelSize(11)
        path = QPainterPath()
        path.addText(QPointF(x, y + 11), font, s.text)
        item = _PathItem(path)
        item.setPen(QPen(Qt.NoPen))
        item.setBrush(QColor(*s.color))
        return item


class _PathItem(QGraphicsPathItem):
    def shape(self):
        # only the line itself (for the tooltip), not the enclosed area
        return self.path()
