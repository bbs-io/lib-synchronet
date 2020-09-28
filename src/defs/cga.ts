// CGA (IBM Color Graphics Adapter) definitions

/********************************************/
/* console.attributes, also used for ansi()	*/
/********************************************/
export const BLINK = 0x80; /* blink bit */
export const HIGH = 0x08; /* high intensity (bright) foreground bit */

/* foreground colors */
export const BLACK = 0; /* dark colors (HIGH bit unset) */
export const BLUE = 1;
export const GREEN = 2;
export const CYAN = 3;
export const RED = 4;
export const MAGENTA = 5;
export const BROWN = 6;
export const LIGHTGRAY = 7;
export const DARKGRAY = 8; /* light colors (HIGH bit set) */
export const LIGHTBLUE = 9;
export const LIGHTGREEN = 10;
export const LIGHTCYAN = 11;
export const LIGHTRED = 12;
export const LIGHTMAGENTA = 13;
export const YELLOW = 14;
export const WHITE = 15;

// This array allows a fast color-index -> name lookup
export const colors = [
  "BLACK",
  "BLUE",
  "GREEN",
  "CYAN",
  "RED",
  "MAGENTA",
  "BROWN",
  "LIGHTGRAY",
  "DARKGRAY",
  "LIGHTBLUE",
  "LIGHTGREEN",
  "LIGHTCYAN",
  "LIGHTRED",
  "LIGHTMAGENTA",
  "YELLOW",
  "WHITE",
];
/* background colors */
export const ANSI_NORMAL = 0x100; /* special value for ansi() */
export const BG_BLACK = 0x200; /* special value for ansi() */
export const BG_HIGH = 0x400; /* not an ANSI.SYS compatible attribute */
export const BG_BLUE = BLUE << 4;
export const BG_GREEN = GREEN << 4;
export const BG_CYAN = CYAN << 4;
export const BG_RED = RED << 4;
export const BG_MAGENTA = MAGENTA << 4;
export const BG_BROWN = BROWN << 4;
export const BG_LIGHTGRAY = LIGHTGRAY << 4;
