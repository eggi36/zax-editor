"""Paint the ground in the editor: brush bar (texture, size), tool on the map, undo.

One brush stroke (mouse press until release) is one undo step. During the stroke only the
affected pieces of ground are redrawn. Alt + click picks up the texture under the mouse
(eyedropper).

The texture list can be changed (add, remove, move); the grid is converted so that every grid
point keeps its texture (groundedit.remap).
"""
from __future__ import annotations

import numpy as np
from PySide6.QtCore import QPointF, QSize, Qt, Signal
from PySide6.QtGui import QColor, QIcon, QPen, QUndoCommand
from PySide6.QtWidgets import (QAbstractItemView, QDialog, QDialogButtonBox, QGraphicsEllipseItem,
                               QHBoxLayout, QInputDialog, QLabel, QLineEdit, QListWidget,
                               QListWidgetItem, QPushButton, QSlider, QVBoxLayout,
                               QWidget)

from zaxtools.level import Level

from . import groundedit, tgaground
from .i18n import translate
from .scene import to_pixmap

THUMB = 40
TEXTURES = 'Cache/Textures/'


def thumbnail(assets, name: str) -> QIcon | None:
    tex = assets.texture(name) if assets else None
    if tex is None:
        return None
    k = max(1, tex.shape[0] // THUMB)
    return QIcon(to_pixmap(np.clip(tex[::k, ::k], 0, 255).astype(np.uint8)))


class GroundCommand(QUndoCommand):
    """Ground grid before/after; ``on_change(box)`` redraws the area."""

    def __init__(self, level: Level, before: np.ndarray, after: np.ndarray, box, on_change):
        super().__init__(translate('groundtool', 'Paint ground'))
        self.level, self.before, self.after, self.box, self.on_change = level, before, after, box, on_change
        self._first = True

    def redo(self):
        if self._first:            # already set and drawn while painting
            self._first = False
            return
        self.level.elevations = self.after
        self.on_change(self.box)

    def undo(self):
        self.level.elevations = self.before
        self.on_change(self.box)


class TextureListCommand(QUndoCommand):
    """Texture list and converted grid before/after; ``on_change(row)`` redraws the ground and
    selects row ``row`` in the list."""

    def __init__(self, text: str, level: Level, after: tuple, row_after: int, row_before: int, on_change):
        super().__init__(text)
        self.level, self.on_change = level, on_change
        self.before = (list(level.ground_textures), level.elevations)
        self.after, self.rows = after, (row_before, row_after)

    def _apply(self, state, row) -> None:
        self.level.ground_textures, self.level.elevations = state
        self.on_change(row)

    def redo(self):
        self._apply(self.after, self.rows[1])

    def undo(self):
        self._apply(self.before, self.rows[0])


class TexturePicker(QDialog):
    """Selection from all textures under Cache/Textures (multiple selection, search). With the opt-in of the mod ground
    textures (``GroundAssets.offer_tga``, Ground → Offer mod ground textures) the TGA names of ``Textures/`` follow in
    a group of their own, in the order the port appends them (``zaxeditor.tgaground``)."""

    def __init__(self, parent, assets, present: list[str]):
        super().__init__(parent)
        self.setWindowTitle(translate('groundtool', 'Add textures'))
        self.resize(420, 560)
        lay = QVBoxLayout(self)
        self.search = QLineEdit()
        self.search.setPlaceholderText(translate('groundtool', 'Search'))
        self.list = QListWidget()
        self.list.setIconSize(QSize(THUMB, THUMB))
        self.list.setSelectionMode(QAbstractItemView.ExtendedSelection)
        have = {n.lower() for n in present}
        shipped = tgaground.shipped_names(assets.ds)
        for name in shipped:
            if name.lower() in have:
                continue
            it = self._item(name)
            tex = assets.texture(name)
            if tex is not None and tex.shape[:2] != (128, 128):
                # the game reads ground textures as 128x128: a smaller one appears as torn stripes
                # [verified 2026-10-18, Special/Under Construction 32x32]
                it.setText(translate('groundtool', '{name}  ({width}×{height}, faulty in the game)').format(
                    name=name, width=tex.shape[1], height=tex.shape[0]))
                it.setFlags(it.flags() & ~Qt.ItemIsSelectable & ~Qt.ItemIsEnabled)
                it.setToolTip(translate('groundtool', 'The game shows ground textures correctly only at 128×128.'))
            if icon := thumbnail(assets, name):
                it.setIcon(icon)
            self.list.addItem(it)
        self.header = None
        tga = []
        if isinstance(assets, tgaground.GroundAssets):
            assets.refresh_tga()
            tga = [n for n in tgaground.appended_names(assets.ds, assets.tga_roots(), shipped) if n.lower() not in have]
        offer = bool(getattr(assets, 'offer_tga', False))
        if tga and offer:
            self.header = QListWidgetItem(translate('groundtool', 'Mod textures (TGA), port only'))
            self.header.setFlags(Qt.NoItemFlags)
            f = self.header.font()
            f.setBold(True)
            self.header.setFont(f)
            self.header.setToolTip(translate('groundtool', 'The port with {switches} appends these names after the '
                                                           'shipped textures. The original game shows no shipped ground '
                                                           'texture as soon as a TGA lies in Data/Textures, and ends on a '
                                                           'level using one.').format(switches=tgaground.SWITCHES))
            self.list.addItem(self.header)
            for name in tga:
                it = self._item(name)
                src = assets.tga()[name.lower()][1]
                data = tgaground.read(src, assets.ds)
                if data is None or not tgaground.usable(data):
                    it.setText(translate('groundtool', '{name}  (TGA the port cannot read: black)').format(name=name))
                    it.setFlags(it.flags() & ~Qt.ItemIsSelectable & ~Qt.ItemIsEnabled)
                    it.setToolTip(translate('groundtool', 'The port reads only TGAs of 128×128 with 24 or 32 bits, raw '
                                                          'or RLE.'))
                else:
                    it.setText(translate('groundtool', '{name}  (TGA)').format(name=name))
                    it.setToolTip(translate('groundtool', '{file}\nOnly for the port with {switches}.').format(
                        file=src, switches=tgaground.SWITCHES))
                    if icon := thumbnail(assets, name):
                        it.setIcon(icon)
                self.list.addItem(it)
        self.search.textChanged.connect(self._filter)
        self.list.itemDoubleClicked.connect(self.accept)
        bb = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        bb.accepted.connect(self.accept)
        bb.rejected.connect(self.reject)
        hint = QLabel(translate('groundtool', 'New textures go to the end of the list; the existing\n'
                                              'ground thus stays unchanged. Choose several with ⌘/⇧.\n'
                                              'Textures already in the level are missing here.'))
        hint.setStyleSheet('color: gray')
        widgets = [self.search, self.list, hint]
        if tga and not offer:
            off = QLabel(translate('groundtool', '%n mod ground texture(s) (TGA) not shown: Ground → Offer mod ground '
                                                 'textures (port only).', None, len(tga)))
            off.setWordWrap(True)
            off.setStyleSheet('color: gray')
            widgets.append(off)
        for w in widgets + [bb]:
            lay.addWidget(w)

    @staticmethod
    def _item(name: str) -> QListWidgetItem:
        it = QListWidgetItem(name)
        it.setData(Qt.UserRole, name)
        return it

    def _filter(self, text: str) -> None:
        t = text.lower()
        tga_shown = False
        for i in range(self.list.count()):
            it = self.list.item(i)
            if it is self.header:
                continue
            it.setHidden(t not in it.text().lower())
            tga_shown |= self.header is not None and i > self.list.row(self.header) and not it.isHidden()
        if self.header is not None:
            self.header.setHidden(not tga_shown)

    def chosen(self) -> list[str]:
        return [it.data(Qt.UserRole) for it in self.list.selectedItems()
                if not it.isHidden() and it.data(Qt.UserRole)]


class GroundPanel(QWidget):
    """Textures of the level (in band order) and brush size."""
    texture_changed = Signal(int)
    add_clicked = Signal()
    remove_clicked = Signal()
    move_clicked = Signal(int)

    def __init__(self):
        super().__init__()
        lay = QVBoxLayout(self)
        lay.setContentsMargins(4, 4, 4, 4)
        self.list = QListWidget()
        self.list.setIconSize(QSize(THUMB, THUMB))
        self.list.currentRowChanged.connect(self.texture_changed)
        buttons = QHBoxLayout()
        for text, tip, slot in (('+', translate('groundtool', 'Add textures …'), self.add_clicked.emit),
                                ('−', translate('groundtool', 'Remove texture'), self.remove_clicked.emit),
                                ('▲', translate('groundtool', 'Texture up'), lambda: self.move_clicked.emit(-1)),
                                ('▼', translate('groundtool', 'Texture down'), lambda: self.move_clicked.emit(1))):
            b = QPushButton(text)
            b.setToolTip(tip)
            b.clicked.connect(slot)
            buttons.addWidget(b)
        self.size_label = QLabel()
        self.size = QSlider(Qt.Horizontal)
        self.size.setRange(1, 8)
        self.size.setValue(2)
        self.size.valueChanged.connect(self._size_text)
        self._size_text(self.size.value())
        hint = QLabel(translate('groundtool', 'Paint: drag with the left mouse button\nAlt + click: pick up the '
                                              'texture\n[ and ]: smaller/larger brush\nB or Esc: stop painting\n\n'
                                              'Transitions run through the textures\nthat lie between them in the '
                                              'list.\nThe order of the list therefore\ndetermines the transitions.'))
        hint.setStyleSheet('color: gray')
        lay.addWidget(QLabel(translate('groundtool', 'Texture')))
        lay.addWidget(self.list)
        lay.addLayout(buttons)
        for w in (self.size_label, self.size, hint):
            lay.addWidget(w)

    def _size_text(self, v: int) -> None:
        self.size_label.setText(translate('groundtool', 'Brush size: {size} (radius {radius} px)').format(
            size=v, radius=f'{groundedit.brush_radius(v):.0f}'))

    def set_level(self, level: Level, assets, row: int | None = None) -> None:
        if row is None:
            row = max(0, self.list.currentRow())
        self.list.clear()
        names = level.ground_textures
        used = groundedit.usage(level.elevations, len(names))
        is_tga = getattr(assets, 'is_tga', lambda _n: False)
        for i, name in enumerate(names):
            tga = is_tga(name)
            it = QListWidgetItem(f'{i}  {name}' + ('  ' + translate('groundtool', '(TGA, port only)') if tga else '')
                                 + ('' if used[i] else '  ' + translate('groundtool', '(unused)')))
            tip = name + '\n' + translate('groundtool', '%n grid point(s)', None, int(used[i]))
            if tga:
                tip += '\n' + translate('groundtool', 'Mod ground texture (TGA): the level needs the port with '
                                                      '{switches}.').format(switches=tgaground.SWITCHES)
            it.setToolTip(tip)
            if icon := thumbnail(assets, name):
                it.setIcon(icon)
            self.list.addItem(it)
        self.list.setCurrentRow(min(row, self.list.count() - 1))

    def texture(self) -> int:
        return self.list.currentRow()

    def brush(self) -> int:
        return self.size.value()


class GroundTool:
    """Tool for ``MapView.tool``: press/drag/release in world coordinates."""

    def __init__(self, panel: GroundPanel, get_scene, push, message):
        self.panel, self.get_scene, self.push, self.message = panel, get_scene, push, message
        self.before: np.ndarray | None = None
        self.grid: np.ndarray | None = None
        self.box = None
        self.cursor: QGraphicsEllipseItem | None = None
        panel.add_clicked.connect(self.add_textures)
        panel.remove_clicked.connect(self.remove_texture)
        panel.move_clicked.connect(self.move_texture)

    # --- Brush circle ------------------------------------------------------------
    def hover(self, x: float, y: float) -> None:
        sc = self.get_scene()
        if sc is None:
            return
        if self.cursor is None or self.cursor.scene() is not sc:
            self.cursor = QGraphicsEllipseItem()
            pen = QPen(QColor(255, 255, 255), 1.5)
            pen.setCosmetic(True)
            self.cursor.setPen(pen)
            self.cursor.setZValue(3e7)
            self.cursor.setAcceptedMouseButtons(Qt.NoButton)
            sc.addItem(self.cursor)
        R = groundedit.brush_radius(self.panel.brush())
        self.cursor.setRect(-R, -R, 2 * R, 2 * R)
        self.cursor.setPos(QPointF(x, y))

    def deactivate(self) -> None:
        if self.cursor is not None and self.cursor.scene():
            self.cursor.scene().removeItem(self.cursor)
        self.cursor = None
        self.release()

    # --- Painting ------------------------------------------------------------------
    def press(self, x: float, y: float, alt: bool) -> None:
        sc = self.get_scene()
        if sc is None:
            return
        n = len(sc.level.ground_textures)
        if alt:
            i = groundedit.texture_at(sc.level.elevations, x, y, n)
            self.panel.list.setCurrentRow(i)
            self.message(translate('groundtool', 'Texture picked up: {name}').format(name=sc.level.ground_textures[i]))
            return
        if self.panel.texture() < 0:
            self.message(translate('groundtool', 'Choose a texture first'))
            return
        self.before = sc.level.elevations
        self.grid = self.before.copy()
        self.box = None
        self.move(x, y)

    def move(self, x: float, y: float) -> None:
        self.hover(x, y)
        sc = self.get_scene()
        if self.grid is None or sc is None:
            return
        value = groundedit.band_value(self.panel.texture(), len(sc.level.ground_textures))
        box = groundedit.paint(self.grid, x, y, self.panel.brush(), value)
        if box is None:
            return
        sc.level.elevations = self.grid
        sc.update_ground(box)
        b = self.box
        self.box = box if b is None else (min(b[0], box[0]), min(b[1], box[1]), max(b[2], box[2]), max(b[3], box[3]))

    def release(self) -> None:
        sc = self.get_scene()
        if self.grid is not None and self.box is not None and sc is not None:
            def on_change(box) -> None:
                sc.update_ground(box)
                self.panel.set_level(sc.level, sc.assets)     # usage in the list
            self.push(GroundCommand(sc.level, self.before, self.grid.copy(), self.box, on_change))
            self.panel.set_level(sc.level, sc.assets)
        self.before = self.grid = self.box = None

    # --- Texture list --------------------------------------------------------------
    def _change(self, text: str, names: list[str], mapping: list[int], row: int) -> None:
        """New list ``names``; ``mapping[i]`` = new index of the former texture i."""
        sc = self.get_scene()
        old = sc.level.ground_textures
        grid = groundedit.remap(sc.level.elevations, len(old), mapping, len(names))

        def on_change(r: int) -> None:
            sc.render_ground()
            self.panel.set_level(sc.level, sc.assets, r)

        self.push(TextureListCommand(text, sc.level, (names, grid), row, self.panel.texture(), on_change))

    def add_textures(self) -> None:
        sc = self.get_scene()
        if sc is None:
            return
        old = sc.level.ground_textures
        dlg = TexturePicker(self.panel, sc.assets, old)
        if not dlg.exec() or not (new := dlg.chosen()):
            return
        # append at the end: that way no existing transitions run across the new textures and the
        # ground stays unchanged [verified with the renderer, 01 Main]
        self._change(translate('groundtool', 'Add texture: {names}').format(names=', '.join(new)), old + new,
                     list(range(len(old))), len(old))

    def remove_texture(self) -> None:
        sc = self.get_scene()
        i = self.panel.texture()
        if sc is None or i < 0:
            return
        old = sc.level.ground_textures
        if len(old) < 2:
            self.message(translate('groundtool', 'The level needs at least one ground texture'))
            return
        rest = old[:i] + old[i + 1:]
        target = i - 1 if i > 0 else 0         # Index in rest
        n = int(groundedit.usage(sc.level.elevations, len(old))[i])
        if n:
            choice, ok = QInputDialog.getItem(
                self.panel, translate('groundtool', 'Remove texture'),
                translate('groundtool', '“{name}” lies on %n grid point(s).\nReplace it with which texture?', None,
                          n).format(name=old[i]),
                rest, target, False)
            if not ok:
                return
            target = rest.index(choice)
        mapping = [k if k < i else k - 1 for k in range(len(old))]
        mapping[i] = target
        self._change(translate('groundtool', 'Remove texture: {name}').format(name=old[i]), rest, mapping,
                     min(i, len(rest) - 1))

    def move_texture(self, d: int) -> None:
        sc = self.get_scene()
        i = self.panel.texture()
        if sc is None or i < 0:
            return
        old = sc.level.ground_textures
        j = i + d
        if not 0 <= j < len(old):
            return
        names = list(old)
        names[i], names[j] = names[j], names[i]
        mapping = list(range(len(old)))
        mapping[i], mapping[j] = j, i
        self._change(translate('groundtool', 'Move texture: {name}').format(name=old[i]), names, mapping, j)
