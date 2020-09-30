/* Would rather use const than var, but end up with redeclaration errors.  

/**
 * Options for system.settings
 */
export enum SYS {
  CLOSED = 1 << 0, // System is closed to New Users
  SYSSTAT = 1 << 1, // Sysops activity included in statistics
  NOSYSINFO = 1 << 2, // Suppress system info display at logon
  PWEDIT = 1 << 3, // Allow users to change their passwords
  RA_EMU = 1 << 4, // Reverse R/A commands at msg read prompt
  ANON_EM = 1 << 5, // Allow anonymous e-mail
  LISTLOC = 1 << 6, // Use location of caller in user lists
  WILDCAT = 1 << 7, // Expand Wildcat color codes in messages
  PCBOARD = 1 << 8, // Expand PCBoard color codes in messages
  WWIV = 1 << 9, // Expand WWIV color codes in messages
  CELERITY = 1 << 10, // Expand Celerity color codes in messages
  RENEGADE = 1 << 11, // Expand Renegade color codes in messages
  ECHO_PW = 1 << 12, // Echo passwords locally
  AUTO_DST = 1 << 14, // Automatic Daylight Savings Toggle (US)
  R_SYSOP = 1 << 15, // Allow remote sysop logon/commands
  QUOTE_EM = 1 << 16, // Allow quoting of e-mail
  EURODATE = 1 << 17, // European date format (DD/MM/YY)
  MILITARY = 1 << 18, // Military time format
  TIMEBANK = 1 << 19, // Allow time bank functions
  FILE_EM = 1 << 20, // Allow file attachments in E-mail
  SHRTPAGE = 1 << 21, // Short sysop page
  TIME_EXP = 1 << 22, // Set to expired values if out-of-time
  FASTMAIL = 1 << 23, // Fast e-mail storage mode
  NONODELIST = 1 << 24, // Suppress active node list during logon
  FWDTONET = 1 << 26, // Allow forwarding of e-mail to netmail
  DELREADM = 1 << 27, // Delete read mail automatically
  NOCDTCVT = 1 << 28, // No credit to minute conversions allowed
  DELEMAIL = 1 << 29, // Physically remove deleted e-mail immed.
  USRVDELM = 1 << 30, // Users can see deleted msgs
  SYSVDELM = 1 << 31, // Sysops can see deleted msgs
}

/**
 * Options for bbs.sys_status
 */
export enum SS {
  UNUSED = 1 << 0, // Unused
  INITIAL = 1 << 1, // The bbs data has been initialized.
  TMPSYSOP = 1 << 2, // Temporary Sysop Status
  USERON = 1 << 3, // A User is logged on to the BBS
  LCHAT = 1 << 4, // Local chat in progress
  CAP = 1 << 5, // Capture is on
  ANSCAP = 1 << 6, // Capture ANSI codes too
  FINPUT = 1 << 7, // Using file for input
  COMISR = 1 << 8, // Com port ISR is installed
  DAILY = 1 << 9, // Execute System Daily Event on logoff
  INUEDIT = 1 << 10, // Inside Alt-Useredit section
  ABORT = 1 << 11, // Global abort input or output flag
  SYSPAGE = 1 << 12, // Paging sysop
  SYSALERT = 1 << 13, // Notify sysop when users hangs up
  GURUCHAT = 1 << 14, // Guru chat in progress
  UNUSED2 = 1 << 15, // not used in v3 (used to be SS_NODEDAB)
  EVENT = 1 << 16, // Time shortened due to upcoming event
  PAUSEON = 1 << 17, // Pause on, overriding user default
  PAUSEOFF = 1 << 18, // Pause off, overriding user default
  IN_CTRLP = 1 << 19, // Inside ctrl-p send node message func
  NEWUSER = 1 << 20, // New User online
  MDMDEBUG = 1 << 21, // Modem debug output
  NEST_PF = 1 << 22, // Nested in printfile function
  DCDHIGH = 1 << 23, // Assume DCD is high always
  SPLITP = 1 << 24, // Split-screen private chat
  NEWDAY = 1 << 25, // Date changed while online
  RLOGIN = 1 << 26, // Current login via BSD RLogin
  FILEXFER = 1 << 27, // File transfer in progress, halt spy
  SSH = 1 << 28, // Current login via Secure Shell (SSH)
  MOFF = 1 << 29, // Disable node/time messages
  QWKLOGON = 1 << 30, // QWK logon
  SS_FASTLOGON = 1 << 31, // Fast logon
}

/**
 * Options for bbs.startup_options
 */
export enum BBS_OPT {
  KEEP_ALIVE = 1 << 0, // Send keep-alives
  XTRN_MINIMIZED = 1 << 1, // Run externals minimized
  AUTO_LOGON = 1 << 2, // Auto-logon via IP
  DEBUG_TELNET = 1 << 3, // Debug telnet commands
  SYSOP_AVAILABLE = 1 << 4, // Available for chat
  ALLOW_RLOGIN = 1 << 5, // Allow logins via BSD RLogin
  USE_2ND_RLOGIN = 1 << 6, // Use 2nd username in BSD RLogin
  NO_QWK_EVENTS = 1 << 7, // Don't run QWK-related events
  NO_HOST_LOOKUP = 1 << 11, // Don't lookup hostname
  NO_JAVASCRIPT = 1 << 29, // JavaScript disabled
  LOCAL_TIMEZONE = 1 << 30, // Don't force UCT/GMT
  MUTE = 1 << 31, // Mute sounds
}

/**
 * Options for bbs.online
 */
export enum BBS_ON {
  LOCAL = 1, // Online locally (events only in v3)
  REMOTE = 2, // Online remotely
}

/********************************************/
/* console.status  
									/********************************************/
export enum CON_STATUS {
  R_ECHO = 1 << 0, // Echo remotely
  R_ECHOX = 1 << 1, // Echo X's to remote user
  R_INPUT = 1 << 2, // Accept input remotely
  L_ECHO = 1 << 3, // Echo locally
  L_ECHOX = 1 << 4, // Echo X's locally
  L_INPUT = 1 << 5, // Accept input locally
  RAW_IN = 1 << 8, // Raw input mode - no editing capabilities
  ECHO_OFF = 1 << 10, // Remote & Local echo disabled for ML/MF
  UPARROW = 1 << 11, // Up arrow hit - move up one line
  DOWNARROW = 1 << 12, // Down arrow hit - from getstr()
  NO_INACT = 1 << 13, // User inactivity detection disabled
  BACKSPACE = 1 << 14, // Backspace key - from getstr(K_LEFTEXIT)
  LEFTARROW = 1 << 15, // Left arrow hit - from getstr(K_LEFTEXIT)
  INSERT = 1 << 16, // Insert mode - for use with getstr()
  DELETELINE = 1 << 17, // Deleted line - from getstr(K_LEFTEXIT)
  NORM_FONT = 1 << 18, // Alt normal font activated
  HIGH_FONT = 1 << 19, // Alt high-intensity font activated
  BLINK_FONT = 1 << 20, // Alt blink font activated
  HBLINK_FONT = 1 << 21, // Alt high-blink font activated
  MOUSE_CLK_PASSTHRU = 1 << 24, // Pass-through unhandled mouse button-click reports
  MOUSE_REL_PASSTHRU = 1 << 25, // Pass-through unhandled mouse button-release reports
  MOUSE_SCROLL = 1 << 26, // Enable mouse scroll-wheel to arrow key translations
  CR_CLREOL = 1 << 31, // Sending '\r', clears to end-of-line first
}

/**
 * Terminal mouse reporting mode (console.mouse_mode)
 */
export enum MOUSE_MODE {
  OFF = 0, // No terminal mouse reporting enabled/expected
  X10 = 1 << 0, // X10 compatible mouse reporting enabled
  NORM = 1 << 1, // Normal tracking mode mouse reporting
  BTN = 1 << 2, // Button-event tracking mode mouse reporting
  ANY = 1 << 3, // Any-event tracking mode mouse reporting
  EXT = 1 << 4, // SGR-encoded extended coordinate mouse reporting
}

/**
 * Bits in 'mode' for getkey and getstr
 */
export enum K {
  NONE = 0, // No special behavior
  UPPER = 1 << 0, // Converts all letters to upper case
  UPRLWR = 1 << 1, // Upper/Lower case automatically
  NUMBER = 1 << 2, // Allow numbers only
  WRAP = 1 << 3, // Allows word wrap
  MSG = 1 << 4, // Allows ANSI, ^N ^A ^G
  SPIN = 1 << 5, // Spinning cursor (same as SPIN)
  LINE = 1 << 6, // Input line (inverse color)
  EDIT = 1 << 7, // Edit string passed
  CHAT = 1 << 8, // In chat multi-chat
  NOCRLF = 1 << 9, // Don't print CRLF after string input
  ALPHA = 1 << 10, // Only allow alphabetic characters
  GETSTR = 1 << 11, // getkey called from getstr()
  LOWPRIO = 1 << 12, // low priority input
  NOEXASC = 1 << 13, // No extended ASCII allowed
  E71DETECT = 1 << 14, // Detect E-7-1 terminal type
  AUTODEL = 1 << 15, // Auto-delete text (used with K_EDIT)
  COLD = 1 << 16, // Possible cold key mode
  NOECHO = 1 << 17, // Don't echo input
  TAB = 1 << 18, // Treat TAB key as CR
  LEFTEXIT = 1 << 19, // Allow exit from getstr() with backspace
  USEOFFSET = 1 << 20, // Use console.getstr_offset with getstr()
  NOSPIN = 1 << 21, // Do not honor user's spinning cursor
  ANSI_CPR = 1 << 22, // ANSI Cursor Position Report expected
  TRIM = 1 << 23, // Trim white-space from both ends of str
}

/**
 * Bits in 'mode' for putmsg and printfile
 */
export enum P {
  NONE = 0, // No special behavior
  NOABORT = 1 << 0, // Disallows abortion of a message
  SAVEATR = 1 << 1, // Save the new current attributres after msg has printed
  NOATCODES = 1 << 2, // Don't allow @ codes
  OPENCLOSE = 1 << 3, // Open and close the file
  NOPAUSE = 1 << 4, // Disable screen pause
  HTML = 1 << 5, // Message is HTML
  NOCRLF = 1 << 6, // Don't prepend a CRLF  in printfile()
  WORDWRAP = 1 << 7, // Word-wrap long lines for user's terminal
  CPM_EOF = 1 << 8, // Treat Ctrl-Z as End-of-file
  TRUNCATE = 1 << 9, // Truncate (don't display) long lines
  NOERROR = 1 << 10, // Don't report error if file doesn't exist
  PETSCII = 1 << 11, // Message is native PETSCII
  WRAP = 1 << 12, // Wrap/split long-lines, ungracefully
  UTF8 = 1 << 13, // Message is UTF-8 encoded
  AUTO_UTF8 = 1 << 14, // Message may be UTF-8, auto-detect
  NOXATTRS = 1 << 15, // No "Extra Attribute Codes" supported
}

/**
 * Bits for system.new_user_questions
 */
export enum UQ {
  ALIASES = 1 << 0, // Ask for alias
  LOCATION = 1 << 1, // Ask for location
  ADDRESS = 1 << 2, // Ask for address
  PHONE = 1 << 3, // Ask for phone number
  HANDLE = 1 << 4, // Ask for chat handle
  DUPHAND = 1 << 5, // Search for duplicate handles
  SEX = 1 << 6, // Ask for sex
  BIRTH = 1 << 7, // Ask for birth date
  REALNAME = 1 << 10, // Ask for real name
  DUPREAL = 1 << 11, // Search for duplicate real names
  COMPANY = 1 << 12, // Ask for company name
  NOEXASC = 1 << 13, // Don't allow ex-ASCII in user text
  CMDSHELL = 1 << 14, // Ask for command shell
  XEDIT = 1 << 15, // Ask for external editor
  NODEF = 1 << 16, // Don't ask for default settings
  NOCOMMAS = 1 << 17, // Do not require commas in location
  NONETMAIL = 1 << 18, // Don't ask for e-mail/netmail address
  NOUPRLWR = 1 << 19, // Don't force upper/lower case strings
  COLORTERM = 1 << 20, // Ask if new user has color terminal
}

/**
 * Bits for bbs.node_settings
 */
export enum NM {
  ANSALARM = 1 << 0, // Alarm locally on answer
  WFCSCRN = 1 << 1, // Wait for call screen
  WFCMSGS = 1 << 2, // Include total messages/files on WFC
  LCL_EDIT = 1 << 3, // Use local editor to create messages
  EMSOVL = 1 << 4, // Use expanded memory of overlays
  WINOS2 = 1 << 5, // Use Windows/OS2 time slice API call
  INT28 = 1 << 6, // Make int 28 DOS idle calls
  NODV = 1 << 7, // Don't detect and use DESQview API
  NO_NUM = 1 << 8, // Don't allow logons by user number
  LOGON_R = 1 << 9, // Allow logons by user real name
  LOGON_P = 1 << 10, // Secure logons (always ask for password)
  NO_LKBRD = 1 << 11, // No local keyboard (at all)
  SYSPW = 1 << 12, // Protect WFC keys and Alt keys with SY:
  NO_INACT = 1 << 13, // No local inactivity alert/logoff
  NOBEEP = 1 << 14, // Don't beep locally
  LOWPRIO = 1 << 15, // Always use low priority input
  "7BITONLY" = 1 << 16, // Except 7-bit input only (E71 terminals)
  RESETVID = 1 << 17, // Reset video mode between callers?
  NOPAUSESPIN = 1 << 18, // No spinning cursor at pause prompt
}

/**
 * Bits for msg_area.[fido|inet]_netmail_settings
 */
export enum NMAIL {
  ALLOW = 1 << 0, // Allow users to send NetMail
  CRASH = 1 << 1, // Default Fido netmail to crash
  HOLD = 1 << 2, // Default Fido netmail to hold
  KILL = 1 << 3, // Default Fido netmail to kill after sent
  ALIAS = 1 << 4, // Use Aliases when sending NetMail
  FILE = 1 << 5, // Allow file attachments in sent NetMail
  DIRECT = 1 << 6, // Default Fido netmail to direct
}

/*
 * Bits for sub[x].settings
 */
export enum SUB {
  NOVOTING = 1 << 0, // No voting allowed in this sub-board
  TEMPLATE = 1 << 1, // Use this sub as template for new subs
  MSGTAGS = 1 << 2, // Allow messages to be tagged
  QNET = 1 << 3, // Sub-board is netted via QWK network
  PNET = 1 << 4, // Sub-board is netted via PostLink
  FIDO = 1 << 5, // Sub-board is netted via FidoNet
  PRIV = 1 << 6, // Allow private posts on sub
  PONLY = 1 << 7, // Private posts only
  ANON = 1 << 8, // Allow anonymous posts on sub
  AONLY = 1 << 9, // Anonymous only
  NAME = 1 << 10, // Must use real names
  DEL = 1 << 11, // Allow users to delete messages
  DELLAST = 1 << 12, // Allow users to delete last msg only
  FORCED = 1 << 13, // Sub-board is forced scanning
  NOTAG = 1 << 14, // Don't add tag or origin lines
  TOUSER = 1 << 15, // Prompt for to user on posts
  ASCII = 1 << 16, // ASCII characters only
  QUOTE = 1 << 17, // Allow online quoting
  NSDEF = 1 << 18, // New-Scan on by default
  INET = 1 << 19, // Sub-board is netted via Internet
  FAST = 1 << 20, // Fast storage mode
  KILL = 1 << 21, // Kill read messages automatically
  KILLP = 1 << 22, // Kill read pvt messages automatically
  SYSPERM = 1 << 23, // Sysop messages are permanent
  GATE = 1 << 24, // Gateway between Network types
  LZH = 1 << 25, // Use LZH compression for msgs
  SSDEF = 1 << 26, // Default ON for Scan for Your msgs
  HYPER = 1 << 27, // Hyper allocation
  EDIT = 1 << 28, // Users can edit msg text after posting
  EDITLAST = 1 << 29, // Users can edit last message only
  NOUSERSIG = 1 << 30, // Suppress user signatures
}

/**
 * Bit values for dir[x].settings
 */
export enum DIR {
  FCHK = 1 << 0, // Check for file existence
  RATE = 1 << 1, // Force uploads to be rated G,R, or X
  MULT = 1 << 2, // Ask for multi-disk numbering
  DUPES = 1 << 3, // Search this dir for upload dupes
  FREE = 1 << 4, // Free downloads
  TFREE = 1 << 5, // Time to download is free
  CDTUL = 1 << 6, // Credit Uploads
  CDTDL = 1 << 7, // Credit Downloads
  ANON = 1 << 8, // Anonymous uploads
  AONLY = 1 << 9, // Anonymous only
  ULDATE = 1 << 10, // Include upload date in listing
  DIZ = 1 << 11, // FILE_ID.DIZ and DESC.SDI support
  NOSCAN = 1 << 12, // Don't new-scan this directory
  NOAUTO = 1 << 13, // Don't auto-add this directory
  ULTIME = 1 << 14, // Deduct time during uploads
  CDTMIN = 1 << 15, // Give uploader minutes instead of cdt
  SINCEDL = 1 << 16, // Purge based on days since last dl
  MOVENEW = 1 << 17, // Files marked as new when moved
}

/**
 * Bits in xtrn[x] and xedit[x].settings
 */
export enum XTRN {
  MULTIUSER = 1 << 0, // allow multi simultaneous users
  ANSI = 1 << 1, // user must have ANSI, same as ^^^
  IO_INTS = 1 << 2, // Intercept I/O interrupts
  MODUSERDAT = 1 << 3, // Program can modify user data
  WWIVCOLOR = 1 << 4, // Program uses WWIV color codes
  EVENTONLY = 1 << 5, // Program executes as event only
  STARTUPDIR = 1 << 6, // Create drop file in start-up dir
  REALNAME = 1 << 7, // Use real name in drop file
  SWAP = 1 << 8, // Swap for this door
  FREETIME = 1 << 9, // Free time while in this door
  QUICKBBS = 1 << 10, // QuickBBS style editor
  EXPANDLF = 1 << 11, // Expand LF to CRLF editor
  QUOTEALL = 1 << 12, // Automatically quote all of msg
  QUOTENONE = 1 << 13, // Automatically quote none of msg
  NATIVE = 1 << 14, // Native application (EX_NATIVE)
  STRIPKLUDGE = 1 << 15, // Strip FTN Kludge lines from msg
  CHKTIME = 1 << 16, // Check time online (EX_CHKTIME)
  LWRCASE = 1 << 17, // Use lowercase drop-file names
  SH = 1 << 18, // Use command shell to execute
  PAUSE = 1 << 19, // Force a screen pause on exit
  NOECHO = 1 << 20, // Don't echo stdin to stdout
}

/**
 * Xtrn Drop file representations
 */
export enum XTRN_DROP {
  NONE = 0, // No data file needed
  SBBS = 1, // Synchronet external
  WWIV = 2, // WWIV external
  GAP = 3, // Gap door
  RBBS = 4, // RBBS, QBBS, or Remote Access
  WILDCAT = 5, // Wildcat
  PCBOARD = 6, // PCBoard
  SPITFIRE = 7, // SpitFire
  UTI = 8, // UTI Doors - MegaMail
  SR = 9, // Solar Realms
  RBBS1 = 10, // DORINFO1.DEF always
  TRIBBS = 11, // TRIBBS.SYS
  DOOR32 = 12, // DOOR32.SYS
}

/**
 * Bit values for file.settings
 */
export enum FILE {
  EXTDESC = 1 << 0, // Extended description exists
  ANON = 1 << 1, // Anonymous upload
}

/**
 * Bits in the mode of bbs.exec()
 */
export enum EX {
  EX_NONE = 0, // No special behavior
  EX_SH = 1 << 0, // Use system shell to load other process
  EX_STDOUT = 1 << 1, // Copy DOS output to remote
  EX_STDIN = 1 << 3, // Trap int 16h keyboard input requests
  EX_WWIV = 1 << 4, // Expand WWIV color codes to ANSI sequence
  EX_POPEN = 1 << 7, // Leave COM port open
  EX_OFFLINE = 1 << 8, // Run this program offline
  EX_BG = 1 << 10, // Back-ground/detached process
  EX_BIN = 1 << 11, // Binary mode (no Unix LF to CR/LF)
  EX_NATIVE = 1 << 14, // Native 32-bit application (XTRN_NATIVE)
  EX_CHKTIME = 1 << 16, // Check time left (XTRN_CHKTIME)
  EX_NOLOG = 1 << 30, // Don't log intercepted stdio

  // Composite STDIN | STDOUT
  EX_STDIO = (1 << 3) | (1 << 1), // (EX_STDIN|EX_STDOUT)

  // For backwards compatibility:
  EX_OUTR = 1 << 1, // EX_STDOUT
  EX_INR = 1 << 3, // EX_STDIN
}

/**
 * Values for bbs.user_event()
 */
export enum USER_EVENT {
  LOGON = 1, // Execute during logon sequence
  LOGOFF = 2, // Execute during logoff sequence
  NEWUSER = 3, // Execute during newuser app.
  BIRTHDAY = 4, // Execute on birthday
  POST = 5, // Execute after message posted
  UPLOAD = 6, // Execute after file uploaded
  DOWNLOAD = 7, // Execute after file downloaded
}

/**
 * Bits for xtrn_area.event[].settings
 */
export enum XTRN_AREA_EVENT {
  EXCL = 1 << 0, // Exclusive execution required
  FORCE = 1 << 1, // Force users off-line for event
  INIT = 1 << 2, // Always run event after BBS init/re-init
  DISABLED = 1 << 3, // Disabled
}

/**
 * Bits in mode of bbs.telnet_gate()
 */
export enum TG {
  NONE = 0, // No special behavior
  ECHO = 1 << 0, // Turn on telnet echo
  CRLF = 1 << 1, // Expand sole CR to CRLF
  LINEMODE = 1 << 2, // Send entire lines only
  NODESYNC = 1 << 3, // Call Nodesync, get msgs, etc.
  CTRLKEYS = 1 << 4, // Interpret ^P ^U ^T, etc locally
  PASSTHRU = 1 << 5, // Pass-through telnet commands/responses
  RLOGIN = 1 << 6, // Use BSD RLogin protocol
  NOCHKTIME = 1 << 7, // Don't check time left online
  NOTERMTYPE = 1 << 8, // Request client "DONT TERM_TYPE"
  SENDPASS = 1 << 9, // DEPRECATED
  NOLF = 1 << 10, // Do not send line-feeds
  RLOGINSWAP = 1 << 11, // Swap the RLogin alias/real-names
}

/**
 * Bits in console.telnet_mode
 */
export enum TELNET_MODE {
  GATE = 1 << 2, // Pass-through telnet commands/responses
  OFF = 1 << 3, // Not a telnet connection
}

/**
 * Telnet standard commands and options for use with console.telnet_cmd()
 */
export enum TELNET {
  DONT = 254, // 0xfe - Don't do option
  DO = 253, // 0xfd - Do option
  WONT = 252, // 0xfc - Won't do option
  WILL = 251, // 0xfb - Will do option
  BINARY_TX = 0, // option: binary transmission
}

/**
 * Bits in mode of bbs.scan_subs(), bbs.scan_msgs() and bbs.list_msgs()
 */
export enum SCAN {
  READ = 0, // Just normal read prompt (all messages)
  CONST = 1, // 1 << 0, // Continuous message scanning
  NEW = 2, // 1 << 1, // Display messages newer than pointer
  BACK = 4, // 1 << 2, // Display most recent message if none new
  TOYOU = 8, // 1 << 3, // Display messages to you only
  FIND = 16, // 1 << 4, // Find text in messages
  UNREAD = 32, // 1 << 5, // Display un-read messages to you only
  MSGSONLY = 64, // 1 << 6, // Do not do a new file scan even if the
  POLLS = 128, // 1 << 7, // Scan for polls only (no messages)
}

/**
 * Bit values for msg_area.settings
 */
export enum MM {
  REALNAME = 1 << 16, // Allow receipt of e-mail using real names
  EMAILSIG = 1 << 17, // Include user signatures in e-mail msgs
}

/**
 * Bits in msg_area.sub[].scan_cfg
 */
export enum SCAN_CFG {
  NEW = 5, // Auto-scan for new messages
  TOYOU = 1 << 1, // Auto-scan for unread messages to you
  YONLY = 1 << 8, // Auto-scan for new messages to you only
}

/**
 * Bits in mode for bbs.scan_dirs(), bbs.list_files() and bbs.list_file_info()
 */
export enum FL {
  NONE = 0, // No special behavior
  ULTIME = 1 << 0, // List files by upload time
  DLTIME = 1 << 1, // List files by download time
  NO_HDR = 1 << 2, // Don't list directory header
  FINDDESC = 1 << 3, // Find text in description
  EXFIND = 1 << 4, // Find text in description - extended info
  VIEW = 1 << 5, // View ZIP/ARC/GIF etc. info
}

/**
 * Values of mode for bbs.list_users()
 */
export enum UL {
  ALL = 0, // List all active users in user database
  SUB = 1, // List all users with access to cursub
  DIR = 2, // List all users with access to curdir
}

/**
 * Values of mode in bbs.list_file_info()
 */
export enum FI {
  INFO = 0, // Just list file information
  REMOVE = 1, // Remove/Move/Edit file information
  DOWNLOAD = 2, // Download files
  OLD = 3, // Search/Remove files not downloaded since
  OLDUL = 4, // Search/Remove files uploaded before
  OFFLINE = 5, // Search/Remove files not online
  USERXFER = 6, // User Xfer Download
  CLOSE = 7, // Close any open records
}

/**
 * Log "levels" supported by log() function
 *
 * Should already be defined as LOG_* globals
 */
export enum LOG {
  EMERG = 0, // system is unusable
  ALERT = 1, // action must be taken immediately
  CRIT = 2, // critical conditions
  ERR = 3, // error conditions
  WARNING = 4, // warning conditions
  NOTICE = 5, // normal but significant condition
  INFO = 6, // informational
  DEBUG = 7, // debug-level messages
}

/**
 * "flags" bits for directory()
 */
export enum GLOB {
  MARK = 1 << 1, // Append a slash to each name.
  NOSORT = 1 << 2, // Don't sort the names.
  APPEND = 1 << 5, // Append to results of a previous call.
  NOESCAPE = 1 << 6, // Backslashes don't quote metacharacters.
  PERIOD = 1 << 7, // Leading `.' can be matched by metachars.
  ONLYDIR = 1 << 13, // Match only directories.
}

/**
 * Bits in the lm_mode of bbs.read_mail()
 */
export enum LM {
  DEFAULT = 0, // default / unset
  UNREAD = 1 << 0, // Include un-read mail only
  INCDEL = 1 << 1, // Include deleted mail
  NOSPAM = 1 << 2, // Exclude SPAM
  SPAMONLY = 1 << 3, // Load SPAM only
  REVERSE = 1 << 4, // Reverse the index order (newest-first)
}

/**
 * Values for which in bbs.read_mail()
 */
export enum MAIL {
  YOUR = 0, // mail sent to you
  SENT = 1, // mail you have sent
  ANY = 2, // mail sent to or from you
  ALL = 3, // all mail (ignores usernumber arg)
}

/**
 * 'mode' bits for bbs.email()/netmail()
 */
export enum WM {
  NONE = 0, // No special behavior
  EXTDESC = 1 << 0, // Writing extended file description
  EMAIL = 1 << 1, // Writing e-mail
  NETMAIL = 1 << 2, // Writing NetMail
  ANON = 1 << 3, // Writing anonymous message
  FILE = 1 << 4, // Attaching a file to the message
  NOTOP = 1 << 5, // Don't add top because we need top line
  QUOTE = 1 << 6, // Quote file available
  QWKNET = 1 << 7, // Writing QWK NetMail (25 char title)
  PRIVATE = 1 << 8, // Private (for creating MSGINF file)
  SUBJ_RO = 1 << 9, // Subject/title is read-only
  EDIT = 1 << 10, // Editing existing message
  FORCEFWD = 1 << 11, // Force "yes" to ForwardMailQ for email
  NOFWD = 1 << 12, // Don't forward email to netmail
}
