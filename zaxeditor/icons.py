"""Icons for the toolbar and menus: line drawings on a 24-unit grid, drawn in the text colour
(suits light and dark, redrawn when the system switches between them: ``set_icon``,
``follow_theme``), the same stroke width for all."""
from __future__ import annotations

from PySide6.QtCore import QObject, QPointF, QRectF, Qt, QTimer
from PySide6.QtGui import (QColor, QIcon, QLinearGradient, QPainter, QPainterPath, QPalette, QPen,
                           QPixmap)
from PySide6.QtWidgets import QApplication, QSplitter

SIZE = 64          # Qt scales it down to the toolbar size
STROKE = 1.8       # in grid units (24 = full width)


def _poly(*pts, closed=False) -> QPainterPath:
    path = QPainterPath(QPointF(*pts[0]))
    for p in pts[1:]:
        path.lineTo(*p)
    if closed:
        path.closeSubpath()
    return path


def _arc(cx, cy, r, start, span) -> QPainterPath:
    rect = QRectF(cx - r, cy - r, 2 * r, 2 * r)
    path = QPainterPath()
    path.arcMoveTo(rect, start)
    path.arcTo(rect, start, span)
    return path


def _circle(cx, cy, r) -> QPainterPath:
    path = QPainterPath()
    path.addEllipse(QPointF(cx, cy), r, r)
    return path


def _rect(x, y, w, h, r=1.5) -> QPainterPath:
    path = QPainterPath()
    path.addRoundedRect(QRectF(x, y, w, h), r, r)
    return path


_PENTAGON = ((12, 3), (21, 9.5), (17.5, 20.5), (6.5, 20.5), (3, 9.5))
_HEXAGON = ((12, 3), (20, 7.5), (20, 16.5), (12, 21), (4, 16.5), (4, 7.5))


def _magnifier():
    return [_circle(10.5, 10.5, 6.5), _poly((15.3, 15.3), (21, 21))]


# Per icon: lines (stroked) and optionally areas (filled, semi-opaque or solid)
_ICONS = {
    'new': lambda: [_poly((14, 3), (6, 3), (6, 21), (18, 21), (18, 7), (14, 3), (14, 7), (18, 7)),
                    _poly((12, 10.5), (12, 17.5)), _poly((8.5, 14), (15.5, 14))],
    'open': lambda: [_poly((3, 19), (3, 5), (9, 5), (11, 7.5), (19, 7.5), (19, 10)),
                     _poly((3, 19), (6.5, 10.5), (21.5, 10.5), (18, 19), closed=True)],
    'save': lambda: [_poly((12, 3), (12, 14)), _poly((7.5, 9.5), (12, 14), (16.5, 9.5)),
                     _poly((4, 15), (4, 20), (20, 20), (20, 15))],
    'undo': lambda: [_arc(13, 13.5, 6.5, 90, -240), _poly((3.5, 4.5), (6.5, 7.8), (10.5, 5.5))],
    'redo': lambda: [_arc(11, 13.5, 6.5, 90, 240), _poly((20.5, 4.5), (17.5, 7.8), (13.5, 5.5))],
    'objects': lambda: [_poly((9, 6), (20, 6)), _poly((9, 12), (20, 12)), _poly((9, 18), (20, 18)),
                        ('fill', _circle(5, 6, 1.4)), ('fill', _circle(5, 12, 1.4)),
                        ('fill', _circle(5, 18, 1.4))],
    'models': lambda: [_poly((12, 2.5), (20.5, 7), (20.5, 17), (12, 21.5), (3.5, 17), (3.5, 7), closed=True),
                       _poly((3.5, 7), (12, 11.5), (20.5, 7)), _poly((12, 11.5), (12, 21.5))],
    'props': lambda: [_circle(12, 12, 9), _poly((12, 11), (12, 17)), ('fill', _circle(12, 7.6, 1.3))],
    'duplicate': lambda: [_rect(8.5, 8.5, 12, 12), _poly((15.5, 5.5), (15.5, 3.5), (3.5, 3.5), (3.5, 15.5), (5.5, 15.5))],
    'rename': lambda: [_poly((15, 4.5), (19.5, 9), (8.5, 20), (4, 20), (4, 15.5), closed=True),
                       _poly((12.5, 7), (17, 11.5))],
    'delete': lambda: [_poly((3.5, 6.5), (20.5, 6.5)), _poly((9, 6.5), (9.5, 3.5), (14.5, 3.5), (15, 6.5)),
                       _poly((5.5, 6.5), (6.8, 20.5), (17.2, 20.5), (18.5, 6.5)),
                       _poly((10, 10.5), (10, 16.5)), _poly((14, 10.5), (14, 16.5))],
    'collision': lambda: [('tint', _poly(*_PENTAGON, closed=True)), _poly(*_PENTAGON, closed=True)],
    'waypoints': lambda: [_poly(*_HEXAGON, closed=True)] + [('fill', _circle(x, y, 2.2)) for x, y in _HEXAGON],
    'surface': lambda: [('fill', _poly((3, 21), (3, 9), (15, 21), closed=True)),
                        _poly((3, 3), (21, 3), (21, 21), (3, 21), closed=True)],
    'exit': lambda: [_poly((10, 20), (4, 20), (4, 4), (10, 4)), _poly((9, 12), (20, 12)),
                     _poly((16, 8), (20, 12), (16, 16))],
    'spawn': lambda: [_poly((5.5, 21.5), (5.5, 3)),
                      ('tint', _poly((5.5, 3.5), (19.5, 3.5), (16, 8), (19.5, 12.5), (5.5, 12.5), closed=True)),
                      _poly((5.5, 3.5), (19.5, 3.5), (16, 8), (19.5, 12.5), (5.5, 12.5))],
    'ground': lambda: [_rect(3, 3, 18, 18, 1), _poly((3, 9), (21, 9)), _poly((3, 15), (21, 15)),
                       _poly((9, 3), (9, 21)), _poly((15, 3), (15, 21)),
                       ('fill', QRectF(9, 9, 6, 6)), ('fill', QRectF(15, 15, 6, 6)), ('fill', QRectF(3, 15, 6, 6))],
    'zoom_in': lambda: _magnifier() + [_poly((10.5, 7.5), (10.5, 13.5)), _poly((7.5, 10.5), (13.5, 10.5))],
    'zoom_out': lambda: _magnifier() + [_poly((7.5, 10.5), (13.5, 10.5))],
    'fit': lambda: [_poly((3, 8.5), (3, 3), (8.5, 3)), _poly((15.5, 3), (21, 3), (21, 8.5)),
                    _poly((21, 15.5), (21, 21), (15.5, 21)), _poly((8.5, 21), (3, 21), (3, 15.5)),
                    _rect(8, 8, 8, 8, 1)],
    'links': lambda: [_circle(5.5, 17.5, 2.5), _circle(18.5, 6.5, 2.5),
                      _poly((7.5, 15.5), (13.5, 10.5)), _poly((10.5, 10), (14.8, 9.4), (14, 13.6))],
    'add': lambda: [_poly((12, 3), (14.2, 9.8), (21, 12), (14.2, 14.2), (12, 21), (9.8, 14.2), (3, 12), (9.8, 9.8),
                          closed=True)],
}


def icon(name: str) -> QIcon:
    pal = QApplication.palette()
    out = QIcon()
    for mode, role in ((QIcon.Normal, QPalette.Active), (QIcon.Disabled, QPalette.Disabled)):
        color = pal.color(role, QPalette.WindowText)
        tint = QColor(color)
        tint.setAlphaF(color.alphaF() * 0.3)
        pm = QPixmap(SIZE, SIZE)
        pm.fill(Qt.transparent)
        p = QPainter(pm)
        p.setRenderHint(QPainter.Antialiasing)
        p.scale(SIZE / 24, SIZE / 24)
        pen = QPen(color, STROKE, Qt.SolidLine, Qt.RoundCap, Qt.RoundJoin)
        for part in _ICONS[name]():
            kind, shape = part if isinstance(part, tuple) else ('line', part)
            if kind == 'line':
                p.strokePath(shape, pen)
            elif isinstance(shape, QRectF):
                p.fillRect(shape, color)
            else:
                p.fillPath(shape, color if kind == 'fill' else tint)
        p.end()
        out.addPixmap(pm, mode)
    return out


def screen_ratio() -> float:
    """Device pixel ratio for drawn and cached images: the highest of the screens (2 on Retina)."""
    app = QApplication.instance()
    return max(1.0, app.devicePixelRatio()) if app is not None else 1.0


def ratio_suffix() -> str:
    """Suffix for a cache folder of images drawn at ``screen_ratio`` ('' at 1, '-x2' on Retina)."""
    r = screen_ratio()
    return '' if r == 1 else f'-x{r:g}'


def hidpi_pixmap(w: int, h: int) -> QPixmap:
    """Transparent pixmap of w × h logical pixels with the screens' pixel density (sharp on Retina)."""
    r = screen_ratio()
    pm = QPixmap(round(w * r), round(h * r))
    pm.setDevicePixelRatio(r)
    pm.fill(Qt.transparent)
    return pm


def scaled_hidpi(pm: QPixmap, w: int, h: int) -> QPixmap:
    """``pm`` scaled to fit w × h logical pixels, at the screens' pixel density: reduced smoothly,
    enlarged with sharp pixels (pixel art)."""
    r = screen_ratio()
    w, h = round(w * r), round(h * r)
    grow = pm.width() < w and pm.height() < h
    out = pm.scaled(w, h, Qt.KeepAspectRatio, Qt.FastTransformation if grow else Qt.SmoothTransformation)
    out.setDevicePixelRatio(r)
    return out


ICON_PROPERTY = 'lineIcon'      # name of the line icon an action or button shows (refresh_icons)


def set_icon(target: QObject, name: str) -> None:
    """Give an action or button the line icon ``name``; it is redrawn when the colours change."""
    target.setIcon(icon(name))
    target.setProperty(ICON_PROPERTY, name)


def refresh_icons() -> None:
    """Draw every line icon again in the current text colour (after a light/dark switch)."""
    for top in QApplication.topLevelWidgets():
        for obj in [top] + top.findChildren(QObject):
            name = obj.property(ICON_PROPERTY)
            if name:
                obj.setIcon(icon(name))


def follow_theme(app: QApplication) -> None:
    """Redraw the line icons when the system switches between light and dark (once Qt has
    applied the new palette)."""
    app.styleHints().colorSchemeChanged.connect(lambda _scheme: QTimer.singleShot(0, refresh_icons))


def style_splitter(split: QSplitter) -> None:
    """Visible, narrow handle between stacked areas."""
    split.setChildrenCollapsible(False)
    split.setHandleWidth(7)
    split.setStyleSheet('QSplitter::handle:vertical { margin: 3px 12px; border-radius: 1px;'
                        ' background: rgba(128, 128, 128, 110); }')


def app_icon() -> QIcon:
    """Application icon: ground tile with a grid and a "Z", our own drawing."""
    out = QIcon()
    for size in (32, 64, 128, 256, 512):
        pm = QPixmap(size, size)
        pm.fill(Qt.transparent)
        p = QPainter(pm)
        p.setRenderHint(QPainter.Antialiasing)
        p.scale(size / 24, size / 24)
        tile = QRectF(1.5, 1.5, 21, 21)
        grad = QLinearGradient(tile.topLeft(), tile.bottomRight())
        grad.setColorAt(0, QColor(92, 74, 46))
        grad.setColorAt(1, QColor(40, 54, 34))
        p.setPen(Qt.NoPen)
        p.setBrush(grad)
        p.drawRoundedRect(tile, 4.5, 4.5)
        p.setPen(QPen(QColor(255, 255, 255, 38), 0.35))
        for v in (6.75, 12, 17.25):
            p.drawLine(QPointF(v, 2.5), QPointF(v, 21.5))
            p.drawLine(QPointF(2.5, v), QPointF(21.5, v))
        z = _poly((6.5, 6.5), (17.5, 6.5), (6.5, 17.5), (17.5, 17.5))
        p.strokePath(z, QPen(QColor(0, 0, 0, 90), 3.6, Qt.SolidLine, Qt.RoundCap, Qt.RoundJoin))
        p.strokePath(z, QPen(QColor(255, 196, 64), 2.6, Qt.SolidLine, Qt.RoundCap, Qt.RoundJoin))
        p.end()
        out.addPixmap(pm)
    return out
