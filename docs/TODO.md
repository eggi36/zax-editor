# Deferred work

Work agreed to be done later, without priority (as of 2026-11-02). The decompilation's deferred work is in zax-decomp's `docs/TODO.md`.

## Editor and zaxtools

- **Own graphics**: done 2026-10-29 (CLAUDE.md step 35; the 8-bit game test and raw textures: step 38, 2026-10-30). Left: the loader's TGA filters before the encoder (crop 6, alpha threshold 3, un-premultiply 7) are not applied (the project owner's decision); models with several rotations, shadow layers or a default object (characters) are not made; own textures in sizes other than 128×128 in a surface are not tested.
- **Warning for a "Warped" surface with the game's own mini map** (2026-11-01, `zax-decomp/docs/ORIGINAL_BUGS.md` 2.40): a level with a surface of render type "Warped" ends the game when the game draws its mini map while the level is started with `/Map` (Level → Test in game, the launcher). The level check (or Test in game) should warn when File → let the game draw the mini map is on and the level has such a surface; the editor's own mini map avoids it. The editor does not offer "Warped" in its surface dialog today, so only edited fields reach it.
