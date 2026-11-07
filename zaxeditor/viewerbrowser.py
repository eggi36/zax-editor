"""Browser of the model viewer: every model, image sequence, font and image of the game data by kind and
folder, with search and thumbnails (cached on disk, drawn by zaxtools.preview like the main view)."""
from __future__ import annotations

import hashlib
import shutil
from pathlib import Path

import numpy as np
from PySide6.QtCore import QPointF, QSize, Qt, QTimer, Signal
from PySide6.QtGui import QColor, QIcon, QImage, QPainter, QPixmap
from PySide6.QtWidgets import (QLineEdit, QListView, QListWidget, QListWidgetItem, QSplitter, QTreeWidget,
                               QTreeWidgetItem, QVBoxLayout, QWidget)

from zaxtools import preview

from .i18n import QT_TRANSLATE_NOOP, translate
from .icons import hidpi_pixmap, ratio_suffix, scaled_hidpi, screen_ratio, style_splitter

THUMB = 88
THUMB_VERSION = 4          # increase when the drawing of thumbnails changes (2: Auto-Animate at the still frame, 3: 8-bit opacity steps, 4: Retina, small images enlarged sharp)
TILE_BG = QColor(38, 38, 38)
KEY_ROLE = Qt.UserRole
KIND_TEXTS = {'model': QT_TRANSLATE_NOOP('viewer', 'Models'), 'sequence': QT_TRANSLATE_NOOP('viewer', 'Image sequences'),
              'frame': QT_TRANSLATE_NOOP('viewer', 'Images'), 'font': QT_TRANSLATE_NOOP('viewer', 'Fonts')}


def to_qimage(rgb: np.ndarray) -> QImage:
    """RGB or RGBA uint8 array -> QImage (a copy)."""
    rgb = np.ascontiguousarray(rgb)
    h, w = rgb.shape[:2]
    fmt = QImage.Format_RGBA8888 if rgb.shape[2] == 4 else QImage.Format_RGB888
    return QImage(rgb.data, w, h, rgb.strides[0], fmt).copy()


def item_folder(item: preview.Item) -> str:
    """Folder of an item below its kind (models below Cache/Models, the rest below Cache)."""
    return item.name.rsplit('/', 1)[0] if '/' in item.name else ''


class ItemBrowser(QWidget):
    open_requested = Signal(object)          # preview.Item

    def __init__(self):
        super().__init__()
        self.ds = None
        self.thumb_dir: Path | None = None
        self.default_sequence = lambda item: None      # set by the window (model catalogue)
        self.palette = None
        self._items: dict[str, tuple[preview.Item, QListWidgetItem]] = {}
        self._pending: list[str] = []
        self._timer = QTimer(self)
        self._timer.setInterval(0)
        self._timer.timeout.connect(self._load_some_thumbs)

        self.search = QLineEdit()
        self.search.setPlaceholderText(translate('viewer', 'Search, e.g. crater, fire, gold'))
        self.search.setClearButtonEnabled(True)
        self.search.textChanged.connect(self._apply_filter)
        self.folders = QTreeWidget()
        self.folders.setHeaderHidden(True)
        self.folders.currentItemChanged.connect(lambda *_: self._apply_filter())
        self.grid = QListWidget()
        self.grid.setViewMode(QListView.IconMode)
        self.grid.setIconSize(QSize(THUMB, THUMB))
        self.grid.setGridSize(QSize(THUMB + 28, THUMB + 30))
        self.grid.setResizeMode(QListView.Adjust)
        self.grid.setMovement(QListView.Static)
        self.grid.setWordWrap(False)
        self.grid.setTextElideMode(Qt.ElideRight)
        self.grid.setUniformItemSizes(True)
        self.grid.setSelectionMode(QListWidget.SingleSelection)
        self.grid.currentItemChanged.connect(self._current_changed)
        self.grid.verticalScrollBar().valueChanged.connect(lambda _: self._queue_visible())
        split = QSplitter(Qt.Vertical)
        style_splitter(split)
        split.addWidget(self.folders)
        split.addWidget(self.grid)
        split.setStretchFactor(0, 2)
        split.setStretchFactor(1, 5)
        lay = QVBoxLayout(self)
        lay.setContentsMargins(4, 4, 4, 4)
        lay.addWidget(self.search)
        lay.addWidget(split, 1)

    # --- Data ----------------------------------------------------------------------------------
    def set_data(self, ds, items: list[preview.Item], cache_dir: Path, signature: str, palette) -> None:
        self.ds, self.palette = ds, palette
        self.thumb_dir = cache_dir / f'viewer-{signature[:16]}-v{THUMB_VERSION}{ratio_suffix()}'
        self.thumb_dir.mkdir(parents=True, exist_ok=True)
        for old in cache_dir.glob('viewer-*'):                  # remove outdated thumbnails
            if old != self.thumb_dir and old.is_dir():
                shutil.rmtree(old, ignore_errors=True)
        self.grid.clear()
        self._items.clear()
        for item in items:
            it = QListWidgetItem(item.name.rsplit('/', 1)[-1])
            it.setData(KEY_ROLE, self._key(item))
            it.setToolTip(f'{item.name}\n{item.key}  ({" / ".join(f"{d} bit" for d in item.depths)})')
            it.setSizeHint(self.grid.gridSize())
            self.grid.addItem(it)
            self._items[self._key(item)] = (item, it)
        self._build_folders(items)
        self._apply_filter()

    @staticmethod
    def _key(item: preview.Item) -> str:
        return f'{item.kind}:{item.key}'

    def _build_folders(self, items: list[preview.Item]) -> None:
        self.folders.blockSignals(True)
        self.folders.clear()
        counts: dict[tuple[str, str], int] = {}
        for item in items:
            parts = item_folder(item).split('/') if item_folder(item) else []
            for i in range(len(parts) + 1):
                k = (item.kind, '/'.join(parts[:i]))
                counts[k] = counts.get(k, 0) + 1
        first = None
        for kind in preview.KINDS:
            if (kind, '') not in counts:
                continue
            root = QTreeWidgetItem([translate('viewer', '{kind} ({count})').format(
                kind=translate('viewer', KIND_TEXTS[kind]), count=counts[(kind, '')])])
            root.setData(0, KEY_ROLE, (kind, ''))
            self.folders.addTopLevelItem(root)
            nodes = {'': root}
            for k in sorted((f for kk, f in counts if kk == kind and f), key=str.lower):
                parent = nodes[k.rsplit('/', 1)[0] if '/' in k else '']
                it = QTreeWidgetItem(parent, [f'{k.rsplit("/", 1)[-1]} ({counts[(kind, k)]})'])
                it.setData(0, KEY_ROLE, (kind, k))
                nodes[k] = it
            first = first or root
        self.folders.blockSignals(False)
        if first is not None:
            first.setExpanded(True)
            self.folders.setCurrentItem(first)

    # --- Filter / selection --------------------------------------------------------------------
    def _apply_filter(self) -> None:
        cur = self.folders.currentItem()
        kind, folder = cur.data(0, KEY_ROLE) if cur else (None, '')
        words = self.search.text().lower().split()
        for item, it in self._items.values():
            low = item.name.lower()
            in_folder = (kind is None or item.kind == kind) and (not folder or low.startswith(folder.lower() + '/'))
            # a search looks through every kind and folder
            it.setHidden(not ((in_folder or words) and all(w in low for w in words)))
        self._queue_visible()

    def _current_changed(self, it, _prev=None) -> None:
        if it is not None:
            self.open_requested.emit(self._items[it.data(KEY_ROLE)][0])

    def select(self, item: preview.Item) -> None:
        """Show ``item`` as the current one without opening it again."""
        entry = self._items.get(self._key(item))
        if entry is None:
            return
        self.grid.blockSignals(True)
        if entry[1].isHidden():
            self.search.clear()
            self.folders.setCurrentItem(self.folders.topLevelItem(0))
        self.grid.setCurrentItem(entry[1])
        self.grid.scrollToItem(entry[1])
        self.grid.blockSignals(False)

    def find(self, kind: str | None, key: str) -> preview.Item | None:
        low = key.lower()
        for item, _ in self._items.values():
            if item.key.lower() == low and (kind is None or item.kind == kind):
                return item
        return None

    def focus_search(self) -> None:
        self.search.setFocus()
        self.search.selectAll()

    # --- Thumbnails -------------------------------------------------------------------------------
    def _thumb_file(self, key: str) -> Path:
        return self.thumb_dir / (hashlib.sha1(key.encode('utf-8')).hexdigest() + '.png')

    def _queue_visible(self) -> None:
        vp = self.grid.viewport().rect()
        self._pending = [k for k, (_, it) in self._items.items()
                         if it.icon().isNull() and not it.isHidden() and self.grid.visualItemRect(it).intersects(vp)]
        if self._pending:
            self._timer.start()

    def _load_some_thumbs(self) -> None:
        """Only a few images per pass so the UI stays responsive."""
        for _ in range(3):
            if not self._pending:
                self._timer.stop()
                return
            key = self._pending.pop(0)
            item, it = self._items[key]
            f = self._thumb_file(key)
            pm = QPixmap(str(f)) if f.exists() else QPixmap()
            pm.setDevicePixelRatio(screen_ratio())
            if pm.isNull():
                pm = self._render_thumb(item)
                pm.save(str(f), 'PNG')
            it.setIcon(QIcon(pm))

    def _render_thumb(self, item: preview.Item) -> QPixmap:
        pm = hidpi_pixmap(THUMB, THUMB)
        p = QPainter(pm)
        p.setRenderHint(QPainter.Antialiasing)
        p.setPen(Qt.NoPen)
        p.setBrush(TILE_BG)
        p.drawRoundedRect(0, 0, THUMB, THUMB, 8, 8)
        try:
            bpp = item.depths[0]
            v = preview.load(self.ds.read(item.rel(bpp)), item.kind, item.name, self.palette if bpp == 8 else None)
            layers = preview.layer_list(v.model, self.default_sequence(item))
            base = preview.base_layer(layers)
            i = preview.still_index(base.seq if base else None)
            t = i / base.seq.fps if base and base.seq.fps > 0 else 0.0       # Auto-Animate layers at that frame
            box = preview.content_box(layers, [0.0], margin=1)
            img, drawn = preview.compose(layers, 0.0, i, t, False, box, 'grey')
        except (OSError, ValueError, KeyError, IndexError):
            drawn = []
        if drawn:
            small = scaled_hidpi(QPixmap.fromImage(to_qimage(img)), THUMB - 6, THUMB - 6)
            size = small.deviceIndependentSize()
            p.drawPixmap(QPointF((THUMB - size.width()) / 2, (THUMB - size.height()) / 2), small)
        p.end()
        return pm

    def resizeEvent(self, e):
        super().resizeEvent(e)
        self._queue_visible()
