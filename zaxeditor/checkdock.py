"""Dock "Level check": the findings of ``zaxtools.levelcheck`` grouped by check.

A double click on a finding selects its object on the map (``jump_requested``). The tooltip of a finding
gives the full explanation and its source.
"""
from __future__ import annotations

from PySide6.QtCore import Qt, Signal
from PySide6.QtGui import QBrush, QColor
from PySide6.QtWidgets import QHBoxLayout, QLabel, QPushButton, QTreeWidget, QTreeWidgetItem, QVBoxLayout, QWidget

from zaxtools import levelcheck as lc

from .i18n import translate

COLORS = {'error': QColor(220, 60, 50), 'warning': QColor(215, 150, 20), 'info': QColor(70, 140, 210)}
SEVERITY_ORDER = {s: i for i, s in enumerate(lc.SEVERITIES)}


class CheckPanel(QWidget):
    jump_requested = Signal(object)         # LevelPart
    recheck_requested = Signal()

    def __init__(self, parent=None):
        super().__init__(parent)
        lay = QVBoxLayout(self)
        lay.setContentsMargins(4, 4, 4, 4)
        top = QHBoxLayout()
        self.summary = QLabel(translate('checkdock', 'Not checked yet (Level → Check).'))
        self.summary.setWordWrap(True)
        btn = QPushButton(translate('checkdock', 'Check again'))
        btn.clicked.connect(self.recheck_requested)
        top.addWidget(self.summary, 1)
        top.addWidget(btn)
        self.tree = QTreeWidget()
        self.tree.setHeaderLabels([translate('checkdock', 'Finding'), translate('checkdock', 'Object'),
                                   translate('checkdock', 'Field'), translate('checkdock', 'Value')])
        self.tree.setColumnWidth(0, 420)
        self.tree.setColumnWidth(1, 180)
        self.tree.setColumnWidth(2, 220)
        self.tree.setToolTip(translate('checkdock', 'Double click: select the object on the map'))
        self.tree.itemDoubleClicked.connect(self._double_clicked)
        lay.addLayout(top)
        lay.addWidget(self.tree)
        self.findings: list[lc.Finding] = []

    def set_findings(self, findings: list[lc.Finding], note: str = '') -> None:
        self.findings = findings
        self.tree.clear()
        groups: dict[str, list[lc.Finding]] = {}
        for f in findings:
            groups.setdefault(f.check, []).append(f)
        order = sorted(groups, key=lambda k: (SEVERITY_ORDER[lc.CHECKS[k][0]], list(lc.CHECKS).index(k)))
        for key in order:
            sev, title = lc.CHECKS[key]
            items = groups[key]
            g = QTreeWidgetItem([translate('checkdock', '{severity}: {title} ({count})').format(
                severity=translate('levelcheck', lc.SEVERITY_TEXT[sev]), title=translate('levelcheck', title),
                count=len(items))])
            g.setForeground(0, QBrush(COLORS[sev]))
            f0 = g.font(0)
            f0.setBold(True)
            g.setFont(0, f0)
            g.setFirstColumnSpanned(True)
            self.tree.addTopLevelItem(g)
            for f in items:
                it = QTreeWidgetItem([f.message, f.object_text(), f.field, f.value])
                it.setData(0, Qt.UserRole, f)
                tip = translate('checkdock', '{message}\n\nSource: {source}').format(message=f.message, source=f.source)
                for col in range(4):
                    it.setToolTip(col, tip)
                g.addChild(it)
            g.setFirstColumnSpanned(True)
            g.setExpanded(sev == 'error' or len(items) <= 20)
        text = lc.summary(findings)
        self.summary.setText(text + (f'  ·  {note}' if note else ''))

    def _double_clicked(self, item: QTreeWidgetItem, _col: int) -> None:
        f = item.data(0, Qt.UserRole)
        if isinstance(f, lc.Finding) and f.node is not None:
            self.jump_requested.emit(f.part)
