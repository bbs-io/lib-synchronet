/**
 * Bit options for User.settings
 */
export enum TERM {
  DELETED = 1 << 0, // Deleted user slot
  ANSI = 1 << 1, // Supports ANSI terminal emulation
  COLOR = 1 << 2, // Send color codes
  RIP = 1 << 3, // Supports RIP terminal emulation
  PAUSE = 1 << 4, // Pause on every screen full
  SPIN = 1 << 5, // Spinning cursor - Same as K_SPIN
  INACTIVE = 1 << 6, // Inactive user slot
  EXPERT = 1 << 7, // Expert menu mode
  ANFSCAN = 1 << 8, // Auto New file scan
  CLRSCRN = 1 << 9, // Clear screen before each message
  QUIET = 1 << 10, // Quiet mode upon logon
  BATCHFLAG = 1 << 11, // File list allow batch dl flags
  NETMAIL = 1 << 12, // Forward e-mail to fidonet addr
  CURSUB = 1 << 13, // Remember current sub-board/dir
  ASK_NSCAN = 1 << 14, // Ask for newscanning upon logon
  NO_EXASCII = 1 << 15, // Don't send extended ASCII
  ASK_SSCAN = 1 << 16, // Ask for messages to you at logon
  AUTOTERM = 1 << 17, // Autodetect terminal type
  COLDKEYS = 1 << 18, // No hot-keys
  EXTDESC = 1 << 19, // Extended file descriptions
  AUTOHANG = 1 << 20, // Auto-hang-up after transfer
  WIP = 1 << 21, // Supports WIP terminal emulation
  AUTOLOGON = 1 << 22, // AutoLogon via IP
  HTML = 1 << 23, // Using Deuce's HTML terminal (*cough*)
  NOPAUSESPIN = 1 << 24, // No spinning cursor at pause prompt
  PETSCII = 1 << 26, // Commodore PET (e.g. C64) terminal
  SWAP_DELETE = 1 << 27, // Swap the DEL and backspace keys
  ICE_COLOR = 1 << 28, // Bright background color support
  UTF8 = 1 << 29, // UTF-8 terminal
  MOUSE = 1 << 31, // Terminal supports mouse reporting
}

/**
 * Bit options for User.qwk_settings
 */
export enum QWK {
  FILES = 1 << 0, // Include new files list
  EMAIL = 1 << 1, // Include unread e-mail
  ALLMAIL = 1 << 2, // Include ALL e-mail
  DELMAIL = 1 << 3, // Delete e-mail after download
  BYSELF = 1 << 4, // Include messages from self
  UNUSED = 1 << 5, // Currently unused
  EXPCTLA = 1 << 6, // Expand ctrl-a codes to ascii
  RETCTLA = 1 << 7, // Retain ctrl-a codes
  ATTACH = 1 << 8, // Include file attachments
  NOINDEX = 1 << 9, // Do not create index files in QWK
  TZ = 1 << 10, // Include @TZ (time zone) in msgs
  VIA = 1 << 11, // Include @VIA (path) in msgs
  NOCTRL = 1 << 12, // No extraneous control files
  EXT = 1 << 13, // QWK Extended (QWKE) format
  MSGID = 1 << 14, // Include @MSGID and @REPLY in msgs
  HEADERS = 1 << 16, // Include HEADERS.DAT file
  VOTING = 1 << 17, // Include VOTING.DAT
}

/**
 * Bits for User.chat_settings
 */
export enum CHAT {
  ECHO = 1 << 0, // Multinode chat echo
  ACTION = 1 << 1, // Chat actions
  NOPAGE = 1 << 2, // Can't be paged
  NOACT = 1 << 3, // No activity alerts
  SPLITP = 1 << 4, // Split screen private chat
}

/**
 * Flags for user.security.exempt/restrict/flags
 */
export enum UFLAG {
  A = 1 << 0,
  B = 1 << 1,
  C = 1 << 2,
  D = 1 << 3,
  E = 1 << 4,
  F = 1 << 5,
  G = 1 << 6,
  H = 1 << 7,
  I = 1 << 8,
  J = 1 << 9,
  K = 1 << 10,
  L = 1 << 11,
  M = 1 << 12,
  N = 1 << 13,
  O = 1 << 14,
  P = 1 << 15,
  Q = 1 << 16,
  R = 1 << 17,
  S = 1 << 18,
  T = 1 << 19,
  U = 1 << 20,
  V = 1 << 21,
  W = 1 << 22,
  X = 1 << 23,
  Y = 1 << 24,
  Z = 1 << 25,
}
