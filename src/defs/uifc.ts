/**
 * Synchronet User Interface constants
 *
 * This file must remain in-sync with
 * https://gitlab.synchro.net/sbbs/sbbs/-/blob/master/src/uifc/uifc.h
 */

// TODO: break this into logical groups of enums, remove duplicates from other file(s)

export const MAX_OPTS = 10000;
export const MSK_ON = 0xf0000000;
export const MSK_OFF = 0x0fffffff;
export const MSK_INS = 0x10000000;
export const MSK_DEL = 0x20000000;
export const MSK_GET = 0x30000000;
export const MSK_PUT = 0x40000000;
export const MSK_EDIT = 0x50000000;

/* Dont forget, negative return values are used for extended keys (if WIN_EXTKEYS used)! */
export const MAX_OPLN = 75; /* Maximum length of each option per menu call */
export const MAX_BUFS = 7; /* Maximum number of screen buffers to save */
export const MIN_LINES = 14; /* Minimum number of screen lines supported */
export const MAX_LINES = 60; /* Maximum number of screen rows supported */
export const MAX_BFLN = 80 * MAX_LINES * 2; /* Maximum size of screen buffers */

/**************************/
/* Bits in uifcapi_t.mode */
/**************************/
export const UIFC_INMSG =
  1 << 0; /* Currently in Message Routine non-recursive */
export const UIFC_MOUSE = 1 << 1; /* Mouse installed and available */
export const UIFC_MONO = 1 << 2; /* Force monochrome mode */
export const UIFC_COLOR = 1 << 3; /* Force color mode */
export const UIFC_IBM = 1 << 4; /* Force use of IBM charset	*/
export const UIFC_NOCTRL = 1 << 5;
/* Don't allow useage of CTRL keys for movement
 *	 etc in menus (Still available in text boxes) */

/*******************************/
/* Bits in uifcapi_t.list mode */
/*******************************/
export const WIN_ORG = 1 << 0; /* Original menu - destroy valid screen area */
export const WIN_SAV =
  1 << 1; /* Save existing text and replace when finished */
export const WIN_ACT = 1 << 2; /* Menu remains active after a selection */
export const WIN_L2R = 1 << 3; /* Center the window based on 'width'   */
export const WIN_T2B = 1 << 4; /* Center the window based on 'height'  */
export const WIN_INS = 1 << 5; /* Allows user to user insert key */
export const WIN_INSACT = 1 << 6; /* Remains active after insert key */
export const WIN_DEL = 1 << 7; /* Allows user to use delete key */
export const WIN_DELACT = 1 << 8; /* Remains active after delete key */
export const WIN_ESC = 1 << 9; /* Screen is active when escape is hit			 */
export const WIN_RHT = 1 << 10; /* Place window against right side of screen */
export const WIN_BOT = 1 << 11; /* Place window against botton of screen */
export const WIN_GET = 1 << 12; /* Allows F5 to Get a menu item */
export const WIN_PUT = 1 << 13; /* Allows F6 to Put a menu item */
export const WIN_CHE = 1 << 14; /* Stay active after escape if changes */
export const WIN_XTR = 1 << 15; /* Add extra line at end for inserting at end */
export const WIN_DYN =
  1 << 16; /* Dynamic window - return at least every second */
export const WIN_HLP = 1 << 17; /* Parse 'Help codes' */
export const WIN_PACK = 1 << 18; /* Pack text in window (No padding) */
export const WIN_IMM = 1 << 19; /* Draw window and return immediately */
export const WIN_FAT = 1 << 20; /* Do not pad outside borders */
export const WIN_REDRAW = 1 << 21; /* Force redraw on dynamic window */
export const WIN_NODRAW = 1 << 22; /* Force not to redraw on dynamic window */
export const WIN_EXTKEYS = 1 << 23;
/* Return on any keypress... if it's not handled internally
 * Return value is -2 - keyvalue */
export const WIN_NOBRDR = 1 << 24; /* Do not draw a border around the window */
export const WIN_FIXEDHEIGHT = 1 << 25; /* Use list_height from uifc struct */
export const WIN_UNGETMOUSE =
  1 << 26; /* If the mouse is clicked outside the window, */
/* Put the mouse event back into the event queue */
export const WIN_EDIT = 1 << 27; /* Allow F2 to edit a menu item */
export const WIN_EDITACT = 1 << 28; /* Remain active after edit key */

export const WIN_MID = WIN_L2R | WIN_T2B; /* Place window in middle of screen */

export const SCRN_TOP = 3;
export const SCRN_LEFT = 5;

/********************************************/
/* Additional kmode constants				*/
/* load('sbbsdefs.js') for the others		*/
/********************************************/
export const K_SCANNING = 1 << 11; /* UPC Scanner is active... return on '%'	*/
export const K_TABEXIT = 1 << 12; /* Return on TAB or BACKTAB			    	*/
export const K_DECIMAL = 1 << 13; /* Allow floating point numbers only		*/
export const K_DEUCEEXIT = 1 << 14; /* Return whenever Deuce wants to exit		*/
/* Returns on up/down/F2					*/
export const K_MOUSEEXIT =
  1 << 15; /* Returns when mouse is clicked outside of */
/* Input area (NOT outside of window!)		*/
/* And ungets the mouse event.				*/
/********************************************/
