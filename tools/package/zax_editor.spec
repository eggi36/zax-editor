# PyInstaller spec of the macOS app "Zax Editor.app" (tools/package_macos.sh runs it; not by hand).
# Environment: ZAX_EDITOR_ROOT (this repository), ZAX_FORMATS (zax-formats), ZAX_PKG_VERSION, ZAX_PKG_ICNS (optional).
# Only QtCore/QtGui/QtWidgets of PySide6 go in, with the platform/style/image format plugins they need and Qt's own
# German translation (qtbase_de, the standard buttons); zaxtools comes from zax-formats, the .qm files of zaxeditor/i18n.
import os
from pathlib import Path

ROOT = Path(os.environ['ZAX_EDITOR_ROOT'])
FORMATS = Path(os.environ['ZAX_FORMATS'])
VERSION = os.environ.get('ZAX_PKG_VERSION', '0')
ICNS = os.environ.get('ZAX_PKG_ICNS') or None
PKG = ROOT / 'tools' / 'package'

hidden = []
for pkg_root, name in ((ROOT, 'zaxeditor'), (FORMATS, 'zaxtools')):
    for f in sorted((pkg_root / name).rglob('*.py')):
        rel = f.relative_to(pkg_root).with_suffix('')
        parts = list(rel.parts)
        if parts[-1] == '__init__':
            parts = parts[:-1]
        if parts[-1] in ('update',) and 'i18n' in parts:   # the translators' tool (lupdate/lrelease), not needed
            continue
        hidden.append('.'.join(parts))
hidden.append('zax_pkg_smoke')

QT_EXCLUDES = ['PySide6.' + m for m in (
    'QtNetwork', 'QtQml', 'QtQuick', 'QtQuickWidgets', 'QtOpenGL', 'QtOpenGLWidgets', 'QtSql', 'QtTest', 'QtXml',
    'QtDBus', 'QtConcurrent', 'QtDesigner', 'QtHelp', 'QtUiTools', 'QtPrintSupport', 'QtMultimedia',
    'QtMultimediaWidgets', 'QtWebEngineCore', 'QtWebEngineWidgets', 'QtPdf', 'QtSvgWidgets', 'Qt3DCore')]

a = Analysis(
    [str(PKG / 'entry.py')],
    pathex=[str(ROOT), str(FORMATS), str(PKG)],
    datas=[(str(q), 'zaxeditor/i18n') for q in sorted((ROOT / 'zaxeditor' / 'i18n').glob('*.qm'))],
    hiddenimports=hidden,
    excludes=QT_EXCLUDES + ['tkinter', '_tkinter', 'unittest', 'pydoc_data', 'test', 'IPython', 'matplotlib',
                            'scipy', 'PIL.ImageQt', 'PIL.ImageTk'],
    noarchive=False,
)

# Qt plugins and translations: keep what a widgets app on macOS uses
KEEP_PLUGIN_DIRS = {'platforms', 'styles', 'imageformats', 'iconengines'}
KEEP_PLATFORMS = {'libqcocoa.dylib', 'libqoffscreen.dylib', 'libqminimal.dylib'}
KEEP_IMAGEFORMATS = {'libqgif.dylib', 'libqico.dylib', 'libqjpeg.dylib', 'libqsvg.dylib', 'libqicns.dylib'}


def keep(dest: str) -> bool:
    p = dest.replace('\\', '/')
    if '/Qt/translations/' in p:
        return Path(p).name in ('qtbase_de.qm',)
    if '/Qt/plugins/' in p:
        sub = p.split('/Qt/plugins/', 1)[1].split('/')
        if sub[0] not in KEEP_PLUGIN_DIRS:
            return False
        if sub[0] == 'platforms':
            return sub[-1] in KEEP_PLATFORMS
        if sub[0] == 'imageformats':
            return sub[-1] in KEEP_IMAGEFORMATS
    return True


a.binaries = [b for b in a.binaries if keep(b[0])]
a.datas = [d for d in a.datas if keep(d[0])]

pyz = PYZ(a.pure)
exe = EXE(pyz, a.scripts, [], exclude_binaries=True, name='Zax Editor', debug=False, strip=False, upx=False,
          console=False, argv_emulation=False, target_arch='arm64', codesign_identity=None, entitlements_file=None)
coll = COLLECT(exe, a.binaries, a.datas, strip=False, upx=False, name='Zax Editor')
app = BUNDLE(
    coll, name='Zax Editor.app', icon=ICNS, bundle_identifier='org.zaxeditor.ZaxEditor', version=VERSION,
    info_plist={
        'CFBundleName': 'Zax Editor', 'CFBundleDisplayName': 'Zax Editor',
        'CFBundleShortVersionString': VERSION, 'CFBundleVersion': VERSION,
        'CFBundleDevelopmentRegion': 'en', 'CFBundleLocalizations': ['en', 'de'],
        'NSHighResolutionCapable': True, 'NSRequiresAquaSystemAppearance': False,
        'LSMinimumSystemVersion': '13.0', 'LSApplicationCategoryType': 'public.app-category.developer-tools',
        'NSHumanReadableCopyright': 'Zax Editor (MIT). Not affiliated with the rights holders of Zax: The Alien Hunter.',
    },
)
