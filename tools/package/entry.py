"""Start script of the frozen macOS app (PyInstaller): the editor, or its smoke test when ZAX_EDITOR_SMOKE is set."""
import os
import sys

if os.environ.get('ZAX_EDITOR_SMOKE'):
    import zax_pkg_smoke
    zax_pkg_smoke.install(os.environ['ZAX_EDITOR_SMOKE'], os.environ.get('ZAX_EDITOR_SMOKE_LANG', 'de'))

from zaxeditor.app import main  # noqa: E402

sys.exit(main())
