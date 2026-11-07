"""Properties of an object as a tree (directly on the text tree), references via ``Name``
(``zaxtools.links``) and the dialogue lines of its script."""
from __future__ import annotations

import re
import textwrap

from PySide6.QtCore import Qt, Signal
from PySide6.QtGui import QBrush, QColor, QUndoCommand
from PySide6.QtWidgets import (QCheckBox, QComboBox, QDialog, QDialogButtonBox, QHBoxLayout, QInputDialog,
                               QLabel, QListWidget, QListWidgetItem, QMenu, QPushButton, QSplitter,
                               QStyledItemDelegate, QTreeWidget, QTreeWidgetItem, QVBoxLayout, QWidget)

from zaxtools import exeschema as es
from zaxtools import fieldhelp
from zaxtools import header
from zaxtools import textformat as tf
from zaxtools.level import Level, LevelPart
from zaxtools.links import KIND_TEXT, DialogScripts, Link, LinkIndex, dialog_refs
from zaxtools.transition import exits, remote_actions

from .i18n import QT_TRANSLATE_NOOP, translate
from .icons import style_splitter

ENTRY_ROLE = Qt.UserRole
SWITCH_ROLE = Qt.UserRole + 7          # set on entries shown as a check box (switch fields)
PART_ROLE = Qt.UserRole + 1
FIELD_ROLE = Qt.UserRole + 8           # the field description (exeschema) of an entry
CHOICES_ROLE = Qt.UserRole + 9         # names offered in a drop-down list (choice, int/float with names)
FLAGS_ROLE = Qt.UserRole + 10          # name list of a flags field (edited in FlagsDialog)
NODE_ROLE = Qt.UserRole + 11           # (node, class) of an object node, for "Add field"
CHILD_ROLE = Qt.UserRole + 12          # the node of a child object (an element of a part's "Child List")
WARN_COLOR = QColor(235, 85, 60)       # a value the game changes or does not accept

# Our own explanations of fields whose effect the exe's help text does not describe [confirmed: code,
# zax-decomp/reimpl/src/c4_app2.cpp App_Frame, c4_app.cpp 0x59d110, ai_skeleton.cpp 0x576730, music.cpp 0x51e520]:
# every enemy with a CSkeletonAI reports itself on each AI update, the world counts them per frame.
# (shown translated, each followed by _MUSIC_RULE)
_MUSIC_RULE = QT_TRANSLATE_NOOP(
    'props', 'The game chooses the music every frame by the number of active enemies (figures with CSkeletonAI): '
    'track 0 (full music) at 4 or more; track 1 (medium) at 2–3 coming from the quiet music, or 10 s after the last '
    'change when the full one plays and fewer than 4 are active; track 2 (quiet) 10 s after the last change when '
    'the medium one plays and at most 1 enemy is active. The same pieces on two tracks: no audible change. '
    'Cross-fade: “Num Seconds To Switch”. CSwitchMusicTrackAction sets a track, the rule can change it again in '
    'the next frame.')
EXTRA_HELP = {
    ('CMusicMixerData', 'Full Mix Song'): QT_TRANSLATE_NOOP(
        'props', 'Track 0 (full music): plays as soon as 4 or more enemies are active in a frame.'),
    ('CMusicMixerData', 'Med Mix Song'): QT_TRANSLATE_NOOP(
        'props', 'Track 1 (medium music): at 2–3 active enemies, or 10 s after the full music when fewer than 4 '
        'are active.'),
    ('CMusicMixerData', 'Ambiant Song'): QT_TRANSLATE_NOOP(
        'props', 'Track 2 (quiet music): 10 s after the medium one when at most 1 enemy is active.'),
    ('CMusicMixerData', 'Num Seconds To Switch'): QT_TRANSLATE_NOOP(
        'props', 'Duration of the cross-fade in seconds when the game changes the music track.'),
}

# colours of the link kinds (map and reference list)
KIND_COLORS = {
    'trigger': QColor(140, 220, 40),
    'relay': QColor(255, 150, 0),
    'door': QColor(70, 170, 255),
    'place': QColor(200, 110, 255),
    'target': QColor(255, 70, 90),
}
EXIT_COLOR = QColor(0, 200, 190)        # transition to another level


class EditCommand(QUndoCommand):
    """Change the value of an entry."""

    def __init__(self, part: LevelPart, entry: tf.Entry, new: str, on_change):
        super().__init__(translate('props', 'Change {field}').format(field=entry.key))
        self.part, self.entry, self.old, self.new, self.on_change = part, entry, entry.value, new, on_change

    def redo(self):
        self.entry.value = self.new
        self.on_change(self.part)

    def undo(self):
        self.entry.value = self.old
        self.on_change(self.part)


class InsertEntryCommand(QUndoCommand):
    """Insert a new entry (a missing field) into a node of the part."""

    def __init__(self, part: LevelPart, node: tf.Node, index: int, entry: tf.Entry, on_change):
        super().__init__(translate('props', 'Add {field}').format(field=entry.key))
        self.part, self.node, self.index, self.entry, self.on_change = part, node, index, entry, on_change

    def redo(self):
        self.node.children.insert(self.index, self.entry)
        self.on_change(self.part)

    def undo(self):
        self.node.children.remove(self.entry)
        self.on_change(self.part)


def insert_index(node: tf.Node, order: list[str], key: str) -> int:
    """Where the game's writer would put field ``key`` among the children of ``node``: behind the last
    present field that comes before it in the registration order ``order``, else before the first one
    behind it, else behind the object preamble (Object ID, Dynamic Properties)."""
    rank = {k: i for i, k in enumerate(order)}
    me = rank[key]
    keyed = [(i, c) for i, c in enumerate(node.children) if not isinstance(c, tf.Raw)]
    before = [i for i, c in keyed if c.key in rank and rank[c.key] < me]
    if before:
        return before[-1] + 1
    after = [i for i, c in keyed if c.key in rank and rank[c.key] > me]
    if after:
        return after[0]
    pre = [i for i, c in keyed if c.key in ('Object ID', 'Dynamic Properties')]
    return pre[-1] + 1 if pre else 0


class FlagsDialog(QDialog):
    """A flags field: one check box per name of its list; parts of the text the game does not find are
    kept as check boxes of their own (marked) so nothing disappears unasked."""

    def __init__(self, parent, key: str, names: list[str], text: str, default: str | None):
        super().__init__(parent)
        self.setWindowTitle(translate('props', '{field} – selection').format(field=key))
        self.names = names
        have, self.bad = es.flags_parse(text, names)
        lay = QVBoxLayout(self)
        lay.addWidget(QLabel(translate('props', 'The game reads the names separated by commas (without spaces).')))
        self.boxes: list[QCheckBox] = []
        for n in names:
            b = QCheckBox(n)
            b.setChecked(n in have)
            self.boxes.append(b)
            lay.addWidget(b)
        self.bad_boxes: list[QCheckBox] = []
        for n in self.bad:
            b = QCheckBox(translate('props', '“{name}” – unknown, the game exits when loading').format(name=n))
            b.setChecked(True)
            b.setStyleSheet(f'color: {WARN_COLOR.name()}')
            self.bad_boxes.append(b)
            lay.addWidget(b)
        row = QHBoxLayout()
        for label, on in ((translate('props', 'All'), True), (translate('props', 'None'), False)):
            btn = QPushButton(label)
            btn.clicked.connect(lambda _=False, on=on: [b.setChecked(on) for b in self.boxes])
            row.addWidget(btn)
        row.addStretch(1)
        lay.addLayout(row)
        if default is not None:
            lay.addWidget(QLabel(translate('props', 'Default (when the field is missing): {value}').format(
                value=default or translate('props', '(none)'))))
        bb = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        bb.accepted.connect(self.accept)
        bb.rejected.connect(self.reject)
        lay.addWidget(bb)

    def text(self) -> str:
        chosen = {b.text() for b in self.boxes if b.isChecked()}
        kept = [n for n, b in zip(self.bad, self.bad_boxes) if b.isChecked()]
        return ','.join([t for t in [es.flags_text(self.names, chosen)] if t] + kept)


class FieldDelegate(QStyledItemDelegate):
    """Value column: a drop-down list for fields with names, otherwise the normal line editor."""

    def createEditor(self, parent, option, index):
        names = index.data(CHOICES_ROLE)
        if not names:
            return super().createEditor(parent, option, index)
        box = QComboBox(parent)
        box.setEditable(True)               # a value that is not in the list stays visible and editable
        box.addItems(names)
        box.setInsertPolicy(QComboBox.NoInsert)
        box.activated.connect(lambda _i, b=box: (self.commitData.emit(b), self.closeEditor.emit(b)))
        return box

    def setEditorData(self, editor, index):
        if isinstance(editor, QComboBox):
            text = index.data(Qt.EditRole) or ''
            i = editor.findText(text, Qt.MatchFixedString)
            if i >= 0 and editor.itemText(i) == text:
                editor.setCurrentIndex(i)
            editor.setEditText(text)
            return
        super().setEditorData(editor, index)

    def setModelData(self, editor, model, index):
        if isinstance(editor, QComboBox):
            model.setData(index, editor.currentText(), Qt.EditRole)
            return
        super().setModelData(editor, model, index)


class MultiEditCommand(QUndoCommand):
    """Change several entries in one step (renaming including references)."""

    def __init__(self, text: str, edits: list[tuple[LevelPart, tf.Entry, str]], on_change):
        super().__init__(text)
        self.edits = [(p, e, e.value, new) for p, e, new in edits]
        self.on_change = on_change

    def _apply(self, i: int) -> None:
        for e in self.edits:
            e[1].value = e[2 + i]
        done = set()
        for p, *_ in self.edits:
            if id(p.node) not in done:
                done.add(id(p.node))
                self.on_change(p)

    def redo(self):
        self._apply(1)

    def undo(self):
        self._apply(0)


def link_text(lk: Link) -> str:
    text = f'{translate("links", KIND_TEXT[lk.kind])}: {lk.action} · {lk.key}'
    if not lk.exact:
        text += '  ' + translate('props', '(spelling in the script: “{name}”)').format(name=lk.name)
    return text


def dialog_text(lines: list[str] | None) -> str:
    return '\n'.join(lines) if lines else translate('props', '(line not found)')


def game_atoi(text: str) -> int:
    """The C runtime's atoi as the game reads a switch: white space, one sign, digits; 0 otherwise."""
    m = re.match(r'[ \t\n\v\f\r]*([+-]?[0-9]+)', text)
    return int(m.group(1)) if m else 0


def help_tip(text: str | None) -> str:
    """Help text of a field (from Zax.exe) wrapped for a tooltip; '' without one."""
    if not text:
        return ''
    return '\n'.join(textwrap.fill(par, 90) for par in text.replace('\r', '').split('\n'))


def describe(p: LevelPart) -> str:
    label = p.name or translate('props', '(no name)')
    return f'{label}  ·  {p.cls}' + (f'  ·  {p.model}' if p.model else '')


class PropertyPanel(QWidget):
    """Property tree + reference lists + dialogue. Signals: value changed, jump to object."""
    edit_requested = Signal(object, object, str)     # part, entry, new value
    jump_requested = Signal(object)                  # part
    insert_requested = Signal(object, object, int, object)   # part, node, index, new entry
    child_requested = Signal(object)                 # LevelPart of a child object: select it

    def __init__(self):
        super().__init__()
        self.level: Level | None = None
        self.part: LevelPart | None = None
        self.dialogs: DialogScripts | None = None    # set by the main window
        self.schema = None                           # exeschema.Schema (help texts), set by the main window
        self.ds = None                               # DataSource (name lists of the flags fields), ditto
        self._flag_names: dict[int, list[str] | None] = {}
        self._flag_ds = None
        self._filling = False
        self.title = QLabel(translate('props', 'No object selected'))
        self.title.setWordWrap(True)
        self.tree = QTreeWidget()
        self.tree.setHeaderLabels([translate('props', 'Key'), translate('props', 'Value')])
        self.tree.setColumnWidth(0, 200)
        self.tree.setAlternatingRowColors(True)
        self.tree.itemChanged.connect(self._item_changed)
        self.tree.setItemDelegateForColumn(1, FieldDelegate(self.tree))
        self.tree.itemDoubleClicked.connect(self._double_clicked)
        self.tree.setContextMenuPolicy(Qt.CustomContextMenu)
        self.tree.customContextMenuRequested.connect(self._context_menu)
        self.refs_in = QListWidget()
        self.refs_out = QListWidget()
        for lst in (self.refs_in, self.refs_out):
            lst.itemDoubleClicked.connect(self._jump)
        self.dialog_list = QListWidget()
        self.dialog_list.setWordWrap(True)
        self.dialog_list.setSpacing(3)
        self.dialog_label = QLabel(translate('props', 'Dialogue in the script (text from the .RDS):'))
        refs = QWidget()
        rl = QVBoxLayout(refs)
        rl.setContentsMargins(0, 0, 0, 0)
        rl.addWidget(QLabel(translate('props', 'Used by (double click jumps there):')))
        rl.addWidget(self.refs_in)
        rl.addWidget(QLabel(translate('props', 'Refers to:')))
        rl.addWidget(self.refs_out)
        rl.addWidget(self.dialog_label)
        rl.addWidget(self.dialog_list)
        split = QSplitter(Qt.Vertical)
        style_splitter(split)
        split.addWidget(self.tree)
        split.addWidget(refs)
        split.setStretchFactor(0, 3)
        split.setStretchFactor(1, 2)
        lay = QVBoxLayout(self)
        lay.setContentsMargins(4, 4, 4, 4)
        lay.addWidget(self.title)
        lay.addWidget(split)
        self._show_dialogs([])

    def show_part(self, level: Level | None, part: LevelPart | None, count: int = 1,
                  index: LinkIndex | None = None, owner: LevelPart | None = None) -> None:
        """``owner``: the parent when ``part`` is a child object (shown in the title)."""
        self.level, self.part = level, part
        self._filling = True
        self.tree.clear()
        self.refs_in.clear()
        self.refs_out.clear()
        if part is None:
            self.title.setText(translate('props', 'No object selected') if count == 0 else
                               translate('props', '%n object(s) selected', None, count))
            self._show_dialogs([])
            self._filling = False
            return
        self.title.setText(describe(part) if owner is None else translate('props', '{part}  ·  child object of {owner}')
                           .format(part=describe(part), owner=describe(owner)))
        self._fill(self.tree.invisibleRootItem(), part.node, part.cls)
        self.tree.expandToDepth(0)
        index = index or LinkIndex(level)
        for lk in index.links_to(part):
            self._add_ref(self.refs_in, lk.source, lk, describe(lk.source))
        for lk in index.links_from(part):
            for t in lk.targets:
                self._add_ref(self.refs_out, t, lk, describe(t))
            if not lk.targets:
                self._add_ref(self.refs_out, None, lk, translate('props', '“{name}” – not in the level').format(
                    name=lk.name))
        for e in exits(part):
            it = QListWidgetItem(translate('props', 'Level “{map}”, start point “{location}”   [transition: {action}]')
                                 .format(map=e.map_name, location=e.location, action=e.action))
            it.setForeground(QBrush(EXIT_COLOR))
            it.setToolTip(translate('props', 'Transition into another level (New Map Name / New Location)'))
            self.refs_out.addItem(it)
        for r in remote_actions(part):
            if r.action == 'CExpireMapAction':
                it = QListWidgetItem(translate('props', 'Level “{map}” expires   [CExpireMapAction]').format(
                    map=r.map_name))
                it.setToolTip(translate('props', 'Acts on another level without switching to it (Other Map Name).\n'
                                                 'Presumably the game discards its saved state – unverified.'))
            else:
                names = ', '.join(translate('props', '“{name}”').format(name=n) for _, n in r.names)
                it = QListWidgetItem(translate('props', 'Level “{map}”: {names}   [in the other level: {action}]').format(
                    map=r.map_name, names=names or '–', action=r.inner))
                it.setToolTip(translate('props', 'COtherMapAction: performs the action in the level “Other Map Name” '
                                                 'without switching\nto it. The names given are objects of that '
                                                 'level.'))
            it.setForeground(QBrush(EXIT_COLOR))
            self.refs_out.addItem(it)
        self._show_dialogs(dialog_refs(part))
        self._filling = False

    def _add_ref(self, lst: QListWidget, target: LevelPart | None, lk: Link, label: str) -> None:
        it = QListWidgetItem(f'{label}   [{link_text(lk)}]')
        it.setData(PART_ROLE, target)
        it.setForeground(QBrush(KIND_COLORS[lk.kind] if target is not None else QColor(140, 140, 140)))
        it.setToolTip(link_text(lk) if target is not None else
                      link_text(lk) + '\n' + translate('props', 'No object of this name in the level (wrong name, or '
                                                                'the object only comes into being in the game, e.g. '
                                                                'by cloning).'))
        lst.addItem(it)

    def _jump(self, it: QListWidgetItem) -> None:
        if it.data(PART_ROLE) is not None:
            self.jump_requested.emit(it.data(PART_ROLE))

    def _show_dialogs(self, refs: list[tuple[str, str]]) -> None:
        self.dialog_list.clear()
        for script, line in refs:
            text = dialog_text(self.dialogs.lines(script, line) if self.dialogs else None)
            it = QListWidgetItem(f':{line}\n{text}')
            it.setToolTip(f'{script}.RDS')
            self.dialog_list.addItem(it)
        self.dialog_label.setVisible(bool(refs))
        self.dialog_list.setVisible(bool(refs))

    def _help(self, cls: str | None, key: str) -> str:
        if self.schema is None or not cls or not key:
            return ''
        tip = help_tip(self.schema.help(cls, key))
        f = self.schema.field(cls, key) if self.schema.known(cls) else None
        if f:
            # our own text from the reimplementation: a note on a wrong or incomplete exe text (with our
            # text of the field), else our text where the exe has none or adds to it
            own = (fieldhelp.correction_text(f['owner'], key) if tip else None) or fieldhelp.help_text(f['owner'], key)
            if own:
                tip = (tip + '\n\n' if tip else '') + help_tip(own)
        extra =next((t for (c, k), t in EXTRA_HELP.items() if k == key and c in self.schema.chain(cls)), None)
        if extra:
            extra = translate('props', extra) + '\n\n' + translate('props', _MUSIC_RULE)
            tip = (tip + '\n\n' if tip else '') + help_tip(extra)
        return tip

    def _is_switch(self, cls: str | None, key: str) -> bool:
        return self.schema is not None and bool(cls) and self.schema.is_bool(cls, key)

    def _field(self, cls: str | None, key: str) -> dict | None:
        if self.schema is None or not cls or not key or not self.schema.known(cls):
            return None
        return self.schema.field(cls, key)

    def flag_names(self, f: dict) -> list[str] | None:
        """The name list of a flags field from the game data (cached per data source)."""
        if self.ds is not self._flag_ds:
            self._flag_names, self._flag_ds = {}, self.ds
        lid = f.get('list')
        if self.ds is None or lid is None:
            return None
        if lid not in self._flag_names:
            try:
                self._flag_names[lid] = es.flag_names(self.ds, lid) or None
            except OSError:
                self._flag_names[lid] = None
        return self._flag_names[lid]

    def field_default(self, f: dict) -> str | None:
        return es.default_text(f, self.flag_names(f) if f.get('kind') == 'flags' else None)

    def _value_state(self, f: dict | None, value: str) -> tuple[list[str] | None, list[str] | None, str]:
        """(drop-down names, flags names, warning) of an entry of field ``f``."""
        if not f:
            return None, None, ''
        kind = f.get('kind')
        if kind == 'choice':
            if es.choice_find(f, value) is None:
                return f['choices'], None, translate('props', '“{value}” is not a name of this list: the game exits '
                                                              'when loading with “Fatal Not Found Error”.').format(
                    value=value)
            return f['choices'], None, ''
        if kind == 'flags':
            names = self.flag_names(f)
            if names is None:
                return None, None, ''
            _, bad = es.flags_parse(value, names)
            if bad:
                return None, names, translate('props', 'Unknown or empty names ({names}): the game exits when '
                                                       'loading with “Fatal Not Found Error”.').format(
                    names=', '.join(translate('props', '“{name}”').format(name=b) for b in bad))
            return None, names, ''
        names = [n for _, n in f.get('enum') or []] if kind in ('enum', 'float', 'double') else []
        clamp = es.out_of_limits(f, value)
        warn = (translate('props', 'Outside the limits: the game reads “{value}” as {result}.').format(
            value=value, result=clamp) if clamp is not None else '')
        return names or None, None, warn

    def _value_tip(self, f: dict | None, help_text: str, warn: str) -> str:
        parts = [warn] if warn else []
        if f:
            lim = es.limits_text(f)
            if f.get('kind') in ('flags', 'choice', 'zstring', 'cstring', 'fpoint', 'ipoint'):
                d = self.field_default(f)
                if d is not None:
                    lim = translate('props', 'Default: {value}').format(value=d or translate('props', '(empty)'))
            if lim:
                parts.append(lim)
        if help_text:
            parts.append(help_text)
        return '\n\n'.join(parts)

    def _fill(self, parent: QTreeWidgetItem, node: tf.Node, cls: str | None = None) -> None:
        """``cls``: class of ``node`` for the help texts (None for arrays and unknown classes)."""
        grey = QBrush(QColor(140, 140, 140))
        script = node.get('Script')
        for c in node.children:
            if isinstance(c, tf.Entry):
                self._entry_item(parent, c, cls, script)
            elif isinstance(c, tf.Node):
                it = self._node_item(parent, c, cls)
                if c.key == 'Child' and node.key == 'Child List' and node.value == 'Array':
                    it.setData(0, CHILD_ROLE, c)
                    it.setToolTip(0, translate('props', 'Child object: double click selects it (fields, map, '
                                                        'moving)'))
            elif c.text.strip():
                it = QTreeWidgetItem(parent, ['', c.text])
                it.setForeground(1, grey)

    # --- Hooks of views built on this panel (level settings, Rules.txt) ----------------
    def extra_choices(self, cls: str | None, entry: tf.Entry) -> list[str] | None:
        """Names for a drop-down list of a field without names of its own in the exe schema."""
        if cls and (cls, entry.key) in header.MUSIC_FIELDS:
            return self.music_names()
        return None

    def extra_warning(self, cls: str | None, entry: tf.Entry) -> str:
        """A warning on the value beyond the exe schema's limits and names ('' = none)."""
        if cls and (cls, entry.key) in header.MUSIC_FIELDS and entry.value:
            names = self.music_names()
            if names and not header.is_music_name(names, entry.value):
                return translate('props', '“{value}” is not a file of the game\'s music folder (Music/, .wav or '
                                          '.ogg).').format(value=entry.value)
        return ''

    def extra_note(self, cls: str | None, entry: tf.Entry) -> str:
        """Our own explanation of a field, put in front of its help text ('' = none)."""
        return ''

    def entry_editable(self, cls: str | None, entry: tf.Entry) -> bool:
        return True

    def music_names(self) -> list[str]:
        """The music folder list of the game data (cached per data source)."""
        if self.ds is None:
            return []
        if getattr(self, '_music_ds', None) is not self.ds:
            try:
                self._music = header.music_names(self.ds)
            except OSError:
                self._music = []
            self._music_ds = self.ds
        return self._music

    def _entry_item(self, parent: QTreeWidgetItem, c: tf.Entry, cls: str | None,
                    script: str | None = None) -> QTreeWidgetItem:
        switch = self._is_switch(cls, c.key)
        editable = self.entry_editable(cls, c)
        # a switch shows a check box; a value other than 0/1 stays visible next to it
        it = QTreeWidgetItem(parent, [c.key, '' if switch and editable and c.value.strip() in ('0', '1')
                                      else c.value])
        it.setData(0, ENTRY_ROLE, c)
        f = self._field(cls, c.key)
        it.setData(0, FIELD_ROLE, f)
        choices, flags, warn = self._value_state(f, c.value)
        extra = self.extra_choices(cls, c)
        if extra and not choices:
            choices = extra
        warn = warn or self.extra_warning(cls, c)
        if not editable:
            it.setForeground(1, QBrush(QColor(140, 140, 140)))
        elif switch:
            it.setData(1, SWITCH_ROLE, True)
            it.setFlags(it.flags() | Qt.ItemIsUserCheckable)
            it.setCheckState(1, Qt.Checked if game_atoi(c.value) else Qt.Unchecked)
        elif flags is not None:
            it.setData(1, FLAGS_ROLE, flags)        # edited in FlagsDialog (double click)
        else:
            it.setFlags(it.flags() | Qt.ItemIsEditable)
            if choices:
                it.setData(1, CHOICES_ROLE, choices)
        if warn:
            it.setForeground(1, QBrush(WARN_COLOR))
        tip = self._help(cls, c.key)
        note = self.extra_note(cls, c)
        if note:
            tip = help_tip(note) + ('\n\n' + tip if tip else '')
        vtip = self._value_tip(f, tip, warn)
        if tip:
            it.setToolTip(0, tip)
        if vtip:
            it.setToolTip(1, vtip)
        if c.key == 'Line' and script is not None and self.dialogs:
            line = dialog_text(self.dialogs.lines(script, c.value))
            it.setToolTip(1, line + (f'\n\n{vtip}' if vtip else ''))
        return it

    def _node_item(self, parent: QTreeWidgetItem, c: tf.Node, cls: str | None) -> QTreeWidgetItem:
        it = QTreeWidgetItem(parent, [c.key or '', c.value])
        it.setForeground(1, QBrush(QColor(140, 140, 140)))
        tip = self._help(cls, c.key)
        if tip:
            it.setToolTip(0, tip)
        sub = c.value if self.schema is not None and self.schema.known(c.value) else None
        if sub:
            it.setData(0, NODE_ROLE, (c, sub))
        self._fill(it, c, sub)
        return it

    # --- Editors and context menu ------------------------------------------------
    def _double_clicked(self, it: QTreeWidgetItem, col: int) -> None:
        if it.data(1, FLAGS_ROLE) is not None:
            self._edit_flags(it)
        elif it.data(0, CHILD_ROLE) is not None:
            self.child_requested.emit(LevelPart(it.data(0, CHILD_ROLE)))

    def _edit_flags(self, it: QTreeWidgetItem) -> None:
        entry, f = it.data(0, ENTRY_ROLE), it.data(0, FIELD_ROLE)
        dlg = FlagsDialog(self, entry.key, it.data(1, FLAGS_ROLE), entry.value, self.field_default(f))
        if dlg.exec() == QDialog.Accepted and dlg.text() != entry.value:
            self.edit_requested.emit(self.part, entry, dlg.text())

    def _object_at(self, it: QTreeWidgetItem | None) -> tuple[tf.Node, str] | None:
        """The object node (with its class) an item belongs to: the item itself, the object around an
        entry, or the part when clicked beside the items."""
        while it is not None:
            if it.data(0, NODE_ROLE):
                return it.data(0, NODE_ROLE)
            if it.data(0, ENTRY_ROLE) is None and it.childCount():
                return None                                    # an array node or unknown class
            it = it.parent()
        if self.part is not None and self.schema is not None and self.schema.known(self.part.cls):
            return self.part.node, self.part.cls
        return None

    def _context_menu(self, pos) -> None:
        if self.part is None:
            return
        it = self.tree.itemAt(pos)
        menu = QMenu(self)
        entry = it.data(0, ENTRY_ROLE) if it is not None else None
        f = it.data(0, FIELD_ROLE) if it is not None else None
        if entry is not None:
            if it.data(1, FLAGS_ROLE) is not None:
                menu.addAction(translate('props', 'Edit selection …'), lambda: self._edit_flags(it))
            if it.data(1, FLAGS_ROLE) is not None or it.data(1, SWITCH_ROLE):
                menu.addAction(translate('props', 'Edit as text …'), lambda: self._edit_text(entry))
            d = self.field_default(f) if f else None
            a = menu.addAction(translate('props', 'Reset to default ({value})').format(
                                   value=d or translate('props', 'empty')) if d is not None else
                               translate('props', 'Reset to default'),
                               lambda: self.edit_requested.emit(self.part, entry, d))
            a.setEnabled(d is not None and d != entry.value)
            if d is None:
                a.setToolTip(translate('props', 'Default value from Zax.exe not known'))
        if it is not None and it.data(0, CHILD_ROLE) is not None:
            menu.addAction(translate('props', 'Select this child object'),
                           lambda: self.child_requested.emit(LevelPart(it.data(0, CHILD_ROLE))))
        obj = self._object_at(it)
        if obj is not None:
            node, cls = obj
            have = {c.key for c in node.children if not isinstance(c, tf.Raw)}
            missing = self.schema.missing_fields(cls, have)
            sub = menu.addMenu(translate('props', 'Add field …') + (f'  ({node.key})' if node is not self.part.node
                                                                     else ''))
            order = [x['name'] for x in self.schema.fields(cls)]
            for mf in missing:
                d = self.field_default(mf)
                label = (f'{mf["name"]} = {d}' if d is not None else
                         translate('props', '{field}  (default value unknown)').format(field=mf['name']))
                act = sub.addAction(label, lambda mf=mf, d=d, node=node, order=order: self.insert_requested.emit(
                    self.part, node, insert_index(node, order, mf['name']), tf.Entry(mf['name'], d)))
                act.setEnabled(d is not None)
            sub.setEnabled(bool(missing))
        if not menu.isEmpty():
            menu.exec(self.tree.viewport().mapToGlobal(pos))

    def _edit_text(self, entry: tf.Entry) -> None:
        text, ok = QInputDialog.getText(self, entry.key, translate('props', '{field} as text:').format(field=entry.key),
                                        text=entry.value)
        if ok and text != entry.value:
            self.edit_requested.emit(self.part, entry, text)

    def _item_changed(self, it: QTreeWidgetItem, col: int) -> None:
        if self._filling or col != 1:
            return
        entry = it.data(0, ENTRY_ROLE)
        if entry is None:
            return
        if it.data(1, SWITCH_ROLE):
            on = it.checkState(1) == Qt.Checked
            if on == bool(game_atoi(entry.value)):
                return
            new = '1' if on else '0'
            self._filling = True
            it.setCheckState(1, Qt.Unchecked if on else Qt.Checked)   # the display only follows the undo command
            self._filling = False
            self.edit_requested.emit(self.part, entry, new)
            return
        if it.text(1) == entry.value:
            return
        new = it.text(1)
        self._filling = True
        it.setText(1, entry.value)          # the display only follows the undo command
        self._filling = False
        self.edit_requested.emit(self.part, entry, new)
