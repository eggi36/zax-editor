"""Assemble the portable Windows x64 folder of the editor from the embeddable Python and win_amd64 wheels (run by
tools/package_windows.sh; nothing of the downloads is executed, they are only read and unpacked).

    python -I tools/package/assemble_windows.py --embed python-3.14.10-embed-amd64.zip --wheels DIR \
        --starter "Zax Editor.exe" --editor ROOT --formats ZAX_FORMATS --stage DIR

Layout of the stage folder:
    Zax Editor.exe             the starter (tools/package/starter.c)
    runtime\\                   the embeddable Python; python314._pth = the runtime, Lib\\site-packages, ..\\app
    runtime\\Lib\\site-packages  PySide6 (QtCore/QtGui/QtWidgets, their DLLs and plugins only; QtMultimedia from
                               PySide6-Addons with QtNetwork, no media backend plugin, no FFmpeg),
                               shiboken6, numpy, Pillow, capstone, pefile, soundfile (libsndfile), cffi
    app\\                       zaxeditor (with the .qm translations), zaxtools, zax_pkg_smoke.py
"""
import argparse
import re
import shutil
import sys
import zipfile
from pathlib import Path, PurePosixPath

PYSIDE_KEEP = {
    'PySide6/__init__.py', 'PySide6/_config.py', 'PySide6/_git_pyside_version.py', 'PySide6/PySide6_Essentials.json',
    'PySide6/QtCore.pyd', 'PySide6/QtGui.pyd', 'PySide6/QtWidgets.pyd', 'PySide6/pyside6.abi3.dll',
    'PySide6/Qt6Core.dll', 'PySide6/Qt6Gui.dll', 'PySide6/Qt6Widgets.dll', 'PySide6/Qt6Svg.dll',
    'PySide6/plugins/platforms/qwindows.dll', 'PySide6/plugins/platforms/qoffscreen.dll',
    'PySide6/plugins/platforms/qminimal.dll', 'PySide6/plugins/styles/qmodernwindowsstyle.dll',
    'PySide6/plugins/iconengines/qsvgicon.dll',
    'PySide6/plugins/imageformats/qgif.dll', 'PySide6/plugins/imageformats/qico.dll',
    'PySide6/plugins/imageformats/qjpeg.dll', 'PySide6/plugins/imageformats/qsvg.dll',
    'PySide6/translations/qtbase_de.qm',
    # the model viewer's sound (QAudioSink, which needs no media backend plugin): never avcodec/avformat/avutil/
    # swresample/swscale or a plugin of plugins/multimedia (ffmpeg, windows/Media Foundation)
    'PySide6/QtMultimedia.pyd', 'PySide6/Qt6Multimedia.dll', 'PySide6/Qt6Network.dll',
    'PySide6/QtNetwork.pyd',     # PySide6.QtMultimedia imports PySide6.QtNetwork
}
MSVC = re.compile(r'^(msvcp140(_\d|_codecvt_ids)?|vcruntime140(_1)?|concrt140)\.dll$', re.I)


def keep(name: str) -> bool:
    """Whether a wheel member goes into site-packages."""
    p = PurePosixPath(name)
    top = p.parts[0]
    if top.endswith('.dist-info'):
        return p.name != 'RECORD'
    if p.suffix in ('.pyi', '.lib', '.a', '.h', '.cmake', '.exe') or 'include' in p.parts:
        return False
    if top == 'PySide6':
        if name in PYSIDE_KEEP or (len(p.parts) == 3 and p.parts[1] == 'support' and p.suffix == '.py'):
            return True
        return len(p.parts) == 2 and bool(MSVC.match(p.name))
    if top == 'shiboken6':
        return 'lib' not in p.parts[1:-1] and p.name not in ('vcamp140.dll', 'vccorlib140.dll', 'vcomp140.dll')
    return 'tests' not in p.parts      # numpy's and Pillow's test suites


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--embed', type=Path, required=True)
    ap.add_argument('--wheels', type=Path, required=True)
    ap.add_argument('--starter', type=Path, required=True)
    ap.add_argument('--editor', type=Path, required=True)
    ap.add_argument('--formats', type=Path, required=True)
    ap.add_argument('--stage', type=Path, required=True)
    a = ap.parse_args()
    stage = a.stage
    if stage.exists():
        shutil.rmtree(stage)
    runtime = stage / 'runtime'
    runtime.mkdir(parents=True)
    with zipfile.ZipFile(a.embed) as z:
        for m in z.infolist():
            if '..' in PurePosixPath(m.filename).parts or m.filename.startswith('/'):
                sys.exit(f'unsafe member in {a.embed}: {m.filename}')
        z.extractall(runtime)
    pths = list(runtime.glob('python3*._pth'))
    if len(pths) != 1:
        sys.exit(f'expected one ._pth in the embeddable zip: {pths}')
    zipname = pths[0].stem + '.zip'
    # no "import site": the user's site-packages and .pth files stay out
    pths[0].write_bytes(f'{zipname}\r\n.\r\nLib\\site-packages\r\n..\\app\r\n'.encode('ascii'))
    site = runtime / 'Lib' / 'site-packages'
    site.mkdir(parents=True)
    wheels = sorted(a.wheels.glob('*.whl'))
    for w in wheels:
        with zipfile.ZipFile(w) as z:
            for m in z.infolist():
                n = m.filename
                if m.is_dir() or '..' in PurePosixPath(n).parts or n.startswith('/'):
                    continue
                if keep(n):
                    target = site / n
                    target.parent.mkdir(parents=True, exist_ok=True)
                    with z.open(m) as src, open(target, 'wb') as dst:
                        shutil.copyfileobj(src, dst)
    app = stage / 'app'
    for root, pkg in ((a.editor, 'zaxeditor'), (a.formats, 'zaxtools')):
        for f in sorted((root / pkg).rglob('*')):
            rel = f.relative_to(root)
            if f.is_dir() or '__pycache__' in rel.parts:
                continue
            if f.suffix not in ('.py', '.qm') or rel.as_posix() == 'zaxeditor/i18n/update.py':
                continue
            (app / rel).parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(f, app / rel)
    shutil.copy2(a.editor / 'tools' / 'package' / 'zax_pkg_smoke.py', app / 'zax_pkg_smoke.py')
    shutil.copy2(a.starter, stage / 'Zax Editor.exe')
    print(f'{len(wheels)} wheels unpacked into {site}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
