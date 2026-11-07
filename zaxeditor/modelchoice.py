"""Dialog: choose a model of the catalogue (search line + list), e.g. for a child object."""
from __future__ import annotations

from PySide6.QtCore import Qt
from PySide6.QtWidgets import QDialog, QDialogButtonBox, QLabel, QLineEdit, QListWidget, QVBoxLayout

from .i18n import translate


class ModelChoice(QDialog):
    """``models``: the paths offered first (in this order), ``rest``: further paths below them (shown
    while searching, or always with ``show_rest``); ``current``: preselected."""

    def __init__(self, parent, title: str, text: str, models: list[str], rest: list[str] = (),
                 current: str | None = None, show_rest: bool = False):
        super().__init__(parent)
        self.setWindowTitle(title)
        self.resize(520, 480)
        self.first, self.rest, self.show_rest = list(models), [m for m in rest if m not in set(models)], show_rest
        lay = QVBoxLayout(self)
        label = QLabel(text)
        label.setWordWrap(True)
        lay.addWidget(label)
        self.search = QLineEdit()
        self.search.setPlaceholderText(translate('modelchoice', 'Search: model path'))
        self.search.textChanged.connect(self._fill)
        lay.addWidget(self.search)
        self.list = QListWidget()
        self.list.itemDoubleClicked.connect(lambda _it: self.accept())
        lay.addWidget(self.list)
        bb = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        bb.accepted.connect(self.accept)
        bb.rejected.connect(self.reject)
        lay.addWidget(bb)
        self._fill('')
        if current:
            hit = self.list.findItems(current, Qt.MatchExactly)
            if hit:
                self.list.setCurrentItem(hit[0])
        if self.list.currentItem() is None and self.list.count():
            self.list.setCurrentRow(0)
        self.search.setFocus()

    def _fill(self, t: str) -> None:
        t = t.lower()
        keep = self.list.currentItem().text() if self.list.currentItem() else None
        self.list.clear()
        pool = self.first + (self.rest if (t or self.show_rest) else [])
        for m in pool:
            if not t or t in m.lower():
                self.list.addItem(m)
        hit = self.list.findItems(keep, Qt.MatchExactly) if keep else []
        if hit:
            self.list.setCurrentItem(hit[0])
        elif self.list.count():
            self.list.setCurrentRow(0)

    def model(self) -> str | None:
        it = self.list.currentItem()
        return it.text() if it is not None else None
