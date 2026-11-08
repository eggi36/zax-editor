"""Level → Test in game (F5): save the level into the output folder and run it in a test VM.

The editor never starts or controls a VM itself and never needs its password: it only submits a job to
the VM helper through ``zax-testtools/tools/vmtest.py`` (a subprocess, run in the background with ``QProcess``) and
shows what comes back. The job copies the level (and its mini map) from the output folder, plus the
dialogue scripts of the level that lie in the output folder (the game folder in the VM is put back at the
end of the job, ``--cleanup``), and starts the game through the launcher
with ``/Map`` (the level's path below ``Levels``) and ``/Spawn`` (the selected start point; without one
the launcher's default applies, CLAUDE.md step 19); ``Rules.txt`` is not touched. Results from the VM
are untrusted: only shown as text and images, never executed or interpreted.
"""
from __future__ import annotations

import importlib.util
import json
import os
import re
import sys
from pathlib import Path

from PySide6.QtCore import QProcess, Qt
from PySide6.QtGui import QPixmap
from PySide6.QtWidgets import (QCheckBox, QComboBox, QDialog, QDialogButtonBox, QFormLayout, QLabel,
                               QPlainTextEdit, QScrollArea, QSpinBox, QVBoxLayout, QWidget)

from zaxtools import rds, transition

from . import msgbox
from .dialogue import dialog_fields
from .i18n import translate

APP = 'Zax-Editor'
# The VM tool of zax-testtools (the private test harness; until 2026-11-07 zax-decomp's): ZAX_TESTTOOLS, else the folder
# zax-testtools next to this repository
TESTTOOLS = Path(os.environ.get('ZAX_TESTTOOLS') or Path(__file__).resolve().parent.parent.parent / 'zax-testtools')
VMTEST = TESTTOOLS / 'tools' / 'vmtest.py'
# s after the level has loaded ("Preload things on Map" in the launcher's Zax-Debug.log, vmtest.py's
# SHOT_SET_LOADED): the wait of the shot set's dialogue scene (the opening dialogue of 01 Main is on screen)
DEFAULT_WAIT = 8
LOADED = {'until_debug_log': 'Preload things on Map', 'timeout': 120}   # vmtest.SHOT_SET_LOADED
DIFFICULTIES = ('', 'Easy', 'Normal', 'Hard')   # vmtest.py --difficulty; '' = the launcher's default


def _vmtest():
    """zax-testtools/tools/vmtest.py as a module (for the list of mounted VM shares)."""
    spec = importlib.util.spec_from_file_location('zax_vmtest', VMTEST)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def mounted_shares() -> list[Path]:
    try:
        return list(_vmtest().mounted_shares())
    except Exception:           # noqa: BLE001 - a broken helper script must not stop the editor
        return []


class SettingsDialog(QDialog):
    """VM share, wait time, difficulty, /Original (remembered in the settings)."""

    def __init__(self, parent, settings):
        super().__init__(parent)
        self.settings = settings
        self.setWindowTitle(translate('gametest', 'Test in game – settings'))
        form = QFormLayout(self)
        self.share = QComboBox()
        self.share.addItem(translate('gametest', 'Automatic (the least busy VM)'), '')
        for s in mounted_shares():
            self.share.addItem(s.name, str(s))
        cur = settings.value('gametest/share', '')
        if cur and self.share.findData(cur) < 0:
            self.share.addItem(Path(cur).name + ' ' + translate('gametest', '(not mounted)'), cur)
        self.share.setCurrentIndex(max(0, self.share.findData(cur)))
        self.wait = QSpinBox()
        self.wait.setRange(1, 600)
        self.wait.setSuffix(' s')
        self.wait.setValue(int(settings.value('gametest/wait', DEFAULT_WAIT)))
        self.wait.setToolTip(translate('gametest', 'Seconds from the end of loading the level to the screenshot'))
        self.difficulty = QComboBox()
        for d in DIFFICULTIES:
            self.difficulty.addItem(d or translate('gametest', 'Launcher default'), d)
        self.difficulty.setCurrentIndex(max(0, self.difficulty.findData(settings.value('gametest/difficulty', ''))))
        self.original = QCheckBox(translate('gametest', 'Original game (/Original: without the reimplementation)'))
        self.original.setChecked(settings.value('gametest/original', False, type=bool))
        form.addRow(translate('gametest', 'VM:'), self.share)
        form.addRow(translate('gametest', 'Screenshot after:'), self.wait)
        form.addRow(translate('gametest', 'Difficulty:'), self.difficulty)
        form.addRow(self.original)
        bb = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        bb.accepted.connect(self.accept)
        bb.rejected.connect(self.reject)
        form.addRow(bb)

    def accept(self):
        self.settings.setValue('gametest/share', self.share.currentData())
        self.settings.setValue('gametest/wait', self.wait.value())
        self.settings.setValue('gametest/difficulty', self.difficulty.currentData())
        self.settings.setValue('gametest/original', self.original.isChecked())
        super().accept()


class ResultWindow(QDialog):
    """Job id, state, the screenshots and the job log of one run (updated while it runs)."""

    def __init__(self, parent, title: str):
        super().__init__(parent)
        self.setWindowTitle(title)
        self.setAttribute(Qt.WA_DeleteOnClose)
        self.resize(1000, 800)
        lay = QVBoxLayout(self)
        self.state = QLabel(translate('gametest', 'Submitting the job …'))
        self.state.setWordWrap(True)
        self.state.setTextInteractionFlags(Qt.TextSelectableByMouse)
        lay.addWidget(self.state)
        self.shots = QWidget()
        self.shots_lay = QVBoxLayout(self.shots)
        area = QScrollArea()
        area.setWidgetResizable(True)
        area.setWidget(self.shots)
        lay.addWidget(area, 3)
        self.log = QPlainTextEdit()
        self.log.setReadOnly(True)
        lay.addWidget(self.log, 2)

    def add_output(self, text: str) -> None:
        self.log.appendPlainText(text.rstrip('\n'))

    def show_result(self, folder: Path | None, ok: bool, summary: str) -> None:
        self.state.setText(summary)
        if folder is None:
            return
        data = {}
        try:
            data = json.loads((folder / 'result.json').read_text(encoding='utf-8-sig'))
        except (OSError, ValueError):
            pass
        names = [str(n) for n in (data.get('screenshots') or []) if isinstance(n, (str, int))]
        if not names:
            names = sorted(p.name for p in folder.glob('*.png'))
        for name in names:
            p = folder / name
            if p.parent != folder or not p.is_file():
                continue
            pm = QPixmap(str(p))
            if pm.isNull():
                continue
            cap = QLabel(str(p))
            cap.setTextInteractionFlags(Qt.TextSelectableByMouse)
            img = QLabel()
            img.setPixmap(pm.scaledToWidth(min(pm.width(), 940), Qt.SmoothTransformation))
            self.shots_lay.addWidget(cap)
            self.shots_lay.addWidget(img)
        self.shots_lay.addStretch(1)
        try:
            log = (folder / 'log.txt').read_text(encoding='utf-8-sig', errors='replace')
        except OSError:
            log = ''
        if log:
            self.log.appendPlainText('\n--- log.txt ---\n' + log)


class GameTest:
    """F5: save, submit, poll in the background, show the result."""

    def __init__(self, win):
        self.win = win
        self.proc: QProcess | None = None
        self.window: ResultWindow | None = None
        self._out = ''

    def settings_dialog(self) -> None:
        SettingsDialog(self.win, self.win.settings).exec()

    def map_name(self, target: Path) -> str | None:
        """The level's path below the output folder's Levels, without .zax (the launcher's /Map)."""
        out = self.win.output_dir()
        if out is None:
            return None
        levels = (out / 'Levels').resolve()
        try:
            rel = target.resolve().relative_to(levels)
        except ValueError:
            return None
        return rel.with_suffix('').as_posix()

    def spawn(self) -> str | None:
        """The selected start point, else None (the launcher's default)."""
        win = self.win
        parts = win.scene.selected_parts() if win.scene else []
        if len(parts) == 1:
            if any(sp.node is parts[0].node for sp in transition.spawn_points(win.level)):
                return parts[0].name
        return None

    def scripts(self) -> list[tuple[Path, str]]:
        """(file, target below the game folder) of the level's dialogue scripts that lie in the output folder."""
        out, seen = [], set()
        for _p, _n, s, _l in dialog_fields(self.win.level):
            key = s.value.replace('\\', '/').strip().lower()
            if not key or key in seen:
                continue
            seen.add(key)
            f = rds.find_file(self.win.output_dir(), f'Levels/{s.value.strip()}.RDS')
            if f is not None:
                out.append((f, 'Data/' + f.relative_to(self.win.output_dir()).as_posix()))
        return out

    def own_models(self) -> list[tuple[Path, str]]:
        """(file, target below the game folder) of the own model files (File → Import images) in the output folder
        that the level's objects and their child objects use (.mdl16 and .mdl)."""
        out, seen = [], set()
        base = self.win.output_dir() / 'Cache' / 'Models'

        def visit(parts):
            for p in parts:
                m = (p.model or '').strip()
                if m and m.lower() not in seen:
                    seen.add(m.lower())
                    for ext in ('.mdl16', '.mdl'):
                        f = base / f'{m}{ext}'
                        if f.is_file():
                            out.append((f, 'Data/' + f.relative_to(self.win.output_dir()).as_posix()))
                visit(p.children)
        visit(self.win.level.parts)
        return out

    def run(self) -> None:
        win = self.win
        if win.level is None or win.source is None:
            win.statusBar().showMessage(translate('gametest', 'Open a level first'), 4000)
            return
        if self.proc is not None:
            msgbox.information(win, APP, translate('gametest', 'A test run is still going on (job window).'))
            if self.window:
                self.window.raise_()
            return
        share = win.settings.value('gametest/share', '') or ''
        shares = mounted_shares()
        if (share and not (Path(share) / 'results').is_dir()) or (not share and not shares):
            msgbox.warning(win, APP, translate(
                'gametest', 'No VM share is mounted (the shares of zax-testtools\' vmtest/local.json).\n\nStart the VM and '
                'its helper (zax-vm-helper.cmd) yourself and connect the share in the Finder (Go → Connect to '
                'Server, smb://<VM>/<share>). The editor never starts a VM.'))
            return
        if win.need_output() is None:
            return
        target = win._target()
        mapname = self.map_name(target) if target else None
        if mapname is None:
            msgbox.warning(win, APP, translate('gametest', 'The level must lie in the output folder below Levels to be '
                                                           'tested in the game:\n{folder}\nSave it there with “Save '
                                                           'as …”.').format(folder=win.output_dir() / 'Levels'))
            return
        if not win.dialogue_panel.maybe_save():
            return
        win._check_before_save()
        if not win._write(target, quiet=True):
            return
        # --cleanup: the VM's game folder is put back at the end of the job (other runs find it unchanged)
        args = [str(VMTEST), '--map', mapname, '--output', str(win.output_dir()), '--cleanup',
                '--steps', json.dumps([LOADED, {'wait': int(win.settings.value('gametest/wait', DEFAULT_WAIT))},
                                       {'shot': 'start'}])]
        spawn = self.spawn()
        if spawn:
            args += ['--spawn', spawn]
        difficulty = win.settings.value('gametest/difficulty', '') or ''
        if difficulty:
            args += ['--difficulty', difficulty]
        if win.settings.value('gametest/original', False, type=bool):
            args += ['--arg', '/Original']
        for src, to in self.scripts() + self.own_models():
            args += ['--file', f'{src}={to}']
        if share:
            args += ['--share', share]
        self.window = ResultWindow(win, translate('gametest', 'Test in game: {map}').format(map=mapname))
        self.window.destroyed.connect(self._window_closed)
        self.window.add_output('$ vmtest.py ' + ' '.join(_quote(a) for a in args[1:]))
        self.window.show()
        self._out = ''
        self.proc = QProcess(win)
        self.proc.setProcessChannelMode(QProcess.MergedChannels)
        self.proc.readyReadStandardOutput.connect(self._read)
        self.proc.finished.connect(self._finished)
        self.proc.errorOccurred.connect(self._error)
        self.proc.start(sys.executable, ['-u'] + args)
        win.statusBar().showMessage(translate('gametest', 'Test in game: job submitted for {map}').format(map=mapname),
                                    6000)

    def _window_closed(self) -> None:
        self.window = None

    def _read(self) -> None:
        text = bytes(self.proc.readAllStandardOutput()).decode('utf-8', 'replace')
        self._out += text
        if self.window:
            self.window.add_output(text)
            m = re.search(r'Job (\S+) submitted', self._out)
            if m and self.window.state.text() == translate('gametest', 'Submitting the job …'):
                self.window.state.setText(translate('gametest', 'Job {id} submitted, waiting for the VM …').format(
                    id=m.group(1)))

    def _error(self, err) -> None:
        if err == QProcess.FailedToStart:
            if self.window:
                self.window.show_result(None, False, translate('gametest', 'vmtest.py could not be started.'))
            self.proc = None

    def _finished(self, code: int, _status) -> None:
        self._read()
        self.proc = None
        ids = re.findall(r'Job (\S+) submitted', self._out)   # the last: a lost job is submitted once more
        job = ids[-1] if ids else '?'
        f = re.search(r'^Folder: (.+)$', self._out, re.M)
        folder = Path(f.group(1).strip()) if f else None
        r = re.search(r'^Result: (.+)$', self._out, re.M)
        result = r.group(1).strip() if r else translate('gametest', 'no result (exit code {code})').format(code=code)
        summary = translate('gametest', 'Job {id}: {result}').format(id=job, result=result)
        if folder:
            summary += '\n' + str(folder)
        if self.window:
            self.window.show_result(folder if folder and folder.is_dir() else None, code == 0, summary)
            self.window.raise_()
        self.win.statusBar().showMessage(summary.split('\n')[0], 10000)


def _quote(a: str) -> str:
    return a if re.fullmatch(r'[\w./=:-]+', a) else "'" + a.replace("'", "'\\''") + "'"
