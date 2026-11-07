"""Dialog "draw polygon": type and texture of a new polygon (CRenderablePolygon).

Only the three render types of the originals are offered (Render Type): Textured (187 polygons),
Animated Texture (131) and Black (2,024). A minimal object with an explicit ``Collideable`` is
written; the game sets the other fields. ``On Ground`` as in the originals: 1 for texture and
water, 0 for black (it then lies above the objects).
"""
from __future__ import annotations

from PySide6.QtCore import QSize, Qt
from PySide6.QtWidgets import (QButtonGroup, QCheckBox, QDialog, QDialogButtonBox, QLabel, QLineEdit,
                               QListWidget, QListWidgetItem, QRadioButton, QVBoxLayout)

from .groundtool import TEXTURES, THUMB, thumbnail
from .i18n import QT_TRANSLATE_NOOP, translate

ANIMATIONS = 'Cache/Animated Textures/'
# only show a blue test grid; in the originals only as an unused default (!None)
# or under Black/Textured (Test Sequence)
TEST_ANIMATIONS = {'!none', 'test sequence'}

# (key, text, tooltip), shown translated
KINDS = (('textured', QT_TRANSLATE_NOOP('surfacedlg', 'Texture'),
          QT_TRANSLATE_NOOP('surfacedlg', 'Fixed texture from Cache/Textures, e.g. water, lava, snow, temple floor')),
         ('animated', QT_TRANSLATE_NOOP('surfacedlg', 'Animated water'),
          QT_TRANSLATE_NOOP('surfacedlg', 'Image sequence from Cache/Animated Textures, runs in a loop')),
         ('black', QT_TRANSLATE_NOOP('surfacedlg', 'Black'),
          QT_TRANSLATE_NOOP('surfacedlg', 'Black cover, e.g. cave edges; does not lie on the ground (On Ground=0)')))


class SurfaceDialog(QDialog):
    def __init__(self, parent, assets, last: dict | None = None):
        super().__init__(parent)
        self.setWindowTitle(translate('surfacedlg', 'Draw surface'))
        self.resize(440, 620)
        self.assets = assets
        lay = QVBoxLayout(self)
        self.group = QButtonGroup(self)
        self.radios = {}
        for key, text, tip in KINDS:
            rb = QRadioButton(translate('surfacedlg', text))
            rb.setToolTip(translate('surfacedlg', tip))
            self.group.addButton(rb)
            self.radios[key] = rb
            lay.addWidget(rb)
            rb.toggled.connect(self._kind_changed)
        self.search = QLineEdit()
        self.search.setPlaceholderText(translate('surfacedlg', 'Search texture'))
        self.search.textChanged.connect(self._filter)
        self.textures = QListWidget()
        self.textures.setIconSize(QSize(THUMB, THUMB))
        for f in assets.ds.list(TEXTURES, '.frm16'):
            name = f[len(TEXTURES):-len('.frm16')]
            it = QListWidgetItem(name)
            tex = assets.texture(name)
            if tex is not None and tex.shape[:2] != (128, 128):
                # torn as a ground texture in the game [verified]; unverified for polygons, therefore blocked
                it.setFlags(it.flags() & ~Qt.ItemIsSelectable & ~Qt.ItemIsEnabled)
                it.setToolTip(translate('surfacedlg', 'Only 128×128 textures: the game shows smaller ones faultily as '
                                                      'ground.'))
            if icon := thumbnail(assets, name):
                it.setIcon(icon)
            self.textures.addItem(it)
        self.textures.sortItems()
        self.textures.itemDoubleClicked.connect(self.accept)
        self.anims = QListWidget()
        self.anims.setIconSize(QSize(THUMB, THUMB))
        for f in assets.ds.list(ANIMATIONS, '.seq16'):
            name = f[len(ANIMATIONS):-len('.seq16')]
            if name.lower() in TEST_ANIMATIONS:
                continue
            it = QListWidgetItem(name)
            a = assets.animation(name)
            if a:
                it.setToolTip(translate('surfacedlg', '%n frame(s), {fps} frames/s', None, len(a[0])).format(
                    fps=f'{a[1]:g}'))
            self.anims.addItem(it)
        self.anims.itemDoubleClicked.connect(self.accept)
        self.blocking = QCheckBox(translate('surfacedlg', 'blocking (Collideable) – the surface is also an obstacle, '
                                                          'e.g. lava'))
        # originals: 2,002 black polygons above the objects, 22 on the ground (On Ground=1)
        self.black_ground = QCheckBox(translate('surfacedlg', 'on the ground (On Ground=1) – below the objects instead '
                                                              'of above them,\ne.g. a dark pit'))
        for w in (self.search, self.textures, self.anims, self.black_ground, self.blocking):
            lay.addWidget(w)
        hint = QLabel(translate('surfacedlg', 'Then draw the surface on the map: click = point,\n'
                                              'double click/Return = done, Esc = cancel.'))
        hint.setStyleSheet('color: gray')
        lay.addWidget(hint)
        bb = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        bb.button(QDialogButtonBox.Ok).setText(translate('surfacedlg', 'Draw'))
        bb.accepted.connect(self.accept)
        bb.rejected.connect(self.reject)
        lay.addWidget(bb)
        last = last or {}
        self.radios[last.get('kind', 'textured')].setChecked(True)
        self._select(self.textures, last.get('texture'))
        self._select(self.anims, last.get('animation'))
        self.blocking.setChecked(last.get('blocking', False))
        self.black_ground.setChecked(last.get('black_ground', False))
        self._kind_changed()

    @staticmethod
    def _select(lst: QListWidget, name: str | None) -> None:
        hits = lst.findItems(name, Qt.MatchExactly) if name else []
        if not hits:
            hits = [lst.item(i) for i in range(lst.count()) if lst.item(i).flags() & Qt.ItemIsEnabled][:1]
        if hits:
            lst.setCurrentItem(hits[0])

    def _kind_changed(self, *_):
        k = self.kind()
        self.search.setVisible(k == 'textured')
        self.textures.setVisible(k == 'textured')
        self.anims.setVisible(k == 'animated')
        self.black_ground.setVisible(k == 'black')

    def _filter(self, text: str) -> None:
        t = text.lower()
        for i in range(self.textures.count()):
            it = self.textures.item(i)
            it.setHidden(t not in it.text().lower())

    def kind(self) -> str:
        return next(k for k, rb in self.radios.items() if rb.isChecked())

    def choice(self) -> dict | None:
        """Selected settings or None if the texture/animation is missing."""
        k = self.kind()
        tex = self.textures.currentItem()
        anim = self.anims.currentItem()
        if k == 'textured' and (tex is None or tex.isHidden()):
            return None
        if k == 'animated' and anim is None:
            return None
        return {'kind': k, 'texture': tex.text() if tex else None, 'animation': anim.text() if anim else None,
                'blocking': self.blocking.isChecked(), 'black_ground': k == 'black' and self.black_ground.isChecked()}


def water_ysort(choice: dict) -> str:
    """YSort of a new polygon: water -800 (below shadows and ground marks, like 99 of 102
    "Water/waterFractal", 35 of 38 "Water/Water Dark Blue" and 63 of the 131 animated water
    polygons of the originals), otherwise 0 (lava, rock, snow, black mostly 0)."""
    water = choice['kind'] == 'animated' or (choice['kind'] == 'textured'
                                             and (choice.get('texture') or '').lower().startswith('water/'))
    return '-800' if water else '0'


def surface_entries(choice: dict) -> list[tuple[str, str]]:
    """Fields of a new CRenderablePolygon as (before ``Polygon``, after ``Polygon``), in the order of
    the originals: Name, Collideable, ..., Polygon, On Ground, Render Type, YSort, ..., Texture."""
    k = choice['kind']
    # Always write Collideable: without the field the polygon becomes a movement area in the game
    # (Zax cannot get out any more) [verified 2026-10-19]; originals: 0 in 2,267 of 2,342
    before = [('Name', ''), ('Collideable', '1' if choice['blocking'] else '0')]
    ground = k != 'black' or choice.get('black_ground', False)
    after = [('On Ground', '1' if ground else '0'),
             ('Render Type', {'textured': 'Textured', 'animated': 'Animated Texture', 'black': 'Black'}[k]),
             ('YSort', water_ysort(choice))]
    if k == 'textured':
        after.append(('Static Texture', choice['texture']))
    elif k == 'animated':
        after.append(('Animated Texture', choice['animation']))
    return before, after
