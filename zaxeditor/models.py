"""Model browser: all models by folder, with thumbnails, search and details.

Place by double-click/button (centre of the view) or by dragging onto the map. Thumbnails are
generated on demand and cached on disk.
"""
from __future__ import annotations

import hashlib
import html
import shutil
from pathlib import Path

from PySide6.QtCore import QMimeData, QPointF, QSize, Qt, QTimer, Signal
from PySide6.QtGui import QColor, QDrag, QIcon, QPainter, QPixmap
from PySide6.QtWidgets import (QHBoxLayout, QLabel, QLineEdit, QListView, QListWidget, QMenu,
                               QListWidgetItem, QPushButton, QSplitter, QTreeWidget,
                               QTreeWidgetItem, QVBoxLayout, QWidget)

from zaxtools.catalog import Catalog, ModelInfo
from zaxtools.usage import Usage

from .i18n import translate
from .icons import hidpi_pixmap, ratio_suffix, scaled_hidpi, screen_ratio, style_splitter
from .scene import SpriteCache

MIME = 'application/x-zax-model'
THUMB = 88
THUMB_VERSION = 5          # increase when the drawing of models changes (2: shadows filled, 3: rounded corners, 4: empty frames, 5: Retina, small models enlarged sharp)
TILE_BG = QColor(38, 38, 38)
PATH_ROLE = Qt.UserRole
ALL = ''
# marks of the model's use in the game (zaxtools.usage): placed in a level = no mark
USE_MARKS = {'used': '○', 'possibly': '◌', 'unused': '◇'}


def render_thumb(sprites: SpriteCache, info: ModelInfo) -> QPixmap:
    pm = hidpi_pixmap(THUMB, THUMB)
    p = QPainter(pm)
    p.setRenderHint(QPainter.Antialiasing)
    p.setPen(Qt.NoPen)
    p.setBrush(TILE_BG)
    p.drawRoundedRect(0, 0, THUMB, THUMB, 8, 8)
    p.end()
    r = sprites.get(info.path, info.default_sequence)
    layers = (r[0] + r[1]) if r else []
    if layers:
        rect = layers[0].rect
        for s in layers[1:]:
            rect = rect.united(s.rect)
        full = QPixmap(max(1, int(rect.width())), max(1, int(rect.height())))
        full.fill(TILE_BG)
        p = QPainter(full)
        p.translate(-rect.x(), -rect.y())
        for s in layers:
            s.draw(p, s.still)
        p.end()
        small = scaled_hidpi(full, THUMB - 6, THUMB - 6)
        size = small.deviceIndependentSize()
        p = QPainter(pm)
        p.drawPixmap(QPointF((THUMB - size.width()) / 2, (THUMB - size.height()) / 2), small)
        p.end()
    return pm


class ModelGrid(QListWidget):
    """Tile view; dragging delivers the model path as MIME data."""

    def __init__(self):
        super().__init__()
        self.setViewMode(QListView.IconMode)
        self.setIconSize(QSize(THUMB, THUMB))
        self.setGridSize(QSize(THUMB + 28, THUMB + 30))
        self.setResizeMode(QListView.Adjust)
        self.setMovement(QListView.Static)
        self.setWordWrap(False)                 # shorten long names with "...", full name in the tooltip
        self.setTextElideMode(Qt.ElideRight)
        self.setUniformItemSizes(True)
        self.setDragEnabled(True)
        self.setSelectionMode(QListWidget.SingleSelection)

    def startDrag(self, actions):
        it = self.currentItem()
        if it is None:
            return
        mime = QMimeData()
        mime.setData(MIME, it.data(PATH_ROLE).encode('utf-8'))
        drag = QDrag(self)
        drag.setMimeData(mime)
        if not it.icon().isNull():
            drag.setPixmap(it.icon().pixmap(THUMB, THUMB))
        drag.exec(Qt.CopyAction)


class ModelBrowser(QWidget):
    place_requested = Signal(str)          # model path, place in the centre of the view
    view_requested = Signal(str)           # model path, open in the model viewer
    attach_requested = Signal(str)         # model path, attach to the selected object as a child object

    def __init__(self):
        super().__init__()
        self.catalog: Catalog | None = None
        self.usage: Usage | None = None
        self.sprites: SpriteCache | None = None
        self.thumb_dir: Path | None = None
        self._items: dict[str, QListWidgetItem] = {}
        self._pending: list[str] = []
        self._timer = QTimer(self)
        self._timer.setInterval(0)
        self._timer.timeout.connect(self._load_some_thumbs)

        self.search = QLineEdit()
        self.search.setPlaceholderText(translate('models', 'Search a model, e.g. palm, rock, rogcoil'))
        self.search.setClearButtonEnabled(True)
        self.search.textChanged.connect(self._apply_filter)
        self.folders = QTreeWidget()
        self.folders.setHeaderHidden(True)
        self.folders.currentItemChanged.connect(lambda *_: self._apply_filter())
        self.grid = ModelGrid()
        self.grid.currentItemChanged.connect(self._show_details)
        self.grid.itemDoubleClicked.connect(lambda it: self.place_requested.emit(it.data(PATH_ROLE)))
        self.grid.verticalScrollBar().valueChanged.connect(lambda _: self._queue_visible())
        self.grid.setContextMenuPolicy(Qt.CustomContextMenu)
        self.grid.customContextMenuRequested.connect(self._context_menu)
        self.details = QLabel(self._empty_details())
        self.details.setWordWrap(True)
        self.details.setTextInteractionFlags(Qt.TextSelectableByMouse)
        self.details.setAlignment(Qt.AlignTop | Qt.AlignLeft)
        self.details.setMinimumHeight(self.details.fontMetrics().lineSpacing() * 3)
        self.details.setContentsMargins(2, 4, 2, 2)
        self.place = QPushButton(translate('models', 'Place in the centre of the view'))
        self.place.setEnabled(False)
        self.place.clicked.connect(lambda: self.grid.currentItem()
                                   and self.place_requested.emit(self.grid.currentItem().data(PATH_ROLE)))
        split = QSplitter(Qt.Vertical)
        style_splitter(split)
        split.addWidget(self.folders)
        split.addWidget(self.grid)
        split.addWidget(self.details)
        split.setStretchFactor(0, 2)
        split.setStretchFactor(1, 5)
        split.setStretchFactor(2, 1)
        bottom = QHBoxLayout()
        bottom.addStretch(1)
        bottom.addWidget(self.place)
        lay = QVBoxLayout(self)
        lay.setContentsMargins(4, 4, 4, 4)
        lay.addWidget(self.search)
        lay.addWidget(split, 1)
        lay.addLayout(bottom)

    # --- Data ----------------------------------------------------------------------
    def set_catalog(self, catalog: Catalog, sprites: SpriteCache, cache_dir: Path) -> None:
        self.catalog, self.sprites = catalog, sprites
        self.thumb_dir = cache_dir / f'vorschau-{catalog.signature[:16]}-v{THUMB_VERSION}{ratio_suffix()}'
        self.thumb_dir.mkdir(parents=True, exist_ok=True)
        for old in cache_dir.glob('vorschau-*'):                    # remove outdated thumbnails
            if old != self.thumb_dir and old.is_dir():
                shutil.rmtree(old, ignore_errors=True)
        self._build_folders()
        self.grid.clear()
        self._items.clear()
        for path, info in sorted(catalog.models.items(), key=lambda kv: kv[0].lower()):
            it = QListWidgetItem()
            it.setData(PATH_ROLE, path)
            it.setSizeHint(self.grid.gridSize())
            self.grid.addItem(it)
            self._items[path] = it
        self._label_items()
        self._apply_filter()

    def set_usage(self, usage: Usage | None) -> None:
        """The game's use of the models (zaxtools.usage): marks and tooltips say whether a model is placed in a
        level, used by the game in another way, possibly used or never used."""
        self.usage = usage
        self._label_items()
        if self.grid.currentItem() is not None:
            self._show_details(self.grid.currentItem())

    def _use(self, info: ModelInfo) -> str | None:
        """'placed' / 'used' / 'possibly' / 'unused', or None without the analysis (then only the level use of
        the catalogue is known)."""
        return self.usage.model_use(info.path) if self.usage is not None else None

    def _mark(self, info: ModelInfo) -> str:
        if info.own and self.usage is not None and self.usage.model(info.path) is None:
            return '★ '                              # a new model of the output folder
        own = '★ ' if info.own else ''
        use = self._use(info)
        if use is None and info.own:
            return own
        if use is None:
            return own + ('◇ ' if not info.uses else '')
        return own + (USE_MARKS[use] + ' ' if use in USE_MARKS else '')

    def _label_items(self) -> None:
        if self.catalog is None:
            return
        for path, it in self._items.items():
            info = self.catalog[path]
            mark = ('⚠ ' if info.head in ('unreadable', 'no-exe') else '') + self._mark(info)
            it.setText(mark + info.name)             # markers in front so they survive the shortening
            it.setToolTip(self._tooltip(info))

    def _build_folders(self) -> None:
        self.folders.clear()
        counts: dict[str, int] = {}
        for info in self.catalog.models.values():
            parts = info.folder.split('/') if info.folder else []
            for i in range(len(parts) + 1):
                key = '/'.join(parts[:i])
                counts[key] = counts.get(key, 0) + 1
        root = QTreeWidgetItem([translate('models', 'All models ({count})').format(count=counts.get(ALL, 0))])
        root.setData(0, PATH_ROLE, ALL)
        self.folders.addTopLevelItem(root)
        nodes = {ALL: root}
        for key in sorted(k for k in counts if k):
            parent = nodes[key.rsplit('/', 1)[0] if '/' in key else ALL]
            it = QTreeWidgetItem(parent, [f'{key.rsplit("/", 1)[-1]} ({counts[key]})'])
            it.setData(0, PATH_ROLE, key)
            nodes[key] = it
        root.setExpanded(True)
        self.folders.setCurrentItem(root)

    @staticmethod
    def _empty_details() -> str:
        return '<span style="color:gray">{}</span>'.format(
            translate('models', 'Choose a model for details. Place it: double click or drag onto the map.'))

    def _use_text(self, info: ModelInfo) -> str:
        """One line on the model's use in the game, with its mark."""
        if info.own:
            shipped = self.usage is not None and self.usage.model(info.path) is not None
            return '★ ' + (translate('models', 'Own copy in the output folder (it wins over the shipped model when '
                                                'copied below Data).') if shipped or info.uses else
                           translate('models', 'Own model in the output folder (made by File → Import images).'))
        use = self._use(info)
        if use is None:
            return '◇ ' + translate('models', 'occurs in no level') if not info.uses else ''
        return {
            'placed': translate('models', 'Placed in levels.'),
            'used': '○ ' + translate('models', 'Not placed in any level, but used by the game.'),
            'possibly': '◌ ' + translate('models', 'Possibly used by the game.'),
            'unused': '◇ ' + translate('models', 'Never used by the game.'),
        }[use]

    def _use_reasons(self, info: ModelInfo, limit: int = 3) -> list[str]:
        """Why (analysis texts, English): the reason and the first references."""
        a = self.usage.model(info.path) if self.usage is not None else None
        if a is None or self._use(info) == 'placed':
            return []
        out = [a.reason] if a.reason else []
        refs = a.referenced_by[:limit]
        if refs:
            head = translate('models', 'Referenced by:') if a.status == 'used' else translate('models', 'Details:')
            out.append(head)
            out += ['  ' + r for r in refs]
            if len(a.referenced_by) > limit:
                out.append('  ' + translate('models', '… and %n more', None, len(a.referenced_by) - limit))
        return out

    def _tooltip(self, info: ModelInfo) -> str:
        lines = [info.name, info.path]
        use = self._use_text(info)
        if use:
            lines.append(use)
        lines += self._use_reasons(info)
        return '\n'.join(lines)

    # --- Filter / selection ------------------------------------------------------------
    def _apply_filter(self) -> None:
        if self.catalog is None:
            return
        cur = self.folders.currentItem()
        folder = cur.data(0, PATH_ROLE) if cur else ALL
        words = self.search.text().lower().split()
        for path, it in self._items.items():
            low = path.lower()
            in_folder = not folder or low.startswith(folder.lower() + '/')
            it.setHidden(not (in_folder and all(w in low for w in words)))
        self._queue_visible()

    def _show_details(self, it, _prev=None) -> None:
        self.place.setEnabled(it is not None)
        if it is None or self.catalog is None:
            self.details.setText(self._empty_details())
            return
        info = self.catalog[it.data(PATH_ROLE)]
        cls = info.cls + (' · ' + translate('models', 'AI {ai}').format(ai=info.ai) if info.ai else '')
        if info.uses:
            src = translate('models', '{count}× in levels, e.g. “{example}”').format(count=info.uses,
                                                                                     example=info.example)
        elif self._use(info) is None and not info.own:
            src = '◇ ' + translate('models', 'Occurs in no level (class from the model header).')
        else:
            src = html.escape(self._use_text(info))
            reasons = self._use_reasons(info, 2)
            if reasons:
                src += '<br><span style="color:gray">' + '<br>'.join(html.escape(r) for r in reasons) + '</span>'
        how = {
            'default': translate('models', 'Created with the default object of the model ({cls}).').format(cls=info.cls),
            'no-default': translate('models', 'The model has no default object: minimal object (enough for decoration, '
                                              'effects, pickups).'),
            'unreadable': '⚠ ' + translate('models', 'Model header not readable – minimal object. Figures lack AI and '
                                                     'weapon.'),
            'no-exe': '⚠ ' + translate('models', 'Without Zax.exe no default object – minimal object (File → Choose '
                                                 'Zax.exe).'),
        }.get(info.head, '')
        src += '<br>' + how + ' ' + translate('models', 'Start sequence “{sequence}”.').format(
            sequence=info.default_sequence)
        seqs = ', '.join(info.sequences[:12]) + (' …' if len(info.sequences) > 12 else '')
        self.details.setText(f'<b>{info.path}</b><br>{cls}<br>{src}<br><span style="color:gray">'
                             + translate('models', 'Sequences: {list}').format(list=seqs) + '</span>')

    def _context_menu(self, pos) -> None:
        it = self.grid.itemAt(pos)
        if it is None:
            return
        menu = QMenu(self)
        menu.addAction(translate('models', 'Place in the centre of the view'),
                       lambda: self.place_requested.emit(it.data(PATH_ROLE)))
        menu.addAction(translate('models', 'Open in the model viewer'), lambda: self.view_requested.emit(it.data(PATH_ROLE)))
        menu.addAction(translate('models', 'Attach to the selected object (child object)'),
                       lambda: self.attach_requested.emit(it.data(PATH_ROLE)))
        menu.exec(self.grid.viewport().mapToGlobal(pos))

    # --- Thumbnails ----------------------------------------------------------------------
    def _thumb_file(self, path: str) -> Path:
        return self.thumb_dir / (hashlib.sha1(path.encode('utf-8')).hexdigest() + '.png')

    def _queue_visible(self) -> None:
        vp = self.grid.viewport().rect()
        self._pending = [p for p, it in self._items.items()
                         if it.icon().isNull() and not it.isHidden()
                         and self.grid.visualItemRect(it).intersects(vp)]
        if self._pending:
            self._timer.start()

    def _load_some_thumbs(self) -> None:
        """Only a few images per pass so the UI stays responsive."""
        for _ in range(4):
            if not self._pending:
                self._timer.stop()
                return
            path = self._pending.pop(0)
            it = self._items[path]
            f = self._thumb_file(path)
            own = self.catalog[path].own          # own models change: no thumbnail on disk
            pm = QPixmap(str(f)) if f.exists() and not own else QPixmap()
            pm.setDevicePixelRatio(screen_ratio())
            if pm.isNull():
                pm = render_thumb(self.sprites, self.catalog[path])
                if not own:
                    pm.save(str(f), 'PNG')
            it.setIcon(QIcon(pm))

    def select(self, path: str) -> None:
        """Show and select a model (after an import)."""
        it = self._items.get(path)
        if it is None:
            return
        self.search.clear()
        self.folders.setCurrentItem(self.folders.topLevelItem(0))
        self.grid.setCurrentItem(it)
        self.grid.scrollToItem(it)

    def resizeEvent(self, e):
        super().resizeEvent(e)
        self._queue_visible()

    def focus_search(self) -> None:
        self.search.setFocus()
        self.search.selectAll()
