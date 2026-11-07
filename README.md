# zax-editor

The level editor for "Zax: The Alien Hunter" (Reflexive Entertainment / JoWooD, 2001), PySide6: objects, polygons, ground, surfaces, mini map, transitions, dialogue scripts, own graphics, a model viewer, Test in game; English with a German translation.

It is built on **zaxtools** from [zax-formats](../zax-formats) (every file format of the game read and written byte for byte), which it expects next to this repository (or `ZAX_FORMATS`). The decompilation of Zax.exe is zax-decomp (its docs explain the engine behind the editor's checks and help texts); Test in game runs the VM tool of the test harness next to it (`ZAX_TESTTOOLS`), which is not published. Until 2026-11-07 the editor and the format library were one repository, zax-toolbox.

## Setup

1. Python 3.10 or newer: `python3 -m venv .venv && .venv/bin/pip install -r requirements.txt`
2. zax-formats next to this repository (or `ZAX_FORMATS`).
3. Point `ZAX_DATA` to the game data (the `Data.dat` of an installed game, or an unpacked `Data` folder), or choose it in the editor.
4. Start the editor: `python -m zaxeditor` (on macOS also by double-clicking `Zax-Editor.command`); the model viewer: `python -m zaxeditor.viewer`.
5. Check the UI texts: `python tools/selftest_ui.py` – expected: 0 failures; the format library's self-test is zax-formats' `tools/selftest.py`.
6. `git config core.hooksPath tools/git-hooks` (the pre-push hook: no game data, no private names or paths).

The game data is not included and must never go into the repository: every player brings the original assets from their own copy. The editor saves into its own output folder, never into the game data.

## Licence

MIT (`LICENSE`). The editor uses PySide6 (Qt for Python, LGPL-3.0), which is installed separately and not part of this repository. This licence covers only the project's own code and documentation. It grants no right to "Zax: The Alien Hunter" itself: the game, its executable, data, texts, names and artwork belong to their rights holders, are not included, and every player brings them from their own copy.
