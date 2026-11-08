/* "Zax Editor.exe": the Windows starter of the portable editor package (tools/package_windows.sh).
 *
 * Starts runtime\pythonw.exe -I -X pycache_prefix=<LOCALAPPDATA>\Zax-Editor\pycache -m zaxeditor [arguments]
 * from the folder this exe lies in (no console window), passing its own arguments on; the working directory is
 * inherited, so a level path on the command line resolves as the user gave it. The runtime's python314._pth makes
 * the search path (the runtime, its Lib\site-packages and ..\app with zaxeditor and zaxtools); -I keeps out
 * PYTHONPATH and the user's site-packages; the compiled modules go below LOCALAPPDATA, so a read-only folder
 * (Program Files, a zip viewer) still starts fast the second time.
 *
 * Build: zig cc -target x86_64-windows-gnu -O2 -municode -Wl,--subsystem,windows starter.c starter.rc -o "Zax Editor.exe"
 */
#define WIN32_LEAN_AND_MEAN
#ifndef UNICODE
#define UNICODE
#endif
#ifndef _UNICODE
#define _UNICODE
#endif
#include <windows.h>

#define CMD_MAX 32768

static void fail(const wchar_t *what, const wchar_t *path)
{
    wchar_t msg[2048];
    DWORD err = GetLastError();
    wchar_t sys[512] = L"";
    FormatMessageW(FORMAT_MESSAGE_FROM_SYSTEM | FORMAT_MESSAGE_IGNORE_INSERTS, NULL, err, 0, sys, 512, NULL);
    wsprintfW(msg, L"%s\n\n%s\n\n%s", what, path, sys);
    MessageBoxW(NULL, msg, L"Zax Editor", MB_OK | MB_ICONERROR);
}

int WINAPI wWinMain(HINSTANCE inst, HINSTANCE prev, LPWSTR args, int show)
{
    (void)inst; (void)prev; (void)show;
    static wchar_t dir[CMD_MAX], python[CMD_MAX], cache[CMD_MAX], cmd[CMD_MAX];
    DWORD n = GetModuleFileNameW(NULL, dir, CMD_MAX);
    if (n == 0 || n >= CMD_MAX) {
        fail(L"Cannot find the program's own folder.", L"");
        return 1;
    }
    wchar_t *slash = dir + n;
    while (slash > dir && slash[-1] != L'\\' && slash[-1] != L'/')
        slash--;
    *slash = 0;                                   /* dir ends with a backslash */

    lstrcpyW(python, dir);
    lstrcatW(python, L"runtime\\pythonw.exe");
    if (GetFileAttributesW(python) == INVALID_FILE_ATTRIBUTES) {
        fail(L"The Python runtime of the package is missing (unpack the whole zip, not only this file):", python);
        return 1;
    }

    DWORD c = GetEnvironmentVariableW(L"LOCALAPPDATA", cache, CMD_MAX - 64);
    if (c == 0 || c >= CMD_MAX - 64)
        cache[0] = 0;
    else
        lstrcatW(cache, L"\\Zax-Editor\\pycache");

    if (lstrlenW(python) + lstrlenW(cache) + lstrlenW(args ? args : L"") + 128 >= CMD_MAX) {
        SetLastError(ERROR_FILENAME_EXCED_RANGE);
        fail(L"The command line is too long.", L"");
        return 1;
    }
    wsprintfW(cmd, L"\"%s\" -I ", python);
    if (cache[0]) {
        lstrcatW(cmd, L"-X \"pycache_prefix=");
        lstrcatW(cmd, cache);
        lstrcatW(cmd, L"\" ");
    }
    lstrcatW(cmd, L"-m zaxeditor");
    if (args && args[0]) {
        lstrcatW(cmd, L" ");
        lstrcatW(cmd, args);
    }

    STARTUPINFOW si;
    PROCESS_INFORMATION pi;
    ZeroMemory(&si, sizeof si);
    si.cb = sizeof si;
    ZeroMemory(&pi, sizeof pi);
    if (!CreateProcessW(python, cmd, NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi)) {
        fail(L"The editor could not be started:", python);
        return 1;
    }
    AllowSetForegroundWindow(pi.dwProcessId);
    CloseHandle(pi.hThread);
    CloseHandle(pi.hProcess);
    return 0;
}
