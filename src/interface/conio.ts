/**
 * Console Input/Output Object (DOS conio library functionality for jsexec)
 *
 * @since v3.15
 */
export interface IConio {
  // **************************************************************************
  // PROPERTIES
  // **************************************************************************

  /**
   * Allows windows to scroll
   * @since 3.15
   */
  wscroll: boolean;

  /**
   * Enables direct video writes (does nothing)
   * @since 3.15
   */
  directvideo: boolean;

  /**
   * Do not update the screen when characters are printed
   * @since 3.15
   */
  hold_update: boolean;

  /**
   * Calling puttext() (and some other things implemented using it) can move the cursor position
   * @since 3.15
   */
  puttext_can_move: boolean;

  /**
   * The current video mode
   * @since 3.15
   */
  mode: number;

  /**
   * ESCDELAY	number	3.15	Delay in MS after getting an escape character before assuming it is not part of a sequence. For curses and ANSI modes
   * @since 3.15
   */
  mouse: boolean;

  /**
   * Current text attribute
   * @since 3.15
   */
  textattr: number;

  /**
   * True if a keystroke is pending
   * @since 3.15
   */
  kbhit: boolean;

  /**
   * Current x position on the screen
   * @since 3.15
   */
  wherex: number;

  /**
   * Current y position on the screen
   * @since 3.15
   */
  wherey: number;

  /**
   * Current text mode
   * @since 3.15
   */
  textmode: number;

  /**
   * Left column of current window
   * @since 3.15
   */
  winleft: number;

  /**
   * Top row of current window
   * @since 3.15
   */
  wintop: number;

  /**
   * Right column of current window
   * @since 3.15
   */
  winright: number;

  /**
   * Bottom row of current window
   * @since 3.15
   */
  winbottom: number;

  /**
   * Width of the screen
   * @since 3.15
   */
  screenwidth: number;

  /**
   * Height of the screen
   * @since 3.15
   */
  screenheight: number;

  /**
   * Atrribute considered "normal"
   * @since 3.15
   */
  normattr: number;

  /**
   * Background colour
   * @since 3.15
   */
  textbackground: number;

  /**
   * Foreground colour
   * @since 3.15
   */
  textcolor: number;

  /**
   * Text in the clipboard
   * @since 3.15
   */
  clipboard: string;

  /**
   * Current attribute is low intensity
   * @since 3.15
   */
  lowvideo: boolean;

  /**
   * Current attribute is high intensity
   * @since 3.15
   */
  highvideo: boolean;

  // **************************************************************************
  // METHODS
  // **************************************************************************
}
