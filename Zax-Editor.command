#!/bin/zsh
# Starts the Zax editor by double-clicking it in the Finder.
# ZAX_DATA comes from ~/.zshrc (Terminal runs the file from a login shell);
# the data path saved in the editor takes precedence anyway.
cd "${0:A:h}" || exit 1
exec .venv/bin/python -m zaxeditor "$@"
