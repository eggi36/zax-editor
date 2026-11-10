"""Self-test of the mod ground textures (zaxeditor/tgaground.py): the listing in the port's order, the TGAs the port reads,
the editor's drawing of them, the level check and the texture choice (offscreen, no window).

    python tools/selftest_ground_tga.py [--data <game folder>/Data.dat]

Needs no game data: a small data folder is made in a temporary folder. With ``--data`` (or ``ZAX_DATA``) it also lists
the real shipped textures (read only; the TGA goes into a temporary output folder, never into the game data).
"""
import argparse
import os
import struct
import sys
import tempfile
from pathlib import Path

os.environ.setdefault('QT_QPA_PLATFORM', 'offscreen')
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
import zaxeditor  # noqa: E402,F401  puts zax-formats (zaxtools) on the path

import numpy as np  # noqa: E402

from zaxtools import frm  # noqa: E402
from zaxtools import levelcheck as lc  # noqa: E402
from zaxtools import newlevel  # noqa: E402
from zaxtools.datasource import DataSource  # noqa: E402

from zaxeditor import tgaground as tg  # noqa: E402


def tga(w=128, h=128, depth=24, rle=False, color=(255, 0, 0), top=None, overflow=False, cmap=False) -> bytes:
    """A TGA: every pixel ``color``, the first stored row ``top`` (bottom-left origin: the image's last row)."""
    n = depth // 8
    head = struct.pack('<BBBHHBHHHHBB', 0, 1 if cmap else 0, 10 if rle else 2, 0, 0, 0, 0, 0, w, h, depth, 0)
    px = lambda c: bytes((c[2], c[1], c[0]) + ((255,) if n == 4 else ()))
    rows = []
    for y in range(h):
        c = top if (top is not None and y == 0) else color
        if not rle:
            rows.append(px(c) * w)
        else:
            row, left = b'', w
            while left:
                k = min(128, left)
                row += bytes((0x80 | (k - 1),)) + px(c)
                left -= k
            rows.append(row)
    if overflow:           # the first row's packets 100 + 29 pixels: one past the row's end, the port refuses it
        rows[0] = bytes((0x80 | 99,)) + px(color) + bytes((0x80 | 28,)) + px(color)
    return head + b''.join(rows)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--data', default=os.environ.get('ZAX_DATA'))
    args = ap.parse_args()
    failures = 0

    def report(title, ok, extra=''):
        nonlocal failures
        failures += 0 if ok else 1
        print(f'[{"OK " if ok else "FAIL"}] {title} {extra}')

    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        data, out = tmp / 'Data', tmp / 'Output'
        (data / 'Cache' / 'Textures').mkdir(parents=True)
        (data / 'Textures' / 'Sub').mkdir(parents=True)
        (data / 'Levels').mkdir()
        (out / 'Textures').mkdir(parents=True)
        frame = frm.encode_raw16(np.full((128, 128, 3), 128, np.uint8))
        for name in ('11 Dirt', '01 Ivy', 'cave Floor', 'Zebra'):
            (data / 'Cache' / 'Textures' / f'{name}.frm16').write_bytes(frame)
        (data / 'Textures' / 'Moss.tga').write_bytes(tga(color=(0, 200, 0)))
        (data / 'Textures' / '01 IVY.TGA').write_bytes(tga())            # a shipped name: left out
        (data / 'Textures' / 'Sub' / 'Deep.tga').write_bytes(tga())       # a subfolder: 'Sub/Deep', like the shipped ones
        (data / 'Textures' / '-Dash.tga').write_bytes(tga())              # the leading '-' goes
        (out / 'Textures' / 'blue.tga').write_bytes(tga(depth=32, rle=True, color=(0, 0, 255), top=(255, 255, 0)))
        (out / 'Textures' / 'Small.tga').write_bytes(tga(w=64, h=64))
        (out / 'Textures' / 'moss.tga').write_bytes(tga(color=(10, 20, 30)))  # wins over the game data's Moss
        ds = DataSource(data)

        # 1. listing in the port's order
        shipped = tg.shipped_names(ds)
        report('shipped names sorted like _stricmp', shipped == ['01 Ivy', '11 Dirt', 'cave Floor', 'Zebra'], shipped)
        app = tg.appended_names(ds, [out])
        report('TGA names: no shipped name, subfolders as paths, without "-", sorted',
               app == ['blue', 'Dash', 'moss', 'Small', 'Sub/Deep'], app)
        lst = tg.ground_list(ds, [out])
        report('ground list = shipped first, then the TGAs', lst == shipped + app and lst.index('blue') == len(shipped))
        report('without output folder only the game data', tg.appended_names(ds) == ['Dash', 'Moss', 'Sub/Deep'])
        files = tg.tga_files(ds, [out])
        report('the output folder wins', isinstance(files['moss'][1], Path))

        # 2. what the port reads
        cases = {'raw 24': (tga(), True), 'RLE 32': (tga(depth=32, rle=True), True), 'raw 32': (tga(depth=32), True),
                 '64 x 64': (tga(w=64, h=64), False), '16 bits': (tga(depth=16), False),
                 'colour map': (tga(cmap=True), False), 'truncated': (tga()[:-1], False),
                 'RLE past a row': (tga(rle=True, overflow=True), False), 'empty': (b'', False)}
        bad = [k for k, (d, want) in cases.items() if tg.usable(d) != want]
        report('usable() as the port\'s ground_tga_usable', not bad, bad)

        # 3. decoding and drawing (GroundAssets)
        assets = tg.GroundAssets(ds, lambda: [out])
        t = assets.texture('blue')
        ok = t is not None and t.shape == (128, 128, 3) and tuple(t[64, 64]) == (0, 0, 255) \
            and tuple(t[127, 0]) == (255, 255, 0)      # the first stored row is the bottom one
        report('RLE TGA decoded, bottom-left origin', ok)
        s = assets.texture('Small')
        report('an unusable TGA is black 128 x 128 (as the port)', s is not None and s.shape == (128, 128, 3)
               and not s.any())
        report('a shipped name stays shipped', not assets.is_tga('01 Ivy') and assets.is_tga('blue')
               and not assets.is_tga('Nothing'))
        report('a name neither shipped nor TGA has no texture', assets.texture('Nothing') is None)
        (out / 'Textures' / 'Late.tga').write_bytes(tga())
        before = assets.is_tga('Late')
        assets.refresh_tga()
        report('refresh_tga sees a new file', not before and assets.is_tga('Late') and assets.texture('Late') is not None)

        # 4. the level check
        report('check registered with the level check', tg.CHECK in lc.CHECKS and lc.CHECKS[tg.CHECK][0] == 'warning')
        level = newlevel.new_level('Test/Tga', 1024, 1024, ['01 Ivy', 'blue', 'Small', 'Nothing'])
        f = tg.check(level, ds, [out])
        report('one warning per TGA ground texture', [x.value for x in f] == ['blue', 'Small']
               and all(x.check == tg.CHECK and x.severity == 'warning' for x in f), [x.value for x in f])
        report('the finding names the switches', 'GroundTgaAppend' in f[0].message and f[0].field.endswith('Texture 1'))
        report('the check dock can title it', bool(f and f[0].title))
        plain = newlevel.new_level('Test/Plain', 1024, 1024, ['01 Ivy', '11 Dirt'])
        report('no finding for shipped textures', tg.check(plain, ds, [out]) == [])
        report('no finding without any TGA', tg.check(level, DataSource(_no_tga(tmp)), []) == [])
        used = tg.output_tgas(level, ds, [out])
        report('Test in game copies the used TGAs of the output folder', sorted(p.name for p in used) == ['Small.tga',
                                                                                                         'blue.tga'])

        # 5. the texture choice (offscreen)
        from PySide6.QtCore import Qt
        from PySide6.QtWidgets import QApplication, QLabel
        qapp = QApplication.instance() or QApplication([])
        from zaxeditor.groundtool import GroundPanel, TexturePicker
        assets.offer_tga = True
        dlg = TexturePicker(None, assets, ['11 Dirt'])
        rows = [dlg.list.item(i) for i in range(dlg.list.count())]
        names = [it.data(Qt.UserRole) for it in rows]
        h = rows.index(dlg.header) if dlg.header is not None else -1
        report('picker: shipped first, a group header, then the TGAs',
               names[:h] == ['01 Ivy', 'cave Floor', 'Zebra'] and names[h + 1:] == ['blue', 'Dash', 'Late', 'moss',
                                                                                    'Small', 'Sub/Deep'], names)
        small = rows[names.index('Small')]
        report('picker: an unusable TGA is not selectable', not small.flags() & Qt.ItemIsEnabled)
        dlg.list.selectAll()
        report('picker: chosen() gives names, not labels', dlg.chosen() == ['01 Ivy', 'cave Floor', 'Zebra', 'blue',
                                                                            'Dash', 'Late', 'moss', 'Sub/Deep'],
               dlg.chosen())
        dlg.search.setText('zeb')
        report('picker: the header hides with no TGA shown', dlg.header.isHidden())
        assets.offer_tga = False
        dlg = TexturePicker(None, assets, [])
        names = [dlg.list.item(i).data(Qt.UserRole) for i in range(dlg.list.count())]
        hint = [w.text() for w in dlg.findChildren(QLabel) if 'TGA' in w.text()]
        report('picker without the opt-in: shipped only, a hint', names == shipped and dlg.header is None and hint, hint)
        panel = GroundPanel()
        panel.set_level(level, assets)
        texts = [panel.list.item(i).text() for i in range(panel.list.count())]
        report('ground panel marks the TGA textures', 'TGA' in texts[1] and 'TGA' not in texts[0], texts)
        del qapp

        # 6. the real data (read only)
        if args.data and Path(args.data).exists():
            real = DataSource(args.data)
            sh = tg.shipped_names(real)
            gl = tg.ground_list(real, [out])
            report('real data: the shipped names keep their indices', gl[:len(sh)] == sh
                   and gl[len(sh):] == ['blue', 'Late', 'moss', 'Small'], f'{len(sh)} shipped, {len(gl) - len(sh)} TGA')
            report('real data: 01 Ivy is entry 0', sh[:1] == ['01 Ivy'], sh[:3])
    print(f'\nDone, {failures} failures.')
    raise SystemExit(1 if failures else 0)


def _no_tga(tmp: Path) -> Path:
    d = tmp / 'NoTga'
    (d / 'Cache' / 'Textures').mkdir(parents=True, exist_ok=True)
    (d / 'Cache' / 'Textures' / '01 Ivy.frm16').write_bytes(b'x')
    return d


if __name__ == '__main__':
    main()
