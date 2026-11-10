# zax-editor

The level editor for "Zax: The Alien Hunter" (Reflexive Entertainment / JoWooD, 2001), PySide6: objects, polygons, ground, surfaces, mini map, transitions, dialogue scripts, own graphics, a model viewer, Test in game; English with a German translation.

![The editor with a level open: objects, the map with the links of the selected character, its properties and dialogue](docs/images/editor-properties.png)

*A level open in the editor: the object list, the map with the links of the selected character, its properties, who uses it and its dialogue.*

| | |
|---|---|
| ![The model browser and the level settings](docs/images/editor-models.png) | ![A cave level close up with a selected Rogcoil](docs/images/editor-cave.png) |
| The model browser and the level settings (music, start points, mini map) | A cave level close up, a Rogcoil selected |

It is built on **zaxtools** from [zax-formats](https://github.com/eggi36/zax-formats) (every file format of the game read and written byte for byte), which it expects next to this repository (or `ZAX_FORMATS`). The decompilation of Zax.exe is [zax-decomp](https://github.com/eggi36/zax-decomp) (its docs explain the engine behind the editor's checks and help texts); Test in game runs the VM tool of the test harness next to it (`ZAX_TESTTOOLS`), which is not published. Until 2026-11-07 the editor and the format library were one repository.

## Using the editor

Shortcuts are written for Windows; on macOS **Ctrl** is **⌘** and **Alt** is **⌥**. Every command is also in the menus.

**Panels.** The toolbar buttons Objects, Models and Properties (and the entries of the Window menu, for all panels) show a panel; a click on the panel already shown hides it and frees the space. Each side shows one panel at a time: left Objects, Models or Ground; right Properties or Level settings; below the map Level check or Dialogue. The editor remembers the panels and their widths; Window → Restore default layout goes back to Objects and Properties.

| On the map | |
|---|---|
| Mouse wheel | Zoom (trackpad on macOS: pinch or ⌘ + swipe) |
| Hold the middle button and drag | Pan (trackpad on macOS: swipe with two fingers) |
| Click | Select an object (Ctrl + click adds to the selection) |
| Drag on an object | Move the selection |
| Drag on empty ground | Select with a rubber band |
| Alt + click / Alt + drag | Select / move a child object (upper body, carried item) |
| Esc | Clear the selection, cancel drawing, stop painting |

| Polygons | |
|---|---|
| Collision, Way points, Surface (toolbar) | Draw: click = point, Backspace = remove the last point; double click, Return or right click = done; Esc = cancel |
| Drag a yellow point of a selected polygon | Move the point |
| Double click on an edge of a selected polygon | Insert a point (also: right click on the polygon → Insert point here) |
| Right click on a point | Delete point |

| Ground (Paint ground, B) | |
|---|---|
| Drag | Paint with the texture chosen in the Ground panel |
| Alt + click | Pick up the texture under the mouse |
| [ and ] | Smaller / larger brush |
| B or Esc | Stop painting |

**Mod ground textures (port only).** Ground → Offer mod ground textures (TGA, also in File → Settings) adds the TGA files of `Textures/` (in the game data or the output folder, `<output>/Textures/<name>.tga`) to the texture choice, in a group of their own after the shipped textures, in the order the port appends them. A level using one needs the port (zax-redone) with `[Fix] GroundTga=1` and `GroundTgaAppend=1`: the original game drops every shipped ground texture as soon as one TGA lies in `Data/Textures` and ends while loading such a level. The ground panel marks these textures and the level check warns about them. The port reads only TGAs of 128×128 with 24 or 32 bits (raw or RLE); others show black, in the port and in the editor.

New objects: in the Models panel double click a model (placed in the middle of the view) or drag it onto the map.

| Key | Command | Key | Command |
|---|---|---|---|
| Ctrl+N / Ctrl+O | New / open level | L / Shift+L | Links of the selection / all links |
| Ctrl+S / Ctrl+Shift+S | Save / save as | W | Way point network |
| Ctrl+Z | Undo | G | Ground grid |
| Ctrl+Y (macOS ⌘⇧Z) | Redo | Ctrl+0 | Whole level |
| Ctrl+C / Ctrl+V | Copy / paste (at the middle of the view) | Ctrl++ / Ctrl+- | Zoom in / out |
| Ctrl+D | Duplicate | F7 | Level → Check |
| Delete or Backspace | Delete | F5 | Test in game |
| F2 | Rename (with references) | Ctrl+Shift+L | Level settings |
| Ctrl+Shift+N | Add object (Models panel) | Ctrl+Shift+D | Dialogue script |

## Setup

1. Python 3.9 or newer: `python3 -m venv .venv && .venv/bin/pip install -r requirements.txt`
2. zax-formats next to this repository (or `ZAX_FORMATS`).
3. Point `ZAX_DATA` to the game data (the `Data.dat` of an installed game, or an unpacked `Data` folder), or choose it in the editor.
4. Start the editor: `python -m zaxeditor` (on macOS also by double-clicking `Zax-Editor.command`); the model viewer: `python -m zaxeditor.viewer`.
5. Check the UI texts: `python tools/selftest_ui.py` – expected: 0 failures; the mod ground textures: `python tools/selftest_ground_tga.py` (no game data needed; `--data` adds the real shipped list) – expected: 0 failures; the format library's self-test is zax-formats' `tools/selftest.py`.
6. `git config core.hooksPath tools/git-hooks` (the pre-push hook: no game data, no private names or paths).

The game data is not included and must never go into the repository: every player brings the original assets from their own copy. The editor saves into its own output folder, never into the game data.

## Packages

Ready-to-run builds that need no Python installation; at the first start they ask for the game data (`Data.dat`) of your own copy, nothing of the game is in them. Right after that they ask where your own levels, graphics and `Rules.txt` go, suggesting `Zax-Editor-Output` in your documents folder; any other folder works, except one inside the editor itself (the app or the unzipped folder), inside the game data or the folder of `Data.dat`, or one that cannot be written to. "Later" opens the editor without one, and it asks again before it saves anything. File → Settings changes the folder later. (Run from the source checkout, the editor keeps using the workspace's `editor-output/`.)

- **macOS (Apple silicon):** `tools/package_macos.sh OUT_DIR` builds `Zax Editor.app` with PyInstaller (a build venv in `OUT_DIR` with pinned versions; QtCore/QtGui/QtWidgets plus QtMultimedia for the model viewer's sound, zaxtools from zax-formats, the translations) and zips it as `Zax-Editor-<version>-macos-arm64.zip`. The app is signed ad hoc only (not notarised): after a download macOS refuses the first start; allow it in System Settings → Privacy & Security → Open Anyway (older macOS: right-click → Open), or remove the quarantine with `xattr -dr com.apple.quarantine "Zax Editor.app"`.
- **Windows (x64):** `tools/package_windows.sh OUT_DIR` builds a portable folder on the Mac, without Windows: the official embeddable Python of python.org and the win_amd64 wheels of `tools/package/windows-requirements.txt` (both hash-checked, only unpacked), filtered to what the editor uses, started by `Zax Editor.exe`, a small native starter (`tools/package/starter.c`, zig). Unzip the whole `Zax-Editor-<version>-windows-x64.zip` and start `Zax Editor.exe`; the exe is unsigned, so SmartScreen may ask once (More info → Run anyway).

The model viewer's sounds are decoded by the editor itself (WAV with Python's `wave`, Ogg Vorbis with python-soundfile/libsndfile) and played as raw PCM through Qt's `QAudioSink`, so the packages contain no FFmpeg and no Qt media backend plugin. Each package carries `THIRD_PARTY_NOTICES.txt`, the licence texts of the bundled parts (`licenses/`: Python PSF, PySide6/Qt LGPL-3.0 as separate replaceable libraries, numpy BSD, Pillow HPND, capstone BSD, pefile MIT, python-soundfile BSD with libsndfile LGPL-2.1 as a separate replaceable library, cffi MIT) and `VERSIONS.txt`. `tools/package/zax_pkg_smoke.py` is the packages' smoke test (own settings, a level opened, a screenshot of the window; `--sound`: one WAV and one OGG played through `QAudioSink`, with the loaded media plugins and FFmpeg libraries in the report).

## Licence

MIT (`LICENSE`). The editor uses PySide6 (Qt for Python, LGPL-3.0) and python-soundfile (BSD, with libsndfile, LGPL-2.1), which are installed separately and not part of this repository. This licence covers only the project's own code and documentation. It grants no right to "Zax: The Alien Hunter" itself: the game, its executable, data, texts, names and artwork belong to their rights holders, are not included, and every player brings them from their own copy.
