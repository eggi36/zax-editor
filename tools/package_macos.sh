#!/bin/zsh
# Build "Zax Editor.app" (macOS, arm64) with PyInstaller and zip it for testing.
#
#   tools/package_macos.sh OUT_DIR
#
# OUT_DIR gets a build venv (venv-build/, pinned versions below), the work folders and
#   Zax-Editor-<version>-macos-arm64.zip (+ .sha256)
# with "Zax Editor.app", LICENSE.txt, THIRD_PARTY_NOTICES.txt, VERSIONS.txt and licenses/.
# zaxtools comes from zax-formats next to this repository (or ZAX_FORMATS). PYTHON picks the interpreter of the build
# venv (default: python3; the app bundles that Python). Signed ad hoc only (codesign -s -), never with a personal identity.
# ZAX_PKG_VERSION overrides the version (default: date and commit, e.g. 2026.11.08-1a2b3c4).
set -euo pipefail
ROOT=${0:A:h:h}
OUT=${1:?usage: package_macos.sh OUT_DIR}
mkdir -p "$OUT"; OUT=${OUT:A}
FORMATS=${ZAX_FORMATS:-${ROOT:h}/zax-formats}
[[ -d $FORMATS/zaxtools ]] || { echo "zaxtools not found in $FORMATS (set ZAX_FORMATS)"; exit 1; }
PYTHON=${PYTHON:-python3}
PINS=(pyinstaller==6.22.3 pyside6-essentials==6.10.3 numpy==2.0.2 pillow==11.3.0 capstone==5.0.9 pefile==2024.8.26)
VERSION=${ZAX_PKG_VERSION:-$(date +%Y.%m.%d)-$(git -C "$ROOT" rev-parse --short HEAD)$(git -C "$ROOT" diff --quiet HEAD -- zaxeditor tools || echo -dirty)}
NAME=Zax-Editor-$VERSION-macos-arm64

VENV=$OUT/venv-build
if [[ ! -x $VENV/bin/python ]]; then
    "$PYTHON" -m venv "$VENV"
    "$VENV/bin/python" -m pip install -q --upgrade pip
fi
"$VENV/bin/python" -m pip install -q --only-binary=:all: "${PINS[@]}"

WORK=$OUT/work-mac
rm -rf "$WORK"; mkdir -p "$WORK"
# the app icon: the editor's own drawing (zaxeditor/icons.py), no game art
QT_QPA_PLATFORM=offscreen ZAX_FORMATS=$FORMATS "$VENV/bin/python" "$ROOT/tools/package/make_icon.py" --iconset "$WORK/ZaxEditor.iconset"
iconutil -c icns "$WORK/ZaxEditor.iconset" -o "$WORK/ZaxEditor.icns"

ZAX_EDITOR_ROOT=$ROOT ZAX_FORMATS=$FORMATS ZAX_PKG_VERSION=$VERSION ZAX_PKG_ICNS=$WORK/ZaxEditor.icns \
    "$VENV/bin/pyinstaller" --noconfirm --clean --log-level WARN \
    --workpath "$WORK/build" --distpath "$WORK/dist" "$ROOT/tools/package/zax_editor.spec"
APP="$WORK/dist/Zax Editor.app"

# ad-hoc signature over the whole bundle (PyInstaller signed the parts ad hoc already)
codesign --force --deep -s - "$APP"
codesign --verify --deep --strict "$APP"

STAGE=$WORK/stage/$NAME
mkdir -p "$STAGE/licenses"
ditto "$APP" "$STAGE/Zax Editor.app"
cp "$ROOT/LICENSE" "$STAGE/LICENSE.txt"
cp "$ROOT/tools/package/THIRD_PARTY_NOTICES.txt" "$STAGE/"
mkdir -p "$STAGE/licenses/pyside6"      # the PySide6/shiboken6 wheels ship no licence text: LGPL-3.0 (+ the GPL-3.0 it extends)
cp "$ROOT"/tools/package/licenses/{LGPL-3.0,GPL-3.0}.txt "$STAGE/licenses/pyside6/"
"$VENV/bin/python" - "$VENV" "$STAGE/licenses" <<'EOF'
import shutil, sys, sysconfig
from importlib import metadata
from pathlib import Path
venv, out = Path(sys.argv[1]), Path(sys.argv[2])
for dist in ('PySide6_Essentials', 'shiboken6', 'numpy', 'pillow', 'capstone', 'pefile'):
    d = metadata.distribution(dist)
    for f in d.files or []:
        n = f.name.lower()
        if '.dist-info' in str(f) and any(k in n for k in ('license', 'licence', 'copying', 'notice')):
            src = Path(d.locate_file(f))
            if src.is_file():
                (out / dist.lower()).mkdir(exist_ok=True)
                shutil.copy2(src, out / dist.lower() / src.name)
lic = Path(sysconfig.get_paths()['stdlib']) / 'LICENSE.txt'
(out / 'python').mkdir(exist_ok=True)
shutil.copy2(lic, out / 'python' / 'LICENSE.txt')
EOF
{
    echo "Zax Editor $VERSION (macOS arm64)"
    echo "Python $("$VENV/bin/python" -c 'import platform; print(platform.python_version())')"
    printf '%s\n' "${PINS[@]:1}"
    echo "zax-editor $(git -C "$ROOT" rev-parse --short HEAD), zax-formats $(git -C "$FORMATS" rev-parse --short HEAD)"
} > "$STAGE/VERSIONS.txt"

ZIP=$OUT/$NAME.zip
rm -f "$ZIP"
(cd "$WORK/stage" && ditto -c -k --sequesterRsrc --keepParent "$NAME" "$ZIP")
(cd "$OUT" && shasum -a 256 "$NAME.zip" > "$NAME.zip.sha256")
echo "app:  $(du -sh "$APP" | cut -f1)  $APP"
echo "zip:  $(du -h "$ZIP" | cut -f1)  $ZIP"
cat "$ZIP.sha256"
echo "package_macos.sh done"
