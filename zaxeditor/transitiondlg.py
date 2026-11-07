"""Dialog "transition to another level": target level, start point there, return setting.

Target levels are the levels of the game data and our own in the output folder (these take
precedence if both exist). The start points are read from the selected level; a name that does
not exist there is allowed (create the start point later) but is pointed out.
"""
from __future__ import annotations

from typing import Callable

from PySide6.QtCore import Qt
from PySide6.QtWidgets import (QComboBox, QCompleter, QDialog, QDialogButtonBox, QFormLayout,
                               QLabel, QVBoxLayout)

from zaxtools import transition
from zaxtools.level import Level

from .i18n import translate


class TransitionDialog(QDialog):
    def __init__(self, parent, levels: dict[str, Callable[[], Level]], current: str = ''):
        """``levels``: display name (path below Levels/ without extension) -> function that loads the level."""
        super().__init__(parent)
        self.levels = levels
        self._loaded: dict[str, Level | None] = {}
        self.setWindowTitle(translate('transitiondlg', 'Transition to another level'))
        self.resize(560, 260)
        lay = QVBoxLayout(self)
        intro = QLabel(translate('transitiondlg', 'Creates an invisible trigger (Editor/Trigger Icon, Proximity) in the '
                                                  'centre of the view. When Zax enters it, the game switches to the '
                                                  'target level at the chosen start point.'))
        intro.setWordWrap(True)
        lay.addWidget(intro)
        form = QFormLayout()
        lay.addLayout(form)
        self.level_box = QComboBox()
        self.level_box.setEditable(True)
        self.level_box.setInsertPolicy(QComboBox.NoInsert)
        self.level_box.addItems(sorted(levels, key=str.lower))
        comp = self.level_box.completer()
        comp.setFilterMode(Qt.MatchContains)
        comp.setCompletionMode(QCompleter.PopupCompletion)
        self.level_box.setCurrentIndex(-1)
        self.level_box.setEditText(current)
        form.addRow(translate('transitiondlg', 'Target level'), self.level_box)
        self.spawn_box = QComboBox()
        self.spawn_box.setEditable(True)
        form.addRow(translate('transitiondlg', 'Start point there'), self.spawn_box)
        self.ret = QComboBox()
        self.ret.addItems(transition.RETURN_TO_MAP)
        self.ret.setToolTip(translate('transitiondlg', 'Field “Return to map”: what the game does with this level in '
                                                       'memory when Zax leaves it.\n'
                                                       'definitely soon – stays loaded (most frequent value)\n'
                                                       'probably soon – stays loaded, moves to the end of the list '
                                                       '(last used)\n'
                                                       'unlikely soon – is released (like CFlushMapAction)\n'
                                                       'never – expires (like CExpireMapAction)'))
        form.addRow('Return to map', self.ret)
        self.note = QLabel()
        self.note.setWordWrap(True)
        lay.addWidget(self.note)
        self.buttons = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        self.buttons.accepted.connect(self.accept)
        self.buttons.rejected.connect(self.reject)
        lay.addWidget(self.buttons)
        self.level_box.currentTextChanged.connect(self._level_changed)
        self.spawn_box.currentTextChanged.connect(lambda _t: self._update())
        self._level_changed(self.level_box.currentText())

    def _level(self, name: str) -> Level | None:
        if name not in self.levels:
            return None
        if name not in self._loaded:
            try:
                self._loaded[name] = self.levels[name]()
            except Exception:  # noqa: BLE001 - broken file: treat like an unknown level
                self._loaded[name] = None
        return self._loaded[name]

    def _level_changed(self, name: str) -> None:
        lv = self._level(name.strip())
        old = self.spawn_box.currentText()
        self.spawn_box.clear()
        if lv is not None:
            names = [p.name for p in transition.spawn_points(lv)]
            self.spawn_box.addItems(names)
            self.spawn_box.setEditText(old if old in names else names[0] if names else '')
        self._update()

    def map_name(self) -> str:
        """``New Map Name``: Partial File Name of the target level (spelled as there)."""
        name = self.level_box.currentText().strip()
        lv = self._level(name)
        return lv.partial_file_name if lv is not None and lv.partial_file_name else name

    def location(self) -> str:
        return self.spawn_box.currentText().strip()

    def return_to_map(self) -> str:
        return self.ret.currentText()

    def _update(self) -> None:
        name, loc = self.level_box.currentText().strip(), self.location()
        lv = self._level(name)
        ok = bool(name and loc)
        if not name:
            msg = translate('transitiondlg', 'Choose the target level.')
        elif lv is None:
            msg = translate('transitiondlg', '⚠ This level exists neither in the game data nor in the output folder.')
        elif not loc:
            msg = translate('transitiondlg', 'The target level has no named start point. Create one there first (Edit '
                                             '→ Insert start point) or enter a name here.')
        elif loc not in [p.name for p in transition.spawn_points(lv)]:
            msg = translate('transitiondlg', '⚠ “{name}” does not exist in the target level yet – create it there as a '
                                             'start point.').format(name=loc)
        else:
            msg = translate('transitiondlg', 'Start point present. Tip: in the target level do not put the start point '
                                             'inside an exit.')
        self.note.setText(msg)
        self.buttons.button(QDialogButtonBox.Ok).setEnabled(ok)
