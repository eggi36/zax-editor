"""Dock "Level settings": the level header (``CLayerSaveData``) in groups – music, Team Info, game types,
sound (Listener Settings), mini map mapping, the rest – on the property machinery of ``props.py`` (help
texts, limits and defaults from Zax.exe, drop-down lists, flags dialog, reset to default).

Fields the game never reads are marked "no effect in the game" (``zaxtools.header.NO_EFFECT``). Every
change is an undo step of the level's undo stack and rewrites only its own line (``Music Mix`` presets
replace the block).
"""
from __future__ import annotations

from PySide6.QtCore import Qt
from PySide6.QtGui import QBrush, QColor, QFont, QUndoCommand
from PySide6.QtWidgets import QHBoxLayout, QMenu, QPushButton, QTreeWidgetItem

from zaxtools import header, newlevel, textformat as tf
from zaxtools import exeschema as es
from zaxtools.level import Level, LevelPart
from zaxtools.transition import spawn_points

from . import msgbox
from .i18n import translate
from .props import NODE_ROLE, EditCommand, InsertEntryCommand, MultiEditCommand, PropertyPanel

ROOT_CLASS = 'CLayerSaveData'
GROUP_ROLE = Qt.UserRole + 20
NO_EFFECT_COLOR = QColor(150, 150, 150)
GAME_TYPE_LIST = 0x6c02e8           # the game type list (Resources/Game Types/*.zgt), exeschema.FLAG_LISTS


class ReplaceItemCommand(QUndoCommand):
    """Replace one child of a node by another item (e.g. ``Music Mix=`` by a ``CMusicMixerData`` block)."""

    def __init__(self, text: str, node: tf.Node, old, new, on_change):
        super().__init__(text)
        self.node, self.old, self.new, self.on_change = node, old, new, on_change

    def _swap(self, a, b) -> None:
        self.node.children[self.node.children.index(a)] = b
        self.on_change(None)

    def redo(self):
        self._swap(self.old, self.new)

    def undo(self):
        self._swap(self.new, self.old)


class LevelSettingsPanel(PropertyPanel):
    def __init__(self):
        super().__init__()
        self.push = None                      # the main window's undo stack push
        self.refs_in.parentWidget().hide()    # no references or dialogue for the header
        self._collapsed: set[str] = {'state', 'other'}
        self.tree.itemExpanded.connect(lambda it: self._collapsed.discard(it.data(0, GROUP_ROLE)))
        self.tree.itemCollapsed.connect(lambda it: self._collapsed.add(it.data(0, GROUP_ROLE)))
        row = QHBoxLayout()
        self.music_btn = QPushButton(translate('levelsettings', 'Music of the originals …'))
        self.music_btn.setToolTip(translate('levelsettings', 'Set the three songs to a combination of the original '
                                                             'levels, or remove the music.'))
        self.music_btn.clicked.connect(self._music_menu)
        row.addWidget(self.music_btn)
        row.addStretch(1)
        self.layout().insertLayout(1, row)
        self.edit_requested.connect(self._edit)
        self.insert_requested.connect(lambda part, node, i, entry: self._push(
            InsertEntryCommand(part, node, i, entry, self._changed)))
        self.show_level(None)

    # --- Display -------------------------------------------------------------------------
    def show_level(self, level: Level | None) -> None:
        self.level = level
        self.part = LevelPart(level.root) if level is not None else None
        self._spawns = None
        self.music_btn.setEnabled(level is not None)
        scroll = self.tree.verticalScrollBar().value()
        self._filling = True
        self.tree.clear()
        if level is None:
            self.title.setText(translate('levelsettings', 'No level open'))
            self._filling = False
            return
        self.title.setText(translate('levelsettings', 'Header of “{name}” (CLayerSaveData)').format(
            name=level.partial_file_name or level.description))
        bold = QFont(self.tree.font())
        bold.setBold(True)
        for gid, title, items in header.layout(level.root):
            g = QTreeWidgetItem(self.tree, [translate('header', title)])
            g.setFirstColumnSpanned(True)
            g.setFont(0, bold)
            g.setData(0, GROUP_ROLE, gid)
            g.setData(0, NODE_ROLE, (level.root, ROOT_CLASS))     # "Add field" of the header
            for c in items:
                if isinstance(c, tf.Entry):
                    self._entry_item(g, c, ROOT_CLASS)
                else:
                    self._node_item(g, c, ROOT_CLASS)
            g.setExpanded(gid not in self._collapsed)
            if gid in ('music', 'team'):
                for i in range(g.childCount()):
                    g.child(i).setExpanded(True)
                    for j in range(g.child(i).childCount()):
                        g.child(i).child(j).setExpanded(True)
        self._filling = False
        self.tree.verticalScrollBar().setValue(scroll)

    def refresh(self) -> None:
        if self.level is not None:
            self.show_level(self.level)

    def _entry_item(self, parent, c: tf.Entry, cls, script=None):
        it = super()._entry_item(parent, c, cls, script)
        if cls == ROOT_CLASS and c.key in header.NO_EFFECT:
            it.setText(0, translate('levelsettings', '{field} – no effect in the game').format(field=c.key))
            it.setForeground(0, QBrush(NO_EFFECT_COLOR))
        return it

    # --- Hooks of PropertyPanel ------------------------------------------------------
    def entry_editable(self, cls, entry: tf.Entry) -> bool:
        return not (cls == ROOT_CLASS and entry.key in header.READ_ONLY)

    def extra_note(self, cls, entry: tf.Entry) -> str:
        if cls == ROOT_CLASS and entry.key in header.NO_EFFECT:
            return translate('header', header.NO_EFFECT[entry.key])
        if cls == ROOT_CLASS and entry.key in header.READ_ONLY:
            return translate('header', header.READ_ONLY[entry.key])
        if cls == ROOT_CLASS and entry.key in header.MINIMAP_HELP:
            return translate('header', header.MINIMAP_HELP[entry.key])
        if cls == 'CTeamInfo' and entry.key in header.TEAM_HELP:
            return translate('header', header.TEAM_HELP[entry.key])
        if self.schema is not None and cls:
            f = self.schema.field(cls, entry.key)
            if f and f.get('group'):
                return translate('levelsettings', 'Group in the exe: “{group}”.').format(group=f['group'])
        return ''

    def spawn_names(self) -> list[str]:
        if self._spawns is None:
            self._spawns = [p.name for p in spawn_points(self.level)] if self.level is not None else []
        return self._spawns

    def extra_choices(self, cls, entry: tf.Entry):
        if cls == 'CTeamInfo' and entry.key in ('Spawn Point Name', 'Re-Spawn Point Name'):
            return self.spawn_names()
        if cls == ROOT_CLASS and entry.key == 'Default Game Type' and self.ds is not None:
            return es.flag_names(self.ds, GAME_TYPE_LIST)
        return super().extra_choices(cls, entry)

    def extra_warning(self, cls, entry: tf.Entry) -> str:
        if cls == 'CTeamInfo' and entry.key == 'Spawn Point Name':
            state = header.spawn_name_state(self.spawn_names(), entry.value)
            if state == 'missing':
                return translate('levelsettings', 'No start point of this level is called “{name}”.').format(
                    name=entry.value)
        return super().extra_warning(cls, entry)

    # --- Changes -----------------------------------------------------------------------
    def _push(self, cmd: QUndoCommand) -> None:
        if self.push is not None:
            self.push(cmd)

    def _changed(self, _part=None) -> None:
        self._spawns = None
        self.refresh()

    def _edit(self, part, entry: tf.Entry, new: str) -> None:
        try:
            new.encode('latin-1')
        except UnicodeEncodeError:
            msgbox.warning(self, translate('levelsettings', 'Level settings'),
                           translate('levelsettings', 'Only characters from Latin-1 are allowed.'))
            return
        self._push(EditCommand(part, entry, new, self._changed))

    def _music_menu(self) -> None:
        if self.level is None:
            return
        menu = QMenu(self)
        for name, *songs in newlevel.MUSIC:
            menu.addAction(translate('newlevel', name) + '   (' + ', '.join(songs) + ')',
                           lambda songs=tuple(songs): self.set_music(songs))
        menu.addSeparator()
        menu.addAction(translate('levelsettings', 'No music (Music Mix empty)'), lambda: self.set_music(None))
        menu.exec(self.music_btn.mapToGlobal(self.music_btn.rect().bottomLeft()))

    def set_music(self, songs: tuple[str, str, str] | None) -> None:
        """Three songs into the level's ``Music Mix`` (the song lines only when the block exists), or
        ``Music Mix=`` without music like the 10 original levels without music."""
        root = self.level.root
        old = root.item('Music Mix')
        text = translate('levelsettings', 'Change music')
        if songs is None:
            if isinstance(old, tf.Node):
                self._push(ReplaceItemCommand(text, root, old, tf.Entry('Music Mix', ''), self._changed))
            return
        if isinstance(old, tf.Node):
            edits = []
            for key, song in zip(header.SONG_KEYS, songs):
                e = old.item(key)
                if isinstance(e, tf.Entry) and e.value != song:
                    edits.append((self.part, e, song))
            if edits:
                self._push(MultiEditCommand(text, edits, self._changed))
        elif old is not None:
            self._push(ReplaceItemCommand(text, root, old, header.music_node(songs), self._changed))
