"""macOS-only touches; every function does nothing on other systems.

Started as ``python -m zaxeditor``, the process belongs to Python's own bundle, so the menu bar
and the Dock would say "Python". ``set_app_name`` puts the editor's name into the main bundle's
info dictionary before Qt creates the NSApplication (the same in-memory change an app bundle's
Info.plist makes; nothing is written to disk). Uses only ctypes and the Objective-C runtime.
"""
from __future__ import annotations

import ctypes
import ctypes.util
import sys

IS_MAC = sys.platform == 'darwin'


def set_app_name(name: str) -> None:
    """Name shown in the menu bar (application menu) and the Dock; call before QApplication."""
    if not IS_MAC:
        return
    try:
        objc = ctypes.cdll.LoadLibrary(ctypes.util.find_library('objc'))
        ctypes.cdll.LoadLibrary(ctypes.util.find_library('Foundation'))
    except OSError:
        return
    objc.objc_getClass.restype = ctypes.c_void_p
    objc.objc_getClass.argtypes = [ctypes.c_char_p]
    objc.sel_registerName.restype = ctypes.c_void_p
    objc.sel_registerName.argtypes = [ctypes.c_char_p]
    send = objc.objc_msgSend
    send.restype = ctypes.c_void_p

    def call(obj, sel, *args):
        send.argtypes = [ctypes.c_void_p, ctypes.c_void_p] + [ctypes.c_void_p] * len(args)
        return send(obj, objc.sel_registerName(sel), *args)

    def nsstring(text: str):
        return call(objc.objc_getClass(b'NSString'), b'stringWithUTF8String:', ctypes.c_char_p(text.encode()))

    bundle = call(objc.objc_getClass(b'NSBundle'), b'mainBundle')
    setter = objc.sel_registerName(b'setObject:forKey:')
    for which in (b'infoDictionary', b'localizedInfoDictionary'):
        info = call(bundle, which)
        # only a mutable dictionary takes the key (an immutable one would raise an Objective-C exception)
        if info and call(info, b'respondsToSelector:', setter):
            for key in ('CFBundleName', 'CFBundleDisplayName'):
                call(info, b'setObject:forKey:', nsstring(name), nsstring(key))
