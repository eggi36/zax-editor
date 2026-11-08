"""Main window of the Zax level editor."""
from __future__ import annotations

import copy
import os
import sys
import threading
import zipfile
from pathlib import Path

from PySide6.QtCore import (QEvent, QPointF, QRectF, QSize, QSettings, QStandardPaths, Qt, QTimer,
                            qInstallMessageHandler)
from PySide6.QtGui import QAction, QActionGroup, QBrush, QColor, QCursor, QKeySequence, QPainter, QUndoStack
from PySide6.QtWidgets import (QApplication, QDialog, QDialogButtonBox, QDockWidget, QFileDialog,
                               QGraphicsView, QInputDialog, QLineEdit, QListWidget, QMainWindow, QMessageBox,
                               QMenu, QPinchGesture, QToolBar,
                               QTreeWidget, QTreeWidgetItem, QVBoxLayout, QWidget)

from zaxtools.datasource import DataSource
from zaxtools.level import Level
from zaxtools.render import Assets

from zaxtools import frm, minimap, transition
from zaxtools import textformat as tf
from zaxtools.level import LevelPart, num
from zaxtools.catalog import Catalog
from zaxtools.exeschema import Schema, find_exe
from zaxtools.links import DialogScripts, LinkIndex, rename_plan
from zaxtools import children as childlist
from zaxtools import levelcheck
from zaxtools import rules as rules_txt

from . import default_output, i18n, macos, msgbox, outputdir, package_root
from .i18n import QT_TRANSLATE_NOOP, translate
from .models import MIME, ModelBrowser
from .parts import AddPartsCommand, ChildListCommand, NodeFieldsCommand, RemovePartsCommand, anchor, copies
from .modelchoice import ModelChoice
from .props import EditCommand, InsertEntryCommand, MultiEditCommand, PropertyPanel, describe
from .linkview import LinkOverlay
from .overlays import DEFAULT_GROUPS, GROUP_TEXTS, AIOverlay, BoundsCache, FontCache
from .checkdock import CheckPanel
from .levelsettings import LevelSettingsPanel
from .rulesdlg import RulesDialog
from .waynet import WayNetwork
from .dialogue import DialoguePanel
from .gametest import GameTest
from . import polyedit
from .groundtool import GroundPanel, GroundTool
from .icons import app_icon, follow_theme, set_icon
from .newleveldlg import NewLevelDialog
from .transitiondlg import TransitionDialog
from .surfacedlg import SurfaceDialog, surface_entries
from .scene import POLY_COLORS, ChildItem, DrawItem, MapScene, MoveCommand, PolyItem, SpriteCache

APP = 'Zax-Editor'
DEFAULT_OUT = default_output()   # the workspace's editor-output/ (was ~/Documents/Zax-Ausgabe until 2026-11-02); None in a
#                                 package: chosen at the first start (MainWindow.ask_output)
REBUILD_KEYS = {'Model', 'Cur Sequence', 'Current Frame', 'Visible', 'Active', 'Position X', 'Position Y', 'Polygon', 'Start FacingAngle', 'Movement Angle', 'Aiming Angle', 'Facing Backwards',
                'Rendering Height', 'Rendering Height Float'}
SHARP_FROM = 1          # screen pixels per world pixel from which the map is drawn with sharp pixels
EDGE_PICK = 8           # a double-click this many screen pixels next to an edge inserts a point
# New polygons: class -> menu text. Created as a minimal object (class + points); the game sets
# missing fields to the class defaults (as with models without a default object).
NEW_POLYGONS = {'CFreeRangePoly': QT_TRANSLATE_NOOP('app', 'Collision area (CFreeRangePoly)'),
                'CWayPointsPolygon': QT_TRANSLATE_NOOP('app', 'Way point area (CWayPointsPolygon)'),
                'CRenderablePolygon': QT_TRANSLATE_NOOP('app', 'Surface: texture, water, black (CRenderablePolygon) …')}
LAYOUT_VERSION = 2       # increase when everyone should get the default layout once
POLY_ICONS = {'CFreeRangePoly': 'collision', 'CWayPointsPolygon': 'waypoints', 'CRenderablePolygon': 'surface'}


class MapView(QGraphicsView):
    """The mouse wheel zooms (under the pointer), the pressed middle button pans the map.
    Trackpad: two fingers pan, pinch or Cmd/Ctrl + swipe zooms.
    Left button: select, selection rectangle, drag objects."""

    def __init__(self, on_moved, on_mouse, on_drop):
        super().__init__()
        self.on_moved, self.on_mouse, self.on_drop = on_moved, on_mouse, on_drop
        self.draw: DrawItem | None = None       # a new polygon is being drawn
        self.draw_cls = ''
        self.on_drawn = None                    # (class, points) when finished
        self.tool = None                        # tool with hover/press/move/release (ground painting)
        self._pan = None                        # last mouse position while panning (middle button)
        self._child_drag = None                 # (ChildItem, scene point, item position) while Alt-dragging
        self.setAcceptDrops(True)
        self.setDragMode(QGraphicsView.RubberBandDrag)
        self.setRenderHint(QPainter.SmoothPixmapTransform)
        self.setTransformationAnchor(QGraphicsView.NoAnchor)     # zoom() computes the zoom anchor itself
        self.setViewportUpdateMode(QGraphicsView.SmartViewportUpdate)
        self.viewport().grabGesture(Qt.PinchGesture)

    def zoom(self, f: float, at: QPointF | None = None) -> None:
        """Zoom around the point ``at`` (viewport coordinates, otherwise the centre): the map point
        there stays put. Computed here because AnchorUnderMouse only updates the mouse position
        on mouse moves, and several wheel steps would otherwise shift the view."""
        s = self.transform().m11() * f
        if not 0.05 <= s <= 8:
            return
        vp = self.viewport()
        if at is None:
            at = QPointF(vp.width() / 2, vp.height() / 2)
        fixed = self.mapToScene(at.toPoint())
        self.scale(f, f)
        d = self.mapFromScene(fixed) - at.toPoint()
        h, v = self.horizontalScrollBar(), self.verticalScrollBar()
        h.setValue(h.value() + d.x())
        v.setValue(v.value() + d.y())

    def paintEvent(self, e):
        # pixel art: sharp pixels once a world pixel covers whole screen pixels (on a Retina screen from
        # 50 % on), smooth when reduced; the ground switches to its full resolution (MapScene.set_detail)
        s = self.transform().m11() * self.viewport().devicePixelRatioF()
        smooth = s < SHARP_FROM
        if bool(self.renderHints() & QPainter.SmoothPixmapTransform) != smooth:
            self.setRenderHint(QPainter.SmoothPixmapTransform, smooth)
        if self.scene() is not None:
            self.scene().set_detail(s, smooth)
        super().paintEvent(e)

    def wheelEvent(self, e):
        # the mouse wheel has no phase (macOS sets pixelDelta anyway); trackpad swipes have phases
        # (begin/update/end/momentum) and pan the map
        if e.phase() == Qt.NoScrollPhase or e.modifiers() & (Qt.ControlModifier | Qt.MetaModifier):
            d = e.angleDelta()
            self.zoom(1.0015 ** (d.y() or d.x()), e.position())    # direction like system scrolling
        else:
            super().wheelEvent(e)

    # --- Panning with the middle mouse button pressed (in every mode)
    def _pan_start(self, e) -> None:
        self._pan = e.position()
        self.viewport().setCursor(Qt.ClosedHandCursor)

    def _pan_move(self, e) -> None:
        d = e.position() - self._pan
        self._pan = e.position()
        h, v = self.horizontalScrollBar(), self.verticalScrollBar()
        h.setValue(h.value() - round(d.x()))
        v.setValue(v.value() - round(d.y()))

    def _pan_end(self) -> None:
        self._pan = None
        if self.tool is not None or self.draw is not None:
            self.viewport().setCursor(Qt.CrossCursor)
        else:
            self.viewport().unsetCursor()

    def viewportEvent(self, e):
        # a trackpad pinch arrives on macOS as a QPinchGesture (grabGesture), not as a NativeGesture
        if e.type() == QEvent.Gesture:
            g = e.gesture(Qt.PinchGesture)
            if g is not None:
                if g.changeFlags() & QPinchGesture.ScaleFactorChanged and g.scaleFactor() > 0:
                    self.zoom(g.scaleFactor(), QPointF(self.viewport().mapFromGlobal(QCursor.pos())))
                e.accept(g)
                return True
        if e.type() == QEvent.NativeGesture and e.gestureType() == Qt.ZoomNativeGesture:
            self.zoom(1 + e.value(), e.position())
            return True
        return super().viewportEvent(e)

    def set_tool(self, tool) -> None:
        if self.tool is not None:
            self.tool.deactivate()
        self.tool = tool
        self.setDragMode(QGraphicsView.NoDrag if tool else QGraphicsView.RubberBandDrag)
        if tool:
            self.viewport().setCursor(Qt.CrossCursor)
            self.setFocus()
        else:
            self.viewport().unsetCursor()

    def mouseMoveEvent(self, e):
        if self._pan is not None:
            self._pan_move(e)
            return
        p = self.mapToScene(e.position().toPoint())
        self.on_mouse(p.x(), p.y())
        if self.tool is not None and self.draw is None:
            if e.buttons() & Qt.LeftButton:
                self.tool.move(p.x(), p.y())
            else:
                self.tool.hover(p.x(), p.y())
            return
        if self.draw is not None:
            self.draw.mouse = p
            self.draw.update_path()
            return
        if self._child_drag is not None:
            child, at, start = self._child_drag
            child.setPos(start + (p - at))
            return
        super().mouseMoveEvent(e)

    def mouseReleaseEvent(self, e):
        if e.button() == Qt.MiddleButton:
            if self._pan is not None:
                self._pan_end()
            return
        if self.draw is not None:
            return
        if self.tool is not None:
            if e.button() == Qt.LeftButton:
                self.tool.release()
            return
        if self._child_drag is not None:
            self._child_drag = None
        else:
            super().mouseReleaseEvent(e)
        self.on_moved()

    # --- Drawing a new polygon: click = point, double-click/Return = done, Esc = cancel
    def start_drawing(self, cls: str) -> None:
        self.cancel_drawing()
        self.draw_cls = cls
        self.draw = DrawItem(POLY_COLORS.get(cls, QColor(255, 255, 255)))
        self.scene().addItem(self.draw)
        self.setDragMode(QGraphicsView.NoDrag)
        self.viewport().setCursor(Qt.CrossCursor)
        self.setFocus()

    def cancel_drawing(self) -> None:
        if self.draw is not None:
            if self.draw.scene():
                self.draw.scene().removeItem(self.draw)
            self.draw = None
            self.setDragMode(QGraphicsView.RubberBandDrag)
            self.viewport().unsetCursor()

    def undo_point(self) -> None:
        if self.draw is not None and self.draw.pts:
            self.draw.pts.pop()
            self.draw.update_path()

    def finish_drawing(self) -> None:
        if self.draw is None:
            return
        pts, cls = list(self.draw.pts), self.draw_cls
        if len(pts) < polyedit.MIN_POINTS:
            return
        self.cancel_drawing()
        if self.on_drawn:
            self.on_drawn(cls, pts)

    def mousePressEvent(self, e):
        if e.button() == Qt.MiddleButton:
            self._pan_start(e)
            return
        if self.tool is not None and self.draw is None:
            if e.button() == Qt.LeftButton:
                p = self.mapToScene(e.position().toPoint())
                self.tool.press(p.x(), p.y(), bool(e.modifiers() & Qt.AltModifier))
            return
        if self.draw is not None:
            if e.button() == Qt.LeftButton:
                p = self.mapToScene(e.position().toPoint())
                q = (round(p.x()), round(p.y()))
                if not self.draw.pts or self.draw.pts[-1] != q:
                    self.draw.pts.append(q)
                    self.draw.update_path()
            elif e.button() == Qt.RightButton:
                self.finish_drawing()
            return
        if e.button() == Qt.LeftButton and e.modifiers() & Qt.AltModifier and self.scene() is not None:
            # Alt + click: the child object under the pointer alone (upper body, carried item), dragging it
            # moves it relative to its parent
            at = self.mapToScene(e.position().toPoint())
            child = self.scene().child_at(at)
            if child is not None:
                self.scene().clearSelection()
                child.pick()
                self._child_drag = (child, at, child.pos())     # dragged here, not by Qt (items above it)
                return
        super().mousePressEvent(e)

    def mouseDoubleClickEvent(self, e):
        if e.button() == Qt.MiddleButton:
            self._pan_start(e)
            return
        if self.tool is not None:
            return
        if self.draw is not None:
            self.finish_drawing()
            return
        if e.button() == Qt.LeftButton and self.scene() is not None:
            # double-click near an edge of a selected polygon: insert a point
            p = self.mapToScene(e.position().toPoint())
            tol = EDGE_PICK / self.transform().m11()
            for it in self.scene().selectedItems():
                if isinstance(it, PolyItem):
                    hit = polyedit.nearest_edge(it.part.polygon or [], p.x(), p.y())
                    if hit is not None and hit[2] <= tol:
                        it.insert_at(p.x(), p.y())
                        return
        super().mouseDoubleClickEvent(e)

    def keyPressEvent(self, e):
        if self.draw is not None and e.key() in (Qt.Key_Return, Qt.Key_Enter):
            self.finish_drawing()
            return
        super().keyPressEvent(e)

    # drag a model from the model browser onto the map
    def dragEnterEvent(self, e):
        if e.mimeData().hasFormat(MIME) and self.scene() is not None:
            e.acceptProposedAction()

    def dragMoveEvent(self, e):
        if e.mimeData().hasFormat(MIME):
            e.acceptProposedAction()

    def dropEvent(self, e):
        if e.mimeData().hasFormat(MIME):
            p = self.mapToScene(e.position().toPoint())
            self.on_drop(bytes(e.mimeData().data(MIME)).decode('utf-8'), (p.x(), p.y()))
            e.acceptProposedAction()


class LevelDialog(QDialog):
    """Choose a level from the game data."""

    def __init__(self, parent, levels: list[str]):
        super().__init__(parent)
        self.setWindowTitle(translate('app', 'Open level'))
        self.resize(520, 600)
        self.filter = QLineEdit()
        self.filter.setPlaceholderText(translate('app', 'Filter, e.g. M1M2 or Main'))
        self.list = QListWidget()
        self.list.addItems(levels)
        self.filter.textChanged.connect(self._filter)
        self.list.itemDoubleClicked.connect(self.accept)
        bb = QDialogButtonBox(QDialogButtonBox.Open | QDialogButtonBox.Cancel)
        bb.accepted.connect(self.accept)
        bb.rejected.connect(self.reject)
        lay = QVBoxLayout(self)
        for w in (self.filter, self.list, bb):
            lay.addWidget(w)

    def _filter(self, t: str) -> None:
        t = t.lower()
        for i in range(self.list.count()):
            it = self.list.item(i)
            it.setHidden(t not in it.text().lower())

    def selected(self) -> str | None:
        it = self.list.currentItem()
        return it.text() if it and not it.isHidden() else None


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.settings = QSettings(APP, APP)
        QApplication.instance().applicationStateChanged.connect(self._pause_animations)
        self.ds: DataSource | None = None
        self.assets: Assets | None = None
        self.sprites: SpriteCache | None = None
        self.level: Level | None = None
        self.scene: MapScene | None = None
        self.source: tuple[str, str] | None = None      # ('data', rel) or ('file', path)
        self._syncing = False
        self.catalog: Catalog | None = None             # all models, cached
        self.clipboard: list = []                        # copied Level Part nodes (or Child nodes)
        self.clipboard_children = False                  # the clipboard holds child objects
        self.start_level: str | None = None            # enter into Rules.txt when saving
        self._surface_choice: dict | None = None        # last choice in the "draw polygon" dialog
        self.undo = QUndoStack(self)
        self.undo.cleanChanged.connect(self._update_title)
        self.undo.indexChanged.connect(lambda _i: self._update_links())
        self.waynet = WayNetwork(lambda t: self.statusBar().showMessage(t, 6000))   # View -> Way point network
        self.undo.indexChanged.connect(lambda _i: self.waynet.schedule())
        self._links: LinkIndex | None = None            # links, recreated after changes
        self.overlay = LinkOverlay()
        self.ai_overlay = AIOverlay()                   # AI areas (View -> AI areas)
        self._ai_bounds: BoundsCache | None = None

        self.view = MapView(self._commit_move, self._show_mouse, self.place_model)
        self.view.on_drawn = self._polygon_drawn
        self.setCentralWidget(self.view)
        self._build_object_list()
        self.props = PropertyPanel()
        self.props.edit_requested.connect(self._edit)
        self.props.insert_requested.connect(
            lambda part, node, i, entry: self.undo.push(InsertEntryCommand(part, node, i, entry, self._part_changed)))
        self.props.jump_requested.connect(self.jump_to)
        self.props.child_requested.connect(self.jump_to)
        dock = QDockWidget(translate('app', 'Properties'), self)
        dock.setObjectName('props')
        dock.setWidget(self.props)
        self.addDockWidget(Qt.RightDockWidgetArea, dock)
        self.models = ModelBrowser()
        self.models.place_requested.connect(lambda m: self.place_model(m))
        self.models.view_requested.connect(lambda m: self.open_viewer(m))
        self.models.attach_requested.connect(lambda m: self.attach_model(m))
        self._viewer = None                             # Window -> Model viewer (zaxeditor.viewer)
        self._settings_dlg = None                       # File -> Settings (zaxeditor.settingsdlg)
        self._output_asked = False                      # a package asked for its output folder in this session
        self._usage_job = None                          # the background analysis of the models' use (zaxtools.usage)
        self._catalog_job = None                        # the catalogue built in the background (_load_catalog)
        self.models_dock = QDockWidget(translate('app', 'Models'), self)
        self.models_dock.setObjectName('models')
        self.models_dock.setWidget(self.models)
        self.addDockWidget(Qt.LeftDockWidgetArea, self.models_dock)
        self.tabifyDockWidget(self.findChild(QDockWidget, 'objects'), self.models_dock)
        self.ground_panel = GroundPanel()
        self.ground_dock = QDockWidget(translate('app', 'Ground'), self)
        self.ground_dock.setObjectName('ground')
        self.ground_dock.setWidget(self.ground_panel)
        self.addDockWidget(Qt.LeftDockWidgetArea, self.ground_dock)
        self.tabifyDockWidget(self.models_dock, self.ground_dock)
        self.findChild(QDockWidget, 'objects').raise_()
        self.check_panel = CheckPanel()
        self.check_panel.jump_requested.connect(self.jump_to)
        self.check_panel.recheck_requested.connect(self.check_level)
        self.check_dock = QDockWidget(translate('app', 'Level check'), self)
        self.check_dock.setObjectName('check')
        self.check_dock.setWidget(self.check_panel)
        self.addDockWidget(Qt.BottomDockWidgetArea, self.check_dock)
        self.check_dock.hide()
        self.level_settings = LevelSettingsPanel()
        self.level_settings.push = self.undo.push
        self.undo.indexChanged.connect(lambda _i: self.level_settings.refresh())
        self.settings_dock = QDockWidget(translate('app', 'Level settings'), self)
        self.settings_dock.setObjectName('levelsettings')
        self.settings_dock.setWidget(self.level_settings)
        self.addDockWidget(Qt.RightDockWidgetArea, self.settings_dock)
        self.tabifyDockWidget(dock, self.settings_dock)
        dock.raise_()
        self._check_ctx: levelcheck.Context | None = None
        self.dialogue_panel = DialoguePanel(self)
        self.dialogue_dock = QDockWidget(translate('app', 'Dialogue'), self)
        self.dialogue_dock.setObjectName('dialogue')
        self.dialogue_dock.setWidget(self.dialogue_panel)
        self.addDockWidget(Qt.BottomDockWidgetArea, self.dialogue_dock)
        self.tabifyDockWidget(self.check_dock, self.dialogue_dock)
        self.dialogue_dock.hide()
        self.game_test = GameTest(self)
        self.ground_tool = GroundTool(self.ground_panel, lambda: self.scene, self.undo.push,
                                      lambda t: self.statusBar().showMessage(t, 4000))
        self._build_menus()
        self.resize(1500, 950)
        self.resizeDocks([self.findChild(QDockWidget, 'objects'), self.findChild(QDockWidget, 'props')],
                         [380, 380], Qt.Horizontal)
        self.default_layout = self.saveState(LAYOUT_VERSION)
        geo, state = self.settings.value('geometry'), self.settings.value('window_state')
        if geo is not None:
            self.restoreGeometry(geo)
        if state is not None:
            self.restoreState(state, LAYOUT_VERSION)    # older layout: the default stays
        self.statusBar().showMessage(translate('app', 'File → Open level …   ·   Mouse wheel: zoom, middle mouse '
                                               'button: pan'))
        self._update_title()

    def toggle_panel(self, dock: QDockWidget) -> None:
        if dock.isVisible():            # visible (front tab) -> hide
            dock.hide()
        else:                           # hidden or behind another tab -> bring to front
            dock.show()
            dock.raise_()

    def reset_layout(self) -> None:
        self.restoreState(self.default_layout, LAYOUT_VERSION)
        self.findChild(QDockWidget, 'objects').raise_()

    # --- Construction --------------------------------------------------------
    def _build_object_list(self) -> None:
        w = QWidget()
        lay = QVBoxLayout(w)
        lay.setContentsMargins(4, 4, 4, 4)
        self.obj_filter = QLineEdit()
        self.obj_filter.setPlaceholderText(translate('app', 'Search: name, class, model'))
        self.obj_filter.textChanged.connect(self._filter_objects)
        self.obj_list = QTreeWidget()
        self.obj_list.setHeaderLabels([translate('app', 'Name'), translate('app', 'Class'), translate('app', 'Model')])
        self.obj_list.setRootIsDecorated(True)      # child objects below their part
        self.obj_list.setContextMenuPolicy(Qt.CustomContextMenu)
        self.obj_list.customContextMenuRequested.connect(self._object_menu)
        self.obj_list.setSelectionMode(QTreeWidget.ExtendedSelection)
        self.obj_list.setColumnWidth(0, 170)
        self.obj_list.setColumnWidth(1, 120)
        self.obj_list.setSortingEnabled(True)
        self.obj_list.setToolTip(translate('app', 'Grey: object without a name (model name shown). Below a part: '
                                                  'its child objects (upper body, attached objects), on the map '
                                                  'Alt + click.'))
        self.obj_list.itemSelectionChanged.connect(self._list_selection_changed)
        self.obj_list.itemDoubleClicked.connect(lambda it, _c: self.jump_to(it.data(0, Qt.UserRole)))
        lay.addWidget(self.obj_filter)
        lay.addWidget(self.obj_list)
        w.setMinimumWidth(330)
        dock = QDockWidget(translate('app', 'Objects'), self)
        dock.setObjectName('objects')
        dock.setWidget(w)
        self.addDockWidget(Qt.LeftDockWidgetArea, dock)

    def _build_menus(self) -> None:
        def act(menu, text, slot, key=None, checkable=False, checked=False, icon=None):
            a = QAction(text, self)
            a.setMenuRole(QAction.NoRole)       # no guessing from the text on macOS (roles set below)
            if icon:
                set_icon(a, icon)
            if key:
                a.setShortcut(QKeySequence(key))
            if checkable:
                a.setCheckable(True)
                a.setChecked(checked)
                a.toggled.connect(slot)
            else:
                a.triggered.connect(slot)
            menu.addAction(a)
            return a

        m = self.menuBar().addMenu(translate('app', 'File'))
        a_new = act(m, translate('app', 'New level …'), self.new_level, QKeySequence.New, icon='new')
        a_open = act(m, translate('app', 'Open level …'), self.open_level_dialog, QKeySequence.Open, icon='open')
        act(m, translate('app', 'Open file …'), self.open_file_dialog, 'Ctrl+Shift+O')
        m.addSeparator()
        a_save = act(m, translate('app', 'Save'), self.save, QKeySequence.Save, icon='save')
        act(m, translate('app', 'Save as …'), self.save_as, QKeySequence.SaveAs)
        self.minimap_action = act(m, translate('app', 'Redraw the mini map when saving'),
                                  lambda on: self._set_minimap_mode('minimap', on), checkable=True,
                                  checked=self.settings.value('minimap', True, type=bool))
        self.minimap_action.setToolTip(translate('app', 'When saving, the editor draws the mini map (.frm16 and '
                                                 '.frm) into the output folder the way the game draws it (its '
                                                 'resampling of the whole level).'))
        self.minimap_game_action = act(m, translate('app', 'Let the game draw the mini map'),
                                       lambda on: self._set_minimap_mode('minimap_game', on), checkable=True,
                                       checked=self.settings.value('minimap_game', False, type=bool)
                                       and not self.minimap_action.isChecked())
        self.minimap_game_action.setToolTip(translate(
            'app', 'When saving, the editor deletes the level\'s mini map in the output folder (.frm16, .frm, '
            '-Name.tga) and puts a placeholder of the wrong size (1×1) there. The game then draws the mini '
            'map itself from the level when loading and overwrites the placeholder.\n'
            'Deleting alone is not enough: the game would still find an older mini map – the one shipped '
            'in Data.dat or in the unpacked DATA folder, or one copied there earlier – because a file in '
            'the DATA folder wins against Data.dat. So copy the placeholder into the DATA folder together '
            'with the level; the game needs the level folder on disk.'))
        self.write_way_action = act(m, translate('app', 'Write the way point map (.way) when saving'),
                                    lambda on: self.settings.setValue('write_way', on), checkable=True,
                                    checked=self.settings.value('write_way', True, type=bool))
        self.write_way_action.setToolTip(translate(
            'app', 'When saving, the editor writes the .way the game would build for the level (identical byte '
            'for byte to the game\'s, needs Zax.exe). Off: an older .way in the output folder is deleted and the '
            'game builds the way points itself when loading.'))
        m.setToolTipsVisible(True)
        m.addSeparator()
        act(m, translate('app', 'Choose game data (folder or Data.dat) …'), self.choose_data)
        act(m, translate('app', 'Choose language pack …'), self.choose_language_pack)
        self.no_pack_action = act(m, translate('app', 'Without language pack'), self.clear_language_pack)
        self.no_pack_action.setEnabled(bool(self.settings.value('language_pack')))
        act(m, translate('app', 'Choose output folder …'), self.choose_output)
        m.addSeparator()
        act(m, translate('app', 'Import images …'), self.import_images, 'Ctrl+Shift+I')
        m.addSeparator()
        act(m, translate('app', 'Choose Zax.exe …'), self.choose_exe)
        # macOS: Zax-Editor → Settings … (⌘,); elsewhere here in the File menu
        act(m, translate('app', 'Settings …'), self.show_settings, QKeySequence.Preferences).setMenuRole(
            QAction.PreferencesRole)
        m.addSeparator()
        act(m, translate('app', 'Quit'), self.close, QKeySequence.Quit).setMenuRole(QAction.QuitRole)

        m = self.menuBar().addMenu(translate('app', 'Edit'))
        a_undo = self.undo.createUndoAction(self, translate('app', 'Undo'))
        a_undo.setShortcut(QKeySequence.Undo)
        set_icon(a_undo, 'undo')
        m.addAction(a_undo)
        a_redo = self.undo.createRedoAction(self, translate('app', 'Redo'))
        a_redo.setShortcut(QKeySequence.Redo)
        set_icon(a_redo, 'redo')
        m.addAction(a_redo)
        m.addSeparator()
        a_add = act(m, translate('app', 'Add object (model browser)'), self.add_object, 'Ctrl+Shift+N', icon='add')
        act(m, translate('app', 'Copy'), self.copy_selection, QKeySequence.Copy)
        act(m, translate('app', 'Paste (centre of the view)'), self.paste, QKeySequence.Paste)
        a_dup = act(m, translate('app', 'Duplicate'), self.duplicate, 'Ctrl+D', icon='duplicate')
        a_ren = act(m, translate('app', 'Rename (with references) …'), self.rename_selection, 'F2', icon='rename')
        a_del = act(m, translate('app', 'Delete'), self.delete_selection, icon='delete')
        a_del.setShortcuts([QKeySequence(Qt.Key_Backspace), QKeySequence(Qt.Key_Delete)])
        cm = m.addMenu(translate('app', 'Child objects'))
        act(cm, translate('app', 'Add upper body …'), self.add_upper_body)
        act(cm, translate('app', 'Attach object …'), lambda: self.attach_model())
        act(cm, translate('app', 'Replace model of the child object …'), self.replace_child_model)
        act(cm, translate('app', 'Remove child object'), lambda: self.remove_children(
            [p for p in (self.scene.selected_parts() if self.scene else []) if self.scene.root_of(p) is not None]))
        cm.addSeparator()
        cm.addAction(translate('app', 'Alt + click on the map selects a child object, Alt + drag moves it')).setEnabled(
            False)
        m.addSeparator()
        pm = m.addMenu(translate('app', 'Draw polygon'))
        a_polys = [act(pm, translate('app', text), lambda _=False, c=cls: self.draw_polygon(c), icon=POLY_ICONS[cls])
                   for cls, text in NEW_POLYGONS.items()]
        a_exit = act(m, translate('app', 'Transition to another level …'), self.add_exit, icon='exit')
        a_spawn = act(m, translate('app', 'Insert start point …'), self.add_spawn, icon='spawn')
        m.addSeparator()
        act(m, translate('app', 'Clear selection / cancel drawing'), self.escape, 'Esc')

        m = self.menuBar().addMenu(translate('app', 'Ground'))
        self.ground_action = act(m, translate('app', 'Paint ground'), self.toggle_ground, 'B', checkable=True,
                                 icon='ground')
        act(m, translate('app', 'Smaller brush'), lambda: self._brush(-1), '[')
        act(m, translate('app', 'Larger brush'), lambda: self._brush(1), ']')

        m = self.menuBar().addMenu(translate('app', 'View'))
        a_zin = act(m, translate('app', 'Zoom in'), lambda: self.view.zoom(1.25), QKeySequence.ZoomIn, icon='zoom_in')
        a_zout = act(m, translate('app', 'Zoom out'), lambda: self.view.zoom(0.8), QKeySequence.ZoomOut,
                     icon='zoom_out')
        a_fit = act(m, translate('app', 'Whole level'), self.fit, 'Ctrl+0', icon='fit')
        self.grid_action = act(m, translate('app', 'Ground grid (every 64 pixels)'), self._set_grid, 'G',
                               checkable=True, checked=self.settings.value('grid', False, type=bool))
        self.anim_action = act(m, translate('app', 'Play animations (CPU intensive)'), self._set_animate, checkable=True,
                               checked=self.settings.value('animate', False, type=bool))
        self.children_action = act(m, translate('app', 'Child objects (upper bodies, attached effects and items)'),
                                   self._set_children, checkable=True,
                                   checked=self.settings.value('children', True, type=bool))
        m.addSeparator()
        self.filter_actions = {}
        for key, text in (('editor', translate('app', 'Editor objects (Relay, Spawn Point, …)')),
                          ('invisible', translate('app', 'Invisible objects (Visible=0, inactive effects; '
                                                         'semi-transparent)')),
                          ('CFreeRangePoly', translate('app', 'Polygons: CFreeRangePoly (turquoise)')),
                          ('CWayPointsPolygon', translate('app', 'Polygons: CWayPointsPolygon (green)')),
                          ('CRenderablePolygon', translate('app', 'Polygons: CRenderablePolygon (orange)'))):
            self.filter_actions[key] = act(m, text, lambda on, k=key: self._set_filter(k, on),
                                           checkable=True, checked=key in ('editor', 'invisible', 'CFreeRangePoly'))
        m.addSeparator()
        self.links_sel_action = act(m, translate('app', 'Links of the selection (arrows)'),
                                    lambda _on: self._update_links(), 'L', checkable=True, checked=True, icon='links')
        self.links_all_action = act(m, translate('app', 'All links'), lambda _on: self._update_links(),
                                    'Shift+L', checkable=True)
        legend = m.addMenu(translate('app', 'Colours of the links'))
        for text in (translate('app', 'green: trigger (the trigger only reacts to this object)'),
                     translate('app', 'orange: trigger a relay'),
                     translate('app', 'blue: door/switch'),
                     translate('app', 'violet: place/path (destination, path, home point, camera …)'),
                     translate('app', 'red: target (activate, hide, message …)'),
                     translate('app', 'dashed: spelling differs')):
            legend.addAction(text).setEnabled(False)
        self._build_ai_menu(m)
        self.waynet_action = act(m, translate('app', 'Way point network (as the game builds it)'),
                                 self._set_waynet, 'W', checkable=True,
                                 checked=self.settings.value('waynet', False, type=bool))
        m.addSeparator()
        act(m, translate('app', 'Redraw ground'), lambda: self.scene and self.scene.render_ground(), 'Shift+F5')

        # show/hide docks (also bring docks lying behind a tab to the front)
        panels = []
        for name, short_text, icon in (('objects', translate('app', 'Objects'), 'objects'),
                                       ('models', translate('app', 'Models'), 'models'),
                                       ('props', translate('app', 'Properties'), 'props')):
            dock = self.findChild(QDockWidget, name)
            a = QAction(dock.windowTitle(), self)
            set_icon(a, icon)
            a.setCheckable(True)
            a.setIconText(short_text)
            a.setToolTip(translate('app', 'Show/hide the panel “{name}”').format(name=dock.windowTitle()))
            a.triggered.connect(lambda _on, d=dock: self.toggle_panel(d))
            dock.visibilityChanged.connect(lambda vis, act_=a: act_.setChecked(vis))
            panels.append(a)

        # Toolbar: frequent commands (the same actions as in the menu); renaming and zooming in/out only
        # in the menu or by key, mouse wheel, trackpad
        tb = self.addToolBar(translate('app', 'Toolbar'))
        tb.setObjectName('toolbar')
        tb.setMovable(not macos.IS_MAC)     # macOS: part of the title bar (unified look), not a floating bar
        self.setUnifiedTitleAndToolBarOnMac(True)
        tb.setToolButtonStyle(Qt.ToolButtonTextUnderIcon)
        tb.setIconSize(QSize(20, 20))
        short = {a_new: translate('app', 'New'), a_open: translate('app', 'Open'), a_save: translate('app', 'Save'),
                 a_undo: translate('app', 'Undo'), a_redo: translate('app', 'Redo'),
                 a_dup: translate('app', 'Duplicate'), a_ren: translate('app', 'Rename'),
                 a_del: translate('app', 'Delete'), a_polys[0]: translate('app', 'Collision'),
                 a_polys[1]: translate('app', 'Way points'), a_polys[2]: translate('app', 'Surface'),
                 a_exit: translate('app', 'Transition'), a_spawn: translate('app', 'Start point'),
                 self.ground_action: translate('app', 'Paint ground'), a_zin: translate('app', 'Zoom in'),
                 a_zout: translate('app', 'Zoom out'), a_fit: translate('app', 'Whole level'),
                 self.links_sel_action: translate('app', 'Links')}
        for group in ((a_new, a_open, a_save), (a_undo, a_redo), panels, (a_dup, a_del),
                      (*a_polys, a_exit, a_spawn, self.ground_action),
                      (a_fit, self.links_sel_action)):
            if tb.actions():
                tb.addSeparator()
            for a in group:
                if a in panels:
                    tb.addAction(a)
                    continue
                keys = a.shortcut().toString(QKeySequence.NativeText)
                a.setToolTip(a.text().rstrip(' …') + (f'  ({keys})' if keys else ''))
                a.setIconText(short[a])         # short text below the icon, the menu keeps the long one
                tb.addAction(a)

        m = self.menuBar().addMenu(translate('app', 'Level'))
        act(m, translate('app', 'Check'), self.check_level, 'F7')
        act(m, translate('app', 'Level settings (music, Team Info, mini map …)'),
            lambda: self.toggle_panel(self.settings_dock), 'Ctrl+Shift+L')
        act(m, translate('app', 'Rules.txt (start level, game windows) …'), self.edit_rules)
        act(m, translate('app', 'Dialogue script …'), self.show_dialogue, 'Ctrl+Shift+D')
        m.addSeparator()
        act(m, translate('app', 'Test in game'), self.game_test.run, 'F5')
        act(m, translate('app', 'Test in game – settings …'), self.game_test.settings_dialog)

        # Window: show closed docks again, the UI language
        m = self.menuBar().addMenu(translate('app', 'Window'))
        for name in ('objects', 'models', 'ground', 'props', 'levelsettings', 'check', 'dialogue'):
            m.addAction(self.findChild(QDockWidget, name).toggleViewAction())
        m.addAction(tb.toggleViewAction())
        m.addSeparator()
        act(m, translate('app', 'Model viewer …'), lambda: self.open_viewer(), 'Ctrl+Shift+M')
        m.addSeparator()
        act(m, translate('app', 'Restore default layout'), self.reset_layout)
        m.addSeparator()
        self._build_language_menu(m)

        # Help: About (macOS: Zax-Editor → About Zax-Editor; the system adds the search field)
        m = self.menuBar().addMenu(translate('app', 'Help'))
        act(m, translate('app', 'About Zax-Editor'), self.show_about).setMenuRole(QAction.AboutRole)

    def _build_language_menu(self, window_menu) -> None:
        """Window → Language: System, then every language with a translation (names in their own
        language). Stored in the settings, applied at the next start."""
        m = window_menu.addMenu(translate('app', 'Language'))
        group = QActionGroup(self)
        current = i18n.chosen(self.settings)
        self._language_actions = {}
        for code in [i18n.SYSTEM] + i18n.available():
            text = translate('app', 'System') if code == i18n.SYSTEM else i18n.name(code)
            a = QAction(text, self)
            a.setMenuRole(QAction.NoRole)
            a.setCheckable(True)
            a.setChecked(code == current)
            a.triggered.connect(lambda _on, c=code: self.set_language(c))
            group.addAction(a)
            m.addAction(a)
            self._language_actions[code] = a

    def set_language(self, code: str) -> None:
        if code == i18n.chosen(self.settings):
            return
        self.settings.setValue(i18n.SETTING, code)
        self._language_actions[code].setChecked(True)
        self.statusBar().showMessage(translate('app', 'The language takes effect at the next start of the '
                                                      'editor.'), 8000)

    # --- Game data / output -----------------------------------------------------
    def data_source(self) -> DataSource | None:
        if self.ds is None:
            path = self.settings.value('data') or os.environ.get('ZAX_DATA')
            if not path or not Path(path).exists() or not self._set_data(path):
                path = self._ask_data_path()
                if not path or not self._set_data(path):
                    return None
            if self.output_dir() is None and not self._output_asked:
                # a package's first start: right after the game data, where its own files go (cancel: asked again
                # before the first write)
                self._output_asked = True
                self.ask_output()
        return self.ds

    def _ask_data_path(self) -> str | None:
        """Choose the game data: folder "Data" or file "Data.dat" (zip, as in the game folder)."""
        box = msgbox.make(self, APP, translate('app', 'Where is the game data?'))
        box.setInformativeText(translate('app', 'Either the unpacked folder “Data” or the file “Data.dat” from '
                                                'the game folder. The editor only reads and never writes into it.'))
        b_dir = box.addButton(translate('app', 'Folder “Data” …'), QMessageBox.YesRole)
        b_dat = box.addButton(translate('app', 'File “Data.dat” …'), QMessageBox.NoRole)
        box.addButton(translate('app', 'Cancel'), QMessageBox.RejectRole)
        box.setDefaultButton(b_dir)
        box.exec()
        cur = self.settings.value('data') or ''
        start = str(Path(cur).parent) if cur else ''
        if box.clickedButton() is b_dir:
            return QFileDialog.getExistingDirectory(self, translate('app', 'Choose the folder “Data” of the game '
                                                                           'data'), start) or None
        if box.clickedButton() is b_dat:
            path, _ = QFileDialog.getOpenFileName(self, translate('app', 'Choose the Data.dat of the game data'), start,
                                                  translate('app', 'Game data (*.dat *.DAT *.zip *.ZIP);;'
                                                                   'All files (*)'))
            return path or None
        return None

    def _set_data(self, path: str) -> bool:
        """Open the game data (folder "Data" or Data.dat); False with a message if that fails."""
        pack = self.settings.value('language_pack') or None
        if pack and not Path(pack).is_file():
            self.statusBar().showMessage(translate('app', 'Language pack not found: {path}').format(path=pack), 6000)
            pack = None
        QApplication.setOverrideCursor(Qt.WaitCursor)
        try:
            ds = DataSource(path, pack)
        except (OSError, ValueError, zipfile.BadZipFile) as e:
            QApplication.restoreOverrideCursor()
            msgbox.warning(self, APP, translate('app', 'Game data not readable:\n{path}\n\n{error}').format(
                path=path, error=e))
            return False
        QApplication.restoreOverrideCursor()
        if not ds.list('Levels/', '.zax'):
            msgbox.warning(self, APP, translate('app', 'No levels found in:\n{path}\n\nPlease choose the folder '
                                                       '“Data” or the Data.dat of the game.').format(path=path))
            return False
        self.ds = ds
        self.assets = Assets(self.ds)
        self.sprites = SpriteCache(self.assets)
        self.props.dialogs = DialogScripts(self.ds, self.output_roots())
        self.props.ds = self.ds
        self.settings.setValue('data', path)
        self._load_catalog()
        return True

    def cache_dir(self) -> Path:
        return Path(QStandardPaths.writableLocation(QStandardPaths.GenericCacheLocation)) / APP

    def _load_catalog(self) -> None:
        """Model catalogue and exe schema: from the cache at once; the first time (or after the game data or the exe
        changed, about 40 s) built in a background thread while the window stays usable - the status bar shows the
        progress, the model browser and placing objects wait for it (``_catalog_ready``)."""
        ds, cache, exe = self.ds, self.cache_dir(), self.exe_path()
        job: dict = {}
        self._catalog_job = job
        cached = Catalog.cached(ds, cache, exe)
        if cached is not None:
            self._catalog_ready(cached, self._open_schema())
            return
        self.catalog = None
        self.models.set_usage(None)

        def progress(i, n, text):
            job['progress'] = (i, n, text)

        def work():
            try:
                cat = Catalog.open(ds, cache, progress, exe=exe)
                schema = Schema.open(exe, ds, cache) if exe is not None else None
                job['result'] = (cat, schema)
            except Exception as e:          # noqa: BLE001 - shown in the status bar
                job['error'] = e

        def poll():
            if self._catalog_job is not job:        # other game data or exe in the meantime
                return
            if 'result' in job:
                self.statusBar().showMessage(translate('app', 'Model catalogue ready.'), 4000)
                self._catalog_ready(*job['result'])
            elif 'error' in job:
                self.statusBar().showMessage(translate('app', 'The model catalogue could not be built: {error}').format(
                    error=job['error']), 10000)
            else:
                i, n, text = job.get('progress', (0, 1, ''))
                self.statusBar().showMessage(translate('app', 'Building the model catalogue once ({percent} %): {text}')
                                             .format(percent=100 * i // max(1, n), text=text))
                QTimer.singleShot(250, poll)
        threading.Thread(target=work, name='catalogue', daemon=True).start()
        QTimer.singleShot(250, poll)

    def _catalog_ready(self, catalog: Catalog, schema: Schema | None) -> None:
        self.catalog = catalog
        self.props.schema = schema
        self.assets.own_roots = self.output_roots()
        if self.output_dir() is not None:
            self.catalog.add_own(self.output_dir(), self.props.schema)
        self.assets.sort_y = self.catalog.sorting_y()
        if self.scene:
            self.scene.resort()
        self.models.set_catalog(self.catalog, self.sprites, self.cache_dir())
        self._start_usage()
        self._ai_bounds = None          # the models' bounds polygons with the new schema
        if self._viewer is not None:    # it shows the previous game data
            self._viewer.close()
            self._viewer = None

    def _start_usage(self) -> None:
        """The game's use of the assets (zaxtools.usage, about 20 s the first time, then from the cache) in a
        background thread; the model browser gets its marks when it is done. Without Zax.exe it keeps the
        catalogue's level use."""
        self.models.set_usage(None)
        exe = self.exe_path()
        if exe is None or self.ds is None:
            return
        from zaxtools.usage import Usage
        ds, cache, box = self.ds, self.cache_dir(), {}
        self._usage_job = box

        def work():
            try:
                box['result'] = Usage.open(ds, exe, cache)
            except Exception as e:          # noqa: BLE001 - another exe version, unreadable data ...
                box['error'] = e

        def poll():
            if self._usage_job is not box:          # other game data in the meantime
                return
            if 'result' in box:
                self.models.set_usage(box['result'])
                self.statusBar().showMessage(translate('app', 'Model browser: the game\'s use of the models is '
                                                              'known.'), 5000)
            elif 'error' in box:
                self.statusBar().showMessage(translate('app', 'The analysis of the models\' use failed: {error}').format(
                    error=box['error']), 8000)
            else:
                QTimer.singleShot(300, poll)
        threading.Thread(target=work, daemon=True).start()
        self.statusBar().showMessage(translate('app', 'Analysing which models the game uses (once, about 20 s) …'),
                                     8000)
        QTimer.singleShot(300, poll)

    def _open_schema(self) -> Schema | None:
        """Class schema of Zax.exe for the help texts of the fields (from the cache the catalogue just
        filled). Without the exe or if it cannot be read: None, the properties show no help texts."""
        exe = self.exe_path()
        if exe is None:
            return None
        try:
            return Schema.open(exe, self.ds, self.cache_dir())
        except Exception:                   # noqa: BLE001 - another exe version, missing capstone ...
            return None

    def exe_path(self) -> Path | None:
        """Zax.exe (setting, otherwise next to the game data). Without the exe: minimal objects only."""
        p = self.settings.value('exe')
        if p and Path(p).is_file():
            return Path(p)
        return find_exe(self.ds) if self.ds else None

    def show_settings(self) -> None:
        if self._settings_dlg is None:
            from .settingsdlg import SettingsDialog
            self._settings_dlg = SettingsDialog(self)
        self._settings_dlg.show()
        self._settings_dlg.raise_()
        self._settings_dlg.activateWindow()

    def show_about(self) -> None:
        box = msgbox.make(self, translate('app', 'About Zax-Editor'), APP)
        box.setInformativeText(translate('app', 'Level editor for the game “Zax: The Alien Hunter” (2001).\n'
                                                'It reads the game data and never writes into it.'))
        box.setIconPixmap(app_icon().pixmap(64, 64))
        box.exec()

    def open_viewer(self, model: str | None = None) -> None:
        """The model viewer on the editor's game data, catalogue and exe schema; ``model`` opened in it."""
        if self.data_source() is None:
            return
        from .viewer import ViewerWindow
        if self.catalog is None:
            self.statusBar().showMessage(translate('app', 'The model catalogue is still being built …'), 4000)
            return
        if self._viewer is None:
            self._viewer = ViewerWindow(self.ds, self.catalog, self.props.schema, self.cache_dir(), self.exe_path())
        self._viewer.show()
        self._viewer.raise_()
        self._viewer.activateWindow()
        if model:
            self._viewer.open_path(model)

    def choose_exe(self) -> None:
        path, _ = QFileDialog.getOpenFileName(self, translate('app', 'Choose Zax.exe'), '',
                                              translate('app', 'Program (*.exe)'))
        if path:
            self.settings.setValue('exe', path)
            if self.ds:
                self._load_catalog()

    def choose_language_pack(self) -> None:
        """Language pack (e.g. GERMAN.RED of the German edition): its dialogue, texts and voice
        recordings replace those of the game data (read-only, the editor never writes into it)."""
        start = str(self.ds.root.parent) if self.ds else ''
        path, _ = QFileDialog.getOpenFileName(self, translate('app', 'Choose language pack'), start,
                                              translate('app', 'Language pack (*.red *.RED *.zip *.ZIP);;'
                                                               'All files (*)'))
        if not path:
            return
        try:
            DataSource.check_language_pack(path)
        except (OSError, ValueError) as e:
            msgbox.warning(self, APP, translate('app', 'Not a readable language pack:\n{path}\n\n{error}').format(
                path=path, error=e))
            return
        self._apply_language_pack(path)

    def clear_language_pack(self) -> None:
        self._apply_language_pack(None)

    def _apply_language_pack(self, path: str | None) -> None:
        self.settings.setValue('language_pack', path or '')
        self.no_pack_action.setEnabled(bool(path))
        if self.ds is not None:
            self._set_data(str(self.ds.root))
            if self.scene:
                self._show_selection()
        self.statusBar().showMessage(translate('app', 'Language pack: {name}').format(name=Path(path).name) if path
                                     else translate('app', 'Without language pack'), 4000)

    def choose_data(self) -> None:
        path = self._ask_data_path()
        if path:
            self._set_data(path)

    def output_dir(self) -> Path | None:
        """The output folder (own levels, graphics, dialogue scripts, Rules.txt); None while a package has none yet."""
        v = self.settings.value('output')
        return Path(v) if v else DEFAULT_OUT

    def output_roots(self) -> list[Path]:
        """The output folder as the extra roots readers look in first (none while it is not chosen)."""
        out = self.output_dir()
        return [out] if out is not None else []

    def need_output(self) -> Path | None:
        """The output folder before writing into it: asked for first while none is chosen (None: cancelled)."""
        return self.output_dir() or self.ask_output()

    def ask_output(self) -> Path | None:
        """Ask where the editor saves own levels, graphics and Rules.txt, suggesting Documents/Zax-Editor-Output;
        asked again after a folder is refused (``set_output``). None if the user postpones it."""
        suggested = outputdir.suggestion()
        while True:
            box = msgbox.make(self, APP, translate('app', 'Where shall the editor save your own levels, graphics '
                                                          'and Rules.txt?'))
            box.setInformativeText(translate('app', 'Suggested: {path}\n\nAny folder outside the game data and '
                                                    'outside the editor itself will do. You can change it later in '
                                                    'File → Settings.').format(path=suggested))
            b_use = box.addButton(translate('app', 'Use the suggested folder'), QMessageBox.AcceptRole)
            b_pick = box.addButton(translate('app', 'Choose folder …'), QMessageBox.ActionRole)
            b_later = box.addButton(translate('app', 'Later'), QMessageBox.RejectRole)
            box.setDefaultButton(b_use)
            box.setEscapeButton(b_later)
            box.exec()
            if box.clickedButton() is b_use:
                path = str(suggested)
            elif box.clickedButton() is b_pick:
                start = suggested if suggested.is_dir() else suggested.parent
                path = self._pick_output_folder(str(start))
                if not path:
                    continue
            else:
                self.statusBar().showMessage(translate('app', 'No output folder yet: the editor asks again before '
                                                              'it saves anything.'), 8000)
                return None
            if self.set_output(path):
                return self.output_dir()

    def _pick_output_folder(self, start: str) -> str:
        """The folder dialog of the output folder ('' if cancelled)."""
        return QFileDialog.getExistingDirectory(self, translate('app', 'Choose output folder'), start)

    def choose_output(self) -> None:
        """File → Choose output folder (and the settings window): asked again after a folder is refused."""
        cur = self.output_dir()
        start = str(cur) if cur is not None else str(outputdir.suggestion().parent)
        while True:
            path = self._pick_output_folder(start)
            if not path or self.set_output(path):
                return

    def _data_path(self) -> str | None:
        """The game data in use (or chosen): the folder "Data" or the Data.dat."""
        if self.ds is not None:
            return str(self.ds.root)
        return self.settings.value('data') or os.environ.get('ZAX_DATA') or None

    def set_output(self, path: str | os.PathLike) -> bool:
        """Make ``path`` the output folder (setting ``output``), after the checks of ``outputdir.problem``: not
        inside the editor's package, not inside the game data, writable. False with a message otherwise."""
        why = outputdir.problem(path, self._data_path(), package_root())
        if why is not None:
            msgbox.warning(self, APP, why)
            return False
        before = self.output_dir()
        new = Path(path).expanduser().resolve()
        self.settings.setValue('output', str(new))
        if self.props.dialogs is not None:
            self.props.dialogs = DialogScripts(self.ds, self.output_roots())
        self._check_ctx = None
        self.dialogue_panel.level_changed()
        # the own models of the new output folder (and none of the old one)
        if self.catalog is not None and (before is not None or (new / 'Cache' / 'Models').is_dir()):
            self._load_catalog()
        self._update_title()
        return True

    def _inside_data(self, p: Path) -> bool:
        if self.ds is None:
            return False
        root = self.ds.root.resolve()
        p = p.resolve()
        return p == root or root in p.parents

    # --- Open ------------------------------------------------------------------
    def maybe_discard(self) -> bool:
        """Before closing or opening another level: save the changes, discard them or cancel."""
        if self.undo.isClean() or self.level is None:
            return True
        name = Path(self.source[1]).name if self.source else APP
        r = msgbox.ask_save(self, APP, translate('app', 'Do you want to save the changes to “{name}”?').format(
            name=name), translate('app', 'Your changes will be lost if you don’t save them.'))
        if r == QMessageBox.Save:
            return self.save()
        return r == QMessageBox.Discard

    def open_level_dialog(self) -> None:
        ds = self.data_source()
        if ds is None or not self.maybe_discard():
            return
        dlg = LevelDialog(self, ds.list('Levels/', '.zax'))
        if dlg.exec() and dlg.selected():
            self.load(ds.read(dlg.selected()), ('data', dlg.selected()))

    def new_level(self) -> None:
        ds = self.data_source()
        if ds is None or not self.maybe_discard():
            return
        dlg = NewLevelDialog(self, self.assets)
        if not dlg.exec():
            return
        rel = f'Levels/{dlg.partial()}.zax'
        if ds.exists(rel):
            msgbox.warning(self, APP, translate('app', '{path} already exists in the game data.\n'
                                                       'Please choose another name or folder.').format(path=rel))
            return
        out = self.output_dir()
        target = out / rel if out is not None else None
        if target is not None and target.exists() and msgbox.question(
                self, APP, translate('app', '{path}\nalready exists and will be overwritten when saving. Create it '
                                            'anyway?').format(path=target),
                QMessageBox.Yes | QMessageBox.Cancel) != QMessageBox.Yes:
            return
        self.load(dlg.build().to_bytes(), ('data', rel))
        self.start_level = self.level.partial_file_name if dlg.rules.isChecked() else None
        self.undo.resetClean()                             # new: not saved yet
        self._update_title()
        self.statusBar().showMessage(translate('app', 'New level: paint the ground (B), drag objects from the model '
                                                      'browser, draw a way point area – then save'), 10000)

    def open_file_dialog(self) -> None:
        if self.data_source() is None or not self.maybe_discard():
            return
        path, _ = QFileDialog.getOpenFileName(self, translate('app', 'Open level file'), str(self.output_dir() or ''),
                                              translate('app', 'Zax level (*.zax)'))
        if path:
            self.load(Path(path).read_bytes(), ('file', path))

    def load(self, data: bytes, source: tuple[str, str]) -> None:
        QApplication.setOverrideCursor(Qt.WaitCursor)
        self.statusBar().showMessage(translate('app', 'Loading level …'))
        QApplication.processEvents()
        try:
            level = Level.from_bytes(data)
            scene = MapScene(level, self.assets, self.sprites)
            for k, a in self.filter_actions.items():
                scene.filters[k] = a.isChecked()
            scene.apply_filters()
            scene.show_grid = self.grid_action.isChecked()
            scene.show_children = self.children_action.isChecked()
            scene.apply_filters()
            scene.set_animate_models(self.anim_action.isChecked())
        finally:
            QApplication.restoreOverrideCursor()
        self.overlay.clear()
        self.ai_overlay.clear()
        if self.scene is not None:
            self.scene.shutdown()           # the former level's ground thread
        self.level, self.scene, self.source = level, scene, source
        self._pause_animations()
        self._links = None
        self.start_level = None
        self.undo.clear()
        self.view.cancel_drawing()
        self.ground_action.setChecked(False)
        self.view.setScene(scene)
        self.waynet.set_scene(scene, lambda: self.level, lambda m: self._check_context().way_model(m))
        self.waynet.set_enabled(self.waynet_action.isChecked())
        scene.on_poly_edit = self._poly_edit
        scene.on_message = lambda t: self.statusBar().showMessage(t, 4000)
        scene.selectionChanged.connect(self._scene_selection_changed)
        self._fill_object_list()
        self.dialogue_panel.level_changed()
        self.ground_panel.set_level(level, self.assets, 0)
        self.props.show_part(level, None, 0)
        self.level_settings.schema, self.level_settings.ds = self.props.schema, self.ds
        self.level_settings.show_level(level)
        self._update_links()
        self.fit()
        self._update_title()
        self.statusBar().showMessage(translate('app', '%n object(s) loaded', None, len(level.parts)), 4000)

    def fit(self) -> None:
        if self.scene:
            self.view.fitInView(QRectF(0, 0, *self.scene.level.size), Qt.KeepAspectRatio)

    # --- Save ------------------------------------------------------------------
    def _target(self, ask: bool = False) -> Path | None:
        """Where the level is saved: below the output folder for a level of the game data, else its file. Without an
        output folder None, or with ``ask`` the folder asked for first."""
        if self.source is None:
            return None
        kind, ref = self.source
        if kind != 'data':
            return Path(ref)
        out = self.need_output() if ask else self.output_dir()
        return out / ref if out is not None else None

    def save(self) -> bool:
        t = self._target(ask=True)
        if t is None:
            return False
        self._check_before_save()
        return self._write(t)

    def save_as(self) -> None:
        if self.level is None:
            return
        t = self._target() or outputdir.suggestion().parent / Path(self.source[1] if self.source else '').name
        path, _ = QFileDialog.getSaveFileName(self, translate('app', 'Save as'), str(t),
                                              translate('app', 'Zax level (*.zax)'))
        if path:
            self._check_before_save()
            if self._write(Path(path)):
                self.source = ('file', path)
                self._update_title()

    def _write(self, target: Path, quiet: bool = False) -> bool:
        if self.level is None:
            return False
        if self._inside_data(target):
            msgbox.warning(self, APP, translate('app', 'The game\'s original files are never overwritten.\n'
                                                       'Please choose a place outside the game data.'))
            return False
        try:
            data = self.level.to_bytes()
        except UnicodeEncodeError as e:
            msgbox.warning(self, APP, translate('app', 'Cannot be saved: characters outside Latin-1 ({error}).').format(
                error=e))
            return False
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
        self.undo.setClean()
        way = target.with_suffix('.way').name
        rel = self.source[1] if self.source and self.source[0] == 'data' else _data_relative(target)
        win = lambda p: 'DATA\\' + Path(p).as_posix().replace('/', chr(92))
        steps = [translate('app', 'Copy the file to {path}.').format(path=win(rel))]
        if self._write_way(target):
            steps.append(translate('app', 'Copy “{file}” next to it (the way points as the game builds '
                                          'them).').format(file=way))
        elif self.ds.exists(str(Path(rel).with_suffix('.way'))):
            steps.append(translate('app', 'Delete “{file}” there – the game rebuilds the way points when '
                                          'loading.').format(file=way))
        mm = self._write_minimap(target)
        gm = self._game_minimap(target)
        if mm:
            steps.append(translate('app', 'Copy the mini maps (.frm16 for 16 bit, .frm for 256 colours) from\n'
                                          '{source}\nto {target}.').format(source=mm[0], target=win(mm[1])))
        elif gm:
            steps.append(translate('app', 'Copy the mini map placeholders (.frm16, .frm, 1×1) from\n{source}\nto '
                                          '{target} (they overwrite an older mini map). The game draws the mini map '
                                          'itself when loading and writes it there, plus “{tga}” into the level '
                                          'folder.').format(source=gm[0], target=win(gm[1]), tga=gm[2]))
        elif self.minimap_action.isChecked() and not minimap.can_render(self.level):
            steps.append(translate('app', '(Mini map not redrawn: the visible mini map area is empty.)'))
        if not quiet and self.start_level and self.start_level == self.level.partial_file_name:
            rules = self._write_rules(target)
            if rules:
                steps.append(translate('app', 'Back up the game folder, then copy\n{rules}\nto {target} (a new game '
                                              'then starts in this level).').format(rules=rules,
                                                                                    target=win('Rules.txt')))
        if quiet:
            self.statusBar().showMessage(translate('app', 'Saved: {path}').format(path=target), 6000)
            return True
        msgbox.information(self, APP, translate('app', 'Saved:\n{path}\n\nTo test in the game:\n{steps}').format(
            path=target, steps='\n'.join(f'{i}. {s}' for i, s in enumerate(steps, 1))))
        return True

    # --- Level check -----------------------------------------------------------------
    def _check_context(self) -> levelcheck.Context:
        schema = self.props.schema
        if self._check_ctx is None or self._check_ctx.ds is not self.ds or self._check_ctx.schema is not schema:
            self._check_ctx = levelcheck.Context(self.ds, schema, self.exe_path(), self.output_roots())
        return self._check_ctx

    def _set_waynet(self, on: bool) -> None:
        self.settings.setValue('waynet', on)
        self.waynet.set_enabled(on)

    def _run_check(self) -> list:
        """Findings of the open level (zaxtools/levelcheck.py); the context keeps the lists of the game data."""
        self._check_context()
        rel = None
        if self.source:
            rel = self.source[1] if self.source[0] == 'data' else Path(self.source[1]).name
            rel = rel[len('Levels/'):] if rel.startswith('Levels/') else rel
        QApplication.setOverrideCursor(Qt.WaitCursor)
        try:
            findings = levelcheck.check(self.level, self._check_ctx, rel)
        finally:
            QApplication.restoreOverrideCursor()
        skipped = self._check_ctx.skipped
        note = translate('app', 'without Zax.exe: classes, Bounce Factor, points/colours not checked') if skipped else ''
        self.check_panel.set_findings(findings, note)
        return findings

    def check_level(self) -> None:
        """Level → Check: findings in the dock."""
        if self.level is None or self.ds is None:
            return
        findings = self._run_check()
        self.check_dock.show()
        self.check_dock.raise_()
        self.statusBar().showMessage(translate('app', 'Level check: {summary}').format(
            summary=levelcheck.summary(findings)), 6000)

    def _check_before_save(self) -> None:
        """Check before saving: warns, never blocks."""
        if self.level is None or self.ds is None:
            return
        try:
            findings = self._run_check()
        except Exception as e:          # noqa: BLE001 - the check must never stop saving
            self.statusBar().showMessage(translate('app', 'Level check failed: {error}').format(error=e), 6000)
            return
        c = levelcheck.counts(findings)
        if c['error']:
            self.check_dock.show()
            self.check_dock.raise_()
            msgbox.warning(self, APP, translate('app', 'The level check found %n error(s) with which the game exits, '
                                                       'hangs or does not read the whole level (list in the window '
                                                       '“Level check”).\n\nThe file is saved anyway.', None, c['error']))
        elif c['warning']:
            self.statusBar().showMessage(translate('app', 'Level check: {summary} (window “Level check”)').format(
                summary=levelcheck.summary(findings)), 6000)

    def _write_way(self, target: Path) -> bool:
        """With File → Write the way point map: the .way next to the level (only when exact, i.e. with
        Zax.exe for the models' AIs). Otherwise an older .way there is deleted (CLAUDE.md). True: written."""
        out = target.with_suffix('.way')
        if self.write_way_action.isChecked() and not self._inside_data(out):
            QApplication.setOverrideCursor(Qt.WaitCursor)
            try:
                res = self._check_context().way_map(self.level)
            finally:
                QApplication.restoreOverrideCursor()
            if res.exact:
                from zaxtools import way as waylib
                out.write_bytes(waylib.dumps(res.way))
                return True
            self.statusBar().showMessage(translate('app', 'No .way written: without Zax.exe the way points are only '
                                                          'approximate.'), 6000)
        if not self._inside_data(out):
            out.unlink(missing_ok=True)
        return False

    def _write_minimap(self, target: Path):
        """Redraw the mini maps (.frm16 and .frm) and put them next to the target's Levels structure:
        <root>/Cache/Levels/<Partial File Name>.*. Returns (folder, folder relative to DATA)."""
        if not self.minimap_action.isChecked() or not minimap.can_render(self.level):
            return None
        root = _data_root(target)
        rel = Path(minimap.minimap_path(self.level)).parent
        if self._inside_data(root / rel):
            return None
        QApplication.setOverrideCursor(Qt.WaitCursor)
        self.statusBar().showMessage(translate('app', 'Drawing the mini map …'))
        QApplication.processEvents()
        try:
            pal = frm.load_palette(self.ds.read('Palettes/GamePalette.pal'))
            for name, data in minimap.minimap_files(self.level, self.assets, pal).items():
                out = root / name
                out.parent.mkdir(parents=True, exist_ok=True)
                out.write_bytes(data)
        finally:
            QApplication.restoreOverrideCursor()
            self.statusBar().clearMessage()
        return root / rel, rel.as_posix() + '/'

    def _set_minimap_mode(self, key: str, on: bool) -> None:
        """The two mini map options exclude each other: drawn by the editor or by the game."""
        self.settings.setValue(key, on)
        other = self.minimap_game_action if key == 'minimap' else self.minimap_action
        if on and other.isChecked():
            other.setChecked(False)

    def _game_minimap(self, target: Path):
        """Let the game draw the mini map: delete the level's mini map files next to the target's
        Levels structure (images and the game's -<name>.tga) and put the placeholders of the wrong
        size there (minimap.placeholder_files). Returns (folder, folder relative to DATA, name of
        the .tga) or None when the option is off."""
        if not self.minimap_game_action.isChecked():
            return None
        root = _data_root(target)
        rel = Path(minimap.minimap_path(self.level)).parent
        files = minimap.game_files(self.level)
        if any(self._inside_data(root / f) for f in files):
            return None
        for f in files:
            (root / f).unlink(missing_ok=True)
        for name, data in minimap.placeholder_files(self.level).items():
            out = root / name
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_bytes(data)
        return root / rel, rel.as_posix() + '/', Path(files[2]).name

    def _write_rules(self, target: Path) -> Path | None:
        """Write the game data's Rules.txt with ``First Map Name`` = this level next to the target's
        Levels structure (the start point stays ``First Map Spawn Point``); starts from the Rules.txt
        already there (Level → Rules.txt …)."""
        out = _data_root(target) / 'Rules.txt'
        if self._inside_data(out):
            return None
        rules = rules_txt.load(self.ds, out.parent)       # keeps a Rules.txt edited in the editor
        rules_txt.set_start(rules, self.level.partial_file_name)
        return rules_txt.save(rules, out.parent)

    # --- Object list <-> map -----------------------------------------------------
    @staticmethod
    def _object_item(p: LevelPart) -> QTreeWidgetItem:
        short = (p.model or '').rsplit('/', 1)[-1]
        it = QTreeWidgetItem([p.name or short or f'({p.cls})', p.cls, p.model or ''])
        if not p.name:
            it.setForeground(0, QBrush(QColor(130, 130, 130)))
        it.setData(0, Qt.UserRole, p)
        return it

    def _fill_object_list(self) -> None:
        syncing, self._syncing = self._syncing, True      # otherwise clear() reports "selection empty"
        open_ = {id(it.data(0, Qt.UserRole).node) for it in self._object_items() if it.isExpanded()}
        self.obj_list.clear()
        for p in self.level.parts:
            if self.scene.item_for(p) is None:
                continue
            it = self._object_item(p)
            self._add_child_items(it, p, open_)
            self.obj_list.addTopLevelItem(it)
            if id(p.node) in open_:
                it.setExpanded(True)
        self.obj_list.sortItems(0, Qt.AscendingOrder)
        self._filter_objects(self.obj_filter.text())
        self._syncing = syncing

    def _add_child_items(self, it: QTreeWidgetItem, p: LevelPart, open_: set) -> None:
        """The child objects of ``p`` below its item, their own children below theirs."""
        for c in p.children:
            ci = self._object_item(c)
            ci.setToolTip(0, translate('app', 'Child object of “{name}”').format(name=describe(p)))
            it.addChild(ci)
            self._add_child_items(ci, c, open_)
            if id(c.node) in open_:
                ci.setExpanded(True)

    def _object_items(self):
        """All items of the object list, the parts' and their child objects' (any depth)."""
        def walk(it):
            yield it
            for k in range(it.childCount()):
                yield from walk(it.child(k))
        for i in range(self.obj_list.topLevelItemCount()):
            yield from walk(self.obj_list.topLevelItem(i))

    def _filter_objects(self, t: str) -> None:
        t = t.lower()
        hit = lambda it: not t or any(t in it.text(c).lower() for c in range(3))

        def apply(it, shown_above: bool) -> bool:
            """Hide what neither matches nor has a match above or below it; True if it stays."""
            own = shown_above or hit(it)
            below = [apply(it.child(k), own) for k in range(it.childCount())]
            keep = own or any(below)
            it.setHidden(not keep)
            return keep
        for i in range(self.obj_list.topLevelItemCount()):
            apply(self.obj_list.topLevelItem(i), False)

    def _list_selection_changed(self) -> None:
        if self._syncing or self.scene is None:
            return
        self._reveal_children([it.data(0, Qt.UserRole) for it in self.obj_list.selectedItems() if it.parent()])
        self._syncing = True
        self.scene.clearSelection()
        hidden = False
        for it in self.obj_list.selectedItems():
            gi = self.scene.item_for(it.data(0, Qt.UserRole))
            if gi is not None and gi.isVisible():
                if isinstance(gi, ChildItem):
                    gi.pick()
                else:
                    gi.setSelected(True)
            elif it.parent() is not None:
                hidden = True
        self._syncing = False
        self._show_selection()
        if hidden:
            self.statusBar().showMessage(translate('app', 'The object is hidden (menu View)'), 4000)

    def _scene_selection_changed(self) -> None:
        if not self._syncing:
            self._syncing = True
            sel = {id(p.node) for p in self.scene.selected_parts()}
            self.obj_list.clearSelection()
            for it in self._object_items():
                if id(it.data(0, Qt.UserRole).node) in sel:
                    it.setSelected(True)
                    up = it.parent()
                    while up is not None:
                        up.setExpanded(True)
                        up = up.parent()
            self._syncing = False
        self._show_selection()

    def link_index(self) -> LinkIndex:
        if self._links is None:
            self._links = LinkIndex(self.level)
        return self._links

    def _update_links(self) -> None:
        """Redraw the arrows: all, those of the selection or none (View menu)."""
        if self.scene is None:
            return
        sel = {id(p.node) for p in self.scene.selected_parts()}
        if self.links_all_action.isChecked():
            links = self.link_index().links
        elif self.links_sel_action.isChecked() and sel:
            links = [lk for lk in self.link_index().links
                     if id(lk.source.node) in sel or any(id(t.node) in sel for t in lk.targets)]
        else:
            links = []
        self.overlay.show(self.scene, links, sel)
        self._update_ai_overlay()

    # --- AI overlays (View -> AI areas) ------------------------------------------------------------
    def _build_ai_menu(self, view_menu) -> None:
        """Submenu with the mode (off, selection, all shown objects) and one switch per kind;
        all remembered."""
        m = view_menu.addMenu(translate('app', 'AI areas (debug drawing of the original)'))
        mode = self.settings.value('ai_overlay_mode', 'selection')
        group = QActionGroup(self)
        self.ai_mode_actions = {}
        for key, text in (('off', translate('app', 'Off')), ('selection', translate('app', 'Selected objects only')),
                          ('all', translate('app', 'All visible objects'))):
            a = QAction(text, self)
            a.setCheckable(True)
            a.setChecked(key == mode)
            a.triggered.connect(lambda _on, k=key: self._set_ai_mode(k))
            group.addAction(a)
            m.addAction(a)
            self.ai_mode_actions[key] = a
        m.addSeparator()
        stored = self.settings.value('ai_overlay_groups', None)
        on = set(DEFAULT_GROUPS) if stored is None else set(stored if isinstance(stored, list) else [stored] if stored else [])
        self.ai_group_actions = {}
        for key, text in GROUP_TEXTS.items():
            a = QAction(translate('overlays', text), self)
            a.setCheckable(True)
            a.setChecked(key in on)
            a.toggled.connect(lambda _on: self._set_ai_groups())
            m.addAction(a)
            self.ai_group_actions[key] = a
        m.addSeparator()
        for text in (translate('app', 'Colours and shapes as in the debug drawing of Zax.exe;'),
                     translate('app', 'States that only arise in the game (paths, targets) are missing.')):
            m.addAction(text).setEnabled(False)

    def _set_ai_mode(self, key: str) -> None:
        self.settings.setValue('ai_overlay_mode', key)
        self._update_ai_overlay()

    def _set_ai_groups(self) -> None:
        self.settings.setValue('ai_overlay_groups', [k for k, a in self.ai_group_actions.items() if a.isChecked()])
        self._update_ai_overlay()

    def _update_ai_overlay(self) -> None:
        """Rebuild the AI shapes of the selection or of all shown objects."""
        if self.scene is None:
            self.ai_overlay.clear()
            return
        mode = next((k for k, a in self.ai_mode_actions.items() if a.isChecked()), 'off')
        groups = [k for k, a in self.ai_group_actions.items() if a.isChecked()]
        parts = [] if mode == 'off' else self._selected_roots() if mode == 'selection' else self.level.parts
        if self._ai_bounds is None and self.ds is not None:
            self._ai_bounds = BoundsCache(self.ds, self.props.schema)
            self.ai_overlay.fonts = FontCache(self.ds)
        self.ai_overlay.show(self.scene, parts, groups, self._ai_bounds)

    def _selected_roots(self) -> list[LevelPart]:
        """The selected parts of the Tree List (without selected child objects)."""
        return [p for p in (self.scene.selected_parts() if self.scene else []) if self.scene.root_of(p) is None]

    def _selected_child(self) -> tuple[LevelPart, LevelPart] | None:
        """(parent, child) when exactly one child object is selected."""
        parts = self.scene.selected_parts() if self.scene else []
        if len(parts) != 1:
            return None
        it = self.scene.item_for(parts[0])
        return (it.owner.part, parts[0]) if isinstance(it, ChildItem) else None

    def _show_selection(self) -> None:
        parts = self.scene.selected_parts() if self.scene else []
        one = self._selected_child()
        self.props.show_part(self.level, parts[0] if len(parts) == 1 else None, len(parts),
                             self.link_index() if parts else None, owner=one[0] if one else None)
        self.dialogue_panel.set_part(parts[0] if len(parts) == 1 else None)
        self._update_links()
        self.statusBar().showMessage(
            describe(parts[0]) if len(parts) == 1 else
            translate('app', '%n object(s) selected', None, len(parts)) if parts else '')

    def _reveal_children(self, parts) -> None:
        """Choosing a child object in the object list or the properties while View → Child objects is off turns
        that view on, so the child can be selected and edited on the map (a hidden item cannot be selected)."""
        if self.scene is None or self.children_action.isChecked():
            return
        if any(self.scene.root_of(p) is not None for p in parts):
            self.children_action.setChecked(True)           # toggled → _set_children (remembered)
            self.statusBar().showMessage(translate('app', 'View → Child objects switched on to select the child '
                                                          'object'), 5000)

    def jump_to(self, part) -> None:
        if self.scene is None or part is None:
            return
        self._reveal_children([part])
        gi = self.scene.item_for(part)
        if gi is None:
            return
        if not self.scene.select_part(part):
            self.statusBar().showMessage(translate('app', 'The object is hidden (menu View)'), 4000)
            return
        self.view.centerOn(gi)

    # --- Changes ----------------------------------------------------------------
    def _commit_move(self) -> None:
        if self.scene is None:
            return
        items, delta = self.scene.moved_items()
        if items:
            self.undo.push(MoveCommand(self.scene, items, *delta))
            self._show_selection()

    def _edit(self, part, entry, new: str) -> None:
        try:
            new.encode('latin-1')
        except UnicodeEncodeError:
            msgbox.warning(self, APP, translate('app', 'Only characters from Latin-1 are allowed.'))
            return
        if entry.key == 'Name' and entry is part.node.item('Name') and self.scene.root_of(part) is None:
            self.rename(part, new)          # a child object's name: a plain edit (the links only know parts)
            return
        self.undo.push(EditCommand(part, entry, new, self._part_changed))

    def _part_changed(self, part) -> None:
        self._links = None
        self.scene.rebuild_part(part)          # a child object: its part of the Tree List
        self._fill_object_list()
        if self.scene.selected_parts() == [part] or self.props.part is part:
            one = self._selected_child()
            self.props.show_part(self.level, part, index=self.link_index(),
                                 owner=one[0] if one and one[1].node is part.node else None)

    # --- Child objects (zaxtools.children) ------------------------------------------------
    def _children_changed(self, parent: LevelPart, select) -> None:
        """After a ChildListCommand: rebuild the part, select the new child (``select``, a node) or the
        part."""
        self._links = None
        self.scene.rebuild_part(parent)
        self._syncing = True
        self.scene.clearSelection()
        if select is None or not self.scene.select_part(LevelPart(select)):
            self.scene.select_part(parent)
        self._syncing = False
        self._fill_object_list()
        self._scene_selection_changed()

    def _child_target(self) -> LevelPart | None:
        """The part a new child object goes to: the one selected part (or the parent of the selected
        child)."""
        one = self._selected_child()
        if one:
            return one[0]
        roots = self._selected_roots()
        if len(roots) == 1 and roots[0].position is not None:
            return roots[0]
        self.statusBar().showMessage(translate('app', 'Select exactly one object with a position'), 4000)
        return None

    def add_upper_body(self) -> None:
        parent = self._child_target()
        if parent is None or self.catalog is None:
            return
        if not childlist.derives(parent.cls, 'CEntityAnimated', self.props.schema):
            msgbox.information(self, APP, translate('app', 'An upper body only works on an animated object (a '
                                                            'character): on a {cls} it would neither follow the '
                                                            'sequence nor turn.').format(cls=parent.cls))
            return
        cands = childlist.torso_candidates(self.catalog, parent.model)
        dlg = ModelChoice(self, translate('app', 'Add upper body'),
                          translate('app', 'Model of the upper body of “{name}”. It shows the parent\'s sequence and '
                                           'frame and turns with it; its model needs the parent\'s sequences '
                                           '(Idle, Walk, …).').format(name=describe(parent)),
                          cands, sorted(self.catalog.models), cands[0] if cands else None)
        if dlg.exec() != QDialog.Accepted or not dlg.model():
            return
        node = childlist.upper_body_node(self.catalog, parent, dlg.model(), self.props.schema)
        self.undo.push(ChildListCommand(parent, lambda: childlist.add_child(parent, node).node,
                                        self._children_changed, translate('app', 'Add upper body')))

    def attach_model(self, model: str | None = None) -> None:
        """Attach a model to the selected part as a child object (at the parent's position; Alt + drag moves
        it)."""
        parent = self._child_target()
        if parent is None or self.catalog is None:
            return
        if model is None:
            dlg = ModelChoice(self, translate('app', 'Attach object'),
                              translate('app', 'Model of the object that “{name}” carries. It is drawn at the parent\'s '
                                               'position plus its own (relative, Alt + drag on the map) and moves with '
                                               'it.').format(name=describe(parent)),
                              sorted(self.catalog.models), show_rest=True)
            if dlg.exec() != QDialog.Accepted or not dlg.model():
                return
            model = dlg.model()
        node = childlist.attached_node(self.catalog, model)
        self.undo.push(ChildListCommand(parent, lambda: childlist.add_child(parent, node).node,
                                        self._children_changed,
                                        translate('app', 'Attach {name}').format(name=model.rsplit('/', 1)[-1])))

    def replace_child_model(self) -> None:
        one = self._selected_child()
        if one is None or self.catalog is None:
            self.statusBar().showMessage(translate('app', 'Select one child object (Alt + click on the map)'), 4000)
            return
        parent, child = one
        upper = child.cls == childlist.UPPER_BODY
        first = childlist.torso_candidates(self.catalog, parent.model) if upper else []
        dlg = ModelChoice(self, translate('app', 'Replace model'),
                          translate('app', 'New model of the child object “{name}”.').format(name=describe(child)),
                          first, sorted(self.catalog.models), child.model, show_rest=not upper)
        if dlg.exec() != QDialog.Accepted or not dlg.model() or dlg.model() == child.model:
            return
        values = [(e.key if e is not None else k, v) for (e, v), k in
                  zip(childlist.model_edits(self.catalog, child, dlg.model()), ('Model', 'Cur Sequence'))]
        self.undo.push(NodeFieldsCommand(child, values, self._part_changed,
                                         translate('app', 'Replace model of {name}').format(
                                             name=(child.model or '').rsplit('/', 1)[-1])))

    def remove_children(self, kids: list[LevelPart]) -> None:
        by_parent: dict[int, tuple[LevelPart, list]] = {}
        for c in kids:
            parent = childlist.find_parent(self.level.parts, c.node)
            if parent is not None:
                by_parent.setdefault(id(parent.node), (parent, []))[1].append(c)
        if len(by_parent) > 1:
            self.undo.beginMacro(translate('app', 'Remove %n child object(s)', None, len(kids)))
        for parent, cs in by_parent.values():
            def op(parent=parent, cs=cs):
                for c in cs:
                    childlist.remove_child(parent, c)
                return None
            self.undo.push(ChildListCommand(parent, op, self._children_changed,
                                            translate('app', 'Remove %n child object(s)', None, len(cs))))
        if len(by_parent) > 1:
            self.undo.endMacro()

    def _object_menu(self, pos) -> None:
        """Context menu of the object list: the child object actions."""
        it = self.obj_list.itemAt(pos)
        if it is None or self.scene is None:
            return
        if not it.isSelected():
            self.obj_list.clearSelection()
            it.setSelected(True)
        menu = QMenu(self)
        child = it.parent() is not None
        menu.addAction(translate('app', 'Add upper body …'), self.add_upper_body)
        menu.addAction(translate('app', 'Attach object …'), lambda: self.attach_model())
        a = menu.addAction(translate('app', 'Replace model of the child object …'), self.replace_child_model)
        a.setEnabled(child)
        a = menu.addAction(translate('app', 'Remove child object'), self.delete_selection)
        a.setEnabled(child)
        menu.exec(self.obj_list.viewport().mapToGlobal(pos))

    # --- Add / remove -----------------------------------------------------------
    def _parts_changed(self, added: list[LevelPart], removed: list[LevelPart]) -> None:
        self._links = None
        for p in removed:
            self.scene.remove_part_item(p)
        self._syncing = True
        self.scene.clearSelection()
        for p in added:
            it = self.scene.add_part_item(p)
            if it is not None and it.isVisible():
                it.setSelected(True)
        self._syncing = False
        self._fill_object_list()
        self._scene_selection_changed()

    def _view_center(self) -> tuple[float, float]:
        c = self.view.mapToScene(self.view.viewport().rect().center())
        return c.x(), c.y()

    def _insert_copies(self, nodes, src_anchor, target, text: str, exact: bool = False) -> None:
        """Move copies so that ``src_anchor`` lies at ``target``. Integer offset (decimals are kept);
        ``exact``: hit the target exactly as an integer."""
        if exact:
            dx, dy = round(target[0]) - src_anchor[0], round(target[1]) - src_anchor[1]
        else:
            dx, dy = round(target[0] - src_anchor[0]), round(target[1] - src_anchor[1])
        for n in nodes:
            LevelPart(n).shift(dx, dy)
        self.undo.push(AddPartsCommand(self.level, nodes, self._parts_changed, text))

    def add_object(self) -> None:
        self.models_dock.show()
        self.models_dock.raise_()
        self.models.focus_search()

    def import_images(self) -> None:
        """File → Import images: PNGs as a game image, image sequence or model in the output folder
        (zaxeditor/importdlg.py); a model then appears in the model browser."""
        if self.data_source() is None or self.need_output() is None:
            return
        from .importdlg import ImportDialog
        last = self.settings.value('import_last') or {}
        dlg = ImportDialog(self, self.ds, self.catalog, self.props.schema, self.output_dir(),
                           last if isinstance(last, dict) else {})
        if dlg.exec() != QDialog.Accepted:
            return
        self.settings.setValue('import_last', dlg.last())
        if dlg.model:
            self.assets.forget(dlg.model)
            self.sprites._cache = {k: v for k, v in self.sprites._cache.items() if k[0] != dlg.model}
            self.catalog.add_own(self.output_dir(), self.props.schema)
            self.models.set_catalog(self.catalog, self.sprites, self.cache_dir())
            self.models.set_usage(self.models.usage)
            self.models.select(dlg.model)
            self._check_ctx = None
        msgbox.information(self, APP, translate('app', 'Written into the output folder:\n{files}').format(
            files='\n'.join(str(p) for p in dlg.written)) + (
            '\n\n' + translate('app', 'The model “{model}” is in the model browser now.').format(model=dlg.model)
            if dlg.model else ''))

    def place_model(self, model: str, at: tuple[float, float] | None = None) -> None:
        """New object with this model at ``at`` (default: centre of the view)."""
        if self.level is None or self.catalog is None:
            self.statusBar().showMessage(translate('app', 'Open a level first'), 4000)
            return
        node = self.catalog.make_node(model)
        self._insert_copies([node], LevelPart(node).position or (0, 0), at or self._view_center(),
                            translate('app', 'Add {name}').format(name=model.rsplit('/', 1)[-1]), exact=True)

    def _selected_children(self) -> list[LevelPart]:
        """The selected child objects (any depth)."""
        return [p for p in (self.scene.selected_parts() if self.scene else []) if self.scene.root_of(p) is not None]

    def copy_selection(self) -> None:
        """Copy the selected parts with their child objects; when only child objects are selected, those (pasted as
        child objects again, zaxtools.children "Copy, paste, duplicate")."""
        parts = self._selected_roots()
        if parts:
            self.clipboard, self.clipboard_children = copies(parts), False
            self.statusBar().showMessage(translate('app', '%n object(s) copied', None, len(parts)), 3000)
            return
        kids = self._selected_children()
        if kids:
            self.clipboard, self.clipboard_children = copies(kids), True
            self.statusBar().showMessage(translate('app', '%n child object(s) copied: paste them onto a selected '
                                                          'object', None, len(kids)), 4000)

    def paste(self) -> None:
        if self.level is None or not self.clipboard:
            return
        if self.clipboard_children:
            parent = self._child_target()
            if parent is not None:
                self._paste_children(parent, self.clipboard,
                                     translate('app', 'Paste %n child object(s)', None, len(self.clipboard)))
            return
        nodes = [copy.deepcopy(n) for n in self.clipboard]
        self._insert_copies(nodes, anchor([LevelPart(n) for n in nodes]), self._view_center(),
                            translate('app', 'Paste %n object(s)', None, len(nodes)))

    def duplicate(self) -> None:
        parts = self._selected_roots()
        if parts:
            a = anchor(parts)
            self._insert_copies(copies(parts), a, (a[0] + 40, a[1] + 40),
                                translate('app', 'Duplicate %n object(s)', None, len(parts)))
            return
        by_parent: dict[int, tuple[LevelPart, list]] = {}
        for c in self._selected_children():
            parent = childlist.find_parent(self.level.parts, c.node)
            if parent is not None:
                by_parent.setdefault(id(parent.node), (parent, []))[1].append(c.node)
        if len(by_parent) > 1:
            self.undo.beginMacro(translate('app', 'Duplicate child objects'))
        for parent, nodes in by_parent.values():
            self._paste_children(parent, nodes, translate('app', 'Duplicate %n child object(s)', None, len(nodes)))
        if len(by_parent) > 1:
            self.undo.endMacro()

    def _paste_children(self, parent: LevelPart, nodes: list, text: str) -> None:
        """Copies of child nodes onto ``parent``'s Child List (their relative positions kept), one undo step; the
        first copy is selected. Refused like "Add upper body" where the game would not show them or would end."""
        problem = childlist.paste_problem(nodes, parent, self.scene.root_of(parent) or parent, self.props.schema)
        if problem == childlist.PASTE_UPPER_BODY_PARENT:
            msgbox.information(self, APP, translate('app', 'An upper body only works on an animated object (a '
                                                            'character): on a {cls} it would neither follow the '
                                                            'sequence nor turn.').format(cls=parent.cls))
            return
        if problem == childlist.PASTE_WALKING_AI_ROOT:
            msgbox.information(self, APP, translate('app', 'This upper body has a CWalkingUpperBodyAI, which ends '
                                                            'the game under an object that does not walk ({cls}). '
                                                            'Use Edit → Child objects → Add upper body there.').format(
                cls=(self.scene.root_of(parent) or parent).cls))
            return
        self.undo.push(ChildListCommand(parent, lambda: childlist.paste_children(parent, nodes)[0],
                                        self._children_changed, text))

    # --- Transitions -----------------------------------------------------------------
    def _level_files(self) -> dict:
        """Path below Levels/ without extension -> bytes of the .zax. Game data, overridden by our own
        levels in the output folder. The open level is not included."""
        own = (self.level.partial_file_name or '').lower() if self.level is not None else ''
        return {name: read for name, read in rules_txt.level_files(self.ds, self.output_dir()).items()
                if name.lower() != own}

    def _level_sources(self) -> dict:
        """Path below Levels/ without extension -> loader; like ``_level_files``, plus the open level
        (also unsaved)."""
        found = {name: (lambda read=read: Level.from_bytes(read())) for name, read in self._level_files().items()}
        if self.level is not None and self.level.partial_file_name:
            level = self.level
            found[level.partial_file_name] = lambda: level
        return found

    def edit_rules(self) -> None:
        if self.ds is None or self.need_output() is None:
            return
        RulesDialog(self, self.ds, self.output_dir(), self._level_sources(), self.props.schema,
                    lambda p: not self._inside_data(p)).exec()

    def add_exit(self) -> None:
        if self.level is None or self.catalog is None:
            self.statusBar().showMessage(translate('app', 'Open a level first'), 4000)
            return
        dlg = TransitionDialog(self, self._level_sources())
        if not dlg.exec():
            return
        map_name, loc = dlg.map_name(), dlg.location()
        name = f'Exit to {loc}'      # an object name in the file: the same in every UI language
        try:
            (map_name + name).encode('latin-1')
            node = self.catalog.make_node(transition.TRIGGER_MODEL)
            transition.make_exit(node, map_name, loc, dlg.return_to_map())
        except UnicodeEncodeError:
            msgbox.warning(self, APP, translate('app', 'Only characters from Latin-1 are allowed.'))
            return
        except ValueError as e:
            msgbox.warning(self, APP, translate('app', 'Exit not created: {error}').format(error=e))
            return
        node.set('Name', name)
        self._insert_copies([node], LevelPart(node).position or (0, 0), self._view_center(),
                            translate('app', 'Insert transition'), exact=True)
        self.statusBar().showMessage(translate('app', 'Exit to “{map}”, start point “{location}” created in the centre '
                                                      'of the view – drag it to the desired place').format(
            map=map_name, location=loc), 8000)

    def add_spawn(self) -> None:
        if self.level is None or self.catalog is None:
            self.statusBar().showMessage(translate('app', 'Open a level first'), 4000)
            return
        taken = {p.name for p in self.level.parts if p.name}
        name, ok = QInputDialog.getText(self, translate('app', 'Insert start point'),
                                        translate('app', 'Name of the start point (target for transitions from other '
                                                         'levels):'))
        name = name.strip()
        if not ok or not name:
            return
        try:
            name.encode('latin-1')
        except UnicodeEncodeError:
            msgbox.warning(self, APP, translate('app', 'Only characters from Latin-1 are allowed.'))
            return
        if name in taken:
            msgbox.warning(self, APP, translate('app', '“{name}” already exists in this level.').format(name=name))
            return
        node = self.catalog.make_node(transition.SPAWN_MODEL)
        node.set('Name', name)
        self._insert_copies([node], LevelPart(node).position or (0, 0), self._view_center(),
                            translate('app', 'Insert start point'), exact=True)

    # --- Renaming -------------------------------------------------------------------
    def rename_selection(self) -> None:
        parts = self.scene.selected_parts() if self.scene else []
        if len(parts) != 1:
            self.statusBar().showMessage(translate('app', 'Select exactly one object to rename'), 4000)
            return
        part = parts[0]
        if not isinstance(part.node.item('Name'), tf.Entry):
            msgbox.information(self, APP, translate('app', 'This object has no field “Name”.'))
            return
        new, ok = QInputDialog.getText(self, translate('app', 'Rename'),
                                       translate('app', 'New name (references in scripts are changed too):'),
                                       text=part.name)
        if ok:
            self._edit(part, part.node.item('Name'), new)

    def rename(self, part: LevelPart, new: str) -> None:
        """Change the name; optionally the references in the level as well, in one undo step."""
        old = part.name
        if new == old:
            return
        if new.strip() != new or not new:
            r = msgbox.question(self, APP, translate('app', 'The new name is empty or has spaces at its ends. Use it '
                                                            'anyway?'), QMessageBox.Yes | QMessageBox.Cancel,
                                     QMessageBox.Cancel)
            if r != QMessageBox.Yes:
                return
        others = [p for p in self.level.parts if p.node is not part.node and p.name == new]
        plan = rename_plan(self.level, part, new) if old else None
        incoming, remote = [], []
        if old and self.level.partial_file_name:
            QApplication.setOverrideCursor(Qt.WaitCursor)
            try:
                files = self._level_files()
                if any(sp.node is part.node for sp in transition.spawn_points(self.level)):
                    incoming = transition.incoming_exits(files, self.level.partial_file_name, old)
                remote = transition.incoming_remote(files, self.level.partial_file_name, old)
            finally:
                QApplication.restoreOverrideCursor()

        def lines(items, fmt):
            out = [fmt(x) for x in items[:10]]
            return out + ([translate('app', '… and %n more', None, len(items) - 10)] if len(items) > 10 else [])

        text = []
        if plan and plan.edits:
            text += [translate('app', '%n reference(s) to “{old}” will be changed too:', None,
                               plan.count).format(old=old)] + lines(
                plan.edits, lambda r: '  ' + translate('app', '{object}  [{action} · {key}]  “{value}” → “{new}”').format(
                    object=describe(r.part), action=r.action, key=r.entry.key, value=r.entry.value, new=r.new))
        if plan and plan.in_range:
            text += ['', translate('app', 'Not changed – the name is part of a range #a-b# (please adjust it '
                                          'yourself):')] + lines(
                plan.in_range, lambda r: '  ' + translate('app', '{object}  [{action} · {key}]  “{value}”').format(
                    object=describe(r.part), action=r.action, key=r.entry.key, value=r.entry.value))
        if plan and plan.shared:
            text += ['', translate('app', 'Not changed – more objects are called “{old}”, these references keep '
                                          'hitting those:').format(old=old)] + lines(
                plan.shared, lambda r: f'  {describe(r.part)}  [{r.action} · {r.entry.key}]')
        if incoming:
            text += ['', translate('app', 'Transitions from other levels lead to this start point. They are not '
                                          'changed (set New Location there to “{new}”):').format(new=new)] + lines(
                incoming, lambda x: f'  {x[0]}: {describe(x[1].part)}')
        if remote:
            text += ['', translate('app', 'Actions in other levels (COtherMapAction) name this object. They are not '
                                          'changed (set them to “{new}” there):').format(new=new)] + lines(
                remote, lambda x: f'  {x[0]}: {describe(x[1].part)}  [{x[1].inner}]')
        if others:
            text += ['', translate('app', '⚠ “{new}” is already the name of %n other object(s). References to this '
                                          'name then hit several.', None, len(others)).format(new=new)]
        edits = [(part, part.node.item('Name'), new)]
        if text:
            box = msgbox.make(self, APP, translate('app', 'Rename “{old}” to “{new}”').format(old=old, new=new))
            box.setInformativeText('\n'.join(text).lstrip('\n'))
            with_refs = (box.addButton(translate('app', 'Rename with references'), QMessageBox.AcceptRole)
                         if plan and plan.edits else None)
            only = box.addButton(translate('app', 'Change the name only') if with_refs else translate('app', 'Rename'),
                                 QMessageBox.DestructiveRole if with_refs else QMessageBox.AcceptRole)
            box.addButton(translate('app', 'Cancel'), QMessageBox.RejectRole)
            box.setDefaultButton(with_refs or only)
            box.exec()
            if box.clickedButton() is with_refs and with_refs is not None:
                edits += [(r.part, r.entry, r.new) for r in plan.edits]
            elif box.clickedButton() is not only:
                return
        k = len(edits) - 1
        self.undo.push(MultiEditCommand(
            (translate('app', 'Rename “{old}” (%n reference(s))', None, k) if k else
             translate('app', 'Rename “{old}”')).format(old=old), edits, self._part_changed))
        self.statusBar().showMessage(
            (translate('app', '“{old}” → “{new}”, %n reference(s) changed too', None, k) if k else
             translate('app', '“{old}” → “{new}”')).format(old=old, new=new), 6000)

    # --- Polygons ------------------------------------------------------------------
    def draw_polygon(self, cls: str) -> None:
        if self.scene is None:
            self.statusBar().showMessage(translate('app', 'Open a level first'), 4000)
            return
        self.ground_action.setChecked(False)
        if cls == 'CRenderablePolygon':
            dlg = SurfaceDialog(self, self.assets, self._surface_choice)
            if dlg.exec() != QDialog.Accepted:
                return
            choice = dlg.choice()
            if choice is None:
                self.statusBar().showMessage(translate('app', 'No texture chosen'), 4000)
                return
            self._surface_choice = choice
        if not self.filter_actions[cls].isChecked():
            self.filter_actions[cls].setChecked(True)         # otherwise the result would be invisible
        self.scene.clearSelection()
        self.view.start_drawing(cls)
        self.statusBar().showMessage(translate('app', 'Draw polygon: click = point, double click/Return/right click '
                                                      '= done, ⌫ = remove the last point, Esc = cancel'))

    def _polygon_drawn(self, cls: str, pts) -> None:
        node = tf.Node('Level Part', cls)
        before, after = [('Name', '')], []
        if cls == 'CWayPointsPolygon':                       # way point polygons have no name
            before = []
        elif cls == 'CRenderablePolygon':
            before, after = surface_entries(self._surface_choice)
        node.children += [tf.Entry(k, v) for k, v in before] + [tf.Entry('Polygon', '')]
        node.children += [tf.Entry(k, v) for k, v in after]
        LevelPart(node).polygon = polyedit.closed_new(pts)
        self.undo.push(AddPartsCommand(self.level, [node], self._parts_changed,
                                       translate('app', 'Draw {cls} (%n point(s))', None, len(pts)).format(cls=cls)))
        self.statusBar().showMessage(translate('app', '{cls} with %n point(s) created', None,
                                               len(pts)).format(cls=cls), 4000)

    def _poly_edit(self, part, pts, text: str) -> None:
        entry = part.node.item('Polygon')
        if entry is None:
            return
        cmd = EditCommand(part, entry, ', '.join(f'{num(x)}, {num(y)}' for x, y in pts), self._part_changed)
        cmd.setText(text)
        self.undo.push(cmd)

    # --- Ground --------------------------------------------------------------------
    def toggle_ground(self, on: bool) -> None:
        if on and self.scene is None:
            self.statusBar().showMessage(translate('app', 'Open a level first'), 4000)
            self.ground_action.setChecked(False)
            return
        if on:
            self.view.cancel_drawing()
            self.scene.clearSelection()
            self.ground_panel.set_level(self.level, self.assets)
            self.ground_dock.show()
            self.ground_dock.raise_()
            self.view.set_tool(self.ground_tool)
            self.statusBar().showMessage(translate('app', 'Paint ground: drag with the left mouse button, Alt + click '
                                                          '= pick up the texture'), 6000)
        else:
            self.view.set_tool(None)

    def _brush(self, d: int) -> None:
        s = self.ground_panel.size
        s.setValue(s.value() + d)

    def escape(self) -> None:
        if self.view.tool is not None:
            self.ground_action.setChecked(False)
            return
        if self.view.draw is not None:
            self.view.cancel_drawing()
            self.statusBar().showMessage(translate('app', 'Drawing cancelled'), 3000)
        elif self.scene:
            self.scene.clearSelection()

    def delete_selection(self) -> None:
        if self.view.draw is not None:
            self.view.undo_point()
            return
        parts = self.scene.selected_parts() if self.scene else []
        kids = [p for p in parts if self.scene.root_of(p) is not None]
        parts = [p for p in parts if self.scene.root_of(p) is None]
        if kids:
            self.remove_children(kids)
        if not parts:
            return
        gone = {id(p.node) for p in parts}
        warn = []
        for p in parts:
            for lk in self.link_index().links_to(p):
                if id(lk.source.node) not in gone and all(id(t.node) in gone for t in lk.targets):
                    warn.append(translate('app', '“{name}” ← {source} [{action} · {key}]').format(
                        name=p.name, source=describe(lk.source), action=lk.action, key=lk.key))
        if warn:
            more = [translate('app', '… and %n more', None, len(warn) - 12)] if len(warn) > 12 else []
            r = msgbox.warning(
                self, APP, translate('app', 'Scripts address these objects by their name. After deleting, these '
                                            'actions run into nothing:\n\n{list}\n\nDelete anyway?').format(
                    list='\n'.join(warn[:12] + more)), QMessageBox.Yes | QMessageBox.Cancel, QMessageBox.Cancel)
            if r != QMessageBox.Yes:
                return
        self.undo.push(RemovePartsCommand(self.level, parts, self._parts_changed))

    def _set_children(self, on: bool) -> None:
        self.settings.setValue('children', on)
        if self.scene:
            self.scene.set_show_children(on)

    def changeEvent(self, e):
        if e.type() == QEvent.WindowStateChange:
            self._pause_animations()
        super().changeEvent(e)

    def _pause_animations(self, *_) -> None:
        """Animations rest while the editor is not the active application or its window is minimised."""
        if getattr(self, 'scene', None) is not None:
            self.scene.set_paused(QApplication.applicationState() != Qt.ApplicationActive or self.isMinimized())

    def _set_animate(self, on: bool) -> None:
        self.settings.setValue('animate', on)
        if self.scene:
            self.scene.set_animate_models(on)

    def _set_grid(self, on: bool) -> None:
        self.settings.setValue('grid', on)
        if self.scene:
            self.scene.set_grid(on)

    def _set_filter(self, key: str, on: bool) -> None:
        if self.scene:
            self.scene.filters[key] = on
            self.scene.apply_filters()
            self._update_ai_overlay()

    def _show_mouse(self, x: float, y: float) -> None:
        if self.scene and not self.scene.selectedItems():
            self.statusBar().showMessage(f'x = {x:.0f}   y = {y:.0f}')

    def _update_title(self, clean: bool | None = None) -> None:
        """Document title: the level's file name, the edited marker through ``[*]`` (macOS: the dot in
        the close button; elsewhere a "*"), on macOS the file as the title's proxy icon once it exists."""
        if clean is None:
            clean = self.undo.isClean()
        if self.source:
            name = Path(self.source[1]).name
            self.setWindowTitle(f'{name}[*]' if macos.IS_MAC else f'{name}[*] – {APP}')
        else:
            self.setWindowTitle(APP)
        self.setWindowModified(not clean)
        t = self._target()
        self.setWindowFilePath(str(t) if t is not None and t.is_file() else '')

    def show_dialogue(self) -> None:
        """Level → Dialogue script: the dock with the script of the selected dialogue action."""
        self.dialogue_dock.show()
        self.dialogue_dock.raise_()
        parts = self.scene.selected_parts() if self.scene else []
        self.dialogue_panel.set_part(parts[0] if len(parts) == 1 else None)

    def closeEvent(self, e):
        if self.maybe_discard() and self.dialogue_panel.maybe_save():
            self.settings.setValue('geometry', self.saveGeometry())
            self.settings.setValue('window_state', self.saveState(LAYOUT_VERSION))
            if self._viewer is not None:
                self._viewer.close()
            e.accept()
        else:
            e.ignore()


def _data_root(target: Path) -> Path:
    """Folder that corresponds to the DATA folder (above Levels/...)."""
    return target.resolve().parents[len(Path(_data_relative(target)).parts) - 1]


def _data_relative(target: Path) -> str:
    """Path as below DATA: from the last folder "Levels" on (otherwise only the file name)."""
    parts = target.resolve().parts
    idx = [i for i, p in enumerate(parts) if p.lower() == 'levels']
    return Path(*parts[idx[-1]:]).as_posix() if idx else target.name


def _quiet_accessibility(mode, context, message) -> None:
    """Suppress harmless warnings of the macOS accessibility layer (queries for list entries that
    were just hidden or rebuilt); print everything else as usual."""
    if 'ccessib' in message or 'ccessib' in (context.category or ''):
        return
    sys.stderr.write(message + '\n')


def main(argv=None) -> int:
    qInstallMessageHandler(_quiet_accessibility)
    macos.set_app_name(APP)                         # menu bar and Dock: not "Python"
    app = QApplication(sys.argv if argv is None else argv)
    app.setApplicationName(APP)
    app.setWindowIcon(app_icon())
    follow_theme(app)
    # UI language (Window → Language, applied at the start): the editor's texts and Qt's own buttons
    i18n.install(app, i18n.resolve(i18n.chosen(QSettings(APP, APP))))
    w = MainWindow()
    w.show()
    args = app.arguments()[1:]
    if args and w.data_source() is not None:       # open a level directly: relative to Data/ or a file path
        if Path(args[0]).is_file():
            w.load(Path(args[0]).read_bytes(), ('file', args[0]))
        else:
            w.load(w.ds.read(args[0]), ('data', args[0]))
    return app.exec()
