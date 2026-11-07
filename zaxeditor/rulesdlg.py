"""Dialog "Rules.txt": the game's rules (``CRules``: start level and start point, camera, menu music, window
font, the ``CZaxCustomRules`` with the layout of the game windows, the main menu, the HUD …) on the
property machinery of ``props.py`` (help texts, kinds, limits and defaults from Zax.exe).

``First Map Name`` offers the levels of the game data and the output folder, ``First Map Spawn Point``
the start points of the chosen level. Read from the output folder when the editor saved a Rules.txt
there, otherwise from the game data; saved only into the output folder (``zaxtools.rules``). Changes have
their own undo stack; an unchanged file is written back byte for byte.
"""
from __future__ import annotations

from pathlib import Path
from typing import Callable

from PySide6.QtGui import QKeySequence, QUndoStack
from PySide6.QtWidgets import QDialog, QHBoxLayout, QLabel, QMessageBox, QPushButton, QVBoxLayout

from zaxtools import header, rules as rl, textformat as tf
from zaxtools.level import Level, LevelPart
from zaxtools.transition import spawn_points

from . import msgbox
from .i18n import translate
from .props import EditCommand, InsertEntryCommand, PropertyPanel


class RulesPanel(PropertyPanel):
    def __init__(self, levels: dict[str, Callable[[], Level]]):
        super().__init__()
        self.levels = levels
        self._loaded: dict[str, Level | None] = {}
        self.refs_in.parentWidget().hide()

    def show_rules(self, rf: rl.RulesFile) -> None:
        self.level, self.part = None, LevelPart(rf.root)
        scroll = self.tree.verticalScrollBar().value()
        self._filling = True
        self.tree.clear()
        self._fill(self.tree.invisibleRootItem(), rf.root, rf.root.value if self.schema and
                   self.schema.known(rf.root.value) else None)
        self.tree.expandToDepth(0)
        self._filling = False
        self.tree.verticalScrollBar().setValue(scroll)

    def level_named(self, name: str) -> Level | None:
        key = rl.find_level(self.levels, name)
        if key is None:
            return None
        if key not in self._loaded:
            try:
                self._loaded[key] = self.levels[key]()
            except Exception:  # noqa: BLE001 - a broken file counts as a level without start points
                self._loaded[key] = None
        return self._loaded[key]

    def spawn_names(self) -> list[str]:
        lv = self.level_named(self.part.get(rl.FIRST_MAP, '') or '') if self.part is not None else None
        return [p.name for p in spawn_points(lv)] if lv is not None else []

    def extra_choices(self, cls, entry: tf.Entry):
        if cls == 'CRules' and entry.key == rl.FIRST_MAP:
            return sorted(self.levels, key=str.lower)
        if cls == 'CRules' and entry.key == rl.FIRST_SPAWN:
            return self.spawn_names()
        return super().extra_choices(cls, entry)

    def extra_warning(self, cls, entry: tf.Entry) -> str:
        if cls == 'CRules' and entry.key == rl.FIRST_MAP and rl.find_level(self.levels, entry.value) is None:
            return translate('rulesdlg', 'This level exists neither in the game data nor in the output folder.')
        if cls == 'CRules' and entry.key == rl.FIRST_SPAWN:
            state = header.spawn_name_state(self.spawn_names(), entry.value)
            if state == 'missing':
                return translate('rulesdlg', 'The start level has no start point “{name}”.').format(name=entry.value)
        return super().extra_warning(cls, entry)

    def extra_note(self, cls, entry: tf.Entry) -> str:
        if cls == 'CRules' and entry.key == rl.FIRST_MAP:
            return translate('rulesdlg', '“New Game” starts this level: its path below Levels/ without extension.')
        if cls == 'CRules' and entry.key == rl.FIRST_SPAWN:
            note = translate('rulesdlg', 'The named start point of the start level where Zax begins.')
            if header.spawn_name_state(self.spawn_names(), entry.value) == 'spaces':
                note += ' ' + translate('rulesdlg', 'The value differs from the start point only by blanks at the end '
                                                    '(the shipped Rules.txt has “Game Start ” and works).')
            return note
        return ''


class RulesDialog(QDialog):
    def __init__(self, parent, ds, out_dir: Path, levels: dict[str, Callable[[], Level]], schema,
                 writable: Callable[[Path], bool]):
        super().__init__(parent)
        self.ds, self.out_dir, self.writable = ds, Path(out_dir), writable
        self.setWindowTitle(translate('rulesdlg', 'Rules.txt – start level and game windows'))
        self.resize(720, 760)
        self.undo = QUndoStack(self)
        self.panel = RulesPanel(levels)
        self.panel.schema, self.panel.ds = schema, ds
        self.panel.edit_requested.connect(self._edit)
        self.panel.insert_requested.connect(lambda part, node, i, entry: self.undo.push(
            InsertEntryCommand(part, node, i, entry, self._changed)))
        self.source = QLabel()
        self.source.setWordWrap(True)
        lay = QVBoxLayout(self)
        lay.addWidget(self.source)
        lay.addWidget(self.panel, 1)
        row = QHBoxLayout()
        for text, slot, key in ((translate('rulesdlg', 'Undo'), self.undo.undo, QKeySequence.Undo),
                                (translate('rulesdlg', 'Redo'), self.undo.redo, QKeySequence.Redo)):
            b = QPushButton(text)
            b.clicked.connect(slot)
            b.setShortcut(key)
            row.addWidget(b)
        self.undo.canUndoChanged.connect(row.itemAt(0).widget().setEnabled)
        self.undo.canRedoChanged.connect(row.itemAt(1).widget().setEnabled)
        row.itemAt(0).widget().setEnabled(False)
        row.itemAt(1).widget().setEnabled(False)
        reload = QPushButton(translate('rulesdlg', 'Load from the game data'))
        reload.setToolTip(translate('rulesdlg', 'Discard the shown state and read the game\'s Rules.txt again.'))
        reload.clicked.connect(self._reload)
        row.addWidget(reload)
        row.addStretch(1)
        self.save_btn = QPushButton(translate('rulesdlg', 'Save to the output folder'))
        self.save_btn.clicked.connect(self.save)
        close = QPushButton(translate('rulesdlg', 'Close'))
        close.clicked.connect(self.close)
        row.addWidget(self.save_btn)
        row.addWidget(close)
        lay.addLayout(row)
        self.undo.cleanChanged.connect(lambda _c: self._update_source())
        self._set(rl.load(ds, self.out_dir))

    def _set(self, rf: rl.RulesFile) -> None:
        self.rules = rf
        self.undo.clear()
        self.panel.show_rules(rf)
        self._update_source()

    def _update_source(self) -> None:
        where = (translate('rulesdlg', 'Read from the output folder: {path}') if self.rules.source == 'output' else
                 translate('rulesdlg', 'Read from the game data: {path}')).format(path=self.rules.path)
        state = '' if self.undo.isClean() else '  ' + translate('rulesdlg', '(changed, not saved)')
        self.source.setText(where + state + '\n' + translate('rulesdlg', 'Saved as {path}; copy it to DATA\\Rules.txt '
                                                                         'of the game (back up the original).').format(
            path=self.out_dir / rl.RULES))

    def _changed(self, _part=None) -> None:
        self.panel.show_rules(self.rules)

    def _edit(self, part, entry: tf.Entry, new: str) -> None:
        try:
            new.encode('latin-1')
        except UnicodeEncodeError:
            msgbox.warning(self, self.windowTitle(), translate('rulesdlg', 'Only characters from Latin-1 are allowed.'))
            return
        self.undo.push(EditCommand(part, entry, new, self._changed))

    def _reload(self) -> None:
        if not self.undo.isClean() and msgbox.question(self, self.windowTitle(), translate(
                'rulesdlg', 'Discard the changes?')) != QMessageBox.Yes:
            return
        self._set(rl.from_data(self.ds))

    def save(self) -> bool:
        target = self.out_dir / rl.RULES
        if not self.writable(target):
            msgbox.warning(self, self.windowTitle(), translate('rulesdlg', 'The output folder lies inside the game '
                                                                           'data; the game\'s files are never '
                                                                           'overwritten.'))
            return False
        try:
            rl.save(self.rules, self.out_dir)
        except (OSError, UnicodeEncodeError) as e:
            msgbox.warning(self, self.windowTitle(), translate('rulesdlg', 'Cannot be saved: {error}').format(error=e))
            return False
        self.rules.source, self.rules.path = 'output', str(target)
        self.undo.setClean()
        self._update_source()
        return True

    def closeEvent(self, e):
        if not self.undo.isClean():
            r = msgbox.ask_save(self, self.windowTitle(), translate('rulesdlg', 'Save the changed Rules.txt?'))
            if r == QMessageBox.Cancel or r == QMessageBox.Save and not self.save():
                e.ignore()
                return
        super().closeEvent(e)
