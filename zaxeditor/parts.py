"""Add, duplicate, paste and remove objects and child objects, set fields (with undo)."""
from __future__ import annotations

import copy

from PySide6.QtGui import QUndoCommand

from zaxtools import children
from zaxtools import textformat as tf
from zaxtools.level import Level, LevelPart

from .i18n import translate


class AddPartsCommand(QUndoCommand):
    """Insert nodes; ``on_change(added, removed)`` updates the view."""

    def __init__(self, level: Level, nodes: list[tf.Node], on_change, text: str):
        super().__init__(text)
        self.level, self.nodes, self.on_change = level, nodes, on_change
        self.indices: list[int] | None = None

    def redo(self):
        if self.indices is None:
            self.indices = [self.level.part_index(self.level.insert_part(n)) for n in self.nodes]
        else:
            for i, n in sorted(zip(self.indices, self.nodes), key=lambda t: t[0]):
                self.level.insert_part(n, i)
        self.on_change([LevelPart(n) for n in self.nodes], [])

    def undo(self):
        parts = [LevelPart(n) for n in self.nodes]
        for p in sorted(parts, key=self.level.part_index, reverse=True):
            self.level.remove_part(p)
        self.on_change([], parts)


class RemovePartsCommand(QUndoCommand):
    def __init__(self, level: Level, parts: list[LevelPart], on_change):
        super().__init__(translate('parts', 'Remove %n object(s)', None, len(parts)))
        self.level, self.on_change = level, on_change
        self.removed = sorted(((level.part_index(p), p) for p in parts), key=lambda t: t[0])

    def redo(self):
        for _, p in reversed(self.removed):
            self.level.remove_part(p)
        self.on_change([], [p for _, p in self.removed])

    def undo(self):
        for i, p in self.removed:
            self.level.insert_part(p.node, i)
        self.on_change([p for _, p in self.removed], [])


def copies(parts: list[LevelPart]) -> list[tf.Node]:
    return [copy.deepcopy(p.node) for p in parts]


def anchor(parts: list[LevelPart]) -> tuple[float, float]:
    """Centre of the positions (polygons: first point) - reference point when pasting."""
    pts = [p.position or (p.polygon[0] if p.polygon else None) for p in parts]
    pts = [q for q in pts if q]
    if not pts:
        return 0.0, 0.0
    return sum(x for x, _ in pts) / len(pts), sum(y for _, y in pts) / len(pts)


class ChildListCommand(QUndoCommand):
    """A change of a part's Child List (zaxtools.children): ``op()`` changes it the first time and
    returns the child node to select afterwards (None: the parent); undo and redo put back the saved
    lines (``children.save_state``). ``on_change(parent, select)`` updates the view."""

    def __init__(self, parent: LevelPart, op, on_change, text: str):
        super().__init__(text)
        self.parent, self.op, self.on_change = parent, op, on_change
        self.before = children.save_state(parent)
        self.after = None
        self.select = None

    def redo(self):
        if self.after is None:
            self.select = self.op()
            self.after = children.save_state(self.parent)
        else:
            children.restore_state(self.after)
        self.on_change(self.parent, self.select)

    def undo(self):
        children.restore_state(self.before)
        self.on_change(self.parent, None)


class NodeFieldsCommand(QUndoCommand):
    """Set fields of one object node (missing ones are appended, as ``Node.set`` does); undo puts back
    the old values and removes the appended lines. ``on_change(part)`` updates the view."""

    def __init__(self, part: LevelPart, values: list[tuple[str, str]], on_change, text: str):
        super().__init__(text)
        self.part, self.values, self.on_change = part, values, on_change
        self.lines = list(part.node.children)
        self.old = {k: part.node.get(k) for k, _ in values}

    def redo(self):
        for k, v in self.values:
            self.part.node.set(k, v)
        self.on_change(self.part)

    def undo(self):
        for k, v in self.old.items():
            if v is not None:
                self.part.node.set(k, v)
        keep = set(map(id, self.lines))
        self.part.node.children[:] = [c for c in self.part.node.children if id(c) in keep]
        self.on_change(self.part)
