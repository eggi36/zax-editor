"""Messages and questions without a native macOS window and without an icon.

The native messages (NSAlert) crashed the editor: macOS threw an exception while rasterising the
icon (CUINamedVectorGlyph, 2026-10-20). That is why Qt draws the windows itself here. Called like
the functions of the same name in ``QMessageBox``; the result is the standard button pressed
(``QMessageBox.NoButton`` if none).
"""
from __future__ import annotations

import sys

from PySide6.QtCore import Qt
from PySide6.QtWidgets import QMessageBox, QWidget

Btn = QMessageBox.StandardButton


def make(parent: QWidget | None, title: str, text: str,
         buttons: Btn = QMessageBox.NoButton) -> QMessageBox:
    """Empty message window for custom buttons (``addButton``)."""
    box = QMessageBox(QMessageBox.NoIcon, title, text, buttons, parent)
    box.setOption(QMessageBox.Option.DontUseNativeDialog)
    return box


def _ask(parent, title, text, buttons, default) -> Btn:
    box = make(parent, title, text, buttons)
    if default != QMessageBox.NoButton:
        box.setDefaultButton(default)
    box.exec()
    clicked = box.clickedButton()
    return box.standardButton(clicked) if clicked is not None else QMessageBox.NoButton


def warning(parent, title, text, buttons: Btn = QMessageBox.Ok, default: Btn = QMessageBox.NoButton) -> Btn:
    return _ask(parent, title, text, buttons, default)


def information(parent, title, text, buttons: Btn = QMessageBox.Ok, default: Btn = QMessageBox.NoButton) -> Btn:
    return _ask(parent, title, text, buttons, default)


def ask_save(parent, title, text, informative: str = '') -> Btn:
    """Save / Don't Save / Cancel about unsaved changes; on macOS as a sheet of the window."""
    box = make(parent, title, text, QMessageBox.Save | QMessageBox.Discard | QMessageBox.Cancel)
    if informative:
        box.setInformativeText(informative)
    box.setDefaultButton(QMessageBox.Save)
    box.setEscapeButton(QMessageBox.Cancel)
    if sys.platform == 'darwin' and parent is not None:
        box.setWindowModality(Qt.WindowModal)       # QMessageBox makes a window-modal box a sheet
    box.exec()
    clicked = box.clickedButton()
    return box.standardButton(clicked) if clicked is not None else QMessageBox.Cancel


def question(parent, title, text, buttons: Btn = QMessageBox.Yes | QMessageBox.No,
             default: Btn = QMessageBox.NoButton) -> Btn:
    return _ask(parent, title, text, buttons, default)
