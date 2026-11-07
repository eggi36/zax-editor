"""Dialog "new level": name and location, size, music, environment, ground textures.

The level is created by ``zaxtools.newlevel`` (fixed values from the original levels plus these
inputs). The textures are freely put together from Cache/Textures (``groundtool.TexturePicker``);
the order determines the transitions when painting.
"""
from __future__ import annotations

from PySide6.QtCore import QSize, Qt
from PySide6.QtWidgets import (QCheckBox, QComboBox, QDialog, QDialogButtonBox, QFormLayout,
                               QHBoxLayout, QLabel, QLineEdit, QListWidget, QListWidgetItem,
                               QPushButton, QSpinBox, QVBoxLayout, QWidget)

from zaxtools import newlevel

from .groundtool import THUMB, TexturePicker, thumbnail
from .i18n import translate

SIZE_RANGE = (640, 8192)    # originals: 760 to 8000 [verified]


class NewLevelDialog(QDialog):
    def __init__(self, parent, assets):
        super().__init__(parent)
        self.assets = assets
        self.setWindowTitle(translate('newleveldlg', 'New level'))
        self.resize(520, 640)
        lay = QVBoxLayout(self)
        form = QFormLayout()
        lay.addLayout(form)

        # default folder and name: file names, the same in every UI language
        self.folder = QLineEdit('Custom')
        self.name = QLineEdit('New Level')
        self.path_label = QLabel()
        self.path_label.setStyleSheet('color: gray')
        self.desc = QLineEdit()
        self.desc.setPlaceholderText(translate('newleveldlg', 'like the name'))
        form.addRow(translate('newleveldlg', 'Folder below Levels/'), self.folder)
        form.addRow(translate('newleveldlg', 'Name'), self.name)
        form.addRow('', self.path_label)
        form.addRow(translate('newleveldlg', 'Description'), self.desc)

        size = QWidget()
        sl = QHBoxLayout(size)
        sl.setContentsMargins(0, 0, 0, 0)
        self.width_box, self.height_box = QSpinBox(), QSpinBox()
        for b in (self.width_box, self.height_box):
            b.setRange(*SIZE_RANGE)
            b.setValue(newlevel.DEFAULT_SIZE)
            b.setSuffix(' px')
        sl.addWidget(self.width_box)
        sl.addWidget(QLabel('×'))
        sl.addWidget(self.height_box)
        form.addRow(translate('newleveldlg', 'Size'), size)
        hint = QLabel(translate('newleveldlg', 'Most original levels are 4097 × 4097 pixels.'))
        hint.setStyleSheet('color: gray')
        form.addRow('', hint)

        self.music = QComboBox()
        for m in newlevel.MUSIC:
            self.music.addItem(translate('newlevel', m[0]), m[1:])
        self.music.addItem(translate('newleveldlg', 'no music'), None)
        self.music.setCurrentIndex(1)                     # jungle
        form.addRow(translate('newleveldlg', 'Music'), self.music)
        self.env = QComboBox()
        self.env.addItems(newlevel.ENVIRONMENTS)
        self.env.setToolTip(translate('newleveldlg', 'Reverb of the sounds (Environment Type)'))
        form.addRow(translate('newleveldlg', 'Environment'), self.env)

        lay.addWidget(QLabel(translate('newleveldlg', 'Ground textures (order = transitions when painting)')))
        self.tex = QListWidget()
        self.tex.setIconSize(QSize(THUMB, THUMB))
        lay.addWidget(self.tex)
        buttons = QHBoxLayout()
        for text, tip, slot in (('+', translate('groundtool', 'Add textures …'), self._add),
                                ('−', translate('groundtool', 'Remove texture'), self._remove),
                                ('▲', translate('groundtool', 'Texture up'), lambda: self._move(-1)),
                                ('▼', translate('groundtool', 'Texture down'), lambda: self._move(1))):
            b = QPushButton(text)
            b.setToolTip(tip)
            b.clicked.connect(slot)
            buttons.addWidget(b)
        lay.addLayout(buttons)
        form2 = QFormLayout()
        self.ground = QComboBox()
        form2.addRow(translate('newleveldlg', 'Ground everywhere'), self.ground)
        lay.addLayout(form2)

        self.rules = QCheckBox(translate('newleveldlg', 'Enter as the start level when saving (Rules.txt in the '
                                                        'output folder)'))
        self.rules.setChecked(True)
        lay.addWidget(self.rules)
        self.buttons = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        self.buttons.accepted.connect(self.accept)
        self.buttons.rejected.connect(self.reject)
        lay.addWidget(self.buttons)

        self.folder.textChanged.connect(self._update)
        self.name.textChanged.connect(self._update)
        self._update()

    # --- Texture list ----------------------------------------------------------
    def textures(self) -> list[str]:
        return [self.tex.item(i).text() for i in range(self.tex.count())]

    def _set_textures(self, names: list[str], row: int) -> None:
        ground = self.ground.currentText()
        self.tex.clear()
        for n in names:
            it = QListWidgetItem(n)
            if icon := thumbnail(self.assets, n):
                it.setIcon(icon)
            self.tex.addItem(it)
        self.tex.setCurrentRow(min(row, len(names) - 1))
        self.ground.clear()
        self.ground.addItems(names)
        if ground in names:
            self.ground.setCurrentText(ground)
        self._update()

    def _add(self) -> None:
        dlg = TexturePicker(self, self.assets, self.textures())
        if dlg.exec() and (new := dlg.chosen()):
            self._set_textures(self.textures() + new, self.tex.count())

    def _remove(self) -> None:
        i = self.tex.currentRow()
        if i >= 0:
            names = self.textures()
            del names[i]
            self._set_textures(names, i)

    def _move(self, d: int) -> None:
        i, names = self.tex.currentRow(), self.textures()
        if i < 0 or not 0 <= i + d < len(names):
            return
        names[i], names[i + d] = names[i + d], names[i]
        self._set_textures(names, i + d)

    # --- Validation ------------------------------------------------------------
    def partial(self) -> str:
        parts = [p.strip().strip('/') for p in (self.folder.text(), self.name.text())]
        return '/'.join(p for p in parts if p)

    def problem(self) -> str | None:
        name, p = self.name.text().strip(), self.partial()
        if not name:
            return translate('newleveldlg', 'Please enter a name.')
        if '\\' in p or any(c in p for c in ':*?"<>|'):
            return translate('newleveldlg', 'Name and folder without \\ : * ? " < > | (paths only with /).')
        try:
            (p + self.desc.text()).encode('latin-1')
        except UnicodeEncodeError:
            return translate('newleveldlg', 'Only characters from Latin-1 (no special characters from outside Western '
                                            'Europe).')
        if not self.tex.count():
            return translate('newleveldlg', 'Add at least one ground texture (+).')
        return None

    def _update(self) -> None:
        msg = self.problem()
        self.path_label.setText(msg or translate('newleveldlg', 'File: {path}').format(
            path=f'Levels/{self.partial()}.zax'))
        self.path_label.setStyleSheet('color: #c0392b' if msg else 'color: gray')
        self.buttons.button(QDialogButtonBox.Ok).setEnabled(msg is None)

    def build(self):
        """The new level (zaxtools.level.Level)."""
        return newlevel.new_level(
            self.partial(), self.width_box.value(), self.height_box.value(), self.textures(),
            ground=max(0, self.ground.currentIndex()), music=self.music.currentData(),
            environment=self.env.currentText(), description=self.desc.text().strip() or self.name.text().strip())
