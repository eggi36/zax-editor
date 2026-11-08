"""Render the editor's own app icon (zaxeditor.icons.app_icon, a drawing, no game art) for a package.

    python tools/package/make_icon.py --iconset OUT.iconset     # macOS: then iconutil -c icns OUT.iconset
    python tools/package/make_icon.py --ico OUT.ico             # Windows starter (Pillow)
"""
import argparse
import os
import sys
from pathlib import Path

os.environ.setdefault('QT_QPA_PLATFORM', 'offscreen')
sys.path.insert(0, str(Path(__file__).resolve().parent.parent.parent))


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument('--iconset', type=Path)
    p.add_argument('--ico', type=Path)
    a = p.parse_args()
    from PySide6.QtCore import QSize
    from PySide6.QtGui import QGuiApplication
    app = QGuiApplication([])   # noqa: F841 - pixmaps need it
    from zaxeditor.icons import app_icon
    icon = app_icon()

    def png(size: int, path: Path) -> None:
        pm = icon.pixmap(QSize(size, size))
        if pm.width() != size:
            pm = pm.scaled(size, size)
        if not pm.save(str(path), 'PNG'):
            raise SystemExit(f'cannot write {path}')

    if a.iconset:
        a.iconset.mkdir(parents=True, exist_ok=True)
        for s in (16, 32, 128, 256, 512):
            png(s, a.iconset / f'icon_{s}x{s}.png')
            if s * 2 <= 512:
                png(s * 2, a.iconset / f'icon_{s}x{s}@2x.png')
    if a.ico:
        from PIL import Image
        big = a.ico.with_suffix('.png')
        png(256, big)
        with Image.open(big) as im:
            im.save(a.ico, sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
        big.unlink()
    return 0


if __name__ == '__main__':
    sys.exit(main())
