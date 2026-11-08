#!/bin/zsh
# Build the portable Windows x64 package of the editor on this Mac (no Windows needed, nothing downloaded is run):
#
#   tools/package_windows.sh OUT_DIR
#
# The official embeddable Python (python.org, its SHA-256 checked against the value python.org publishes, pinned
# below) and the win_amd64 wheels of tools/package/windows-requirements.txt (PyPI's hashes) are downloaded into their
# own folders below OUT_DIR/dl/, only unpacked, filtered to what the editor uses (tools/package/assemble_windows.py),
# and started by "Zax Editor.exe", a tiny native starter (tools/package/starter.c, built with zig, GUI subsystem).
# Output: OUT_DIR/Zax-Editor-<version>-windows-x64.zip (+ .sha256). The build venv (OUT_DIR/venv-build, shared with
# package_macos.sh's pins) renders the icon and runs pip download. ZAX_PKG_VERSION overrides the version.
set -euo pipefail
ROOT=${0:A:h:h}
OUT=${1:?usage: package_windows.sh OUT_DIR}
mkdir -p "$OUT"; OUT=${OUT:A}
FORMATS=${ZAX_FORMATS:-${ROOT:h}/zax-formats}
[[ -d $FORMATS/zaxtools ]] || { echo "zaxtools not found in $FORMATS (set ZAX_FORMATS)"; exit 1; }
PY_VERSION=3.14.10
PY_EMBED=python-$PY_VERSION-embed-amd64.zip
PY_EMBED_SHA256=90905e64a840557d8c1bc4f5b74db3d7ee85e3ffb217611cac1c7813acea4159   # python.org's sha256_sum
VERSION=${ZAX_PKG_VERSION:-$(date +%Y.%m.%d)-$(git -C "$ROOT" rev-parse --short HEAD)$(git -C "$ROOT" diff --quiet HEAD -- zaxeditor tools || echo -dirty)}
NAME=Zax-Editor-$VERSION-windows-x64
command -v zig >/dev/null || { echo "zig missing (brew install zig)"; exit 1; }

VENV=$OUT/venv-build
if [[ ! -x $VENV/bin/python ]]; then
    "${PYTHON:-python3}" -m venv "$VENV"
    "$VENV/bin/python" -m pip install -q --upgrade pip
    "$VENV/bin/python" -m pip install -q --only-binary=:all: pyside6-essentials==6.10.3 pillow==11.3.0
fi

# downloads: each into its own folder, checked before use
EMBED_DIR=$OUT/dl/python-win; WHEEL_DIR=$OUT/dl/wheels-win
mkdir -p "$EMBED_DIR" "$WHEEL_DIR"
[[ -f $EMBED_DIR/$PY_EMBED ]] || curl -sSLf -o "$EMBED_DIR/$PY_EMBED" "https://www.python.org/ftp/python/$PY_VERSION/$PY_EMBED"
echo "$PY_EMBED_SHA256  $EMBED_DIR/$PY_EMBED" | shasum -a 256 -c -
"$VENV/bin/python" -m pip download -q --no-deps --only-binary=:all: --platform win_amd64 --python-version 3.14 \
    --implementation cp --require-hashes -r "$ROOT/tools/package/windows-requirements.txt" -d "$WHEEL_DIR"
# pip checked the hashes; check the files on disk again (a wheel already there is not re-checked by pip)
"$VENV/bin/python" -I - "$ROOT/tools/package/windows-requirements.txt" "$WHEEL_DIR" <<'PYEOF'
import hashlib, re, sys
from pathlib import Path
want = dict((m[1].lower().replace('-', '_'), m[2]) for m in re.finditer(r'^([\w.-]+)==\S+ --hash=sha256:(\w+)', Path(sys.argv[1]).read_text(), re.M))
found = {}
for w in Path(sys.argv[2]).glob('*.whl'):
    key = w.name.split('-')[0].lower()
    if key in want:
        if hashlib.sha256(w.read_bytes()).hexdigest() != want[key]:
            sys.exit(f'hash mismatch: {w}')
        found[key] = w.name
missing = set(want) - set(found)
if missing:
    sys.exit(f'wheels missing: {missing}')
print('wheels verified:', ', '.join(sorted(found.values())))
PYEOF

WORK=$OUT/work-win
rm -rf "$WORK"; mkdir -p "$WORK/starter" "$WORK/wheels"
for w in "$WHEEL_DIR"/*.whl; do
    grep -qi "^$(basename "$w" | cut -d- -f1 | tr _ -)==" "$ROOT/tools/package/windows-requirements.txt" && cp "$w" "$WORK/wheels/"
done
# the starter with the editor's own icon
QT_QPA_PLATFORM=offscreen "$VENV/bin/python" "$ROOT/tools/package/make_icon.py" --ico "$WORK/starter/ZaxEditor.ico"
cp "$ROOT"/tools/package/starter.{c,rc} "$WORK/starter/"
(cd "$WORK/starter" && zig cc -target x86_64-windows-gnu -O2 -municode -Wl,--subsystem,windows -s \
    starter.c starter.rc -o "Zax Editor.exe")

STAGE=$WORK/stage/$NAME
"$VENV/bin/python" -I "$ROOT/tools/package/assemble_windows.py" --embed "$EMBED_DIR/$PY_EMBED" --wheels "$WORK/wheels" \
    --starter "$WORK/starter/Zax Editor.exe" --editor "$ROOT" --formats "$FORMATS" --stage "$STAGE"
cp "$ROOT/LICENSE" "$STAGE/LICENSE.txt"
cp "$ROOT/tools/package/THIRD_PARTY_NOTICES.txt" "$STAGE/"
mkdir -p "$STAGE/licenses/python" "$STAGE/licenses/pyside6"
cp "$STAGE/runtime/LICENSE.txt" "$STAGE/licenses/python/LICENSE.txt"
cp "$ROOT"/tools/package/licenses/{LGPL-3.0,GPL-3.0}.txt "$STAGE/licenses/pyside6/"
for d in "$STAGE"/runtime/Lib/site-packages/*.dist-info; do
    pkg=$(basename "$d" | cut -d- -f1 | tr '[:upper:]' '[:lower:]')
    [[ $pkg == pyside6_essentials || $pkg == pyside6_addons || $pkg == shiboken6 ]] && continue   # only a commercial-licence reference: LGPL above
    find "$d" -type f \( -iname '*licen*' -o -iname '*copying*' -o -iname '*notice*' \) | while read -r f; do
        mkdir -p "$STAGE/licenses/$pkg"; cp "$f" "$STAGE/licenses/$pkg/"
    done
done
# libsndfile's licence (LGPL-2.1), shipped next to the library in the soundfile wheel
mkdir -p "$STAGE/licenses/soundfile"
cp "$STAGE/runtime/Lib/site-packages/_soundfile_data/COPYING" "$STAGE/licenses/soundfile/libsndfile-COPYING.txt"
{
    echo "Zax Editor $VERSION (Windows x64, portable)"
    echo "Python $PY_VERSION (embeddable, python.org)"
    grep -oE '^[A-Za-z0-9_.-]+==[^ ]+' "$ROOT/tools/package/windows-requirements.txt"
    echo "zax-editor $(git -C "$ROOT" rev-parse --short HEAD), zax-formats $(git -C "$FORMATS" rev-parse --short HEAD)"
} | tr -d '\r' | sed 's/$/\r/' > "$STAGE/VERSIONS.txt"
sed 's/$/\r/' "$ROOT/tools/package/THIRD_PARTY_NOTICES.txt" > "$STAGE/THIRD_PARTY_NOTICES.txt"

ZIP=$OUT/$NAME.zip
rm -f "$ZIP"
(cd "$WORK/stage" && zip -q -r -9 -X "$ZIP" "$NAME")
(cd "$OUT" && shasum -a 256 "$NAME.zip" > "$NAME.zip.sha256")
echo "folder: $(du -sh "$STAGE" | cut -f1)  $STAGE"
echo "zip:    $(du -h "$ZIP" | cut -f1)  $ZIP"
cat "$ZIP.sha256"
echo "package_windows.sh done"
