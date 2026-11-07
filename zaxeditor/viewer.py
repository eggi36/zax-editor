"""Model viewer: look at any model, image sequence, font or image of the game data as the game draws it.

Start: ``python -m zaxeditor.viewer [path]`` (a model name as in the levels, a data path such as
``Cache/Resources/Main Menu/Fire Left.seq16``, or a file on disk), or from the editor (Window → Model viewer,
or "Open in the model viewer" in the model browser's context menu). Reads the game data the editor uses
(the same settings); writes only where the user exports to, never into the game data.

Drawing, layers, frames and triggers come from ``zaxtools.preview``; this module is the window: the browser
(``viewerbrowser``), the view with zoom and overlays, playback at the sequence's frames per second, the
sequence and layer lists, the read-only properties with the exe's help texts (``props.PropertyPanel``), frame
details with the palette of 8-bit images, sounds and frame triggers, and the exports.
"""
from __future__ import annotations

import math
import os
import sys
import zipfile
from pathlib import Path

import numpy as np
from PySide6.QtCore import QElapsedTimer, QPointF, QRectF, QSettings, QStandardPaths, QUrl, Qt, QTimer, Signal
from PySide6.QtGui import QAction, QActionGroup, QBrush, QColor, QKeySequence, QPainter, QPen, QPolygonF
from PySide6.QtWidgets import (QApplication, QCheckBox, QComboBox, QDockWidget, QFileDialog, QGridLayout,
                               QHBoxLayout, QLabel, QListWidget, QListWidgetItem, QMainWindow, QSlider,
                               QSpinBox, QSplitter, QToolButton, QTreeWidget, QTreeWidgetItem,
                               QVBoxLayout, QWidget)

from zaxtools import font as fontmod
from zaxtools import mdl, preview
from zaxtools import textformat as tf
from zaxtools.catalog import Catalog
from zaxtools.datasource import DataSource
from zaxtools.exeschema import Schema, find_exe
from zaxtools.modelhead import DecodeError, ModelHead
from zaxtools.render import Assets

from . import i18n, msgbox
from .i18n import QT_TRANSLATE_NOOP, translate
from .icons import app_icon, follow_theme, set_icon, style_splitter
from .props import PropertyPanel
from .viewerbrowser import ItemBrowser, to_qimage

APP = 'Zax-Editor'                  # the editor's settings (game data, Zax.exe, language pack)
LAYOUT_VERSION = 1
TICK_MS = 15
ZOOMS = (0.25, 0.5, 1, 1.5, 2, 3, 4, 6, 8, 12, 16, 24, 32)
BG_TEXTS = {'checker': QT_TRANSLATE_NOOP('viewer', 'Checkerboard'), 'black': QT_TRANSLATE_NOOP('viewer', 'Black'),
            'grey': QT_TRANSLATE_NOOP('viewer', 'Dark grey'), 'texture': QT_TRANSLATE_NOOP('viewer', 'Ground texture')}
OVERLAYS = {'hotspot': QT_TRANSLATE_NOOP('viewer', 'Hot spot'),
            'frames': QT_TRANSLATE_NOOP('viewer', 'Frame rectangles'),
            'sorting': QT_TRANSLATE_NOOP('viewer', 'Sorting Y and cutting lines'),
            'bounds': QT_TRANSLATE_NOOP('viewer', 'Bounds Poly (collision)'),
            'box': QT_TRANSLATE_NOOP('viewer', 'Frame box of the sequence file')}
DEFAULT_OVERLAYS = {'hotspot'}
ORDER_TEXTS = {0: QT_TRANSLATE_NOOP('viewer', 'shadow'), 1: QT_TRANSLATE_NOOP('viewer', 'ground'),
               2: QT_TRANSLATE_NOOP('viewer', 'base'), 3: QT_TRANSLATE_NOOP('viewer', 'on top')}
HOT = QColor(255, 60, 60)
FRAME_COLORS = (QColor(255, 220, 0), QColor(80, 220, 255), QColor(120, 255, 120), QColor(255, 140, 255))
SORT_COLOR = QColor(255, 80, 200)
CUT_COLOR = QColor(0, 230, 255)
BOUNDS_COLOR = QColor(255, 160, 0)
BOX_COLOR = QColor(200, 200, 200)
GREY = QColor(140, 140, 140)
DEFAULT_OUT = Path(__file__).resolve().parents[2] / 'editor-output'   # the workspace's (next to the repositories; was ~/Documents/Zax-Ausgabe until 2026-11-02)


# ---- The view ------------------------------------------------------------------------------------------------

class Cell:
    """One drawn object in the view: the image, the box it covers (object coordinates) and what was drawn."""

    def __init__(self, image, alpha, box, drawn, label: str = ''):
        self.image, self.alpha, self.box, self.drawn, self.label = image, alpha, box, drawn, label
        self.qimage = to_qimage(image)
        self.qalpha = to_qimage(np.repeat(alpha[..., None], 3, axis=2)) if alpha is not None else None


class Canvas(QWidget):
    """The objects at a zoom factor (nearest neighbour), one cell or a grid of rotations, with overlays.
    Mouse wheel zooms under the pointer, dragging pans, a double click fits the view."""
    hover = Signal(str)

    GAP = 12

    def __init__(self):
        super().__init__()
        self.cells: list[Cell] = []
        self.columns = 1
        self.zoom = 4.0
        self.pan = QPointF(0, 0)
        self.overlays: set[str] = set(DEFAULT_OVERLAYS)
        self.alpha_view = False
        self.extras = {}              # 'sorting_y', 'bounds' (polygon), 'seq_box'
        self._drag = None
        self._fit_pending = True
        self.setMouseTracking(True)
        self.setMinimumSize(300, 240)
        self.setAutoFillBackground(True)
        pal = self.palette()
        pal.setColor(self.backgroundRole(), QColor(24, 24, 24))
        self.setPalette(pal)

    def set_cells(self, cells: list[Cell], columns: int, refit: bool = False) -> None:
        self.cells, self.columns = cells, max(1, columns)
        if refit:
            self._fit_pending = True
        self.update()

    # layout: cells in a grid, every cell as large as the largest
    def _cell_size(self) -> tuple[int, int]:
        if not self.cells:
            return 1, 1
        return (max(c.box[2] - c.box[0] for c in self.cells), max(c.box[3] - c.box[1] for c in self.cells))

    def _content_size(self) -> tuple[float, float]:
        cw, ch = self._cell_size()
        rows = (len(self.cells) + self.columns - 1) // self.columns
        cols = min(self.columns, len(self.cells)) or 1
        return cols * cw * self.zoom + (cols - 1) * self.GAP, rows * ch * self.zoom + (rows - 1) * self.GAP

    def _cell_origin(self, k: int) -> QPointF:
        cw, ch = self._cell_size()
        w, h = self._content_size()
        x0 = (self.width() - w) / 2 + self.pan.x()
        y0 = (self.height() - h) / 2 + self.pan.y()
        return QPointF(x0 + (k % self.columns) * (cw * self.zoom + self.GAP),
                       y0 + (k // self.columns) * (ch * self.zoom + self.GAP))

    def fit(self) -> None:
        if not self.cells:
            return
        cw, ch = self._cell_size()
        rows = (len(self.cells) + self.columns - 1) // self.columns
        cols = min(self.columns, len(self.cells))
        avail_w = self.width() - 24 - (cols - 1) * self.GAP
        avail_h = self.height() - 24 - (rows - 1) * self.GAP
        z = min(avail_w / (cols * cw), avail_h / (rows * ch))
        fitting = [f for f in ZOOMS if f <= z]
        self.zoom = fitting[-1] if fitting else ZOOMS[0]
        self.pan = QPointF(0, 0)
        self.update()

    def set_zoom(self, z: float, at: QPointF | None = None) -> None:
        z = max(ZOOMS[0], min(ZOOMS[-1], z))
        if at is not None and self.zoom:
            c = QPointF(self.width() / 2, self.height() / 2) + self.pan
            self.pan += (at - c) * (1 - z / self.zoom)
        self.zoom = z
        self.update()

    def step_zoom(self, d: int, at: QPointF | None = None) -> None:
        i = min(range(len(ZOOMS)), key=lambda k: abs(ZOOMS[k] - self.zoom))
        self.set_zoom(ZOOMS[max(0, min(len(ZOOMS) - 1, i + d))], at)

    def resizeEvent(self, e):
        super().resizeEvent(e)
        if self._fit_pending and self.cells:
            self._fit_pending = False
            self.fit()

    def paintEvent(self, e):
        if self._fit_pending and self.cells and self.isVisible():
            self._fit_pending = False
            self.fit()
        p = QPainter(self)
        p.setRenderHint(QPainter.SmoothPixmapTransform, False)
        for k, c in enumerate(self.cells):
            o = self._cell_origin(k)
            w, h = c.box[2] - c.box[0], c.box[3] - c.box[1]
            target = QRectF(o.x(), o.y(), w * self.zoom, h * self.zoom)
            p.drawImage(target, c.qalpha if self.alpha_view and c.qalpha is not None else c.qimage)
            self._paint_overlays(p, c, o)
            if c.label:
                p.setPen(GREY)
                p.drawText(QPointF(o.x() + 2, o.y() - 3), c.label)
        if not self.cells:
            p.setPen(GREY)
            p.drawText(self.rect(), Qt.AlignCenter, translate('viewer', 'Choose a model, image sequence, font or '
                                                                        'image on the left.'))
        p.end()

    def _to_screen(self, c: Cell, o: QPointF, x: float, y: float) -> QPointF:
        return QPointF(o.x() + (x - c.box[0]) * self.zoom, o.y() + (y - c.box[1]) * self.zoom)

    def _paint_overlays(self, p: QPainter, c: Cell, o: QPointF) -> None:
        x0, y0, x1, y1 = c.box
        if 'frames' in self.overlays:
            for i, d in enumerate(c.drawn):
                pen = QPen(FRAME_COLORS[i % len(FRAME_COLORS)], 1, Qt.DashLine)
                p.setPen(pen)
                p.setBrush(Qt.NoBrush)
                a = self._to_screen(c, o, -d.frame.hot_x, -d.frame.hot_y)
                p.drawRect(QRectF(a.x(), a.y(), d.frame.width * self.zoom - 1, d.frame.height * self.zoom - 1))
        if 'box' in self.overlays and self.extras.get('seq_box'):
            bx0, by0, bx1, by1 = self.extras['seq_box']
            if bx0 <= bx1 and by0 <= by1:
                p.setPen(QPen(BOX_COLOR, 1, Qt.DotLine))
                a, b = self._to_screen(c, o, bx0, by0), self._to_screen(c, o, bx1, by1)
                p.drawRect(QRectF(a, b))
        if 'sorting' in self.overlays:
            sy = self.extras.get('sorting_y', 0)
            for d in c.drawn:
                for off, lo, hi in d.layer.seq.strips():
                    a = self._to_screen(c, o, max(lo, x0), sy + off)
                    b = self._to_screen(c, o, min(hi, x1), sy + off)
                    p.setPen(QPen(SORT_COLOR, 1))
                    p.drawLine(a, b)
                for cut, _ in d.layer.seq.cuts:
                    p.setPen(QPen(CUT_COLOR, 1, Qt.DashLine))
                    p.drawLine(self._to_screen(c, o, cut, y0), self._to_screen(c, o, cut, y1))
        if 'bounds' in self.overlays and self.extras.get('bounds'):
            poly = QPolygonF([self._to_screen(c, o, x, y) for x, y in self.extras['bounds']])
            p.setPen(QPen(BOUNDS_COLOR, 1.5))
            p.setBrush(Qt.NoBrush)
            p.drawPolygon(poly)
        if 'hotspot' in self.overlays:
            h = self._to_screen(c, o, 0, 0)
            r = max(4.0, self.zoom * 2)
            p.setPen(QPen(HOT, 1.5))
            p.drawLine(QPointF(h.x() - r, h.y()), QPointF(h.x() + r, h.y()))
            p.drawLine(QPointF(h.x(), h.y() - r), QPointF(h.x(), h.y() + r))

    # --- Mouse -----------------------------------------------------------------------------------------
    def wheelEvent(self, e):
        d = e.angleDelta().y()
        if d:
            self.step_zoom(1 if d > 0 else -1, e.position())

    def mousePressEvent(self, e):
        self._drag = (e.position(), QPointF(self.pan))

    def mouseMoveEvent(self, e):
        if self._drag is not None and e.buttons():
            self.pan = self._drag[1] + (e.position() - self._drag[0])
            self.update()
        self.hover.emit(self._describe(e.position()))

    def mouseReleaseEvent(self, e):
        self._drag = None

    def mouseDoubleClickEvent(self, e):
        self.fit()

    def _describe(self, pos: QPointF) -> str:
        for k, c in enumerate(self.cells):
            o = self._cell_origin(k)
            x = math.floor((pos.x() - o.x()) / self.zoom) + c.box[0]
            y = math.floor((pos.y() - o.y()) / self.zoom) + c.box[1]
            if c.box[0] <= x < c.box[2] and c.box[1] <= y < c.box[3]:
                r, g, b = (int(v) for v in c.image[y - c.box[1], x - c.box[0]])
                return translate('viewer', 'x {x}, y {y} (from the hot spot) · RGB {r}, {g}, {b}').format(
                    x=x, y=y, r=r, g=g, b=b) + (translate('viewer', ' · alpha {a}').format(
                        a=int(c.alpha[y - c.box[1], x - c.box[0]])) if c.alpha is not None else '')
        return ''


# ---- Read-only properties ------------------------------------------------------------------------------------

class ReadOnlyProps(PropertyPanel):
    """The model header and the sequence as a property tree with the exe's help texts, nothing editable."""

    def __init__(self):
        super().__init__()
        self.refs_in.parentWidget().hide()
        self.title.setText(translate('viewer', 'Nothing open'))

    def entry_editable(self, cls, entry) -> bool:
        return False

    def show_nodes(self, title: str, nodes: list[tuple[tf.Node, bool]]) -> None:
        """``nodes``: (node, expanded) shown at the top level, each with the help texts of its class."""
        self._filling = True
        self.tree.clear()
        self.title.setText(title)
        for node, expanded in nodes:
            it = self._node_item(self.tree.invisibleRootItem(), node, None)
            it.setExpanded(expanded)
        self._filling = False


# ---- Palette -------------------------------------------------------------------------------------------------

class PaletteView(QWidget):
    """The 256 colours of the GamePalette, the indices the current frame uses outlined."""
    CELL = 13

    def __init__(self):
        super().__init__()
        self.colors: np.ndarray | None = None
        self.used: set[int] = set()
        self.setFixedSize(16 * self.CELL + 1, 16 * self.CELL + 1)
        self.setMouseTracking(True)

    def set_state(self, colors, used) -> None:
        self.colors, self.used = colors, set(used)
        self.update()

    def paintEvent(self, e):
        if self.colors is None:
            return
        p = QPainter(self)
        for i in range(256):
            x, y = (i % 16) * self.CELL, (i // 16) * self.CELL
            r, g, b = (int(v) for v in self.colors[i])
            p.fillRect(x, y, self.CELL, self.CELL, QColor(r, g, b))
            if self.used and i not in self.used:
                p.fillRect(x, y, self.CELL, self.CELL, QColor(0, 0, 0, 170))
        p.setPen(QPen(QColor(255, 255, 255), 1))
        for i in self.used:
            p.drawRect((i % 16) * self.CELL, (i // 16) * self.CELL, self.CELL - 1, self.CELL - 1)
        p.end()

    def mouseMoveEvent(self, e):
        if self.colors is None:
            return
        i = int(e.position().y() // self.CELL) * 16 + int(e.position().x() // self.CELL)
        if 0 <= i < 256:
            r, g, b = (int(v) for v in self.colors[i])
            self.setToolTip(translate('viewer', 'Index {i}: RGB {r}, {g}, {b}').format(i=i, r=r, g=g, b=b)
                            + (translate('viewer', ' (used by this frame)') if i in self.used else ''))


# ---- The window ----------------------------------------------------------------------------------------------

class ViewerWindow(QMainWindow):
    def __init__(self, ds: DataSource | None = None, catalog: Catalog | None = None, schema: Schema | None = None,
                 cache_dir: Path | None = None, exe: Path | None = None):
        super().__init__()
        self.settings = QSettings(APP, APP)
        self.ds = ds
        self.catalog = catalog
        self.schema = schema
        self.exe = exe
        self.cache = cache_dir or Path(QStandardPaths.writableLocation(QStandardPaths.GenericCacheLocation)) / APP
        self.assets: Assets | None = None
        self.pal: np.ndarray | None = None
        self.head: ModelHead | None = None
        self.items: list[preview.Item] = []
        self.item: preview.Item | None = None
        self.view: preview.Viewable | None = None
        self.bpp = 16
        self.model_obj = None                    # modelhead.Obj of the open model's CModel
        self.triggers: dict[int, list | None] = {}   # id(sequence) -> frame triggers
        self.seq: mdl.Sequence | None = None     # the active (base) sequence
        self.layers: list[preview.Layer] = []
        self.playing = False
        self.t = 0.0
        self.index = 0
        self._last_index = None
        self._clock = QElapsedTimer()
        self._timer = QTimer(self)
        self._timer.setInterval(TICK_MS)
        self._timer.timeout.connect(self._tick)
        self._player = None
        self._key = None
        self.source = ''

        self.canvas = Canvas()
        self.canvas.hover.connect(lambda t: self.statusBar().showMessage(t))
        self.canvas.overlays = set(self._setting_list('viewer/overlays', DEFAULT_OVERLAYS))
        central = QWidget()
        cl = QVBoxLayout(central)
        cl.setContentsMargins(0, 0, 0, 0)
        cl.setSpacing(0)
        cl.addWidget(self._build_controls())
        cl.addWidget(self.canvas, 1)
        self.setCentralWidget(central)

        self.browser = ItemBrowser()
        self.browser.open_requested.connect(self.open_item)
        self.browser.default_sequence = self._default_sequence
        self._dock('browser', translate('viewer', 'Browser'), self.browser, Qt.LeftDockWidgetArea)
        self._dock('sequences', translate('viewer', 'Sequences and layers'), self._build_sequences(),
                   Qt.RightDockWidgetArea)
        self.props = ReadOnlyProps()
        self._dock('props', translate('viewer', 'Properties'), self.props, Qt.RightDockWidgetArea)
        self.tabifyDockWidget(self.findChild(QDockWidget, 'sequences'), self.findChild(QDockWidget, 'props'))
        self.findChild(QDockWidget, 'sequences').raise_()
        self._dock('frame', translate('viewer', 'Frame'), self._build_frame_panel(), Qt.RightDockWidgetArea)
        self._dock('sounds', translate('viewer', 'Sounds and frame triggers'), self._build_sounds(),
                   Qt.BottomDockWidgetArea)
        self.tabifyDockWidget(self.findChild(QDockWidget, 'frame'), self.findChild(QDockWidget, 'sounds'))
        self.findChild(QDockWidget, 'frame').raise_()
        self._build_menus()
        self.resize(1400, 900)
        self.resizeDocks([self.findChild(QDockWidget, 'browser'), self.findChild(QDockWidget, 'sequences')],
                         [340, 380], Qt.Horizontal)
        self.default_layout = self.saveState(LAYOUT_VERSION)
        geo, state = self.settings.value('viewer/geometry'), self.settings.value('viewer/window_state')
        if geo is not None:
            self.restoreGeometry(geo)
        if state is not None:
            self.restoreState(state, LAYOUT_VERSION)
        self._update_title()
        if self.ds is not None:
            self._data_ready()

    # --- Construction -------------------------------------------------------------------------------------
    def _dock(self, name: str, title: str, widget: QWidget, area) -> QDockWidget:
        d = QDockWidget(title, self)
        d.setObjectName(name)
        d.setWidget(widget)
        self.addDockWidget(area, d)
        return d

    def _setting_list(self, key: str, default) -> list[str]:
        v = self.settings.value(key)
        if v is None:
            return list(default)
        return [v] if isinstance(v, str) and v else list(v) if isinstance(v, (list, tuple)) else []

    def _tool(self, name: str, tip: str, slot, text: str = '') -> QToolButton:
        b = QToolButton()
        if name:
            set_icon(b, name)
        else:
            b.setText(text)
        b.setToolTip(tip)
        b.setAutoRaise(True)
        b.clicked.connect(slot)
        return b

    def _build_controls(self) -> QWidget:
        bar = QWidget()
        g = QGridLayout(bar)
        g.setContentsMargins(6, 4, 6, 4)
        g.setHorizontalSpacing(6)
        row = QHBoxLayout()
        self.play_btn = self._tool('', translate('viewer', 'Play / pause (Space)'), self.toggle_play, '▶')
        row.addWidget(self._tool('', translate('viewer', 'Previous frame (,)'), lambda: self.step(-1), '⏮'))
        row.addWidget(self.play_btn)
        row.addWidget(self._tool('', translate('viewer', 'Next frame (.)'), lambda: self.step(1), '⏭'))
        self.slider = QSlider(Qt.Horizontal)
        self.slider.setMinimumWidth(160)
        self.slider.valueChanged.connect(self._slider_moved)
        row.addWidget(self.slider, 1)
        self.frame_label = QLabel('')
        self.frame_label.setMinimumWidth(230)
        row.addWidget(self.frame_label)
        g.addLayout(row, 0, 0, 1, 2)
        row2 = QHBoxLayout()
        row2.addWidget(QLabel(translate('viewer', 'Facing')))
        self.angle = QSpinBox()
        self.angle.setRange(-1, 360)
        self.angle.setSuffix('°')
        self.angle.setWrapping(False)
        self.angle.setToolTip(translate('viewer', 'Facing angle as “Start FacingAngle” (0° to the right, 90° towards '
                                                  'the viewer); each layer shows the rotation the game picks for it '
                                                  '(mdl.rotation_index).'))
        self.angle.valueChanged.connect(self._angle_changed)
        row2.addWidget(self.angle)
        row2.addWidget(self._tool('', translate('viewer', 'Previous rotation'), lambda: self.step_rotation(-1), '◀'))
        row2.addWidget(self._tool('', translate('viewer', 'Next rotation'), lambda: self.step_rotation(1), '▶'))
        self.rot_label = QLabel('')
        row2.addWidget(self.rot_label)
        self.all_rot = QCheckBox(translate('viewer', 'All rotations'))
        self.all_rot.toggled.connect(lambda _: self._recompose(refit=True))
        row2.addWidget(self.all_rot)
        row2.addSpacing(12)
        row2.addWidget(QLabel(translate('viewer', 'Background')))
        self.bg = QComboBox()
        for k in preview.BACKGROUNDS:
            self.bg.addItem(translate('viewer', BG_TEXTS[k]), k)
        self.bg.setCurrentIndex(max(0, self.bg.findData(self.settings.value('viewer/background', 'checker'))))
        self.bg.currentIndexChanged.connect(self._bg_changed)
        row2.addWidget(self.bg)
        self.texture = QComboBox()
        self.texture.setMinimumContentsLength(14)
        self.texture.currentIndexChanged.connect(lambda _: self._bg_changed())
        row2.addWidget(self.texture)
        self.alpha_box = QCheckBox(translate('viewer', 'Alpha'))
        self.alpha_box.setToolTip(translate('viewer', 'Show the opacity of the drawn frames as grey (white = opaque, '
                                                      'grey = soft edge) instead of the image.'))
        self.alpha_box.toggled.connect(self._alpha_toggled)
        row2.addWidget(self.alpha_box)
        row2.addStretch(1)
        row2.addWidget(self._tool('zoom_out', translate('viewer', 'Zoom out (−)'), lambda: self.canvas.step_zoom(-1)))
        self.zoom_label = QLabel('')
        row2.addWidget(self.zoom_label)
        row2.addWidget(self._tool('zoom_in', translate('viewer', 'Zoom in (+)'), lambda: self.canvas.step_zoom(1)))
        row2.addWidget(self._tool('fit', translate('viewer', 'Fit (0); 1:1 with 1'), self.canvas.fit))
        g.addLayout(row2, 1, 0, 1, 2)
        self._zoom_timer = QTimer(self)
        self._zoom_timer.timeout.connect(lambda: self.zoom_label.setText(f'{self.canvas.zoom:g}×'))
        self._zoom_timer.start(200)
        return bar

    def _build_sequences(self) -> QWidget:
        w = QWidget()
        lay = QVBoxLayout(w)
        lay.setContentsMargins(4, 4, 4, 4)
        self.seq_tree = QTreeWidget()
        self.seq_tree.setRootIsDecorated(False)
        self.seq_tree.setHeaderLabels([translate('viewer', 'Sequence'), translate('viewer', 'Frames'),
                                       translate('viewer', 'Rot.'), translate('viewer', 'fps'),
                                       translate('viewer', 'Render mode')])
        self.seq_tree.setColumnWidth(0, 170)
        self.seq_tree.setColumnWidth(1, 50)
        self.seq_tree.setColumnWidth(2, 36)
        self.seq_tree.setColumnWidth(3, 40)
        self.seq_tree.currentItemChanged.connect(self._sequence_chosen)
        self.layer_list = QListWidget()
        self.layer_list.itemChanged.connect(self._layer_toggled)
        self.layer_note = QLabel('')
        self.layer_note.setWordWrap(True)
        self.layer_note.setStyleSheet('color: gray')
        split = QSplitter(Qt.Vertical)
        style_splitter(split)
        split.addWidget(self.seq_tree)
        lw = QWidget()
        ll = QVBoxLayout(lw)
        ll.setContentsMargins(0, 0, 0, 0)
        ll.addWidget(QLabel(translate('viewer', 'Layers of the active sequence (drawing order):')))
        ll.addWidget(self.layer_list, 1)
        ll.addWidget(self.layer_note)
        split.addWidget(lw)
        split.setStretchFactor(0, 3)
        split.setStretchFactor(1, 2)
        lay.addWidget(split)
        return w

    def _build_frame_panel(self) -> QWidget:
        w = QWidget()
        lay = QVBoxLayout(w)
        lay.setContentsMargins(4, 4, 4, 4)
        self.frame_info = QLabel('')
        self.frame_info.setWordWrap(True)
        self.frame_info.setTextInteractionFlags(Qt.TextSelectableByMouse)
        self.frame_info.setAlignment(Qt.AlignTop | Qt.AlignLeft)
        lay.addWidget(self.frame_info)
        self.palette_label = QLabel(translate('viewer', 'Palette (Palettes/GamePalette.pal):'))
        lay.addWidget(self.palette_label)
        self.palette_view = PaletteView()
        lay.addWidget(self.palette_view)
        lay.addStretch(1)
        return w

    def _build_sounds(self) -> QWidget:
        w = QWidget()
        lay = QVBoxLayout(w)
        lay.setContentsMargins(4, 4, 4, 4)
        self.sound_tree = QTreeWidget()
        self.sound_tree.setRootIsDecorated(False)
        self.sound_tree.setHeaderLabels([translate('viewer', 'Where'), translate('viewer', 'Action'),
                                         translate('viewer', 'Sound'), translate('viewer', 'File')])
        self.sound_tree.setColumnWidth(0, 200)
        self.sound_tree.setColumnWidth(1, 200)
        self.sound_tree.setColumnWidth(2, 260)
        self.sound_tree.itemDoubleClicked.connect(self._sound_clicked)
        lay.addWidget(self.sound_tree)
        self.sound_note = QLabel('')
        self.sound_note.setStyleSheet('color: gray')
        self.sound_note.setWordWrap(True)
        lay.addWidget(self.sound_note)
        row = QHBoxLayout()
        self.play_sounds = QCheckBox(translate('viewer', 'Play trigger sounds during playback'))
        self.play_sounds.setChecked(self.settings.value('viewer/play_sounds', 'false') == 'true')
        self.play_sounds.toggled.connect(lambda on: self.settings.setValue('viewer/play_sounds', 'true' if on else 'false'))
        row.addWidget(self.play_sounds)
        row.addStretch(1)
        lay.addLayout(row)
        return w

    def _build_menus(self) -> None:
        def act(menu, text, slot, key=None, checkable=False, checked=False):
            a = QAction(text, self)
            a.setMenuRole(QAction.NoRole)       # no guessing from the text on macOS
            if key:
                a.setShortcut(QKeySequence(key))
            a.setCheckable(checkable)
            if checkable:
                a.setChecked(checked)
                a.toggled.connect(slot)
            else:
                a.triggered.connect(slot)
            menu.addAction(a)
            return a
        m = self.menuBar().addMenu(translate('viewer', 'File'))
        act(m, translate('viewer', 'Open file …'), self.open_file_dialog, QKeySequence.Open)
        act(m, translate('viewer', 'Search in the browser'), self._focus_search, QKeySequence.Find)
        m.addSeparator()
        act(m, translate('viewer', 'Choose game data (folder or Data.dat) …'), self.choose_data)
        m.addSeparator()
        act(m, translate('viewer', 'Close window'), self.close, QKeySequence.Close)
        m = self.menuBar().addMenu(translate('viewer', 'View'))
        act(m, translate('viewer', 'Play / pause'), self.toggle_play, 'Space')
        act(m, translate('viewer', 'Previous frame'), lambda: self.step(-1), ',')
        act(m, translate('viewer', 'Next frame'), lambda: self.step(1), '.')
        act(m, translate('viewer', 'Previous rotation'), lambda: self.step_rotation(-1), '[')
        act(m, translate('viewer', 'Next rotation'), lambda: self.step_rotation(1), ']')
        m.addSeparator()
        act(m, translate('viewer', 'Zoom in'), lambda: self.canvas.step_zoom(1), '+')
        act(m, translate('viewer', 'Zoom out'), lambda: self.canvas.step_zoom(-1), '-')
        act(m, translate('viewer', 'Fit'), self.canvas.fit, '0')
        act(m, translate('viewer', 'Actual size (1:1)'), lambda: self.canvas.set_zoom(1), '1')
        m.addSeparator()
        for key, text in OVERLAYS.items():
            act(m, translate('viewer', text), lambda on, k=key: self._set_overlay(k, on), checkable=True,
                checked=key in self.canvas.overlays)
        m.addSeparator()
        self.depth_group = QActionGroup(self)
        self.depth_actions = {}
        for bpp, text in ((16, translate('viewer', '16 bit (.mdl16, .seq16, .frm16)')),
                          (8, translate('viewer', '8 bit (.mdl, .seq, .frm; 256 colours)'))):
            a = act(m, text, lambda on, b=bpp: on and self._set_depth(b), checkable=True, checked=bpp == 16)
            self.depth_group.addAction(a)
            self.depth_actions[bpp] = a
        m = self.menuBar().addMenu(translate('viewer', 'Export'))
        act(m, translate('viewer', 'View as PNG …'), self.export_view, 'Ctrl+E')
        act(m, translate('viewer', 'Sheet of the sequence as in the view (all rotations × frames) …'),
            self.export_composed_sheet)
        act(m, translate('viewer', 'Frames of the sequence as an RGBA sprite sheet …'), self.export_sequence_sheet)
        act(m, translate('viewer', 'Whole model as an RGBA sprite sheet …'), self.export_model_sheet)
        act(m, translate('viewer', 'Current frame of the sequence as an RGBA PNG …'), self.export_frame_png)
        m.addSeparator()
        act(m, translate('viewer', 'Rotation as an image sequence (.seq16/.seq, the game\'s encoder) …'),
            self.export_seq_file)
        act(m, translate('viewer', 'Current frame as an image (.frm16/.frm, the game\'s encoder) …'),
            self.export_frm_file)
        m = self.menuBar().addMenu(translate('viewer', 'Window'))
        for name in ('browser', 'sequences', 'props', 'frame', 'sounds'):
            d = self.findChild(QDockWidget, name)
            m.addAction(d.toggleViewAction())
        m.addSeparator()
        act(m, translate('viewer', 'Default layout'), lambda: self.restoreState(self.default_layout, LAYOUT_VERSION))

    # --- Game data ----------------------------------------------------------------------------------------
    def data_source(self) -> DataSource | None:
        if self.ds is None:
            path = self.settings.value('data') or os.environ.get('ZAX_DATA')
            if not path or not Path(path).exists() or not self._set_data(path):
                return None
        return self.ds

    def choose_data(self) -> None:
        cur = self.settings.value('data') or ''
        path, _ = QFileDialog.getOpenFileName(self, translate('viewer', 'Choose the Data.dat of the game data (cancel '
                                                                        'for a folder “Data”)'),
                                              str(Path(cur).parent) if cur else '',
                                              translate('viewer', 'Game data (*.dat *.DAT *.zip *.ZIP);;All files (*)'))
        if not path:
            path = QFileDialog.getExistingDirectory(self, translate('viewer', 'Choose the folder “Data” of the game '
                                                                              'data'))
        if path:
            self._set_data(path)

    def _set_data(self, path: str) -> bool:
        pack = self.settings.value('language_pack') or None
        if pack and not Path(pack).is_file():
            pack = None
        QApplication.setOverrideCursor(Qt.WaitCursor)
        try:
            ds = DataSource(path, pack)
        except (OSError, ValueError, zipfile.BadZipFile) as e:
            QApplication.restoreOverrideCursor()
            msgbox.warning(self, APP, translate('viewer', 'Game data not readable:\n{path}\n\n{error}').format(
                path=path, error=e))
            return False
        QApplication.restoreOverrideCursor()
        if not ds.list(preview.MODEL_DIR, '.mdl16'):
            msgbox.warning(self, APP, translate('viewer', 'No models found in:\n{path}').format(path=path))
            return False
        self.ds = ds
        self.settings.setValue('data', path)
        exe = self.settings.value('exe')
        self.exe = Path(exe) if exe and Path(exe).is_file() else find_exe(ds)
        self.catalog = None
        self.schema = None
        self._data_ready()
        return True

    def _data_ready(self) -> None:
        """Catalogue (default sequences, Sorting Y), exe schema (model headers, help texts), palette, items."""
        QApplication.setOverrideCursor(Qt.WaitCursor)
        try:
            if self.catalog is None:
                self.catalog = Catalog.open(self.ds, self.cache, exe=self.exe)
            if self.schema is None and self.exe is not None:
                try:
                    self.schema = Schema.open(self.exe, self.ds, self.cache)
                except Exception:               # noqa: BLE001 - another exe version, missing capstone ...
                    self.schema = None
            self.head = ModelHead(self.schema) if self.schema is not None else None
            self.props.schema = self.schema
            self.props.ds = self.ds
            self.assets = Assets(self.ds)
            try:
                self.pal = preview.palette(self.ds)
            except OSError:
                self.pal = None
            self.items = preview.list_items(self.ds)
            self.browser.set_data(self.ds, self.items, self.cache, self.catalog.signature, self.pal)
            self.texture.blockSignals(True)
            self.texture.clear()
            for rel in self.ds.list('Cache/Textures/', '.frm16'):
                name = rel[len('Cache/Textures/'):-len('.frm16')]
                self.texture.addItem(name, name)
            self.texture.setCurrentIndex(max(0, self.texture.findData(self.settings.value('viewer/texture', ''))))
            self.texture.blockSignals(False)
            self.texture.setVisible(self.bg.currentData() == 'texture')
        finally:
            QApplication.restoreOverrideCursor()

    def _default_sequence(self, item: preview.Item) -> str | None:
        if item.kind != 'model' or self.catalog is None:
            return None
        info = self.catalog.models.get(item.name)
        return info.default_sequence if info else None

    # --- Opening ------------------------------------------------------------------------------------------
    def open_path(self, arg: str) -> bool:
        """A file on disk, a data path (with or without extension) or a model name as in the levels."""
        p = Path(arg)
        if p.is_file():
            return self.open_file(p)
        if self.data_source() is None:
            return False
        a = arg.replace('\\', '/')
        kind = preview.kind_of(a)
        key = a.rsplit('.', 1)[0] if kind else a
        item = (self.browser.find(kind, key) or self.browser.find(None, preview.MODEL_DIR + key)
                or self.browser.find(None, 'Cache/' + key))
        if item is None:
            msgbox.warning(self, APP, translate('viewer', 'Not found in the game data: {path}').format(path=arg))
            return False
        if kind:
            self._set_depth_action(8 if not a.lower().endswith('16') else 16)
        self.open_item(item)
        self.browser.select(item)
        return True

    def open_file_dialog(self) -> None:
        path, _ = QFileDialog.getOpenFileName(self, translate('viewer', 'Open a model, sequence or image'), '',
                                              translate('viewer', 'Zax graphics (*.mdl16 *.mdl *.seq16 *.seq *.frm16 '
                                                                  '*.frm);;All files (*)'))
        if path:
            self.open_file(Path(path))

    def open_file(self, path: Path) -> bool:
        kind = preview.kind_of(path.name)
        if path.parent.name.lower() == 'fonts' and kind == 'sequence':
            kind = 'font'
        if kind is None:
            msgbox.warning(self, APP, translate('viewer', 'Not a model, image sequence or image: {path}').format(
                path=path))
            return False
        data = path.read_bytes()
        if kind == 'sequence' and data[:8] == fontmod.TAG:
            kind = 'font'
        self.item = None
        return self._show(data, kind, path.stem, path.name, item=None)

    def open_item(self, item: preview.Item) -> None:
        bpp = self.bpp if self.bpp in item.depths else item.depths[0]
        try:
            data = self.ds.read(item.rel(bpp))
        except OSError as e:
            msgbox.warning(self, APP, str(e))
            return
        self.item = item
        self._show(data, item.kind, item.name, item.rel(bpp), item)

    def _show(self, data: bytes, kind: str, name: str, source: str, item) -> bool:
        pal = self.pal
        QApplication.setOverrideCursor(Qt.WaitCursor)
        try:
            v = preview.load(data, kind, name, pal)
        except (ValueError, IndexError, KeyError) as e:
            QApplication.restoreOverrideCursor()
            msgbox.warning(self, APP, translate('viewer', 'Not readable: {path}\n\n{error}').format(path=source,
                                                                                                      error=e))
            return False
        finally:
            QApplication.restoreOverrideCursor()
        self.view, self.source = v, source
        self.model_obj = self._model_header(item, data) if kind == 'model' else None
        self.triggers = {}
        if kind == 'model' and self.head is not None:
            for s in v.model.sequences:
                self.triggers[id(s)] = preview.triggers(v.data, s, self.head)
        self._fill_sequences(item)
        self._fill_sounds()
        self._update_title()
        return True

    def _model_header(self, item, data: bytes):
        if self.head is None:
            return None
        if item is not None and 16 in item.depths and self.bpp != 16:
            data = self.ds.read(item.rel(16))
        try:
            return self.head.decode(data)
        except DecodeError:
            return None

    # --- Sequences and layers ----------------------------------------------------------------------------
    def _fill_sequences(self, item) -> None:
        v = self.view
        self.seq_tree.blockSignals(True)
        self.seq_tree.clear()
        default = (self._default_sequence(item) if item else None) or ''
        base = preview.base_name(v.model, default or None)
        current = None
        # a layer "<base> <suffix>" is shown below its base sequence
        names = {s.name.lower() for s in v.model.sequences}
        parents: dict[str, QTreeWidgetItem] = {}
        for s in v.model.sequences:
            it = QTreeWidgetItem([s.name, str(s.total), str(s.rotations), f'{s.fps:g}', s.mode])
            it.setData(0, Qt.UserRole, s)
            marks = [name for name, on in zip(preview.SWITCHES, s.flags) if on]
            it.setToolTip(0, s.name + ('\n' + ', '.join(marks) if marks else ''))
            if s.editor_only:
                for c in range(5):
                    it.setForeground(c, QBrush(GREY))
            low = s.name.lower()
            owner = next((low[:k] for k in range(len(low) - 1, 0, -1) if low[k] == ' ' and low[:k] in names
                          and low[:k] in parents), None)
            if owner is not None:
                parents[owner].addChild(it)
            else:
                self.seq_tree.addTopLevelItem(it)
                parents[low] = it
            if low == base:
                current = it
        self.seq_tree.setRootIsDecorated(any(it.childCount() for it in parents.values()))
        self.seq_tree.expandAll()
        self.seq_tree.blockSignals(False)
        self.seq_tree.setCurrentItem(current or self.seq_tree.topLevelItem(0))
        if self.seq_tree.currentItem() is not None:
            self._sequence_chosen(self.seq_tree.currentItem())

    def _sequence_chosen(self, it, _prev=None) -> None:
        if it is None or self.view is None:
            return
        s = it.data(0, Qt.UserRole)
        self.layers = preview.layer_list(self.view.model, s.name)
        b = preview.base_layer(self.layers)
        self.seq = b.seq if b else s
        self.layer_list.blockSignals(True)
        self.layer_list.clear()
        for lay in self.layers:
            li = QListWidgetItem(f'{lay.seq.name}   [{translate("viewer", ORDER_TEXTS[lay.order])}'
                                 + (', ' + translate('viewer', 'Render On Ground') if lay.seq.on_ground else '')
                                 + (', ' + lay.seq.mode if lay.order != 0 and lay.seq.mode != 'Transparent Mask' else '')
                                 + ']')
            li.setFlags(li.flags() | Qt.ItemIsUserCheckable)
            li.setCheckState(Qt.Checked if lay.on else Qt.Unchecked)
            li.setData(Qt.UserRole, lay)
            if lay.editor_only:
                li.setForeground(QBrush(GREY))
                li.setToolTip(translate('viewer', '“Editor Only”: a handle of the editor; the game never draws it.'))
            self.layer_list.addItem(li)
        self.layer_list.blockSignals(False)
        handles = sum(1 for lay in self.layers if lay.editor_only)
        self.layer_note.setText(translate('viewer', 'Ground layers (“Render On Ground”) are drawn first, then the '
                                                    'others, each by its sorting offset and layer number; a shadow '
                                                    'layer as Transparent Mask.')
                                + (' ' + translate('viewer', 'Grey: “Editor Only”, not drawn by the game.')
                                   if handles else ''))
        self.index = preview.still_index(self.seq, self.seq.rotation(self._angle()))
        self.t = self.index / self.seq.fps if self.seq.fps > 0 else 0.0
        self.slider.blockSignals(True)
        self.slider.setRange(0, max(0, self.seq.frames_per_rotation - 1))
        self.slider.setValue(self.index)
        self.slider.blockSignals(False)
        self._fill_props()
        self._recompose(refit=True)

    def _layer_toggled(self, li: QListWidgetItem) -> None:
        li.data(Qt.UserRole).on = li.checkState() == Qt.Checked
        self._recompose(refit=True)

    # --- Properties and sounds ----------------------------------------------------------------------------
    def _fill_props(self) -> None:
        v = self.view
        nodes = []
        if v.kind == 'model':
            if self.model_obj is not None and self.head is not None:
                nodes.append((self.head.node(self.model_obj, translate('viewer', 'Model header')), True))
            nodes.append((preview.sequence_node(v, self.seq, self.triggers.get(id(self.seq)), self.head), True))
        elif v.kind != 'frame':
            nodes.append((preview.sequence_node(v, self.seq), True))
        title = self.source
        if v.kind == 'model' and self.head is None:
            title += '\n' + translate('viewer', 'Without Zax.exe the model header cannot be read (no help texts).')
        elif v.kind == 'model' and self.model_obj is None:
            title += '\n' + translate('viewer', 'Model header not readable.')
        self.props.show_nodes(title, nodes)
        sy = int(self.model_obj.values.get('Sorting Y') or 0) if self.model_obj is not None else 0
        bounds = self.model_obj.values.get('Bounds Poly') if self.model_obj is not None else None
        self.canvas.extras = {'sorting_y': sy, 'bounds': bounds or None,
                              'seq_box': v.seqfile.box if v.seqfile is not None else None}

    def _fill_sounds(self) -> None:
        self.sound_tree.clear()
        v = self.view
        note = ''
        if v.kind != 'model':
            note = translate('viewer', 'Image sequences, fonts and images have no sounds or frame triggers.')
        elif self.head is None:
            note = translate('viewer', 'Without Zax.exe the model header and the frame triggers cannot be read.')
        for key, name in preview.model_sounds(self.model_obj):
            self._sound_row(translate('viewer', 'Model header'), key, name)
        bad = []
        for s in v.model.sequences:
            trig = self.triggers.get(id(s))
            if trig is None:
                if self.head is not None and v.kind == 'model':
                    bad.append(s.name)
                continue
            for t in trig:
                if t.action is None:
                    continue
                where = translate('viewer', '{sequence}, frame {frame}').format(sequence=s.name, frame=t.frame)
                how = [translate('viewer', 'forward')] * t.forward + [translate('viewer', 'backward')] * t.reverse
                action = t.action.cls + (f' ({", ".join(how)})' if how else '')
                for snd in t.sounds or ['']:
                    self._sound_row(where, action, snd, t)
        if bad:
            note = translate('viewer', 'Frame triggers not readable in: {list}').format(list=', '.join(bad))
        if not note and self.sound_tree.topLevelItemCount() == 0:
            note = translate('viewer', 'The model has no sounds and no frame triggers.')
        elif not note:
            note = translate('viewer', 'Double click plays a sound. A trigger fires when the playing sequence reaches '
                                       'its frame.')
        self.sound_note.setText(note)

    def _sound_row(self, where: str, action: str, sound: str, trig=None) -> None:
        rel = preview.sound_file(self.ds, sound) if sound and self.ds else None
        it = QTreeWidgetItem([where, action, sound, rel or (translate('viewer', 'not found') if sound else '')])
        it.setData(0, Qt.UserRole, rel)
        if sound and rel is None:
            it.setForeground(3, QBrush(QColor(235, 85, 60)))
        if trig is not None and self.head is not None:
            it.setToolTip(1, tf.dumps(tf.Node(None, '<document>', [self.head.node(trig.action, 'Action')])))
        self.sound_tree.addTopLevelItem(it)

    def _sound_clicked(self, it, _col=0) -> None:
        rel = it.data(0, Qt.UserRole)
        if rel:
            self.play_sound(rel)

    def play_sound(self, rel: str) -> None:
        """Play a sound of the game data (copied into the cache folder, QtMultimedia)."""
        try:
            from PySide6.QtMultimedia import QAudioOutput, QMediaPlayer
        except ImportError:
            self.statusBar().showMessage(translate('viewer', 'Qt Multimedia is not available: no sound.'), 5000)
            return
        folder = self.cache / 'viewer-sound'
        folder.mkdir(parents=True, exist_ok=True)
        f = folder / ('play' + Path(rel).suffix.lower())
        try:
            f.write_bytes(self.ds.read(rel))
        except OSError:
            return
        if self._player is None:
            self._player = QMediaPlayer(self)
            self._audio = QAudioOutput(self)
            self._player.setAudioOutput(self._audio)
        self._player.stop()
        self._player.setSource(QUrl())
        self._player.setSource(QUrl.fromLocalFile(str(f)))
        self._player.play()
        self.statusBar().showMessage(translate('viewer', 'Sound: {path}').format(path=rel), 4000)

    # --- Drawing ------------------------------------------------------------------------------------------
    def _angle(self) -> float:
        return math.radians(self.angle.value() % 360)

    def _bg_texture(self):
        if self.bg.currentData() != 'texture' or self.assets is None or not self.texture.currentData():
            return None
        return self.assets.texture(self.texture.currentData())

    def _current_index(self) -> int:
        if self.seq is None:
            return 0
        if self.playing:
            return preview.entity_index(self.seq, self.t)
        return self.index

    def _recompose(self, refit: bool = False) -> None:
        if self.view is None or self.seq is None:
            self.canvas.set_cells([], 1)
            return
        index = self._current_index()
        bg, tex = self.bg.currentData(), self._bg_texture()
        if self.all_rot.isChecked() and self.seq.rotations > 1:
            angles = preview.rotation_angles(self.seq)
            labels = [f'{r}  ({math.degrees(a) % 360:g}°)' for r, a in enumerate(angles)]
        else:
            angles, labels = [self._angle()], ['']
        box = preview.content_box(self.layers, angles)
        cells = []
        for ang, lab in zip(angles, labels):
            img, drawn = preview.compose(self.layers, ang, index, self.t, self.playing, box, bg, tex)
            cells.append(Cell(img, self._alpha_image(box, drawn) if self.alpha_box.isChecked() else None,
                              box, drawn, lab))
        self.canvas.set_cells(cells, max(1, math.ceil(math.sqrt(len(cells) * 1.6))) if len(cells) > 1 else 1, refit)
        self._key = (index, tuple(id(d.frame) for d in cells[0].drawn))
        self._update_status(index, cells[0].drawn)

    @staticmethod
    def _alpha_image(box, drawn) -> np.ndarray:
        """The opacity of the drawn frames (the largest where frames overlap) as an image of ``box``."""
        x0, y0, x1, y1 = box
        out = np.zeros((y1 - y0, x1 - x0), np.uint8)
        for d in drawn:
            f = d.frame
            ox, oy = -f.hot_x - x0, -f.hot_y - y0
            dst = out[oy:oy + f.height, ox:ox + f.width]
            np.maximum(dst, f.rgba[:dst.shape[0], :dst.shape[1], 3], out=dst)
        return out

    def _update_status(self, index: int, drawn) -> None:
        s = self.seq
        n = s.frames_per_rotation
        dur = n / s.fps if s.fps > 0 else 0
        self.frame_label.setText(translate('viewer', 'Frame {i} / {n} · {fps:g} fps · {t:.2f} of {dur:.2f} s').format(
            i=index, n=n, fps=s.fps, t=(index / s.fps if s.fps > 0 else 0), dur=dur))
        if not self.playing:
            self.slider.blockSignals(True)
            self.slider.setValue(index)
            self.slider.blockSignals(False)
        else:
            self.slider.blockSignals(True)
            self.slider.setValue(index % max(1, n))
            self.slider.blockSignals(False)
        self.rot_label.setText(translate('viewer', 'rotation {r} of {n}').format(r=s.rotation(self._angle()),
                                                                                  n=s.rotations))
        self._fill_frame_info(drawn)

    def _fill_frame_info(self, drawn) -> None:
        v = self.view
        lines = []
        base_frame = None
        for d in drawn:
            info = preview.frame_info(v, d.frame)
            blocks = [f'{k} {info[k]}' for k in ('pixel', 'edge', 'alpha', 'extra24', 'extra20') if info[k]]
            lines.append(translate('viewer', '<b>{layer}</b>: frame {k} of rotation {r} · {w}×{h} · hot spot {hx}, {hy}'
                                             ' · {bpp} bit {rle}<br><span style="color:gray">blocks (bytes): {blocks}'
                                             ' · {opaque} opaque, {semi} semi-transparent pixels</span>').format(
                layer=d.layer.seq.name, k=d.index, r=d.rotation, w=info['width'], h=info['height'],
                hx=info['hot_x'], hy=info['hot_y'], bpp=info['bpp'],
                rle=translate('viewer', 'RLE') if info['rle'] else translate('viewer', 'raw'),
                blocks=', '.join(blocks), opaque=info['opaque'], semi=info['semi']))
            if d.layer.order == 2:
                base_frame = d.frame
        if not drawn:
            lines.append(translate('viewer', 'No layer draws anything at this frame (an empty frame, or the index '
                                             'lies past a layer\'s frames).'))
        if v.bpp == 8:
            lines.append('<span style="color:gray">' + translate(
                'viewer', '8 bit: the five blocks with the game\'s opacity steps 1, 0.8, 0.6, 0.4, 0.2, blended in '
                          'float; the game takes the nearest palette colour of every blend.') + '</span>')
        self.frame_info.setText('<br>'.join(lines))
        is8 = v.bpp == 8 and self.pal is not None
        self.palette_label.setVisible(is8)
        self.palette_view.setVisible(is8)
        if is8:
            f = base_frame or (drawn[0].frame if drawn else None)
            self.palette_view.set_state(self.pal, preview.palette_indices(v, f) if f is not None else [])

    # --- Playback -----------------------------------------------------------------------------------------
    def toggle_play(self) -> None:
        if self.seq is None:
            return
        self.playing = not self.playing
        self.play_btn.setText('⏸' if self.playing else '▶')
        if self.playing:
            self.t = self.index / self.seq.fps if self.seq.fps > 0 else 0.0
            self._last_index = self.index
            self._clock.start()
            self._timer.start()
        else:
            self._timer.stop()
            self.index = preview.entity_index(self.seq, self.t)
        self._recompose()

    def _tick(self) -> None:
        dt = self._clock.restart() / 1000.0
        self.t += dt
        index = preview.entity_index(self.seq, self.t)
        if self._last_index is not None and index != self._last_index:
            self._fire_triggers(self._last_index, index)
        self._last_index = index
        # only redraw when a frame changes (Auto-Animate layers follow the game time)
        drawn = preview.layer_frames(self.layers, self._angle(), index, self.t, True)
        if (index, tuple(id(d.frame) for d in drawn)) != self._key or self.all_rot.isChecked():
            self._recompose()

    def _fire_triggers(self, old: int, new: int) -> None:
        """The sounds of the triggers "Trigger Forward" of the frames after ``old`` up to ``new`` (wrapping)."""
        if not self.play_sounds.isChecked():
            return
        trig = self.triggers.get(id(self.seq)) or []
        n = self.seq.frames_per_rotation
        k = old
        while k != new:
            k = (k + 1) % n
            if k < len(trig) and trig[k].forward and trig[k].sounds:
                rel = preview.sound_file(self.ds, trig[k].sounds[0])
                if rel:
                    self.play_sound(rel)

    def step(self, d: int) -> None:
        if self.seq is None:
            return
        if self.playing:
            self.toggle_play()
        n = max(1, self.seq.frames_per_rotation)
        self.index = (self.index + d) % n
        self.t = self.index / self.seq.fps if self.seq.fps > 0 else 0.0
        self._recompose()

    def _slider_moved(self, v: int) -> None:
        if self.seq is None:
            return
        if self.playing:
            self.toggle_play()
        self.index = v
        self.t = v / self.seq.fps if self.seq.fps > 0 else 0.0
        self._recompose()

    def step_rotation(self, d: int) -> None:
        if self.seq is None or self.seq.rotations <= 1:
            return
        angles = preview.rotation_angles(self.seq)
        r = (self.seq.rotation(self._angle()) + d) % len(angles)
        self.angle.setValue(round(math.degrees(angles[r])) % 360)

    def _angle_changed(self, v: int) -> None:
        if v in (-1, 360):                      # wrap around without a jump of the spin box's text
            self.angle.blockSignals(True)
            self.angle.setValue(v % 360)
            self.angle.blockSignals(False)
        self._recompose()

    # --- Options ------------------------------------------------------------------------------------------
    def _bg_changed(self, *_):
        self.texture.setVisible(self.bg.currentData() == 'texture')
        self.settings.setValue('viewer/background', self.bg.currentData())
        if self.texture.currentData():
            self.settings.setValue('viewer/texture', self.texture.currentData())
        self._recompose()

    def _alpha_toggled(self, on: bool) -> None:
        self.canvas.alpha_view = on
        self._recompose()

    def _set_overlay(self, key: str, on: bool) -> None:
        (self.canvas.overlays.add if on else self.canvas.overlays.discard)(key)
        self.settings.setValue('viewer/overlays', sorted(self.canvas.overlays))
        self.canvas.update()

    def _set_depth_action(self, bpp: int) -> None:
        self.bpp = bpp                          # first: the action's slot then has nothing to reopen
        self.depth_actions[bpp].setChecked(True)

    def _set_depth(self, bpp: int) -> None:
        if bpp == self.bpp:
            return
        self.bpp = bpp
        if self.item is not None:
            seq_name = self.seq.name if self.seq else None
            self.open_item(self.item)
            for i in range(self.seq_tree.topLevelItemCount()):
                if seq_name and self.seq_tree.topLevelItem(i).text(0) == seq_name:
                    self.seq_tree.setCurrentItem(self.seq_tree.topLevelItem(i))
                    break

    def _focus_search(self) -> None:
        d = self.findChild(QDockWidget, 'browser')
        d.show()
        d.raise_()
        self.browser.focus_search()

    def _update_title(self) -> None:
        name = getattr(self, 'source', None)
        self.setWindowTitle((f'{name} – ' if name and self.view else '') + translate('viewer', 'Zax model viewer'))

    # --- Export -------------------------------------------------------------------------------------------
    def _export_target(self, title: str, name: str, filt: str) -> Path | None:
        start = Path(self.settings.value('viewer/export_dir') or DEFAULT_OUT)
        path, _ = QFileDialog.getSaveFileName(self, title, str(start / name), filt)
        if not path:
            return None
        target = Path(path)
        if self.ds is not None and self._inside_data(target):
            msgbox.warning(self, APP, translate('viewer', 'Not into the game data or the game folder: the viewer never '
                                                          'writes there. Choose another folder.'))
            return None
        self.settings.setValue('viewer/export_dir', str(target.parent))
        return target

    def _inside_data(self, p: Path) -> bool:
        root = Path(self.ds.root).resolve()
        game = root.parent if root.is_file() else root
        try:
            p.resolve().relative_to(game)
            return True
        except ValueError:
            return False

    def _base_name(self) -> str:
        stem = (self.view.name.rsplit('/', 1)[-1] if self.view else 'export')
        return stem + (f' - {self.seq.name}' if self.view and self.view.kind == 'model' and self.seq else '')

    def _need_view(self) -> bool:
        if self.view is None or self.seq is None:
            self.statusBar().showMessage(translate('viewer', 'Nothing open.'), 4000)
            return False
        return True

    def _saved(self, path: Path) -> None:
        self.statusBar().showMessage(translate('viewer', 'Written: {path}').format(path=path), 6000)

    def export_view(self) -> None:
        if not self._need_view() or not self.canvas.cells:
            return
        target = self._export_target(translate('viewer', 'Export the view as PNG'), self._base_name() + '.png',
                                     translate('viewer', 'PNG image (*.png)'))
        if target is None:
            return
        from PIL import Image
        cells = self.canvas.cells
        cw = max(c.box[2] - c.box[0] for c in cells)
        ch = max(c.box[3] - c.box[1] for c in cells)
        cols = self.canvas.columns
        rows = (len(cells) + cols - 1) // cols
        sheet = Image.new('RGB', (min(cols, len(cells)) * cw, rows * ch), (20, 20, 20))
        for k, c in enumerate(cells):
            img = c.alpha if self.alpha_box.isChecked() and c.alpha is not None else c.image
            sheet.paste(Image.fromarray(img), ((k % cols) * cw, (k // cols) * ch))
        sheet.save(target)
        self._saved(target)

    def export_composed_sheet(self) -> None:
        if not self._need_view():
            return
        target = self._export_target(translate('viewer', 'Export the sheet of the sequence'),
                                     self._base_name() + ' sheet.png', translate('viewer', 'PNG image (*.png)'))
        if target is None:
            return
        QApplication.setOverrideCursor(Qt.WaitCursor)
        try:
            preview.compose_sheet(self.layers, preview.rotation_angles(self.seq), self.seq.frames_per_rotation,
                                  self.seq.fps, self.bg.currentData(), self._bg_texture()).save(target)
        finally:
            QApplication.restoreOverrideCursor()
        self._saved(target)

    def _save_rows(self, rows, title: str, name: str) -> None:
        if not rows:
            self.statusBar().showMessage(translate('viewer', 'No frames to export.'), 4000)
            return
        target = self._export_target(title, name, translate('viewer', 'PNG image (*.png)'))
        if target is None:
            return
        QApplication.setOverrideCursor(Qt.WaitCursor)
        try:
            preview.sprite_sheet(rows).save(target)
        finally:
            QApplication.restoreOverrideCursor()
        self._saved(target)

    def export_sequence_sheet(self) -> None:
        if self._need_view():
            self._save_rows(preview.sequence_rows(self.seq), translate('viewer', 'Export the frames of the sequence'),
                            self._base_name() + ' frames.png')

    def export_model_sheet(self) -> None:
        if self._need_view():
            self._save_rows(preview.model_rows(self.view.model, max_frames=10000),
                            translate('viewer', 'Export the whole model'), self.view.name.rsplit('/', 1)[-1] + '.png')

    def _base_frame(self) -> mdl.Frame | None:
        return self.seq.frame(self.seq.rotation(self._angle()), self._current_index()) if self.seq else None

    def export_frame_png(self) -> None:
        if not self._need_view():
            return
        f = self._base_frame()
        if f is None:
            self.statusBar().showMessage(translate('viewer', 'The current frame is empty.'), 4000)
            return
        target = self._export_target(translate('viewer', 'Export the current frame as PNG'),
                                     self._base_name() + f' {self._current_index()}.png',
                                     translate('viewer', 'PNG image (*.png)'))
        if target is None:
            return
        from PIL import Image
        Image.fromarray(f.rgba).save(target)
        self._saved(target)

    def export_seq_file(self) -> None:
        if not self._need_view():
            return
        ext = '.seq16' if self.view.bpp == 16 else '.seq'
        target = self._export_target(translate('viewer', 'Export the rotation as an image sequence'),
                                     self._base_name() + ext, translate('viewer', 'Image sequence (*{ext})').format(
                                         ext=ext))
        if target is None:
            return
        try:
            data = preview.sequence_file(self.view, self.seq, self.seq.rotation(self._angle()))
        except ValueError as e:
            msgbox.warning(self, APP, translate('viewer', 'Cannot be encoded: {error}').format(error=e))
            return
        target.write_bytes(data)
        self._saved(target)

    def export_frm_file(self) -> None:
        if not self._need_view():
            return
        f = self._base_frame()
        if f is None:
            self.statusBar().showMessage(translate('viewer', 'The current frame is empty.'), 4000)
            return
        ext = '.frm16' if self.view.bpp == 16 else '.frm'
        target = self._export_target(translate('viewer', 'Export the current frame as an image'),
                                     self._base_name() + f' {self._current_index()}{ext}',
                                     translate('viewer', 'Image (*{ext})').format(ext=ext))
        if target is None:
            return
        try:
            data = preview.frame_bytes(self.view, f)
        except ValueError as e:
            msgbox.warning(self, APP, translate('viewer', 'Cannot be encoded: {error}').format(error=e))
            return
        target.write_bytes(data)
        self._saved(target)

    def closeEvent(self, e):
        self._timer.stop()
        if self._player is not None:
            self._player.stop()
        self.settings.setValue('viewer/geometry', self.saveGeometry())
        self.settings.setValue('viewer/window_state', self.saveState(LAYOUT_VERSION))
        e.accept()


def main(argv=None) -> int:
    from .app import _quiet_accessibility
    from PySide6.QtCore import qInstallMessageHandler
    from . import macos
    qInstallMessageHandler(_quiet_accessibility)
    macos.set_app_name(APP)
    app = QApplication(sys.argv if argv is None else argv)
    app.setApplicationName(APP)
    app.setWindowIcon(app_icon())
    follow_theme(app)
    i18n.install(app, i18n.resolve(i18n.chosen(QSettings(APP, APP))))
    w = ViewerWindow()
    w.show()
    if w.data_source() is None:
        msgbox.information(w, APP, translate('viewer', 'Choose the game data: File → Choose game data …'))
    args = app.arguments()[1:]
    if args:
        w.open_path(args[0])
    return app.exec()


if __name__ == '__main__':
    sys.exit(main())
