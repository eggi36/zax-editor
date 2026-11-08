"""Dock "Dialogue": the dialogue script (``.RDS``) of the selected ``CZaxDialogAction``.

Lists the labels of the script, shows a label's text as the game splits it (speaker, portrait, voice
file; ``zaxtools.rds``) and edits it: change the text, add a label, rename a label (the ``Line=`` fields of
the level that name it change too, one undo step). Saving writes the script into the output folder
(``<output>/Levels/<script>.RDS``), never into the game data or the language pack. A script already in the
output folder is read from there (it is what the game gets once it is copied below ``Data/``).
"""
from __future__ import annotations

from pathlib import Path

from PySide6.QtCore import Qt
from PySide6.QtGui import QBrush, QColor
from PySide6.QtWidgets import (QComboBox, QHBoxLayout, QInputDialog, QLabel, QLineEdit, QListWidget,
                               QListWidgetItem, QMessageBox, QPlainTextEdit, QPushButton, QSplitter, QVBoxLayout,
                               QWidget)

from zaxtools import frm, rds, textformat as tf

from . import msgbox
from .i18n import translate
from .props import MultiEditCommand, describe

APP = 'Zax-Editor'
USED_COLOR = QColor(80, 170, 255)


def dialog_fields(level) -> list[tuple[object, tf.Node, tf.Entry, tf.Entry]]:
    """(part, node, Script entry, Line entry) of every dialogue action of the level, in text order."""
    out = []

    def walk(part, node: tf.Node):
        for c in node.children:
            if isinstance(c, tf.Node):
                s, line = c.item('Script'), c.item('Line')
                if isinstance(s, tf.Entry) and isinstance(line, tf.Entry):
                    out.append((part, c, s, line))
                walk(part, c)
    for p in level.parts:
        walk(p, p.node)
    return out


def same_script(a: str, b: str) -> bool:
    return a.replace('\\', '/').strip().lower() == b.replace('\\', '/').strip().lower()


class DialoguePanel(QWidget):
    def __init__(self, win, parent=None):
        super().__init__(parent)
        self.win = win                       # the main window: ds, output_dir(), level, undo, props
        self.script_name: str | None = None
        self.script: rds.Script | None = None
        self.source = ''                     # 'data', 'pack' or a file path
        self.dirty = False
        self.current: rds.Item | None = None
        self._wanted_line: str | None = None
        self._res: rds.Resources | None = None

        lay = QVBoxLayout(self)
        lay.setContentsMargins(4, 4, 4, 4)
        top = QHBoxLayout()
        self.scripts = QComboBox()
        self.scripts.setToolTip(translate('dialogue', 'Scripts of the selected object\'s dialogue actions'))
        self.scripts.activated.connect(lambda _i: self.open_script(self.scripts.currentData()))
        b_open = QPushButton(translate('dialogue', 'Open script …'))
        b_open.clicked.connect(self.choose_script)
        self.b_save = QPushButton(translate('dialogue', 'Save script'))
        self.b_save.clicked.connect(self.save)
        top.addWidget(self.scripts, 1)
        top.addWidget(b_open)
        top.addWidget(self.b_save)
        lay.addLayout(top)
        self.info = QLabel(translate('dialogue', 'Select an object with a dialogue action (CZaxDialogAction) or open '
                                                 'a script.'))
        self.info.setWordWrap(True)
        self.info.setTextInteractionFlags(Qt.TextSelectableByMouse)
        lay.addWidget(self.info)

        split = QSplitter(Qt.Horizontal)
        left = QWidget()
        ll = QVBoxLayout(left)
        ll.setContentsMargins(0, 0, 0, 0)
        self.filter = QLineEdit()
        self.filter.setPlaceholderText(translate('dialogue', 'Search: label or text'))
        self.filter.textChanged.connect(self._fill_labels)
        self.labels = QListWidget()
        self.labels.setToolTip(translate('dialogue', 'Blue: used by a dialogue action of this level'))
        self.labels.currentItemChanged.connect(lambda it, _p: self._show_item(it))
        lb = QHBoxLayout()
        b_add = QPushButton(translate('dialogue', 'Add label …'))
        b_add.clicked.connect(self.add_label)
        b_ren = QPushButton(translate('dialogue', 'Rename label …'))
        b_ren.clicked.connect(self.rename_label)
        lb.addWidget(b_add)
        lb.addWidget(b_ren)
        ll.addWidget(self.filter)
        ll.addWidget(self.labels, 1)
        ll.addLayout(lb)
        right = QWidget()
        rl = QVBoxLayout(right)
        rl.setContentsMargins(0, 0, 0, 0)
        head = QHBoxLayout()
        self.portrait = QLabel()
        self.portrait.setFixedSize(84, 84)
        self.portrait.setAlignment(Qt.AlignCenter)
        self.meta = QLabel()
        self.meta.setWordWrap(True)
        self.meta.setTextInteractionFlags(Qt.TextSelectableByMouse)
        head.addWidget(self.portrait)
        head.addWidget(self.meta, 1)
        self.text = QPlainTextEdit()
        self.text.setToolTip(translate('dialogue', '“Speaker: text” – the game takes the speaker from before the '
                                                   'first “: ” if it starts within the first 20 characters.'))
        self.text.textChanged.connect(self._text_edited)
        self.b_apply = QPushButton(translate('dialogue', 'Apply text'))
        self.b_apply.clicked.connect(self.apply_text)
        rl.addLayout(head)
        rl.addWidget(self.text, 1)
        rl.addWidget(self.b_apply)
        split.addWidget(left)
        split.addWidget(right)
        split.setStretchFactor(1, 2)
        lay.addWidget(split, 1)
        self._update_buttons()

    # --- sources ---------------------------------------------------------------------------
    def _roots(self) -> list[Path]:
        return self.win.output_roots()

    def resources(self) -> rds.Resources | None:
        if self.win.ds is None:
            return None
        if self._res is None or self._res.ds is not self.win.ds:
            self._res = rds.Resources(self.win.ds, self._roots())
        return self._res

    def target(self, script: str) -> Path | None:
        """The file the script is saved to: below the output folder, in the spelling of the game data (None while no
        output folder is chosen)."""
        out = self.win.output_dir()
        if out is None:
            return None
        rel = f'Levels/{script}.RDS'
        ds = self.win.ds
        if ds is not None:
            name = next((f for f in ds.list('Levels/', '') if f.lower() == rel.lower()), None)
            rel = name or rel
        existing = rds.find_file(out, rel)
        return existing or out / rel

    # --- selection -------------------------------------------------------------------------
    def set_part(self, part) -> None:
        """Show the scripts of the part's dialogue actions (the first one opened)."""
        refs = []
        if part is not None and self.win.level is not None:
            refs = [(s.value, ln.value) for p, _n, s, ln in dialog_fields(self.win.level) if p.node is part.node]
        if not refs:
            return
        scripts = []
        for s, _l in refs:
            if not any(same_script(s, x) for x in scripts):
                scripts.append(s)
        self.scripts.clear()
        for s in scripts:
            self.scripts.addItem(s, s)
        self._wanted_line = refs[0][1]
        if self.script_name is None or not same_script(self.script_name, scripts[0]):
            self.open_script(scripts[0])
        else:
            self._select_label(self._wanted_line)

    def choose_script(self) -> None:
        ds = self.win.ds
        if ds is None:
            return
        names = sorted({f[len('Levels/'):-4] for f in ds.list('Levels/', '') if f.lower().endswith('.rds')},
                       key=str.lower)
        name, ok = QInputDialog.getItem(self, translate('dialogue', 'Open script'),
                                        translate('dialogue', 'Dialogue script (below Levels):'), names, 0, False)
        if ok and name:
            if self.scripts.findData(name) < 0:
                self.scripts.addItem(name, name)
            self.scripts.setCurrentIndex(self.scripts.findData(name))
            self.open_script(name)

    def maybe_save(self) -> bool:
        """Ask about unsaved script changes; False = cancelled."""
        if not self.dirty:
            return True
        r = msgbox.ask_save(self.window(), APP, translate('dialogue', 'The script “{script}” has unsaved changes. '
                                                                      'Save them?').format(script=self.script_name))
        if r == QMessageBox.Save:
            return self.save()
        return r == QMessageBox.Discard

    def open_script(self, script: str | None) -> None:
        if not script or self.win.ds is None:
            return
        if self.script_name is not None and same_script(script, self.script_name) and self.script is not None:
            self._select_label(self._wanted_line)
            return
        if not self.maybe_save():
            return
        found = rds.read_script(self.win.ds, script, self._roots())
        self.script_name = script
        self.dirty = False
        if found is None:
            self.script, self.source = None, ''
            self.info.setText(translate('dialogue', 'The script “Levels/{script}.RDS” does not exist (the game exits '
                                                    'when an action names it).').format(script=script))
        else:
            self.script, self.source = rds.loads(found[0]), found[1]
        self._show_info()
        self._fill_labels()
        self._select_label(self._wanted_line)

    def _show_info(self) -> None:
        if self.script is None:
            self._update_buttons()
            return
        ds = self.win.ds
        pack = ds.language_pack.name if ds is not None and ds.language_pack else None
        if self.source == 'pack':
            src = translate('dialogue', 'Editing the translation from the language pack {pack} (the pack\'s version '
                                        'wins in the game over the one in Data.dat).').format(pack=pack)
        elif self.source == 'data':
            src = translate('dialogue', 'Editing the script of the game data.')
            if pack:
                src += ' ' + translate('dialogue', 'The language pack {pack} has no version of it.').format(pack=pack)
        else:
            src = translate('dialogue', 'Editing the copy in the output folder: {path}').format(path=self.source)
            if pack:
                src += ' ' + translate('dialogue', '(The language pack {pack} is active; the copy below Data/ wins in '
                                                   'the game over the pack.)').format(pack=pack)
        self.info.setText(translate('dialogue', 'Levels/{script}.RDS – %n label(s). {source}\nSaved to: {target}',
                                    None, len(self.script.items)).format(
            script=self.script_name, source=src,
            target=self.target(self.script_name) or translate('dialogue', '(no output folder chosen yet)')))
        self._update_buttons()

    def _used(self) -> dict[str, int]:
        """Label (lower case) -> number of dialogue actions of the level naming it in this script."""
        out: dict[str, int] = {}
        if self.win.level is None or self.script_name is None:
            return out
        for _p, _n, s, ln in dialog_fields(self.win.level):
            if same_script(s.value, self.script_name):
                k = ln.value.strip().lower()
                out[k] = out.get(k, 0) + 1
        return out

    def _fill_labels(self) -> None:
        keep = self.current.name if self.current else None
        self.labels.blockSignals(True)
        self.labels.clear()
        if self.script is not None:
            used = self._used()
            f = self.filter.text().strip().lower()
            for it in self.script.items:
                if f and f not in it.name.lower() and f not in it.text().lower():
                    continue
                w = QListWidgetItem(it.name)
                w.setData(Qt.UserRole, it.name)
                w.setToolTip(it.text())
                n = used.get(it.name.strip().lower(), 0)
                if n:
                    w.setForeground(QBrush(USED_COLOR))
                    w.setToolTip(translate('dialogue', 'Used by %n dialogue action(s) of this level', None, n)
                                 + '\n\n' + it.text())
                self.labels.addItem(w)
        self.labels.blockSignals(False)
        if keep:
            self._select_label(keep)
        else:
            self._show_item(None)

    def _select_label(self, name: str | None) -> None:
        if not name or self.script is None:
            return
        it = self.script.find(name.strip())
        for i in range(self.labels.count()):
            w = self.labels.item(i)
            if it is not None and w.data(Qt.UserRole) == it.name:
                self.labels.setCurrentItem(w)
                self.labels.scrollToItem(w)
                return
        if it is None:
            self.meta.setText(translate('dialogue', 'The line “:{line}” is not in this script.').format(line=name))

    # --- one label -------------------------------------------------------------------------
    def _show_item(self, w) -> None:
        self.current = self.script.find(w.data(Qt.UserRole)) if (w is not None and self.script) else None
        self.text.blockSignals(True)
        self.text.setPlainText(self.current.text() if self.current else '')
        self.text.blockSignals(False)
        self._show_meta()
        self._update_buttons()

    def _show_meta(self) -> None:
        self.portrait.clear()
        if self.current is None:
            self.meta.setText('')
            return
        res = self.resources()
        speaker, _line = rds.split_line(self.text.toPlainText().rstrip())
        shown = rds.shown_speaker(speaker)
        voice = res.voice(self.current.name) if res else None
        portrait = res.portrait(speaker) if res else None
        lines = [translate('dialogue', 'Label: {label}').format(label=self.current.name),
                 translate('dialogue', 'Speaker: {speaker}').format(speaker=shown),
                 translate('dialogue', 'Portrait: {file}').format(file=portrait) if portrait else
                 translate('dialogue', 'Portrait: none – the game shows “!Unknown Portrait”'),
                 translate('dialogue', 'Voice: {file}').format(file=voice) if voice else
                 translate('dialogue', 'Voice: no “{name}.wav”/“.ogg” below Levels').format(name=self.current.name)]
        self.meta.setText('\n'.join(lines))
        if portrait:
            self._show_portrait(portrait)

    def _show_portrait(self, rel: str) -> None:
        from .scene import to_pixmap
        try:
            out = self.win.output_dir()
            p = rds.find_file(out, rel) if out is not None else None
            data = p.read_bytes() if p else self.win.ds.read(rel)
            pal = None
            if not rel.lower().endswith('.frm16'):
                pal = frm.load_palette(self.win.ds.read('Palettes/GamePalette.pal'))
            img = frm.decode(data, 0, pal)[0]
        except (OSError, ValueError, KeyError, IndexError):
            return
        pm = to_pixmap(img)
        self.portrait.setPixmap(pm.scaled(self.portrait.size(), Qt.KeepAspectRatio, Qt.SmoothTransformation))

    def _text_edited(self) -> None:
        self._show_meta()
        self._update_buttons()

    def _update_buttons(self) -> None:
        changed = self.current is not None and self.text.toPlainText().rstrip() != self.current.text()
        self.b_apply.setEnabled(changed)
        self.b_save.setEnabled(self.script is not None and self.dirty)
        self.text.setEnabled(self.current is not None)

    def _checked_text(self, text: str) -> str | None:
        try:
            text.encode('latin-1')
        except UnicodeEncodeError:
            msgbox.warning(self, APP, translate('dialogue', 'Only characters from Latin-1 are allowed.'))
            return None
        if any(len(line) + 1 >= rds.READ_LIMIT for line in text.split('\n')):
            msgbox.warning(self, APP, translate('dialogue', 'A line is too long: the game stops reading the script at '
                                                            'a line of 3,999 characters or more.'))
            return None
        return text

    def apply_text(self) -> None:
        if self.current is None:
            return
        text = self._checked_text(self.text.toPlainText())
        if text is None:
            return
        self.script.set_text(self.current.name, text)
        self._changed()

    def _changed(self) -> None:
        self.dirty = True
        self._fill_labels()
        self._update_buttons()
        self.win.statusBar().showMessage(translate('dialogue', 'Script changed – “Save script” writes it into the '
                                                               'output folder'), 5000)

    def _ask_label(self, title: str, text: str = '') -> str | None:
        name, ok = QInputDialog.getText(self, title, translate('dialogue', 'Label (without the colon):'), text=text)
        if not ok:
            return None
        if self._checked_text(name) is None:
            return None
        try:
            rds.check_name(name)
        except ValueError:
            msgbox.warning(self, APP, translate('dialogue', 'A label is one line and not empty.'))
            return None
        if name != name.strip():
            if msgbox.question(self, APP, translate('dialogue', 'The label has spaces at its ends; the game keeps them. '
                                                                'Use it anyway?'),
                               QMessageBox.Yes | QMessageBox.Cancel) != QMessageBox.Yes:
                return None
        return name

    def add_label(self) -> None:
        if self.script is None:
            return
        name = self._ask_label(translate('dialogue', 'Add label'))
        if name is None:
            return
        if self.script.find(name) is not None:
            msgbox.warning(self, APP, translate('dialogue', 'The label “{label}” already exists.').format(label=name))
            return
        self.script.add(name, 'Zax: ')
        self.filter.clear()
        self._changed()
        self._select_label(name)
        self.text.setFocus()

    def rename_label(self) -> None:
        if self.script is None or self.current is None:
            return
        old = self.current.name
        new = self._ask_label(translate('dialogue', 'Rename label'), old)
        if new is None or new == old:
            return
        other = self.script.find(new)
        if other is not None and other is not self.current:
            msgbox.warning(self, APP, translate('dialogue', 'The label “{label}” already exists.').format(label=new))
            return
        level = self.win.level
        edits = []
        if level is not None:
            edits = [(p, ln, new) for p, _n, s, ln in dialog_fields(level)
                     if same_script(s.value, self.script_name) and ln.value.strip().lower() == old.strip().lower()]
        others = self._other_levels(old)
        text = [translate('dialogue', '%n Line field(s) of this level will be changed too:', None, len(edits))]
        text += ['  ' + describe(p) for p, _e, _v in edits[:10]]
        if others:
            text += ['', translate('dialogue', 'Other levels name this label in the same script. They are not changed '
                                               '(set Line to “{new}” there):').format(new=new)]
            text += ['  ' + o for o in others[:10]]
        box = msgbox.make(self, APP, translate('dialogue', 'Rename the label “{old}” to “{new}”').format(old=old, new=new))
        box.setInformativeText('\n'.join(text))
        ok = box.addButton(translate('dialogue', 'Rename'), QMessageBox.AcceptRole)
        box.addButton(translate('dialogue', 'Cancel'), QMessageBox.RejectRole)
        box.setDefaultButton(ok)
        box.exec()
        if box.clickedButton() is not ok:
            return
        self.script.rename(old, new)
        if edits:
            self.win.undo.push(MultiEditCommand(
                translate('dialogue', 'Rename label “{old}” (%n reference(s))', None, len(edits)).format(old=old),
                edits, self.win._part_changed))
        self._changed()
        self._select_label(new)

    def _other_levels(self, label: str) -> list[str]:
        """Other levels (game data, output folder) whose dialogue actions name the label in this script."""
        ds = self.win.ds
        if ds is None:
            return []
        own = (self.win.source or ('', ''))[1].replace('\\', '/').lower()
        files = {f.lower(): ('data', f) for f in ds.list('Levels/', '.zax')}
        out = self.win.output_dir()
        out_levels = out / 'Levels' if out is not None else None
        if out_levels is not None and out_levels.is_dir():
            for p in out_levels.rglob('*.zax'):
                files[p.relative_to(out).as_posix().lower()] = ('file', p)
        needle = label.strip().lower().encode('latin-1', 'replace')
        found = []
        for key, (kind, ref) in sorted(files.items()):
            if key == own or own.endswith(key):
                continue
            data = ds.read(ref) if kind == 'data' else ref.read_bytes()
            if needle not in data.lower():
                continue
            from zaxtools.level import Level
            for _p, _n, s, ln in dialog_fields(Level.from_bytes(data)):
                if same_script(s.value, self.script_name) and ln.value.strip().lower() == label.strip().lower():
                    found.append(key[len('levels/'):] if key.startswith('levels/') else key)
                    break
        return found

    # --- saving ------------------------------------------------------------------------------
    def save(self) -> bool:
        if self.script is None or self.script_name is None or self.win.need_output() is None:
            return False
        target = self.target(self.script_name)
        if self.win._inside_data(target):
            msgbox.warning(self, APP, translate('dialogue', 'The output folder lies inside the game data: the script is '
                                                            'not saved.'))
            return False
        try:
            data = self.script.dumps()
        except UnicodeEncodeError as e:
            msgbox.warning(self, APP, translate('dialogue', 'Cannot be saved: characters outside Latin-1 ({error}).'
                                                ).format(error=e))
            return False
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
        self.dirty = False
        self.source = str(target)
        self.saved(self.script_name)
        self._show_info()
        self.win.statusBar().showMessage(translate('dialogue', 'Script saved: {path} (copy it to {data})').format(
            path=target, data='DATA\\' + target.relative_to(self.win.output_dir()).as_posix().replace('/', '\\')),
            8000)
        return True

    def saved(self, script: str) -> None:
        """Other views forget the old text (properties, level check)."""
        if self.win.props.dialogs is not None:
            self.win.props.dialogs.invalidate(script)
        self.win._check_ctx = None
        self._res = None
        self.win._show_selection()

    def level_changed(self) -> None:
        """A new level was opened or the output folder changed: forget the open script unless unsaved."""
        self._res = None
        if not self.dirty:
            self.script_name, self.script, self.current = None, None, None
            self.scripts.clear()
            self.labels.clear()
            self._show_item(None)
            self.info.setText(translate('dialogue', 'Select an object with a dialogue action (CZaxDialogAction) or '
                                                    'open a script.'))
        else:
            self._fill_labels()

