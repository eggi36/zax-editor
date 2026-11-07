"""UI languages of the editor (Qt's translation system).

The source texts in the code are English. A translation is a file ``zaxeditor_<code>.ts`` in this
folder (edited with Qt Linguist) and its compiled ``zaxeditor_<code>.qm``, which the editor loads;
``zaxeditor_en.qm`` only holds the English plural forms (``%n object(s)``). A new language is a new
pair of files, nothing else (the Window → Language menu lists every ``.qm`` found here):

    python -m zaxeditor.i18n.update --new fr        # zaxeditor_fr.ts with all texts unfinished
    (translate in pyside6-linguist zaxeditor/i18n/zaxeditor_fr.ts)
    python -m zaxeditor.i18n.update                 # merge new texts of the code, compile the .qm files

New UI texts in the code: ``translate('<module>', 'English text')``, values with ``str.format`` names
(``'{name}'``), counts as plural texts (``translate(ctx, '%n object(s)', None, n)``); then run the update
and translate the new entries (``tools/selftest_ui.py`` reports missing ones).

All texts are translated with an explicit context (``translate('app', ...)``), never with ``self.tr``
(PySide takes the context of ``self.tr`` from the runtime class, which differs from the class in the
code for subclasses). Qt's own texts (standard buttons, file dialogs) come from
``qtbase_<code>.qm`` of the Qt installation.

The language changes only the display: nothing that is written into a file depends on it.
"""
from __future__ import annotations

from pathlib import Path

from PySide6.QtCore import QCoreApplication, QLibraryInfo, QLocale, QSettings, QTranslator

from zaxtools import i18n as tools_i18n

DIR = Path(__file__).resolve().parent
SETTING = 'language'            # QSettings key: 'system' or a language code
SYSTEM = 'system'
SOURCE = 'en'                   # language of the source texts
NAMES = {'en': 'English', 'de': 'Deutsch'}      # each in its own language, never translated


def translate(context: str, text: str, disambiguation: str | None = None, n: int = -1) -> str:
    """``QCoreApplication.translate``; lupdate finds the calls by this name."""
    return QCoreApplication.translate(context, text, disambiguation, n)


def QT_TRANSLATE_NOOP(context: str, text: str) -> str:  # noqa: N802 - the name lupdate looks for
    """Marks a text of a table for lupdate; ``translate`` it where it is shown."""
    return text


def available() -> list[str]:
    """Language codes: English plus every ``zaxeditor_<code>.qm`` in this folder."""
    codes = {SOURCE} | {p.stem.split('_', 1)[1] for p in DIR.glob('zaxeditor_*.qm')}
    return sorted(codes, key=lambda c: (c != SOURCE, c))


def name(code: str) -> str:
    if code in NAMES:
        return NAMES[code]
    n = QLocale(code).nativeLanguageName()
    return n[:1].upper() + n[1:] if n else code


def resolve(choice: str | None) -> str:
    """The language to load for a setting: a known code, otherwise (``system``) the first of the
    system's UI languages that has a translation, otherwise English."""
    codes = available()
    if choice in codes:
        return choice
    for lang in QLocale.system().uiLanguages():
        code = lang.replace('_', '-').split('-')[0].lower()
        if code in codes:
            return code
    return SOURCE


def chosen(settings: QSettings) -> str:
    """The setting as stored ('system' if none)."""
    v = settings.value(SETTING, SYSTEM)
    return v if isinstance(v, str) and (v == SYSTEM or v in available()) else SYSTEM


_installed: list[QTranslator] = []


def install(app: QCoreApplication, code: str) -> str:
    """Load the editor's and Qt's translations for ``code`` into ``app`` (replacing earlier ones) and
    let zaxtools translate through Qt. Returns the code actually used."""
    for t in _installed:
        app.removeTranslator(t)
    _installed.clear()
    if code not in available():
        code = SOURCE
    own = QTranslator(app)
    if own.load(str(DIR / f'zaxeditor_{code}.qm')):
        app.installTranslator(own)
        _installed.append(own)
    if code != SOURCE:
        qt = QTranslator(app)
        if qt.load(f'qtbase_{code}', QLibraryInfo.path(QLibraryInfo.TranslationsPath)):
            app.installTranslator(qt)
            _installed.append(qt)
    tools_i18n.install(QCoreApplication.translate)
    return code
