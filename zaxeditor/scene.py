"""Map view: ground, objects and polygons as QGraphicsItems.

Every object of the Tree List becomes a ``PartItem`` (position = world position), every polygon a
``PolyItem``. A selected polygon shows its points as ``VertexHandle``: dragging moves a point, a
double-click on an edge inserts one, the context menu inserts/deletes (double-click: ``MapView``).
The scene reports changes via ``on_poly_edit`` (undo in the main window). Shadow and ground layers
of the models are items of their own with a lower Z value so they lie below all objects, as in
the renderer. Objects are ordered by position Y + the model's "Sorting Y" (as in the renderer).
Moving only changes the text tree on release (``MoveCommand``).
Polygons (CRenderablePolygon) are drawn by a ``SurfaceItem`` - texture tiled, black or animated
(one shared clock of the scene), sorted in as in the game by bottom edge + "YSort" (On Ground=1
between shadows and ground layers, otherwise between the objects); the outline (``PolyItem``) can
be shown and hidden separately.
"""
from __future__ import annotations

import math
import threading
import time

import numpy as np
from PySide6.QtCore import QPointF, QRectF, Qt, QTimer, Signal
from PySide6.QtGui import (QBrush, QColor, QImage, QPainter, QPainterPath, QPen, QPixmap,
                           QPolygonF, QRegion, QUndoCommand)
from PySide6.QtWidgets import (QGraphicsItem, QGraphicsPathItem, QGraphicsPixmapItem,
                               QGraphicsPolygonItem, QGraphicsRectItem, QGraphicsScene, QMenu,
                               QStyle)

from zaxtools import anim, children
from zaxtools.level import Level, LevelPart
from zaxtools.render import EDITOR_PREFIX, Assets, on_ground, render_ground, surface_kind

from . import polyedit
from .i18n import translate

GROUND_STEP = 2          # render the ground at half resolution first and scale it up
GROUND_DETAIL = 0.5      # from this many screen pixels per world pixel on, show the full-resolution ground
Z_GROUND = -2e7
Z_LOW = -1e7             # shadows, ground layers and polygons with On Ground=1 (+ sort key)
Z_LOW_MOVING = -5e6      # ground layers of objects that do not rest: above all resting ones (zaxtools.anim)
Z_POLY = 1e7
HANDLE = 5               # half edge length of the point handles in screen pixels
GRID = 64                # spacing of the ground grid points in world pixels
GRID_MIN_PX = 6          # only draw the grid once the lines are this far apart

POLY_COLORS = {
    'CFreeRangePoly': QColor(0, 230, 255),
    'CWayPointsPolygon': QColor(80, 255, 80),
    'CRenderablePolygon': QColor(255, 170, 0),
}


def to_pixmap(rgba: np.ndarray) -> QPixmap:
    a = np.ascontiguousarray(rgba, dtype=np.uint8)
    h, w = a.shape[:2]
    fmt = QImage.Format_RGBA8888 if a.shape[2] == 4 else QImage.Format_RGB888
    return QPixmap.fromImage(QImage(a.data, w, h, a.strides[0], fmt).copy())


class Clock:
    """Shared clock of the model animations: seconds since start, None = the frame at level start
    (zaxtools.anim)."""
    t: float | None = None


CLOCK = Clock()
ANIM_INTERVAL = 50       # ms between two frames of the map while models are animated
SCROLL_MARGIN = 256      # room for scrolling around the level (pixels)


class Sprite:
    """One layer of a model: images of the sequence (one rotation) with offset (= -hot spot), frame
    rate, render mode. Which image an object shows comes from its ``anim.PartAnim`` and the clock
    (zaxtools.anim: frame 0 of a CEntityBase, "Current Frame", looped AIs, "Auto-Animate" by the game
    time); empty frames (None) draw nothing. ``still`` (the first non-empty image) is for thumbnails
    and the click shape. Pixmaps are only created when an image is drawn for the first time.

    ``amplify`` ("Blend Amplify Light"): the game computes ``d + d * s`` per channel
    (render.amplify). Qt can do that as ColorDodge ``d / (1 - s')`` with ``s' = s / (1 + s)``;
    all other modes are alpha blending as in the game."""

    def __init__(self, frames, fps: float, amplify: bool = False, lift: float = 0.0, strips=None, seq=None):
        self.frames = frames
        self.seq = seq                  # the mdl.Sequence (None: a still image)
        # (sorting offset, x from, x to) relative to the position, mdl.Sequence.strips
        self.strips = strips or [(0, -math.inf, math.inf)]
        self.lift = lift            # "Rendering Height" (not for ground layers): that much higher
        self.fps = fps if len(frames) > 1 and fps > 0 else 0
        self.amplify = amplify
        self._pix: list[QPixmap | None] = [None] * len(frames)
        self._shape: QPainterPath | None = None
        self.still = next(i for i, f in enumerate(frames) if f is not None)
        self.pix, self.dx, self.dy = self._get(self.still)
        self._rect = QRectF()
        for f in frames:
            if f is None:
                continue
            self._rect = self._rect.united(QRectF(-f.hot_x, -f.hot_y - lift, f.width, f.height))

    @property
    def animated(self) -> bool:
        return self.fps > 0

    def changes(self, a: anim.PartAnim | None) -> bool:
        """Does the image change while the game runs?"""
        if a is None or self.seq is None:
            return self.animated
        return self.fps > 0 and anim.layer_animated(self.seq, a)

    def resting(self, a: anim.PartAnim | None) -> bool:
        return a is None or self.seq is None or anim.layer_resting(self.seq, a)

    def _get(self, i: int):
        if self.frames[i] is None:
            return None, 0, 0
        if self._pix[i] is None:
            rgba = self.frames[i].rgba
            if self.amplify:
                rgba = rgba.copy()
                c = rgba[..., :3].astype(np.float32) / 255
                rgba[..., :3] = np.round(c / (1 + c) * 255).astype(np.uint8)
            self._pix[i] = to_pixmap(rgba)
        f = self.frames[i]
        return self._pix[i], -f.hot_x, -f.hot_y - self.lift

    @property
    def rect(self) -> QRectF:
        """Bounding box over all images of the animation."""
        return self._rect

    def index(self, a: anim.PartAnim | None = None, frame: int = 0) -> int | None:
        """The image for the object's animation ``a`` and its entity frame index ``frame`` at the
        clock (None: nothing drawn); without ``a`` the still image."""
        if a is None or self.seq is None:
            return self.still
        return anim.layer_frame(self.seq, a, frame, CLOCK.t)

    def shape(self) -> QPainterPath:
        if self._shape is None:
            p = QPainterPath()
            p.addRegion(QRegion(self.pix.mask()).translated(self.dx, self.dy))
            self._shape = p
        return self._shape

    def draw(self, painter: QPainter, index: int | None = None, xs=None) -> None:
        """Draw image ``index`` (None: nothing). ``xs`` = (from, to): only this vertical strip
        (relative to the position)."""
        if index is None or not 0 <= index < len(self.frames):
            return
        pix, dx, dy = self._get(index)
        if pix is None:
            return
        if xs is not None and (xs[0] > -math.inf or xs[1] < math.inf):
            lo, hi = max(xs[0], dx), min(xs[1], dx + pix.width())
            if hi <= lo:
                return
            painter.save()
            painter.setClipRect(QRectF(lo, dy, hi - lo, pix.height()), Qt.IntersectClip)
            self.draw(painter, index)
            painter.restore()
            return
        if self.amplify:
            painter.setCompositionMode(QPainter.CompositionMode_ColorDodge)
        painter.drawPixmap(dx, dy, pix)
        painter.setCompositionMode(QPainter.CompositionMode_SourceOver)


class SpriteCache:
    def __init__(self, assets: Assets):
        self.assets = assets
        self._cache: dict[tuple, tuple[list[Sprite], list[Sprite]] | None] = {}

    def get(self, model: str | None, sequence: str | None, angle: float = 0.0, height: float = 0.0):
        """(lower layers, main layers) or None if the model is missing. ``angle``: facing direction
        (``Start FacingAngle``), selects the rotation per layer like the exe; ``height``:
        ``Rendering Height`` (raises all layers without "Render On Ground")."""
        m = self.assets.model(model) if model else None
        layers = m.layers(sequence) if m is not None else []
        rots = tuple(s.rotation(angle) for _, s in layers)
        key = (model, (sequence or '').lower(), rots, height)
        if key not in self._cache:
            self._cache[key] = self._build(m, layers, rots, height)
        return self._cache[key]

    def _build(self, m, layers, rots, height):
        if m is None:
            return None
        low, main = [], []
        for (order, s), rot in zip(layers, rots):
            frames = [s.frame(rot, i) for i in range(s.frames_per_rotation)]
            if all(f is None for f in frames):
                continue
            sp = Sprite(frames, s.fps, order != 0 and s.mode == 'Blend Amplify Light',
                        0.0 if s.on_ground else height, s.strips(), s)
            # layers with "Render On Ground" go into the lower queue, as in the game
            (low if s.on_ground else main).append(sp)
        return low, main


class LowLayerItem(QGraphicsItem):
    """Shadow/ground layers of an object (the resting or the moving ones, ``moving``); follows the
    PartItem, not clickable."""

    def __init__(self, sprites: list[Sprite], owner: 'PartItem', moving: bool = False):
        super().__init__()
        self.sprites = sprites
        self.owner = owner
        self.moving = moving
        self._rect = QRectF()
        for s in sprites:
            self._rect = self._rect.united(s.rect)
        self.setAcceptedMouseButtons(Qt.NoButton)

    def boundingRect(self):
        return self._rect

    def paint(self, painter, option, widget=None):
        a, fi = self.owner.frame_state()
        for s in self.sprites:
            s.draw(painter, s.index(a, fi))


class PieceItem(QGraphicsItem):
    """Layers or strips of an object with their own sorting offset ("Sorting Y Offset",
    "Cutting Lines"); own Z height, follows the PartItem, not clickable."""

    def __init__(self, pieces, offset: int, owner: 'PartItem'):
        super().__init__()
        self.pieces = pieces            # [(sprite, (x from, x to))]
        self.offset = offset
        self.owner = owner
        self._rect = QRectF()
        for s, _ in pieces:
            self._rect = self._rect.united(s.rect)
        self.setAcceptedMouseButtons(Qt.NoButton)

    def boundingRect(self):
        return self._rect

    def paint(self, painter, option, widget=None):
        a, fi = self.owner.frame_state()
        for s, xs in self.pieces:
            s.draw(painter, s.index(a, fi), xs=xs)


class PartItem(QGraphicsItem):
    MARKER = 12

    def __init__(self, part: LevelPart, sprites, sort_y: int = 0, animation: anim.PartAnim | None = None,
                 current=None):
        super().__init__()
        self.part = part
        self.sort_y = sort_y            # the model's "Sorting Y": Z = position Y + sort_y
        self.anim = animation           # how the game animates the object (zaxtools.anim)
        self.current = current          # the mdl.Sequence the entity's frame counts in
        self.low, self.main = sprites if sprites else ([], [])
        # ground layers: the resting ones lie in the game's cached background, the others above all of
        # them (World_DrawDirtyTiles 0x4e8080, zaxtools.anim)
        rest = [s for s in self.low if s.resting(animation)]
        moving = [s for s in self.low if not s.resting(animation)]
        self.low_item = LowLayerItem(rest, self) if rest else None
        self.low_moving_item = LowLayerItem(moving, self, True) if moving else None
        self.extras: list[QGraphicsItem] = []     # overlay items that move along (zaxeditor.overlays)
        self.child_items: list['ChildItem'] = []  # the objects of the part's "Child List" (ChildItem)
        # Main layers split into pieces per sorting offset: the PartItem draws the pieces with the offset
        # of the first layer (strip 0), the others get PieceItems of their own (like Zax.exe: every layer
        # and every strip is sorted in separately)
        groups: dict[int, list] = {}
        for s in self.main:
            for off, lo, hi in s.strips:
                groups.setdefault(off, []).append((s, (lo, hi)))
        self.offset = self.main[0].strips[0][0] if self.main else 0
        self.pieces = groups.pop(self.offset, [])
        self.piece_items = [PieceItem(g, off, self) for off, g in groups.items()]
        self.animated = any(s.changes(animation) for s in self.low + self.main)
        self._shape: QPainterPath | None = None
        self._rect = QRectF()
        for s in self.main or self.low:        # only ground layers: these for clicking
            self._rect = self._rect.united(s.rect)
        if self._rect.isEmpty():
            m = self.MARKER
            self._rect = QRectF(-m, -m, 2 * m, 2 * m)
        self.setFlags(QGraphicsItem.ItemIsSelectable | QGraphicsItem.ItemIsMovable
                      | QGraphicsItem.ItemSendsGeometryChanges)
        if not part.drawn_in_game:
            for it in [self] + self.companions():
                it.setOpacity(0.45)
        self.sync_from_model()

    # --- Model <-> view -----------------------------------------------------
    def model_pos(self) -> QPointF:
        x, y = self.part.position
        return QPointF(x, y)

    def sync_from_model(self) -> None:
        p = self.model_pos()
        self.setPos(p)
        self.setZValue(p.y() + self.sort_y + self.offset + p.x() * 1e-5)
        if self.anim is not None:
            self.anim.phase = anim.phase_of(self.part)
        for it, z in ((self.low_item, Z_LOW), (self.low_moving_item, Z_LOW_MOVING)):
            if it:
                it.setPos(p)
                it.setZValue(z + p.y() + self.sort_y + p.x() * 1e-5)
        for it in self.piece_items:
            it.setPos(p)
            it.setZValue(p.y() + self.sort_y + it.offset + p.x() * 1e-5)

    def descendants(self) -> list['ChildItem']:
        """The child objects, their children and so on."""
        out = []
        for c in self.child_items:
            out += [c] + c.descendants()
        return out

    def companions(self) -> list[QGraphicsItem]:
        """Items that move along: shadow/ground, pieces with their own sorting offset, overlays, the
        child objects with theirs."""
        out = ([it for it in (self.low_item, self.low_moving_item) if it]) + self.piece_items + self.extras
        for c in self.child_items:
            out += [c] + c.companions()
        return out

    def frame_state(self) -> tuple[anim.PartAnim | None, int]:
        """The object's animation and its entity frame index at the clock."""
        return self.anim, anim.frame_index(self.anim, self.current, CLOCK.t) if self.anim else 0

    def shift_model(self, dx: float, dy: float) -> None:
        self.part.shift(dx, dy)
        self.sync_from_model()

    # --- QGraphicsItem --------------------------------------------------------
    def boundingRect(self):
        return self._rect.adjusted(-2, -2, 2, 2)

    def shape(self):
        if self._shape is None:
            p = QPainterPath()
            if not self.main:
                p.addRect(self._rect)
            for s in self.main:
                p = p.united(s.shape()) if len(self.main) > 1 else s.shape()
            self._shape = p
        return self._shape

    def paint(self, painter, option, widget=None):
        a, fi = self.frame_state()
        for s, xs in self.pieces:
            s.draw(painter, s.index(a, fi), xs=xs)
        if not self.main and not self.low:
            m = self.MARKER
            painter.setPen(QPen(QColor(255, 0, 255), 2))
            painter.setBrush(QBrush(QColor(255, 0, 255, 60)))
            painter.drawPolygon(QPolygonF([QPointF(0, -m), QPointF(m, 0), QPointF(0, m), QPointF(-m, 0)]))
        if option.state & QStyle.State_Selected:
            painter.setCompositionMode(QPainter.CompositionMode_SourceOver)
            painter.setBrush(Qt.NoBrush)
            painter.setPen(QPen(QColor(255, 255, 0), 0, Qt.DashLine))
            painter.drawRect(self._rect)
            painter.drawLine(QPointF(-6, 0), QPointF(6, 0))
            painter.drawLine(QPointF(0, -6), QPointF(0, 6))

    def itemChange(self, change, value):
        if change == QGraphicsItem.ItemSelectedHasChanged and value:
            for ch in self.descendants():    # a part and its own child objects are never selected together
                ch.setSelected(False)
        if change == QGraphicsItem.ItemPositionChange:
            # only move by whole numbers, the original's decimals are kept
            o = self.model_pos()
            d = value - o
            return o + QPointF(round(d.x()), round(d.y()))
        if change == QGraphicsItem.ItemPositionHasChanged:
            own = set(map(id, (c for ch in self.child_items for c in [ch] + ch.companions())))
            for it in self.companions():
                if id(it) not in own:
                    it.setPos(value)
            for ch in self.child_items:
                ch.follow(value)
        return super().itemChange(change, value)


class ChildItem(PartItem):
    """An object of a part's "Child List" (upper body, an effect on a staff, a carried item), drawn as
    the game draws it: at the parent's position plus its own, its height added to the parent's, an upper
    body with the parent's sequence, frame and turn (``zaxtools.anim.child_animation``,
    ``child_facing``). It moves with its parent (View -> Child objects). A click goes through to the
    parent; ``pick`` (Alt + click on the map, the object list, the properties) selects the child alone,
    and then it can be dragged: its position relative to the parent changes, the parent stays put. A
    child the game does not draw (no model, a sequence its model lacks) has no sprites and shows a
    marker only while selected."""

    def __init__(self, part: LevelPart, owner: PartItem, sprites, sort_y: int, animation, current):
        self.owner = owner
        super().__init__(part, sprites, sort_y, animation, current)
        self.setFlags(QGraphicsItem.GraphicsItemFlags())
        self.setAcceptedMouseButtons(Qt.NoButton)
        if not owner.part.drawn_in_game:
            for it in [self] + self.companions():
                it.setOpacity(0.45)

    def pick(self) -> None:
        """Select the child alone (its parent is deselected)."""
        self.setFlags(QGraphicsItem.ItemIsSelectable | QGraphicsItem.ItemIsMovable
                      | QGraphicsItem.ItemSendsGeometryChanges)
        o = self.owner
        while o is not None:                     # nor a child and its parents
            o.setSelected(False)
            o = getattr(o, 'owner', None)
        self.setSelected(True)

    def relative(self) -> tuple[float, float]:
        return self.part.position or (0.0, 0.0)

    def model_pos(self) -> QPointF:
        x, y = self.relative()
        return self.owner.model_pos() + QPointF(x, y)

    def shift_model(self, dx: float, dy: float) -> None:
        if self.part.position is None:
            self.part.position = (dx, dy)      # the game's default 0/0 plus the move
        else:
            self.part.shift(dx, dy)
        self.sync_from_model()

    def itemChange(self, change, value):
        if change == QGraphicsItem.ItemSelectedHasChanged and not value:
            self.setFlags(QGraphicsItem.GraphicsItemFlags())   # not caught by the rubber band
        return super().itemChange(change, value)

    def paint(self, painter, option, widget=None):
        if not self.main and not self.low:
            if option.state & QStyle.State_Selected:
                m = self.MARKER
                painter.setPen(QPen(QColor(255, 255, 0), 0, Qt.DashLine))
                painter.setBrush(Qt.NoBrush)
                painter.drawPolygon(QPolygonF([QPointF(0, -m), QPointF(m, 0), QPointF(0, m), QPointF(-m, 0)]))
            return
        super().paint(painter, option, widget)

    def sync_from_model(self) -> None:
        super().sync_from_model()
        if self.anim is not None and self.owner.anim is not None:
            self.anim.phase = self.owner.anim.phase    # the root's (anim.child_animation)

    def follow(self, owner_pos: QPointF) -> None:
        """Move with the parent while it is dragged (the model is only changed on release)."""
        x, y = self.relative()
        p = owner_pos + QPointF(x, y)
        d = p - self.pos()
        for it in [self] + self.companions():
            it.setPos(it.pos() + d)
            it.setZValue(it.zValue() + d.y())

    def frame_state(self) -> tuple[anim.PartAnim | None, int]:
        if self.anim is not None and self.owner.anim is not None and self.anim.frame == self.owner.anim.frame \
                and self.anim.loop is self.owner.anim.loop:
            # an upper body: the parent's frame index (CSameAsParentAI) in its own sequence
            return self.anim, anim.frame_index(self.anim, self.current or self.owner.current, CLOCK.t)
        return super().frame_state()


class SurfaceCache:
    """Tile pixmaps of the polygons: textures and images of the animations."""

    def __init__(self, assets: Assets):
        self.assets = assets
        self._tex: dict[str, QPixmap | None] = {}
        self._anim: dict[str, tuple[list[QPixmap], float] | None] = {}

    def texture(self, name: str) -> QPixmap | None:
        if name not in self._tex:
            t = self.assets.texture(name) if name else None
            self._tex[name] = to_pixmap(np.clip(t, 0, 255).astype(np.uint8)) if t is not None else None
        return self._tex[name]

    def animation(self, name: str):
        if name not in self._anim:
            a = self.assets.animation(name) if name else None
            self._anim[name] = ([to_pixmap(np.clip(f, 0, 255).astype(np.uint8)) for f in a[0]], a[1]) if a else None
        return self._anim[name]


class SurfaceItem(QGraphicsPolygonItem):
    """Visible area of a CRenderablePolygon, tiled in world coordinates as in the game."""

    def __init__(self, part: LevelPart, cache: SurfaceCache):
        super().__init__()
        self.part = part
        self.setPen(QPen(Qt.NoPen))
        self.ground = on_ground(part)
        self.setAcceptedMouseButtons(Qt.NoButton)
        self.setFlag(QGraphicsItem.ItemSendsGeometryChanges)
        self.frames: list[QPixmap] = []
        self.fps = 0.0
        kind = surface_kind(part)
        if kind == 'black':
            self.setBrush(QBrush(QColor(0, 0, 0)))
        elif kind == 'animated' and (a := cache.animation(part.get('Animated Texture') or '')):
            self.frames, self.fps = a
            self.setBrush(QBrush(self.frames[0]))
        elif (t := cache.texture(part.get('Static Texture') or '')) is not None:
            self.setBrush(QBrush(t))
        else:                               # texture missing: conspicuously hatched
            self.setBrush(QBrush(QColor(255, 170, 0), Qt.DiagCrossPattern))
        if not part.visible:
            self.setOpacity(0.45)
        self.preview(part.polygon or [])

    def preview(self, pts) -> None:
        self.setPolygon(QPolygonF([QPointF(x, y) for x, y in pts]))
        self._sort()

    def _sort(self) -> None:
        """Z like the sort key in the game (render.surface_key): bottom edge + YSort, the left edge
        on ties; On Ground=1 with the shadows and ground layers."""
        r = self.polygon().boundingRect().translated(self.pos())
        if r.isEmpty():
            return
        key = math.ceil(r.bottom()) + int(float(self.part.get('YSort') or 0))
        self.setZValue((Z_LOW if self.ground else 0) + key + r.left() * 1e-5)

    def itemChange(self, change, value):
        if change == QGraphicsItem.ItemPositionHasChanged:
            self._sort()
        return super().itemChange(change, value)

    def tick(self, seconds: float) -> None:
        if len(self.frames) > 1:
            self.setBrush(QBrush(self.frames[int(seconds * self.fps) % len(self.frames)]))


class PolyItem(QGraphicsPolygonItem):
    def __init__(self, part: LevelPart):
        super().__init__()
        self.part = part
        self.surface: SurfaceItem | None = None     # visible area (CRenderablePolygon only)
        self.extras: list[QGraphicsItem] = []       # overlay items that move along (zaxeditor.overlays)
        c = POLY_COLORS.get(part.cls, QColor(255, 255, 255))
        self.setPen(QPen(c, 0))
        fill = QColor(c)
        fill.setAlpha(35)
        # polygons show their texture themselves (SurfaceItem): outline only, otherwise the fill tints them
        self.setBrush(QBrush(fill) if part.cls != 'CRenderablePolygon' else QBrush(Qt.NoBrush))
        self.setZValue(Z_POLY)
        self.setFlags(QGraphicsItem.ItemIsSelectable | QGraphicsItem.ItemIsMovable
                      | QGraphicsItem.ItemSendsGeometryChanges)
        self.sync_from_model()

    def sync_from_model(self) -> None:
        self.preview(self.part.polygon)
        self.setPos(0, 0)
        if self.isSelected():
            self._make_handles()

    def preview(self, pts) -> None:
        """Show the outline without changing the model (while a point is being dragged)."""
        self.setPolygon(QPolygonF([QPointF(x, y) for x, y in pts]))
        if self.surface is not None:
            self.surface.preview(pts)
            self.surface.setPos(self.pos())

    # --- Point handles ----------------------------------------------------------
    def _make_handles(self) -> None:
        self._drop_handles()
        u, _ = polyedit.ring(self.part.polygon or [])
        for i, (x, y) in enumerate(u):
            VertexHandle(self, i, QPointF(x, y))

    def _drop_handles(self) -> None:
        for h in [c for c in self.childItems() if isinstance(c, VertexHandle)]:
            h.setParentItem(None)
            if h.scene():
                h.scene().removeItem(h)

    def request(self, pts, text: str) -> None:
        """Report the new point list to the scene (deferred: the item is rebuilt in the process)."""
        sc = self.scene()
        if sc is not None and getattr(sc, 'on_poly_edit', None):
            part = self.part
            QTimer.singleShot(0, lambda: sc.on_poly_edit(part, pts, text))

    def insert_at(self, x: float, y: float) -> None:
        e = polyedit.nearest_edge(self.part.polygon or [], x, y)
        if e is not None:
            i, (px, py), _ = e
            self.request(polyedit.inserted(self.part.polygon, i, (round(px), round(py))),
                         translate('scene', 'Insert point'))

    def delete_vertex(self, i: int) -> None:
        pts = polyedit.deleted(self.part.polygon, i)
        if pts is None:
            sc = self.scene()
            if sc is not None and getattr(sc, 'on_message', None):
                sc.on_message(translate('scene', 'A polygon needs at least 3 points.'))
            return
        self.request(pts, translate('scene', 'Delete point'))

    def contextMenuEvent(self, e):
        if not self.isSelected():
            self.scene().clearSelection()
            self.setSelected(True)
        m = QMenu()
        a = m.addAction(translate('scene', 'Insert point here'))
        if m.exec(e.screenPos()) is a:
            self.insert_at(e.pos().x(), e.pos().y())
        e.accept()

    def model_pos(self) -> QPointF:
        return QPointF(0, 0)

    def shift_model(self, dx: float, dy: float) -> None:
        self.part.shift(dx, dy)
        self.sync_from_model()

    def paint(self, painter, option, widget=None):
        if option.state & QStyle.State_Selected:
            painter.setPen(QPen(QColor(255, 255, 0), 0, Qt.DashLine))
        else:
            painter.setPen(self.pen())
        painter.setBrush(self.brush())
        painter.drawPolygon(self.polygon())

    def itemChange(self, change, value):
        if change == QGraphicsItem.ItemPositionChange:
            return QPointF(round(value.x()), round(value.y()))
        if change == QGraphicsItem.ItemPositionHasChanged:
            for it in ([self.surface] if self.surface is not None else []) + self.extras:
                it.setPos(value)
        if change == QGraphicsItem.ItemSelectedHasChanged:
            self._make_handles() if value else self._drop_handles()
        return super().itemChange(change, value)


class VertexHandle(QGraphicsRectItem):
    """Handle for a polygon point; the same size at every zoom. Drag with the left mouse button,
    context menu to delete. The change is only reported on release."""

    def __init__(self, poly: PolyItem, index: int, pos: QPointF):
        super().__init__(-HANDLE, -HANDLE, 2 * HANDLE, 2 * HANDLE, poly)
        self.poly, self.index = poly, index
        self.setPos(pos)
        self.setFlag(QGraphicsItem.ItemIgnoresTransformations)
        self.setPen(QPen(QColor(0, 0, 0), 0))
        self.setBrush(QBrush(QColor(255, 255, 0)))
        self.setCursor(Qt.SizeAllCursor)
        self.setToolTip(translate('scene', 'Point {number}: drag = move, right click = delete').format(number=index + 1))
        self._start: QPointF | None = None

    def _pts_with(self, p: QPointF):
        return polyedit.moved(self.poly.part.polygon, self.index, (round(p.x()), round(p.y())))

    def mousePressEvent(self, e):
        if e.button() == Qt.LeftButton:
            self._start = self.pos()
            e.accept()
        else:
            super().mousePressEvent(e)

    def mouseMoveEvent(self, e):
        if self._start is None:
            return
        p = self.poly.mapFromScene(e.scenePos())
        p = QPointF(round(p.x()), round(p.y()))
        self.setPos(p)
        self.poly.preview(self._pts_with(p))

    def mouseReleaseEvent(self, e):
        if self._start is None:
            return
        start, self._start = self._start, None
        if self.pos() != start:
            self.poly.request(self._pts_with(self.pos()), translate('scene', 'Move point'))

    def contextMenuEvent(self, e):
        m = QMenu()
        a = m.addAction(translate('scene', 'Delete point {number}').format(number=self.index + 1))
        if m.exec(e.screenPos()) is a:
            self.poly.delete_vertex(self.index)
        e.accept()


class DrawItem(QGraphicsPathItem):
    """Preview while drawing a new polygon: placed points + line to the mouse."""

    def __init__(self, color: QColor):
        super().__init__()
        self.pts: list[tuple[int, int]] = []
        self.mouse: QPointF | None = None
        pen = QPen(color, 2, Qt.DashLine)
        pen.setCosmetic(True)
        self.setPen(pen)
        self.setZValue(Z_POLY + 1)
        self.setAcceptedMouseButtons(Qt.NoButton)

    def update_path(self) -> None:
        path = QPainterPath()
        pts = [QPointF(x, y) for x, y in self.pts] + ([self.mouse] if self.mouse is not None else [])
        if pts:
            path.moveTo(pts[0])
            for q in pts[1:]:
                path.lineTo(q)
            if len(pts) > 2:
                path.lineTo(pts[0])
            for x, y in self.pts:
                path.addRect(QRectF(x - 3, y - 3, 6, 6))
        self.setPath(path)


class MoveCommand(QUndoCommand):
    """Holds the parts, not the items: items can be rebuilt in between."""

    def __init__(self, scene: 'MapScene', items, dx: float, dy: float):
        super().__init__(translate('scene', 'Move %n object(s)', None, len(items)))
        self.scene, self.parts, self.dx, self.dy = scene, [it.part for it in items], dx, dy

    def _shift(self, dx, dy):
        for p in self.parts:
            it = self.scene.item_for(p)
            if it is not None:
                it.shift_model(dx, dy)

    def redo(self):
        self._shift(self.dx, self.dy)

    def undo(self):
        self._shift(-self.dx, -self.dy)


class MapScene(QGraphicsScene):
    _ground_ready = Signal(int, object)     # (job, full-resolution image) from the background thread

    def __init__(self, level: Level, assets: Assets, sprites: SpriteCache):
        super().__init__()
        self.level, self.assets, self.sprites = level, assets, sprites
        W, H = level.size
        # No fixed scene rect: Qt extends it itself to all objects, including those outside the level.
        # The invisible frame leaves some room for scrolling all around.
        margin = QGraphicsRectItem(-SCROLL_MARGIN, -SCROLL_MARGIN, W + 2 * SCROLL_MARGIN, H + 2 * SCROLL_MARGIN)
        margin.setPen(Qt.NoPen)
        margin.setAcceptedMouseButtons(Qt.NoButton)
        self.addItem(margin)
        self.setBackgroundBrush(QColor(20, 20, 20))
        self.ground = QGraphicsPixmapItem()
        self.ground.setZValue(Z_GROUND)
        self.ground.setScale(GROUND_STEP)
        self.ground.setTransformationMode(Qt.SmoothTransformation)
        self.ground.setAcceptedMouseButtons(Qt.NoButton)
        self.addItem(self.ground)
        # the ground at both resolutions: half at once, full from a background thread (render_ground);
        # the view picks one by its zoom (set_detail)
        self._grounds: dict[int, QPixmap] = {}
        self._ground_job = 0
        self._ground_dirty: list | None = None      # boxes painted while the full ground is computed
        self._detail = False
        self._ground_ready.connect(self._full_ground_ready)
        self.surfaces = SurfaceCache(assets)
        self._clock = time.monotonic()
        self.anim_timer = QTimer(self)      # clock of the animated polygons
        self.anim_timer.timeout.connect(self._animate)
        self.render_ground()
        self.items_by_node: dict[int, QGraphicsItem] = {}
        self.child_by_node: dict[int, ChildItem] = {}     # the drawn child objects (ChildItem) by their node
        self.on_poly_edit = None        # (part, new point list, text) -> undo command in the main window
        self.on_message = None          # hint in the status bar
        self.show_grid = False          # ground grid (View -> Grid)
        self.animate_models = False     # model animations (View -> Play animations)
        self.show_children = True       # the parts' child objects (View -> Child objects)
        self.filters = {'editor': True, 'invisible': True,
                        'CFreeRangePoly': True, 'CWayPointsPolygon': False, 'CRenderablePolygon': False}
        for p in level.parts:
            self._add_part(p)
        self.apply_filters()
        self._update_timer()

    def drawForeground(self, painter: QPainter, rect: QRectF) -> None:
        """Edge of the level and optionally the ground grid (lines through the grid points)."""
        W, H = self.level.size
        scale = painter.worldTransform().m11()
        if self.show_grid and GRID * scale >= GRID_MIN_PX:
            pen = QPen(QColor(255, 255, 255, 40), 0)
            painter.setPen(pen)
            x0 = max(0, int(rect.left() // GRID) * GRID)
            y0 = max(0, int(rect.top() // GRID) * GRID)
            x1, y1 = min(W, rect.right()), min(H, rect.bottom())
            top, bottom = max(0, rect.top()), min(H, rect.bottom())
            left, right = max(0, rect.left()), min(W, rect.right())
            for x in range(x0, int(x1) + 1, GRID):
                painter.drawLine(QPointF(x, top), QPointF(x, bottom))
            for y in range(y0, int(y1) + 1, GRID):
                painter.drawLine(QPointF(left, y), QPointF(right, y))
        painter.setPen(QPen(QColor(150, 150, 150), 0))
        painter.setBrush(Qt.NoBrush)
        painter.drawRect(QRectF(0, 0, W, H))

    def set_grid(self, on: bool) -> None:
        self.show_grid = on
        self.update()

    def set_show_children(self, on: bool) -> None:
        """Show the parts' child objects (upper bodies, effects, carried items) or not."""
        self.show_children = on
        self.apply_filters()

    def set_animate_models(self, on: bool) -> None:
        """Animate models (on) or show the frame at level start (off)."""
        self.animate_models = on
        CLOCK.t = (time.monotonic() - self._clock) if on else None
        self._update_timer()
        self.update()

    def _animate(self) -> None:
        t = time.monotonic() - self._clock
        for it in self.items_by_node.values():
            if isinstance(it, PolyItem) and it.surface is not None and it.surface.frames:
                it.surface.tick(t)
        if self.animate_models:
            CLOCK.t = t
            for it in self.items_by_node.values():
                if isinstance(it, PartItem) and it.animated and it.isVisible():
                    it.update()
                    for c in it.companions():
                        c.update()

    def _update_timer(self) -> None:
        fps = max((it.surface.fps for it in self.items_by_node.values()
                   if isinstance(it, PolyItem) and it.surface is not None and len(it.surface.frames) > 1),
                  default=0)
        interval = int(1000 / fps) if fps > 0 else 0
        if self.animate_models and any(isinstance(it, PartItem) and it.animated
                                       for it in self.items_by_node.values()):
            interval = min(interval or ANIM_INTERVAL, ANIM_INTERVAL)
        if interval <= 0:
            self.anim_timer.stop()
        else:
            self.anim_timer.start(max(15, interval))

    def render_ground(self) -> None:
        """The ground at half resolution at once (1 s for 5000 × 5000), the full resolution (4 s) in a
        background thread: sharp once zoomed in, on a Retina screen from 50 % on."""
        img = render_ground(self.level, self.assets, (0, 0, *self.level.size), GROUND_STEP, surfaces=False)
        self._grounds = {GROUND_STEP: to_pixmap(np.clip(img, 0, 255).astype(np.uint8))}
        self._show_ground()
        self._ground_job += 1
        self._ground_dirty = []
        threading.Thread(target=self._render_full_ground, args=(self._ground_job,), daemon=True).start()

    def _render_full_ground(self, job: int) -> None:
        try:        # the textures are loaded by the half-resolution pass; painting meanwhile is redone after
            img = render_ground(self.level, self.assets, (0, 0, *self.level.size), 1, surfaces=False)
            self._ground_ready.emit(job, np.clip(img, 0, 255).astype(np.uint8))
        except Exception:       # noqa: BLE001 - a level changed under the thread: the half resolution stays
            pass

    def _full_ground_ready(self, job: int, img) -> None:
        if job != self._ground_job:
            return
        self._grounds[1] = to_pixmap(img)
        dirty, self._ground_dirty = self._ground_dirty or [], None
        for box in dirty:
            self._update_ground_at(1, box)
        self._show_ground()

    def set_detail(self, screen_per_world: float, smooth: bool) -> None:
        """Called by the view before painting: device pixels per world pixel (zoom × device pixel ratio)
        and whether pixmaps are drawn smoothly (else with sharp pixels)."""
        detail = screen_per_world >= GROUND_DETAIL
        if detail != self._detail:
            self._detail = detail
            self._show_ground()
        mode = Qt.SmoothTransformation if smooth else Qt.FastTransformation
        if self.ground.transformationMode() != mode:
            self.ground.setTransformationMode(mode)

    def _show_ground(self) -> None:
        step = 1 if self._detail and 1 in self._grounds else GROUND_STEP
        if self.ground.pixmap().cacheKey() != self._grounds[step].cacheKey():
            self.ground.setPixmap(self._grounds[step])
            self.ground.setScale(step)

    def update_ground(self, box) -> None:
        """Only redraw the world area box=(x0, y0, x1, y1) of the ground."""
        for step in self._grounds:
            self._update_ground_at(step, box)
        if self._ground_dirty is not None:
            self._ground_dirty.append(box)
        self._show_ground()

    def _update_ground_at(self, s: int, box) -> None:
        W, H = self.level.size
        x0, y0 = max(0, int(box[0]) // s * s), max(0, int(box[1]) // s * s)
        x1, y1 = min(W, int(box[2])), min(H, int(box[3]))
        if x1 <= x0 or y1 <= y0:
            return
        img = render_ground(self.level, self.assets, (x0, y0, x1, y1), s, surfaces=False)
        pix = self._grounds[s]
        p = QPainter(pix)
        p.setCompositionMode(QPainter.CompositionMode_Source)
        p.drawPixmap(x0 // s, y0 // s, to_pixmap(np.clip(img, 0, 255).astype(np.uint8)))
        p.end()
        self._grounds[s] = pix

    def _add_part(self, p: LevelPart) -> None:
        if p.polygon and p.position is None:
            it = PolyItem(p)
            if p.cls == 'CRenderablePolygon':
                it.surface = SurfaceItem(p, self.surfaces)
                self.addItem(it.surface)
        elif p.position is not None:
            m = self.assets.model(p.model) if p.model else None
            a = anim.part_animation(p, m)
            cur = next((s for order, s in m.layers(a.sequence) if order == 2), None) if m is not None else None
            it = PartItem(p, self.sprites.get(p.model, a.sequence, p.draw_angle, p.rendering_height),
                          self.assets.sorting_y(p.model), a, cur)
            self._add_children(it, a)
            for c in it.companions():
                self.addItem(c)
        else:
            return
        self.addItem(it)
        self.items_by_node[id(p.node)] = it

    def _add_children(self, it: PartItem, a: anim.PartAnim | None, root: LevelPart | None = None,
                      height: float | None = None) -> None:
        """The ChildItems of a part's "Child List" (zaxtools LevelPart.children), and their own children below
        them (drawn from the child's position and height like the renderer's, ``render.render_level``)."""
        p = it.part
        root = root or p
        height = p.rendering_height if height is None else height
        for c in p.children:
            cm = self.assets.model(c.model) if c.model else None
            ca = anim.child_animation(c, cm, a) if cm is not None and a is not None else None
            sprites, ccur = None, None
            h = height + c.rendering_height
            if ca is not None:
                ccur = next((s for order, s in cm.layers(ca.sequence) if order == 2), None)
                sprites = self.sprites.get(c.model, ca.sequence, anim.child_facing(c, root), h)
            ci = ChildItem(c, it, sprites, self.assets.sorting_y(c.model) if c.model else 0, ca, ccur)
            it.child_items.append(ci)
            self.child_by_node[id(c.node)] = ci
            self._add_children(ci, ca, root, h)

    def add_part_item(self, part: LevelPart):
        self._add_part(part)
        self.apply_filters()
        self._update_timer()
        return self.item_for(part)

    def remove_part_item(self, part: LevelPart) -> None:
        it = self.items_by_node.pop(id(part.node), None)
        if it is not None:
            if isinstance(it, PartItem):
                for ch in it.descendants():
                    self.child_by_node.pop(id(ch.part.node), None)
                for c in it.companions():
                    self.removeItem(c)
            if isinstance(it, PolyItem) and it.surface is not None:
                self.removeItem(it.surface)
            self.removeItem(it)
            self._update_timer()

    def item_for(self, part: LevelPart):
        """The item of a part of the Tree List or of a drawn child object."""
        return self.items_by_node.get(id(part.node)) or self.child_by_node.get(id(part.node))

    def root_of(self, part: LevelPart) -> LevelPart | None:
        """The part of the Tree List a child object belongs to (None for a part of the Tree List or an
        unknown node)."""
        if id(part.node) in self.items_by_node:
            return None
        ci = self.child_by_node.get(id(part.node))
        if ci is not None:
            while isinstance(ci.owner, ChildItem):
                ci = ci.owner
            return ci.owner.part
        return children.root_of(self.level.parts, part.node)

    def select_part(self, part: LevelPart) -> bool:
        """Select a part or a child object alone; False if it has no visible item."""
        it = self.item_for(part)
        if it is None or not it.isVisible():
            return False
        self.clearSelection()
        if isinstance(it, ChildItem):
            it.pick()
        else:
            it.setSelected(True)
        return True

    def child_at(self, pos: QPointF) -> 'ChildItem | None':
        """The topmost visible child object under the scene point ``pos`` (its sprites, pieces or ground
        layers)."""
        for it in self.items(pos):
            o = it if isinstance(it, ChildItem) else getattr(it, 'owner', None) \
                if isinstance(it, (PieceItem, LowLayerItem)) else None
            if isinstance(o, ChildItem) and o.isVisible():
                return o
        return None

    def rebuild_part(self, part: LevelPart) -> None:
        """Rebuild after a change of model/sequence/visibility (also of one of its child objects:
        then the part of the Tree List is rebuilt); the selection (also of a child) is kept."""
        root = self.root_of(part)
        if root is not None:
            part = root
        old = self.item_for(part)
        selected = old.isSelected() if old else False
        picked = [id(ch.part.node) for ch in (old.descendants() if isinstance(old, PartItem) else [])
                  if ch.isSelected()]
        self.remove_part_item(part)
        new = self.add_part_item(part)
        if new is not None:
            new.setSelected(selected and new.isVisible())
            for ch in (new.descendants() if isinstance(new, PartItem) else []):
                if id(ch.part.node) in picked and ch.isVisible():
                    ch.pick()

    def resort(self) -> None:
        """Set the sorting offset anew (after the catalogue has loaded)."""
        for it in self.items_by_node.values():
            if isinstance(it, PartItem):
                it.sort_y = self.assets.sorting_y(it.part.model)
                it.sync_from_model()

    def is_shown(self, it) -> bool:
        p = it.part
        if isinstance(it, PolyItem):
            return self.filters.get(p.cls, True)
        if p.model and p.model.startswith(EDITOR_PREFIX) and not self.filters['editor']:
            return False
        if not p.drawn_in_game and not self.filters['invisible']:
            return False
        return True

    def apply_filters(self) -> None:
        for it in self.items_by_node.values():
            v = self.is_shown(it)
            it.setVisible(v)
            if isinstance(it, PartItem):
                self._show_with_children(it, v)
            if not v:
                it.setSelected(False)

    def _show_with_children(self, it: PartItem, v: bool) -> None:
        """Show or hide an item's companions and its child objects (each also by its own visibility), down the
        nesting."""
        own = set(map(id, (c for ch in it.child_items for c in [ch] + ch.companions())))
        for c in it.companions():
            if id(c) not in own:
                c.setVisible(v)
        for ch in it.child_items:
            shown = v and self.show_children and (ch.part.drawn_in_game or self.filters['invisible'])
            ch.setVisible(shown)
            if not shown:
                ch.setSelected(False)
            self._show_with_children(ch, shown)

    def selected_parts(self) -> list[LevelPart]:
        return [it.part for it in self.selectedItems() if hasattr(it, 'part')]

    def moved_items(self):
        """Items whose display differs from the model, with a shared offset."""
        out, delta = [], None
        for it in self.selectedItems():
            if not hasattr(it, 'shift_model'):
                continue
            d = it.pos() - it.model_pos()
            if d.x() or d.y():
                out.append(it)
                delta = (d.x(), d.y())
        return out, delta
