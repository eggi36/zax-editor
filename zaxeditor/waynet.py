"""View → Way point network: the way points and segments the game builds for the level when it loads it
without a ``.way`` (``zaxtools.waymap``, equal to all 112 shipped ``.way`` files).

The network is computed in a background thread from a copy of the level text (up to about 2.5 s for the
largest levels) and rebuilt a moment after every change; a result for an older state of the level is
dropped. Way points of the main network are drawn green, islands (not joined to it) orange.
"""
from __future__ import annotations

import threading

from PySide6.QtCore import QObject, QRectF, Qt, QTimer, Signal
from PySide6.QtGui import QColor, QPainterPath, QPen
from PySide6.QtWidgets import QGraphicsPathItem

from zaxtools import waymap
from zaxtools.level import Level

from .i18n import translate
from .scene import Z_POLY

Z_WAYNET = Z_POLY + 1.2           # above the polygons, below the AI overlays and link arrows
DELAY_MS = 700                    # rebuild this long after the last change
NODE = 2.5                        # half size of a way point's square (world pixels)
MAIN, ISLAND = QColor(60, 220, 90), QColor(255, 150, 40)


class _Signals(QObject):
    done = Signal(int, object)


class WayNetwork:
    """The network's items in the scene of the main window."""

    def __init__(self, status=None):
        self.items: list = []
        self.scene = None
        self.enabled = False
        self.model_data = None            # waymap model_data provider
        self.result: waymap.Result | None = None
        self._status = status or (lambda text: None)
        self._gen = 0
        self._level_fn = None
        self._sig = _Signals()
        self._sig.done.connect(self._finished)
        self._timer = QTimer()
        self._timer.setSingleShot(True)
        self._timer.timeout.connect(self._start)

    def clear(self) -> None:
        for it in self.items:
            if it.scene() is not None:
                it.scene().removeItem(it)
        self.items = []

    def set_scene(self, scene, level_fn, model_data) -> None:
        """A new level: ``level_fn()`` gives the current Level (None without one)."""
        self.clear()
        self.result = None
        self.scene, self._level_fn, self.model_data = scene, level_fn, model_data
        self.schedule(0)

    def set_enabled(self, on: bool) -> None:
        self.enabled = on
        if not on:
            self.clear()
        else:
            self.schedule(0)

    def schedule(self, delay: int = DELAY_MS) -> None:
        """Rebuild after ``delay`` ms (the timer restarts with every change)."""
        self._gen += 1
        if self.enabled and self.scene is not None:
            self._timer.start(delay)

    def _start(self) -> None:
        level = self._level_fn() if self._level_fn else None
        if level is None or self.model_data is None:
            return
        gen, data, md = self._gen, level.to_bytes(), self.model_data
        self._status(translate('waynet', 'Computing the way point network …'))

        def work():
            try:
                res = waymap.build(Level.from_bytes(data), md)
            except Exception as e:          # noqa: BLE001 - shown in the status bar
                res = e
            self._sig.done.emit(gen, res)

        threading.Thread(target=work, daemon=True).start()

    def _finished(self, gen: int, res) -> None:
        if gen != self._gen or not self.enabled or self.scene is None:
            return
        if isinstance(res, Exception):
            self._status(translate('waynet', 'Way point network failed: {error}').format(error=res))
            return
        self.result = res
        self._draw(res)
        comp = waymap.components(res.way)
        islands = len(set(comp) - {0})
        text = translate('waynet', 'Way point network: %n way point(s)', None, len(res.way.nodes))
        text += ', ' + translate('waynet', '%n segment(s)', None, len(res.way.edges))
        if islands:
            text += ', ' + translate('waynet', '%n island(s)', None, islands)
        if not res.exact:
            text += ' ' + translate('waynet', '(approximate: without Zax.exe the AIs of the models are unknown)')
        self._status(text)

    def _draw(self, res) -> None:
        self.clear()
        w = res.way
        comp = waymap.components(w)
        edges = {True: QPainterPath(), False: QPainterPath()}
        for e in w.edges:
            if e.a == e.b:
                continue
            a, b = w.nodes[e.a], w.nodes[e.b]
            p = edges[comp[e.a] == 0]
            p.moveTo(a.x, a.y)
            p.lineTo(b.x, b.y)
        nodes = {True: QPainterPath(), False: QPainterPath()}
        for i, n in enumerate(w.nodes):
            nodes[comp[i] == 0].addRect(QRectF(n.x - NODE, n.y - NODE, 2 * NODE, 2 * NODE))
        for main, colour in ((True, MAIN), (False, ISLAND)):
            pen = QPen(QColor(colour.red(), colour.green(), colour.blue(), 150), 0)
            pen.setCosmetic(True)
            it = QGraphicsPathItem(edges[main])
            it.setPen(pen)
            self._add(it)
            it = QGraphicsPathItem(nodes[main])
            it.setPen(QPen(Qt.NoPen))
            it.setBrush(colour)
            self._add(it)
        if self.items:
            self.items[0].setToolTip(translate('waynet', 'Way point network as the game builds it'))

    def _add(self, it) -> None:
        it.setZValue(Z_WAYNET)
        it.setAcceptedMouseButtons(Qt.NoButton)
        it.setAcceptHoverEvents(False)
        self.scene.addItem(it)
        self.items.append(it)
