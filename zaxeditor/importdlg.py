"""Dialog "Import images": PNG images (with alpha) as a game image, an image sequence, a new model, or as the
frames of a sequence of an existing model (a changed copy), written through the game's encoder into the output
folder (zaxtools.imageimport). The game data and the language pack are never written.
"""
from __future__ import annotations

import re
from pathlib import Path

import numpy as np
from PySide6.QtCore import QPointF, Qt
from PySide6.QtGui import QColor, QImage, QPainter, QPen, QPixmap
from PySide6.QtWidgets import (QCheckBox, QComboBox, QDialog, QDialogButtonBox, QDoubleSpinBox, QFileDialog,
                               QFormLayout, QHBoxLayout, QLabel, QLineEdit, QMessageBox, QPushButton, QSpinBox,
                               QVBoxLayout, QWidget)

from zaxtools import frm, imageimport as ii, modelhead

from . import msgbox
from .i18n import QT_TRANSLATE_NOOP, translate

# (key, text, tooltip), shown translated
KINDS = (('image', QT_TRANSLATE_NOOP('importdlg', 'Image (.frm16 + .frm)'),
          QT_TRANSLATE_NOOP('importdlg', 'One PNG as a game image below Cache, e.g. to replace an interface image')),
         ('sequence', QT_TRANSLATE_NOOP('importdlg', 'Image sequence (.seq16 + .seq)'),
          QT_TRANSLATE_NOOP('importdlg', 'The PNGs in their numbered order as an image sequence below Cache')),
         ('model', QT_TRANSLATE_NOOP('importdlg', 'New model (.mdl16 + .mdl)'),
          QT_TRANSLATE_NOOP('importdlg', 'A decoration model with one sequence and one rotation below Cache/Models; '
                                         'it then appears in the model browser and can be placed')),
         ('replace', QT_TRANSLATE_NOOP('importdlg', 'Frames of an existing model (copy)'),
          QT_TRANSLATE_NOOP('importdlg', 'A copy of a shipped model with the frames of one sequence replaced; the copy '
                                         'has the model\'s path and wins in the game when copied below Data')))
HOT = (('bottom-centre', QT_TRANSLATE_NOOP('importdlg', 'Bottom centre')),
       ('centre', QT_TRANSLATE_NOOP('importdlg', 'Centre')),
       ('top-left', QT_TRANSLATE_NOOP('importdlg', 'Top left')),
       ('custom', QT_TRANSLATE_NOOP('importdlg', 'Custom')))
PREVIEW = 220


def _qimage(rgba: np.ndarray) -> QImage:
    h, w = rgba.shape[:2]
    return QImage(np.ascontiguousarray(rgba).data, w, h, 4 * w, QImage.Format_RGBA8888).copy()


class ImportDialog(QDialog):
    """``ds`` the game data, ``catalog`` the model catalogue, ``schema`` the exe's (None: no models),
    ``out_dir`` the output folder. After ``exec`` ``written`` holds the written files and ``model`` the model path
    of a model import."""

    def __init__(self, parent, ds, catalog, schema, out_dir: Path, last: dict | None = None):
        super().__init__(parent)
        self.setWindowTitle(translate('importdlg', 'Import images'))
        self.ds, self.catalog, self.schema, self.out_dir = ds, catalog, schema, Path(out_dir)
        self.images: list[np.ndarray] = []
        self.paths: list[Path] = []
        self.written: list[Path] = []
        self.model: str | None = None
        last = last or {}
        lay = QVBoxLayout(self)
        top = QHBoxLayout()
        self.choose = QPushButton(translate('importdlg', 'Choose PNG files …'))
        self.choose.clicked.connect(self._choose)
        self.files = QLabel(translate('importdlg', 'No images chosen. Several files make a series (in the order of '
                                                   'the numbers in their names).'))
        self.files.setWordWrap(True)
        top.addWidget(self.choose)
        top.addWidget(self.files, 1)
        lay.addLayout(top)
        body = QHBoxLayout()
        form = QFormLayout()
        self.kind = QComboBox()
        for key, text, tip in KINDS:
            self.kind.addItem(translate('importdlg', text), key)
            self.kind.setItemData(self.kind.count() - 1, translate('importdlg', tip), Qt.ToolTipRole)
        if self.schema is None:            # a model's header needs the exe's field schema
            for k in (2, 3):
                self.kind.model().item(k).setEnabled(False)
        self.kind.currentIndexChanged.connect(self._kind_changed)
        form.addRow(translate('importdlg', 'Import as'), self.kind)
        self.folder = QComboBox()
        self.folder.setEditable(True)
        self.folder.currentTextChanged.connect(self._update)
        form.addRow(translate('importdlg', 'Folder'), self.folder)
        self.name = QLineEdit()
        self.name.textChanged.connect(self._update)
        form.addRow(translate('importdlg', 'Name'), self.name)
        self.target = QComboBox()                # replace: the model
        self.target.setEditable(True)
        self.target.addItems(sorted(catalog.models, key=str.lower) if catalog else [])
        self.target.currentTextChanged.connect(self._target_changed)
        form.addRow(translate('importdlg', 'Model'), self.target)
        self.sequence = QComboBox()
        self.sequence.setEditable(True)
        self.sequence.currentTextChanged.connect(self._update)
        form.addRow(translate('importdlg', 'Sequence'), self.sequence)
        self.rotation = QComboBox()
        self.rotation.currentIndexChanged.connect(self._update)
        form.addRow(translate('importdlg', 'Rotation'), self.rotation)
        hot = QHBoxLayout()
        self.hot_where = QComboBox()
        for key, text in HOT:
            self.hot_where.addItem(translate('importdlg', text), key)
        self.hot_where.currentIndexChanged.connect(self._hot_changed)
        self.hot_x, self.hot_y = QSpinBox(), QSpinBox()
        for sb in (self.hot_x, self.hot_y):
            sb.setRange(-4096, 4096)
            sb.valueChanged.connect(self._hot_edited)
        hot.addWidget(self.hot_where)
        hot.addWidget(QLabel('x'))
        hot.addWidget(self.hot_x)
        hot.addWidget(QLabel('y'))
        hot.addWidget(self.hot_y)
        hw = QWidget()
        hw.setLayout(hot)
        hot.setContentsMargins(0, 0, 0, 0)
        hw.setToolTip(translate('importdlg', 'The anchor pixel from the top left: the game draws the image at the '
                                             'object\'s position minus the hot spot. For objects the foot (bottom '
                                             'centre) is usual; objects are sorted by that point.'))
        form.addRow(translate('importdlg', 'Hot spot'), hw)
        self.fps = QDoubleSpinBox()
        self.fps.setRange(0.1, 120)
        self.fps.setDecimals(2)
        self.fps.setValue(float(last.get('fps', 30.0)))
        self.fps.setToolTip(translate('importdlg', 'Frames per second (30 is the field default of the exe)'))
        form.addRow(translate('importdlg', 'Frames per second'), self.fps)
        self.mode = QComboBox()
        self.mode.addItems(ii.BLIT_TYPES)
        self.mode.setToolTip(translate('importdlg', 'Transparent Mask: normal with soft edges; Blend Black Bias: '
                                                    'smoke and fire; Blend Amplify Light: brightens what lies below '
                                                    '(light)'))
        form.addRow(translate('importdlg', 'Blit type'), self.mode)
        self.sorting_y = QSpinBox()
        self.sorting_y.setRange(-2000, 2000)
        self.sorting_y.setToolTip(translate('importdlg', 'Sorting offset in pixels: the object is drawn by its '
                                                         'position Y plus this value (0 in most decoration models)'))
        form.addRow(translate('importdlg', 'Sorting Y'), self.sorting_y)
        self.on_ground = QCheckBox(translate('importdlg', 'Render On Ground (drawn below all objects)'))
        form.addRow('', self.on_ground)
        self.animate = QCheckBox(translate('importdlg', 'Auto-Animate (plays by the game time; without it a '
                                                        'placed object shows frame 0 only)'))
        form.addRow('', self.animate)
        body.addLayout(form, 1)
        self.preview = QLabel()
        self.preview.setFixedSize(PREVIEW, PREVIEW)
        self.preview.setAlignment(Qt.AlignCenter)
        self.preview.setStyleSheet('background: #262626; border-radius: 6px;')
        body.addWidget(self.preview)
        lay.addLayout(body)
        self.info = QLabel()
        self.info.setWordWrap(True)
        self.info.setTextInteractionFlags(Qt.TextSelectableByMouse)
        lay.addWidget(self.info)
        self.buttons = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        self.buttons.button(QDialogButtonBox.Ok).setText(translate('importdlg', 'Import'))
        self.buttons.accepted.connect(self._import)
        self.buttons.rejected.connect(self.reject)
        lay.addWidget(self.buttons)
        k = self.kind.findData(last.get('kind', 'image'))
        self.kind.setCurrentIndex(k if k >= 0 and self.kind.model().item(k).isEnabled() else 0)
        self._kind_changed()
        self.resize(760, 520)

    # --- inputs ------------------------------------------------------------------------------------------------
    def key(self) -> str:
        return self.kind.currentData()

    def _choose(self) -> None:
        files, _ = QFileDialog.getOpenFileNames(self, translate('importdlg', 'Choose PNG files'), '',
                                                translate('importdlg', 'PNG images (*.png *.PNG)'))
        if not files:
            return
        self.set_files(files)

    def set_files(self, files) -> None:
        self.paths = ii.series(files)
        try:
            self.images = [ii.load_png(p) for p in self.paths]
        except OSError as e:
            msgbox.warning(self, self.windowTitle(), translate('importdlg', 'Not readable: {error}').format(error=e))
            self.paths, self.images = [], []
        names = ', '.join(p.name for p in self.paths[:4]) + (' …' if len(self.paths) > 4 else '')
        self.files.setText(translate('importdlg', '%n image(s): ', None, len(self.paths)) + names)
        if self.paths and not self.name.text():
            stem = re.sub(r'[\s_\-]*\d+$', '', self.paths[0].stem) or self.paths[0].stem
            self.name.setText(stem)
        if len(self.paths) > 1 and self.key() == 'image':
            self.kind.setCurrentIndex(self.kind.findData('sequence'))
        self.animate.setChecked(len(self.images) > 1)
        self._hot_changed()

    def _folders(self) -> list[str]:
        k = self.key()
        if k == 'model':
            base, ext = 'Cache/Models/', '.mdl16'
        else:
            base, ext = 'Cache/', '.frm16' if k == 'image' else '.seq16'
        out = {'Own'} if k == 'model' else set()
        for rel in self.ds.list(base, ext):
            sub = rel[len(base):]
            if '/' in sub:
                out.add(sub.rsplit('/', 1)[0])
        return sorted(out, key=str.lower)

    def _kind_changed(self) -> None:
        k = self.key()
        cur = self.folder.currentText()
        self.folder.blockSignals(True)
        self.folder.clear()
        self.folder.addItems(self._folders())
        default = {'image': 'Interface', 'sequence': 'Sequences', 'model': 'Own'}.get(k, '')
        self.folder.setCurrentText(cur if cur and self.folder.findText(cur) >= 0 else default)
        self.folder.blockSignals(False)
        rep, model = k == 'replace', k in ('model', 'replace')
        for w in (self.folder, self.name):
            self._row(w, not rep)
        for w in (self.target, self.rotation):
            self._row(w, rep)
        self._row(self.sequence, model)
        for w in (self.sorting_y, self.on_ground, self.animate):
            self._row(w, k == 'model')
        self._row(self.fps, k in ('sequence', 'model'))
        self._row(self.mode, k in ('sequence', 'model'))
        if k == 'model' and not self.sequence.currentText():
            self.sequence.setCurrentText('Idle')
        if k == 'model':
            self.hot_where.setCurrentIndex(self.hot_where.findData('bottom-centre'))
        elif k in ('image', 'sequence'):
            self.hot_where.setCurrentIndex(self.hot_where.findData('top-left'))
        if rep:
            self._target_changed()
        self._update()

    def _row(self, w, visible: bool) -> None:
        w.setVisible(visible)
        lab = self._form_label(w)
        if lab is not None:
            lab.setVisible(visible)

    def _form_label(self, w):
        for form in self.findChildren(QFormLayout):
            lab = form.labelForField(w)
            if lab is not None:
                return lab
        return None

    def _target_changed(self) -> None:
        if self.key() != 'replace':
            return
        info = self.catalog.models.get(self.target.currentText()) if self.catalog else None
        self.sequence.blockSignals(True)
        self.sequence.clear()
        if info is not None:
            self.sequence.addItems(info.sequences)
            self.sequence.setCurrentText(info.default_sequence)
        self.sequence.blockSignals(False)
        self._fill_rotations()
        self._update()

    def _replace_sequence(self):
        """The mdl.Sequence the replace mode targets (None if missing)."""
        from zaxtools import mdl
        path = self.target.currentText()
        rel = f'Cache/Models/{path}.mdl16'
        if not self.ds.exists(rel):
            return None
        own = self.out_dir / rel
        data = own.read_bytes() if own.is_file() else self.ds.read(rel)
        return next((s for s in mdl.read_sequences(data) if s.name.lower() == self.sequence.currentText().lower()),
                    None)

    def _fill_rotations(self) -> None:
        s = self._replace_sequence()
        self.rotation.blockSignals(True)
        self.rotation.clear()
        self.rotation.addItem(translate('importdlg', 'All frames of the sequence'), None)
        if s is not None and s.rotations > 1:
            for r in range(s.rotations):
                self.rotation.addItem(translate('importdlg', 'Rotation {index} ({frames} frames)').format(
                    index=r, frames=s.frames_per_rotation), r)
        self.rotation.blockSignals(False)

    def _hot_changed(self) -> None:
        where = self.hot_where.currentData()
        if where != 'custom' and self.images:
            h, w = self.images[0].shape[:2]
            x, y = ii.hot_spot(self.key(), w, h, where)
            for sb, v in ((self.hot_x, x), (self.hot_y, y)):
                sb.blockSignals(True)
                sb.setValue(v)
                sb.blockSignals(False)
        self._update()

    def _hot_edited(self) -> None:
        self.hot_where.blockSignals(True)
        self.hot_where.setCurrentIndex(self.hot_where.findData('custom'))
        self.hot_where.blockSignals(False)
        self._update()

    # --- spec and preview --------------------------------------------------------------------------------------
    def spec(self) -> ii.ImportSpec:
        k = self.key()
        return ii.ImportSpec(k if k != 'replace' else 'model', self.name.text().strip(),
                             self.folder.currentText().strip().strip('/'), self.images,
                             (self.hot_x.value(), self.hot_y.value()), self.fps.value(), self.mode.currentText(),
                             self.sequence.currentText().strip() or 'Idle', self.on_ground.isChecked(),
                             self.animate.isChecked(), self.sorting_y.value())

    def targets(self) -> list[str]:
        """The data paths the import writes."""
        if self.key() == 'replace':
            p = self.target.currentText()
            return [f'Cache/Models/{p}{e}' for e in ('.mdl16', '.mdl')]
        s = self.spec()
        return [s.rel(e) for e in ii.EXTENSIONS[s.kind]]

    def problems(self) -> list[str]:
        if self.key() == 'replace':
            out = [] if self.images else [translate('importdlg', 'Choose the PNG files first.')]
            if self.catalog is None or self.target.currentText() not in self.catalog.models:
                out.append(translate('importdlg', 'Unknown model.'))
            s = self._replace_sequence()
            if s is None:
                out.append(translate('importdlg', 'The model has no such sequence.'))
            elif self.images:
                r = self.rotation.currentData()
                need = s.frames_per_rotation if r is not None else None
                if need is not None and len(self.images) != need:
                    out.append(translate('importdlg', 'This rotation has %n frame(s).', None, need))
                elif need is None and len(self.images) % max(1, s.rotations):
                    out.append(translate('importdlg', 'The number of images must divide by the {rotations} '
                                                      'rotations.').format(rotations=s.rotations))
            return out
        if not self.images:
            return [translate('importdlg', 'Choose the PNG files first.')]
        return ii.check(self.spec())             # English texts of zaxtools (as the level check's sources)

    def _update(self, *_):
        self._draw_preview()
        probs = self.problems()
        lines = []
        if self.images:
            sizes = {im.shape[:2] for im in self.images}
            h, w = self.images[0].shape[:2]
            lines.append(translate('importdlg', 'Size {w}×{h}').format(w=w, h=h)
                         + ('' if len(sizes) == 1 else ' ' + translate('importdlg', '(the images differ in size)')))
            alpha = self.images[0][..., 3]
            lines.append(translate('importdlg', 'First image: {opaque} opaque pixels, {soft} soft edge pixels '
                                                '(16 bit: alpha above 250 opaque, 6–250 soft, below dropped; 8 bit: '
                                                'five steps, below 26 dropped)').format(
                opaque=int((alpha > 250).sum()), soft=int(((alpha > 5) & (alpha <= 250)).sum())))
        tg = self.targets()
        exist = [t for t in tg if (self.out_dir / t).exists()]
        lines.append(translate('importdlg', 'Writes into the output folder: {files}').format(
            files=', '.join(tg)))
        if exist:
            lines.append('<span style="color:#d08000">' + translate('importdlg', 'Replaces: {files}').format(
                files=', '.join(exist)) + '</span>')
        if self.key() == 'replace':
            lines.append(translate('importdlg', 'Copied below Data/ the copy replaces the model everywhere in the '
                                                'game.'))
        if self.images and self.key() != 'replace':
            spec = self.spec()
            if spec.texture:
                lines.append(translate('importdlg', 'A texture: written uncompressed and opaque, as the game\'s '
                                                    'surfaces and ground need it.'))
            for n in ii.notes(spec):             # English texts of zaxtools, like the problems
                lines.append('<span style="color:#d08000">' + n + '</span>')
        for p in probs:
            lines.append('<span style="color:#d04040">' + p + '</span>')
        self.info.setText('<br>'.join(lines))
        self.buttons.button(QDialogButtonBox.Ok).setEnabled(not probs)

    def _draw_preview(self) -> None:
        pm = QPixmap(PREVIEW, PREVIEW)
        pm.fill(QColor(38, 38, 38))
        if self.images:
            img = _qimage(self.images[0])
            h, w = self.images[0].shape[:2]
            scale = min(4.0, (PREVIEW - 20) / max(w, h))
            p = QPainter(pm)
            ox, oy = (PREVIEW - w * scale) / 2, (PREVIEW - h * scale) / 2
            p.translate(ox, oy)
            p.scale(scale, scale)
            p.drawImage(0, 0, img)
            p.resetTransform()
            hx, hy = ox + (self.hot_x.value() + 0.5) * scale, oy + (self.hot_y.value() + 0.5) * scale
            p.setPen(QPen(QColor(255, 220, 0), 1))
            p.drawLine(QPointF(hx - 6, hy), QPointF(hx + 6, hy))
            p.drawLine(QPointF(hx, hy - 6), QPointF(hx, hy + 6))
            p.end()
        self.preview.setPixmap(pm)

    # --- import ------------------------------------------------------------------------------------------------
    def _import(self) -> None:
        if self.problems():
            return
        exist = [t for t in self.targets() if (self.out_dir / t).exists()]
        if exist and msgbox.question(self, self.windowTitle(), translate(
                'importdlg', 'Replace the files in the output folder?\n{files}').format(
                files='\n'.join(exist))) != QMessageBox.Yes:
            return
        inv = self.ds.read(frm.INV_COLOR_TABLE15)
        try:
            if self.key() == 'replace':
                files = self._replaced(inv)
                self.model = self.target.currentText()
            else:
                spec = self.spec()
                files = ii.build(spec, inv, self.schema)
                self.model = spec.model_path if spec.kind == 'model' else None
            forbidden = [self.ds.root] + ([self.ds.language_pack] if self.ds.language_pack else [])
            self.written = ii.write(files, self.out_dir, forbidden)
        except (ValueError, OSError) as e:
            msgbox.warning(self, self.windowTitle(), translate('importdlg', 'Import failed: {error}').format(error=e))
            return
        self.accept()

    def _replaced(self, inv: bytes) -> dict[str, bytes]:
        head = modelhead.ModelHead(self.schema)
        out = {}
        for rel in self.targets():
            own = self.out_dir / rel
            if own.is_file():
                data = own.read_bytes()
            elif self.ds.exists(rel):
                data = self.ds.read(rel)
            else:
                continue
            out[rel] = ii.replace_frames(data, head, self.sequence.currentText(), self.images,
                                         (self.hot_x.value(), self.hot_y.value()), inv, self.rotation.currentData())
        return out

    def last(self) -> dict:
        return {'kind': self.key(), 'fps': self.fps.value()}
