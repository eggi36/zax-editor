"""Settings window (macOS: Zax-Editor → Settings …, ⌘,): the paths and switches that also stand in the
File and Window menus, in one place. Every change applies at once through the main window's own
methods and actions, so menu and window always agree."""
from __future__ import annotations

from PySide6.QtCore import Qt
from PySide6.QtWidgets import (QCheckBox, QComboBox, QDialog, QDialogButtonBox, QFormLayout, QGroupBox,
                               QHBoxLayout, QLabel, QPushButton, QVBoxLayout, QWidget)

from . import i18n
from .i18n import translate

PATH_WIDTH = 320        # width of a path in the window (logical pixels)


class SettingsDialog(QDialog):
    def __init__(self, win):
        super().__init__(win)
        self.win = win
        self.setWindowTitle(translate('settingsdlg', 'Settings'))
        self.setMinimumWidth(560)
        lay = QVBoxLayout(self)

        paths = QGroupBox(translate('settingsdlg', 'Files'))
        form = QFormLayout(paths)
        self.labels: dict[str, QLabel] = {}
        for key, text, buttons in (
                ('data', translate('settingsdlg', 'Game data'),
                 [(translate('settingsdlg', 'Choose …'), win.choose_data)]),
                ('pack', translate('settingsdlg', 'Language pack'),
                 [(translate('settingsdlg', 'Choose …'), win.choose_language_pack),
                  (translate('settingsdlg', 'None'), win.clear_language_pack)]),
                ('output', translate('settingsdlg', 'Output folder'),
                 [(translate('settingsdlg', 'Choose …'), win.choose_output)]),
                ('exe', translate('settingsdlg', 'Zax.exe'),
                 [(translate('settingsdlg', 'Choose …'), win.choose_exe)])):
            row = QWidget()
            h = QHBoxLayout(row)
            h.setContentsMargins(0, 0, 0, 0)
            label = QLabel()
            label.setMinimumWidth(PATH_WIDTH)
            h.addWidget(label, 1)
            for btext, slot in buttons:
                b = QPushButton(btext)
                b.setAutoDefault(False)
                b.clicked.connect(lambda _=False, s=slot: (s(), self.refresh()))
                h.addWidget(b)
            self.labels[key] = label
            form.addRow(text, row)
        lay.addWidget(paths)

        saving = QGroupBox(translate('settingsdlg', 'Saving'))
        v = QVBoxLayout(saving)
        for action in (win.minimap_action, win.minimap_game_action, win.write_way_action):
            box = QCheckBox(action.text())
            box.setToolTip(action.toolTip())
            box.setChecked(action.isChecked())
            box.toggled.connect(action.setChecked)
            action.toggled.connect(box.setChecked)        # the two mini map options exclude each other
            v.addWidget(box)
        lay.addWidget(saving)

        ui = QGroupBox(translate('settingsdlg', 'Editor'))
        form = QFormLayout(ui)
        self.language = QComboBox()
        for code in [i18n.SYSTEM] + i18n.available():
            self.language.addItem(translate('app', 'System') if code == i18n.SYSTEM else i18n.name(code), code)
        self.language.setCurrentIndex(max(0, self.language.findData(i18n.chosen(win.settings))))
        self.language.currentIndexChanged.connect(lambda _i: win.set_language(self.language.currentData()))
        form.addRow(translate('settingsdlg', 'Language (at the next start)'), self.language)
        lay.addWidget(ui)

        lay.addStretch(1)
        bb = QDialogButtonBox(QDialogButtonBox.Close)
        bb.rejected.connect(self.close)
        lay.addWidget(bb)
        self.refresh()

    def refresh(self) -> None:
        win = self.win
        none = translate('settingsdlg', '(none)')
        exe = win.exe_path()
        values = {'data': str(win.ds.root) if win.ds is not None else win.settings.value('data') or none,
                  'pack': win.settings.value('language_pack') or none,
                  'output': str(win.output_dir()),
                  'exe': str(exe) if exe else none}
        for key, label in self.labels.items():       # long paths shortened in the middle, whole in the tooltip
            label.setText(label.fontMetrics().elidedText(values[key], Qt.ElideMiddle, PATH_WIDTH))
            label.setToolTip(values[key] if values[key] != none else '')

    def showEvent(self, e):
        self.refresh()
        super().showEvent(e)
