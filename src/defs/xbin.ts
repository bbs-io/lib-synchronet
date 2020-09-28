// Xbin file format definition
// https://web.archive.org/web/20120204063040/http://www.acid.org/info/xbin/x_spec.htm

export const id = "XBIN\x1a";
export const ID_LEN = 5;
export const PALETTE_LEN = 48;
export const FLAG_PALETTE = 1 << 0;
export const FLAG_FONT_NORMAL = 1 << 1;
export const FLAG_COMPRESSED = 1 << 2;
export const FLAG_NONBLINK = 1 << 3; // The blink attribute flag does not enable blinking text
export const FLAG_FONT_HIGH = 1 << 4; // Also called "512Chars"
// Synchronet-extensions:
export const FLAG_FONT_BLINK = 1 << 5; // Alt-font selected via BLINK attribute included
export const FLAG_FONT_HIGHBLINK = 1 << 6; // Alt-font selected via HIGH and BLINK attributes included
export const FLAG_NONHIGH = 1 << 7; // The HIGH attribute flag has no effect on the color

// The order of font (character set) definitions in the file has this precedence:
// BLINK
// HIGHBLINK
// NORMAL
// HIGH
