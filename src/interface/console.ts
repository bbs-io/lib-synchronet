import * as SBBS from "../defs/sbbs";
import * as USER from "../defs/user";

/**
 * Controls the remote terminal
 *
 * @since v3.10
 */
export interface IConsole {
  // **************************************************************************
  // PROPERTIES
  // **************************************************************************

  /**
   * status bit-field
   * @since 3.10
   */
  status: SBBS.CON_STATUS;

  /**
   * mouse mode bit-field
   * @since 3.18
   */
  mouse_mode: SBBS.MOUSE_MODE;

  /**
   * current 0-based line counter (used for automatic screen pause)
   * @since 3.10
   */
  line_counter: number;

  /**
   * current 0-based row counter
   * @since 3.18
   */
  current_row: number;

  /**
   * current 0-based column counter (used to auto-increment line_counter when screen wraps)
   * @since 3.15
   */
  current_column: number;

  /**
   * length of last line sent to terminal (before a carriage-return or line-wrap)
   * @since 3.17
   */
  last_line_length: number;

  /**
   * current display attributes (set with number or string value)
   * @since 3.10
   */
  attributes: number;

  /**
   * set to true if the terminal cursor is already at the top of the screen
   * @since 3.10
   */
  readonly top_of_screen: number;

  /**
   * number of remote terminal screen rows (in lines)
   * @since 3.10
   */
  screen_rows: number;

  /**
   * number of remote terminal screen columns (in character cells)
   * @since 3.11
   */
  screen_columns: number;

  /**
   * current tab stop interval (tab size), in columns
   * @since 3.17
   */
  tabstop: number;

  /**
   * bit-field of automatically detected terminal settings
   * @since 3.10
   */
  autoterm: USER.TERM;

  /**
   * terminal type description, possibly supplied by client (e.g. 'ANSI')
   * @since 3.11
   */
  terminal: string;

  /**
   * terminal type (i.e. 'ANSI', 'RIP', 'PETSCII', or 'DUMB')
   * @since 3.17c
   */
  type: string;

  /**
   * terminal character set (i.e. 'UTF-8', 'CP437', 'CBM-ASCII', or 'US-ASCII')
   * @since 3.17c
   */
  charset: string;

  /**
   * detected CTerm (SyncTERM) version as an integer > 1000 where major version is cterm_version / 1000 and minor version is cterm_version % 1000
   * @since 3.17
   */
  cterm_version: number;

  /**
   * number of seconds before displaying warning (Are you really there?) due to user/keyboard inactivity
   * @since 3.14b
   */
  inactivity_warning: number;

  /**
   * number of seconds before disconnection due to user/keyboard inactivity
   * @since 3.14b
   */
  inactivity_hangup: number;

  /**
   * user/keyboard inactivity timeout reference value (time_t format)
   * @since 3.10
   */
  timeout: number;

  /**
   * number of low time-left (5 or fewer minutes remaining) warnings displayed to user
   * @since 3.10
   */
  timeleft_warning: number;

  /**
   * input/output has been aborted
   * @since 3.10
   */
  aborted: boolean;

  /**
   * remote output can be asynchronously aborted with Ctrl-C
   * @since 3.10
   */
  abortable: boolean;

  /**
   * current Telnet mode bit-field
   * @since 3.10
   */
  telnet_mode: SBBS.TELNET_MODE;

  /**
   * word-wrap buffer (used by getstr)
   * @since 3.10
   */
  readonly wordwrap: string;

  /**
   * current yes/no question (set by yesno and noyes)
   * @since 3.10
   */
  question: string;

  /**
   * cursor position offset for use with getstr(K_USEOFFSET)
   * @since 3.11
   */
  getstr_offset: number;

  /**
   * control key pass-through bit-mask, set bits represent control key combinations not handled by inkey() method This may optionally be specified as a string of characters. The format of this string is [+-][@-_]. If neither plus nor minus is the first character, the value will be replaced by one constructed from the string. A + indicates that characters following will be added to the set, and a - indicates they should be removed. ex: console.ctrlkey_passthru="-UP+AB" will clear CTRL-U and CTRL-P and set CTRL-A and CTRL-B.
   * @since 3.10
   */
  ctrlkey_passthru: number;

  /**
   * number of bytes currently in the input buffer (from the remote client)
   * @since 3.12
   */
  readonly input_buffer_level: number;

  /**
   * number of bytes available in the input buffer
   * @since 3.12
   */
  readonly input_buffer_space: number;

  /**
   * number of bytes currently in the output buffer (from the local server)
   * @since 3.12
   */
  readonly output_buffer_level: number;

  /**
   * number of bytes available in the output buffer
   * @since 3.12
   */
  readonly output_buffer_space: number;

  /**
   * emulated serial data output rate, in bits-per-second (0 = unlimited)
   * @since 3.17c
   */
  output_rate: number;

  /**
   * number of characters current in the keyboard input buffer (from ungetstr)
   * @since 3.18
   */
  readonly keyboard_buffer_level: number;

  /**
   * number of characters spaces available in the keyboard input buffer
   * @since 3.18
   */
  readonly keyboard_buffer_space: number;

  // **************************************************************************
  // METHODS
  // **************************************************************************
}
