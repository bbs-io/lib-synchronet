import * as SBBS from "../defs/sbbs";
import * as NODE from "../defs/node";

/**
 * Controls the Telnet/SSH/RLogin BBS experience
 *
 * @since v3.10
 */
export interface IBbs {
  /**
   * Global repository for 3rd party modifications
   * @since v3.12
   */
  mods: any;

  // **************************************************************************
  // PROPERTIES
  // **************************************************************************

  /**
   * system status bitfield
   * @since 3.10
   */
  sys_status: SBBS.SS;

  /**
   * startup options bitfield
   * @since 3.10
   */
  startup_options: SBBS.BBS_OPT;

  /**
   * answer time, in time_t format
   * @since 3.10
   */
  answer_time: number;

  /**
   * logon time, in time_t format
   * @since 3.10
   */
  logon_time: number;

  /**
   * time from which user's time left is calculated, in time_t format
   * @since 3.14
   */
  start_time: number;

  /**
   * current file new-scan time, in time_t format
   * @since 3.10
   */
  new_file_time: number;

  /**
   * previous file new-scan time, in time_t format
   * @since 3.10
   */
  last_new_file_time: number;

  /**
   * online
   * @since 3.10
   */
  online: SBBS.BBS_ON;

  /**
   * time left (in seconds)
   * @since 3.11
   */
  time_left: number;

  /**
   * time of next exclusive event (in time_t format), or 0 if none
   * @since 3.11
   */
  event_time: number;

  /**
   * internal code of next exclusive event
   * @since 3.11
   */
  event_code: string;

  /**
   * current node number
   * @since 3.10
   */
  node_num: number;

  /**
   * current node settings bitfield
   * @since 3.10
   */
  node_settings: SBBS.NM;

  /**
   * current node status value
   * @since 3.17
   */
  node_status: NODE.NODE_STATUS;

  /**
   * current node error counter
   * @since 3.17
   */
  node_errors: number;

  /**
   * current node action
   * @since 3.10
   */
  node_action: NODE.NODE_ACTION;

  /**
   * current node user number (useron value)
   * @since 3.17
   */
  node_useron: number;

  /**
   * current node connection type
   * @since 3.17
   */
  node_connection: NODE.NODE_CONNECTION;

  /**
   * current node misc value
   * @since 3.17
   */
  node_misc: NODE.NODE_MISC;

  /**
   * current node aux value
   * @since 3.17
   */
  node_aux: number;

  /**
   * current node extended aux (extaux) value
   * @since 3.17
   */
  node_extaux: number;

  /**
   * validation feedback user for this node (or 0 for no validation feedback required)
   * @since 3.10
   */
  node_val_user: number;

  /**
   * bytes uploaded during this session
   * @since 3.10
   */
  logon_ulb: number;

  /**
   * bytes downloaded during this session
   * @since 3.10
   */
  logon_dlb: number;

  /**
   * files uploaded during this session
   * @since 3.10
   */
  logon_uls: number;

  /**
   * files downloaded during this session
   * @since 3.10
   */
  logon_dls: number;

  /**
   * messages posted during this session
   * @since 3.10
   */
  logon_posts: number;

  /**
   * e-mails sent during this session
   * @since 3.10
   */
  logon_emails: number;

  /**
   * feedback messages sent during this session
   * @since 3.10
   */
  logon_fbacks: number;

  /**
   * messages read during this session
   * @since 3.10
   */
  posts_read: number;

  /**
   * menu subdirectory (overrides default)
   * @since 3.10
   */
  menu_dir: string;

  /**
   * menu file (overrides default)
   * @since 3.10
   */
  menu_file: string;

  /**
   * total main menu commands received from user during this session
   * @since 3.10
   */
  main_cmds: number;

  /**
   * total file menu commands received from user during this session
   * @since 3.10
   */
  file_cmds: number;

  /**
   * current message group
   * @since 3.10
   */
  curgrp: number;

  /**
   * current message sub-board
   * @since 3.10
   */
  cursub: number;

  /**
   * current message sub-board internal code
   * @since 3.14
   */
  cursub_code: string;

  /**
   * current file library
   * @since 3.10
   */
  curlib: number;

  /**
   * current file directory
   * @since 3.10
   */
  curdir: number;

  /**
   * current file directory internal code
   * @since 3.14
   */
  curdir_code: string;

  /**
   * remote connection type
   * @since 3.10
   */
  connection: string;

  /**
   * login name given during RLogin negotiation
   * @since 3.10
   */
  rlogin_name: string;

  /**
   * password specified during RLogin negotiation
   * @since 3.15
   */
  rlogin_password: string;

  /**
   * terminal specified during RLogin negotiation
   * @since 3.16
   */
  rlogin_terminal: string;

  /**
   * client name
   * @since 3.10
   */
  client_name: string;

  /**
   * current alternate upload path number
   * @since 3.10
   */
  alt_ul_dir: number;

  /**
   * error level returned from last executed external program
   * @since 3.12
   */
  errorlevel: number;

  /**
   * message group name of message being read
   * @since 3.10
   */
  smb_group: string;

  /**
   * message group description of message being read
   * @since 3.10
   */
  smb_group_desc: string;

  /**
   * message group number of message being read
   * @since 3.10
   */
  smb_group_number: number;

  /**
   * sub-board name of message being read
   * @since 3.10
   */
  smb_sub: string;

  /**
   * sub-board description of message being read
   * @since 3.10
   */
  smb_sub_desc: string;

  /**
   * sub-board internal code of message being read
   * @since 3.10
   */
  smb_sub_code: string;

  /**
   * sub-board number of message being read
   * @since 3.10
   */
  smb_sub_number: number;

  /**
   * message base attributes
   * @since 3.10
   */
  smb_attr: number;

  /**
   * highest message number in message base
   * @since 3.10
   */
  smb_last_msg: number;

  /**
   * total number of messages in message base
   * @since 3.10
   */
  smb_total_msgs: number;

  /**
   * number of messages loaded from message base
   * @since 3.10
   */
  smb_msgs: number;

  /**
   * current message number in message base
   * @since 3.10
   */
  smb_curmsg: number;

  /**
   * message recipient name
   * @since 3.10
   */
  msg_to: string;

  /**
   * message recipient extension
   * @since 3.10
   */
  msg_to_ext: string;

  /**
   * message recipient network address
   * @since 3.10
   */
  msg_to_net: string;

  /**
   * message recipient agent type
   * @since 3.10
   */
  msg_to_agent: number;

  /**
   * message sender name
   * @since 3.10
   */
  msg_from: string;

  /**
   * message sender extension
   * @since 3.10
   */
  msg_from_ext: string;

  /**
   * message sender network address
   * @since 3.10
   */
  msg_from_net: string;

  /**
   * message sender agent type
   * @since 3.10
   */
  msg_from_agent: number;

  /**
   * message reply-to name
   * @since 3.10
   */
  msg_replyto: string;

  /**
   * message reply-to extension
   * @since 3.10
   */
  msg_replyto_ext: string;

  /**
   * message reply-to network address
   * @since 3.10
   */
  msg_replyto_net: string;

  /**
   * message reply-to agent type
   * @since 3.10
   */
  msg_replyto_agent: number;

  /**
   * message subject
   * @since 3.10
   */
  msg_subject: string;

  /**
   * message date/time
   * @since 3.10
   */
  msg_date: number;

  /**
   * message time zone
   * @since 3.10
   */
  msg_timezone: number;

  /**
   * message date/time imported
   * @since 3.10
   */
  msg_date_imported: number;

  /**
   * message attributes
   * @since 3.10
   */
  msg_attr: number;

  /**
   * message auxiliary attributes
   * @since 3.10
   */
  msg_auxattr: number;

  /**
   * message network attributes
   * @since 3.10
   */
  msg_netattr: number;

  /**
   * message header offset
   * @since 3.10
   */
  msg_offset: number;

  /**
   * message number (unique, monotonically incrementing)
   * @since 3.10
   */
  msg_number: number;

  /**
   * message expiration
   * @since 3.10
   */
  msg_expiration: number;

  /**
   * message forwarded
   * @since 3.10
   */
  msg_forwarded: number;

  /**
   * message thread identifier (0 if unknown)
   * @since 3.16
   */
  msg_thread_id: number;

  /**
   * message thread, back message number
   * @since 3.12
   */
  msg_thread_back: number;

  /**
   * message thread, next message number
   * @since 3.10
   */
  msg_thread_next: number;

  /**
   * message thread, message number of first reply to this message
   * @since 3.10
   */
  msg_thread_first: number;

  /**
   * message identifier
   * @since 3.10
   */
  msg_id: string;

  /**
   * message replied-to identifier
   * @since 3.10
   */
  msg_reply_id: string;

  /**
   * message delivery attempt counter
   * @since 3.10
   */
  msg_delivery_attempts: number;

  /**
   * message header displayed at top-of-screen
   * @since 3.17c
   */
  msghdr_top_of_screen: number;

  /**
   * file name
   * @since 3.17
   */
  file_name: string;

  /**
   * file description
   * @since 3.17
   */
  file_description: string;

  /**
   * file directory (number)
   * @since 3.17
   */
  file_dir_number: string;

  /**
   * file attribute flags
   * @since 3.17
   */
  file_attr: string;

  /**
   * file date
   * @since 3.17
   */
  file_date: string;

  /**
   * file size (in bytes)
   * @since 3.17
   */
  file_size: string;

  /**
   * file credit value
   * @since 3.17
   */
  file_credits: string;

  /**
   * file uploader (user name)
   * @since 3.17
   */
  file_uploader: string;

  /**
   * file upload date
   * @since 3.17
   */
  file_upload_date: string;

  /**
   * file last-download date
   * @since 3.17
   */
  file_download_date: string;

  /**
   * file download count
   * @since 3.17
   */
  file_download_count: string;

  /**
   * number of files in batch upload queue
   * @since 3.10
   */
  batch_upload_total: number;

  /**
   * number of files in batch download queue
   * @since 3.10
   */
  batch_dnload_total: number;

  /**
   * current command shell/module command string value
   * @since 3.14
   */
  command_str: string;

  // **************************************************************************
  // METHODS
  // **************************************************************************

  /**
   * Get the matching `@` code string
   * @param code_string code string without `@` character delimiters
   * @since 3.10
   * @returns `@-code` value
   */
  atcode(code_string: string): string;

  /**
   * Get the specified text from the text.dat file.
   * @param {number} line_number The line number in the text.dat file to retrieve.
   * @returns {string} specified text string from text.dat
   * @since 3.10
   */
  text(line_number: number): string;

  /**
   * replaces specified text string in memory
   * @param line_number The line number from text.dat to replace in memory.
   * @param text The text to use in place of the previous configuration.
   * @returns success result
   * @since 3.10
   */
  replace_text(line_number: number, text: string): boolean;

  /**
   * reverts specified text string to original text string; if line_number unspecified, reverts all text lines
   * @param line_number The line number to revert to text.dat configuration.
   * @returns success result
   * @since 3.10
   */
  revert_text(line_number?: number): boolean;

  /**
   * load an alternate text.dat from ctrl directory
   * @param base_filename The file to load (without '.dat' extension)
   * @returns success result
   * @since 3.10
   */
  load_text(base_filename: string): boolean;

  /**
   * Begin interactive new user procedure
   * @since 3.10
   */
  newuser(): void;

  /**
   * login with user_name, displaying password_prompt for user's password (if required), optionally supplying the user's password and the system password as arguments so as to not be prompted
   * @param password_prompt Prompt to display to the user for password entry.
   * @param user_password Password to enter (skipping prompt)
   * @param system_password Systep Password to enter (skipping prompt)
   * @returns success result
   * @since 3.10
   */
  login(
    user_name: string,
    password_prompt?: string,
    user_password?: string,
    system_password?: string
  ): boolean;

  /**
   * interactive logon procedure
   * @returns success result
   * @since 3.10
   */
  logon(): boolean;

  /**
   * interactive logoff procedure, pass false for prompt argument to avoid yes/no prompt
   * @param prompt (default: true)
   * @since 3.15
   */
  logoff(prompt: boolean): void;

  /**
   * non-interactive logout procedure
   * @since 3.10
   */
  logout(): void;

  /**
   * hangup (disconnect) immediately
   * @since 3.10
   */
  hangup(): void;

  /**
   * synchronize with node database, checks for messages, interruption, etc. (AKA node_sync),
   * clears the current console line if there's a message to print when clearline is true.
   * @param clearline (default: false)
   * @since 3.10
   */
  nodesync(clearline: boolean): void;

  /**
   * read/create system's auto-message
   * @since 3.10
   */
  auto_msg(): void;

  /**
   * enter the time banking system
   * @since 3.10
   */
  time_bang(): void;

  /**
   * enter the QWK message packet upload/download/config section
   * @since 3.10
   */
  qwk_sec(): void;

  /**
   * enter the text files section
   * @since 3.10
   */
  text_sec(): void;

  /**
   * enter the external programs section (or go directly to the specified section)
   * @param section optional, specific external programs section to enter
   * @since 3.10
   */
  xtrn_sec(section: string): void;

  /**
   * display the file transfer policy
   * @since 3.10
   */
  xfer_policy(): void;

  /**
   * enter the batch file transfer menu
   * @since 3.10
   */
  batch_menu(): void;

  /**
   * start a batch download
   * bbs.batch_download()
   * @returns success result
   * @since 3.10
   */
  batch_download(): boolean;

  /**
   * add file list to batch download queue
   * @param list_filename filename for the list to add
   * @since 3.10
   */
  batch_add_list(list_filename: string): void;

  /**
   * send specified file to user via user-prompted (or optionally specified) protocol.
   * @param filename complete path to the file to send
   * @param protocol file transfer protocol to use
   * @param description optional, used for logging purposes
   * @param autohang (default: true) disconnect after transfer based on user's settings
   * @returns success result
   * @since 3.14
   */
  send_file(
    filename: string,
    protocol?: string,
    description?: string,
    autohang?: boolean
  ): boolean;

  /**
   * received specified file from user via user-prompted (or optionally specified) protocol.
   * @param filename complete path to the file to receive
   * @param protocol the protocol to use (default:prompt)
   * @param autohang (default: true) disconnect after transfer based on user's default setting.
   * @returns success result
   * @since 3.14
   */
  receive_file(
    filename: string,
    protocol?: string,
    autohang?: boolean
  ): boolean;

  /**
   * enter the temporary file tranfer menu
   * @since 3.10
   */
  temp_xfer(): void;

  /**
   * read the current user data from the database
   * @since 3.10
   */
  user_sync(): void;

  /**
   * enter the user settings configuration menu
   * @since 3.10
   */
  user_config(): void;

  /**
   * display system information
   * @since 3.10
   */
  sys_info(): void;

  /**
   * display message sub-board information
   * @param subboard (default: current) the sub-board to display (default: current)
   * @since 3.10
   */
  sub_info(subboard: string): void;

  /**
   * display file directory information
   * @param directory (default: current) directory to display (default: current)
   * @since 3.10
   */
  dir_info(directory: number | string): void;

  /**
   * display current user information
   * @since 3.10
   */
  user_info(): void;

  /**
   * display software version information
   * @since 3.10
   */
  ver(): void;

  /**
   * display system statistics
   * @since 3.10
   */
  sys_stats(): void;

  /**
   * display current (or specified) node statistics
   * @param node_number (default: current) node number to display (default: current)
   * @since 3.10
   */
  node_stats(node_number?: number): void;

  /**
   * display user list
   * @param mode (default: UL.ALL) which users to desplay (default: ALL)
   * @since 3.10
   */
  list_users(mode: SBBS.UL): void;

  /**
   * enter the user editor
   * @param user_number (default: current) user number to display (default: current)
   * @since 3.10
   */
  edit_user(user_number?: number): void;

  /**
   * change to a different user
   * @since 3.10
   */
  change_user(): void;

  /**
   * display the logon list
   * @param args (optional) arguments to pass to the logon list module
   * @since 3.10
   */
  list_logons(args: string): void;

  /**
   * read private e-mail(see MAIL_* in sbbsdefs.js for valid which values)
   * @param which (default: MAIL.YOUR) mail to read (default: inbox)
   * @param user_number (default: current) user to read mail for (default: current)
   * @param loadmail_mode (default: LM.DEFAULT) What mode to load mail in
   * @since 3.10
   */
  read_mail(
    which?: SBBS.MAIL,
    user_number?: number,
    loadmail_mode?: SBBS.LM
  ): void;

  /**
   * send private e-mail to a local user
   * (reply_header added in v3.17c)
   *
   * @param to_user_number user to send mail to
   * @param mode (default: WM.EMAIL) mode to send email with
   * @param top (default: none) ???
   * @param subject (default: none) subject of the email
   * @param reply_header ???
   * @since 3.10
   */
  email(
    to_user_number: number,
    mode?: SBBS.WM,
    top?: string,
    subject?: string,
    reply_header?: any // TODO: interface definition
  ): boolean;

  /**
   * send private netmail
   * (reply_header added in v3.17c, array of addresses added in v3.18a)
   *
   * @param address address or array of addresses to send to
   * @param mode Netmail mode-bits
   * @param subject Subject of the email
   * @param reply_header ???
   * @since 3.10
   */
  netmail(
    address: string | string[],
    mode?: SBBS.WM,
    subject?: string,
    reply_header?: any // TODO: interface definition
  ): boolean;

  /**
   * send bulk private e-mail, if ars not specified, prompt for destination users
   * @param ars ARS String to use as a filter of the users to send mail to. (default: prompt)
   * @since 3.10
   */
  bulk_mail(ars?: string): void;

  /**
   * upload file to file directory specified by number or internal code
   * @param directory Directory to upload to (default: current)
   * @since 3.10
   */
  upload_file(directory?: number | string): boolean;

  /**
   * add files (already in local storage path) to file directory specified by number or internal code
   * @param directory Directory to upload to (default: current)
   * @since 3.10
   */
  bulk_upload(directory?: number | string): boolean;

  /**
   * re-sort the file directory specified by number or internal code)
   * @param directory Directory to resurl (default: current)
   * @since 3.10
   */
  resort_dir(directory?: number | string): boolean;

  /**
   * list files in the specified file directory, optionally specifying a file specification (wildcards) or a description search string, and mode (bitfield)
   * @param directory Directory to list (default: current)
   * @param filespec Search string (default: "*.*")
   * @param mode File List mode (default:FL.NONE)
   * @since 3.10
   */
  list_files(
    directory?: number | string,
    filespec?: string,
    mode?: SBBS.FL
  ): number;

  /**
   * list extended file information for files in the specified file directory
   * @param directory Directory to list (default: current)
   * @param filespec Search string (default: "*.*")
   * @param mode File List mode (default:FI.INFO)
   * @since 3.10
   */
  list_file_info(
    directory?: number | string,
    filespec?: string, // default "*.*"
    mode?: SBBS.FI
  ): number;

  /**
   * post a message in the specified message sub-board (number or internal code) with optional mode (bitfield)
   * (reply_header added in v3.17c)
   *
   * @param subboard subboard to post to (default: current)
   * @param mode write mode to use (default:WM.NONE)
   * @param reply_header header object returned from MsgBase.get_msg_header(), used for in-reply-to fields
   * @since 3.13
   */
  post_msg(sub_board?: string, mode?: SBBS.WM, reply_header?: any): boolean;

  /**
   * show a message's header and body (text) with optional print mode (bitfield)
   * header must be a header object returned from MsgBase.get_msg_header())
   * @param header must be a header object returned from MsgBase.get_msg_header())
   * @param mode putmsg mode bits
   * @since 3.17c
   */
  show_msg(header: any, mode: SBBS.P): boolean;

  /**
   * show a message's header (only)
   * @param header must be a header object returned from MsgBase.get_msg_header())
   * @param subject subject of the message header to show (default: interpreted via header)
   * @param from from for the message header to show (default: interpreted via header)
   * @param to to for the message header to show (default: interpreted via header)
   * @since 3.17c
   */
  show_msg_header(
    header: any,
    subject?: string,
    from?: string,
    to?: string
  ): void;

  /**
   * prompt the user to download each of the message's file attachments (if there are any)
   * @param header must be a header object returned from MsgBase.get_msg_header())
   * @since 3.17c
   */
  download_msg_attachments(header: any): void; // TODO: header interface

  /**
   * prompt the user to modify the specified message header attributes
   * @param header must be a header object returned from MsgBase.get_msg_header())
   * @returns ???
   * @since 3.17c
   */
  change_msg_attr(header: any): number; // TODO: header interface

  /**
   * configure message scan
   * @param type type of scan to perform (default:SCAN.NEW)
   * @since 3.10
   */
  cfg_msg_scan(type?: SBBS.SCAN.NEW | SBBS.SCAN.TOYOU): void;

  /**
   * change message scan pointer values
   * @since 3.10
   */
  cfg_msg_ptrs(): void;

  /**
   * re-initialize new message scan pointers
   * @since 3.10
   */
  reinit_msg_ptrs(): void;

  /**
   * scan sub-boards for messages
   * @param mode scan mode (default: SCAN.NEW)
   * @param all (default: false) ??? (groups, subs in group)
   * @since 3.10
   */
  scan_subs(mode?: SBBS.SCAN, all?: boolean): void;

  /**
   * scan directories for files
   * @param mode File List mode bits (default:FL.NONE)
   * @param all ??? (groups, dirs in group)
   * @since 3.10
   */
  scan_dirs(mode?: SBBS.FL, all?: boolean): void;

  /**
   * scan messages in the specified message sub-board
   * @param subboard (default: current) number or internal code
   * @param mode (default: SCAN.READ) scan mode (default:SCAN.READ)
   * @param find search string
   * @returns ???
   * @since 3.10
   */
  scan_msgs(
    subboard?: string | number,
    mode?: SBBS.SCAN,
    find?: string
  ): boolean;

  /**
   * list messages in the specified message sub-board
   * @param subboard (default: current) number or internal code
   * @param mode (default: SCAN.INDEX) scan mode
   * @param message_number (default: 0) message number to start with
   * @param find search string
   * @returns number of messages listed
   * @since 3.14
   */
  list_msgs(
    subboard?: string | number,
    mode?: SBBS.SCAN,
    message_number?: number,
    find?: string
  ): number;

  /**
   * display a menu file from the text/menu directory.
   *
   * @param base_filename file to display, excluding extension, use * or ? wild-cards for random matching selection)
   * @param mode putmsg bitwise options (default: NONE)
   * @param scope When specified, @JS:property@ codes int he file will expand the referenced property names.
   * @since 3.10
   */
  menu(base_filename: string, mode?: SBBS.P, scope?: any): boolean;

  /**
   * returns true if the referenced text/menu file exists
   * @param base_filename file to display, excluding extension, * or ? wild-cards allowed (???)
   * @returns has a matching file to display
   * @since 3.17
   */
  menu_exists(base_filename: string): boolean;

  /**
   * log key to node.log (comma optional)
   * @param key
   * @param comma
   * @returns success result
   * @since 3.10
   */
  log_key(key: string, comma?: boolean): boolean;

  /**
   * log string to node.log
   * @param text message to log
   * @returns success result
   * @since 3.10
   */
  log_str(text: string): boolean;

  /**
   * find user name (partial name support), interactive
   * @param username_or_number string or number to match against
   * @returns number of user matched ???
   * @since 3.10
   */
  finduser(username_or_number: string | number): number;

  /**
   * search file for pseudo-regexp (search string) in trashcan file (text/base_filename.can)
   * @param base_filename trashcan file to search in (without path or .can extension)
   * @param search_string string to match against in the file
   * @since 3.10
   */
  trashcan(base_filename: string, search_strings: string): boolean;

  /**
   * execute a program, optionally changing current directory to startup_dir
   * @param cmdline command line to execute
   * @param mode mode bits to operate under (default:EX.NONE)
   * @param startup_dir if set, will change working directory to the startup_dir
   * @returns ???
   * @since 3.10
   */
  exec(cmdline: string, mode?: SBBS.EX, startup_dir?: string): number;

  /**
   * execute external program by number or internal code
   * @param xtrn_number_or_code the number or internal code of the external program to run
   * @returns success result
   * @since 3.10
   */
  exec_xtrn(xtrn_number_or_code: number | string): boolean;

  /**
   * execute user event by event type
   * @param event_type event to run
   * @returns success result
   * @since 3.10
   */
  user_event(event_type: SBBS.USER_EVENT): boolean;

  /**
   * external Telnet gateway
   *
   * @param address address to connect to
   * @param mode option bits to connect using (default: TG.NONE)
   * @since 3.10
   */
  telnet_gate(address: string, mode?: SBBS.TG): void;

  /**
   * external RLogin gateway
   *
   * @param address address to connect to
   * @param client_user_name username on the client system
   * @param server_user_name username on the server system
   * @param terminal terminal to connect with (default: console.terminal)
   * @param mode option bits to connect using (default: TG.NONE)
   * @since 3.16
   */
  rlogin_gate(
    address: string,
    client_user_name?: string,
    server_user_name?: string,
    terminal?: any,
    mode?: SBBS.TG
  ): void;

  /**
   * verify system password, prompting for the password if not passed as an argument
   * @param systemPassword the system password to check (default: interactive prompt)
   * @return success result
   * @since 3.10
   */
  check_syspass(systemPassword?: string): boolean;

  /**
   * check if requested user password meets minimum password requirements (length, uniqueness, etc.)
   * @param password password to validate for minimum requirements
   * @return success result
   * @since 3.10
   */
  good_password(password: string): boolean;

  /**
   * page the sysop for chat
   * @returns false if the sysop could not be paged
   * @since 3.10
   */
  page_sysop(): boolean;

  /**
   * page the guru for chat
   * @returns false if the guru could not be paged
   * @since 3.10
   */
  page_guru(): boolean;

  /**
   * enter multi-node chat
   * @since 3.10
   */
  multinode_chat(): void;

  /**
   * use the private inter-node message prompt
   * @since 3.10
   */
  private_message(): void;

  /**
   * enter private inter-node chat, or local sysop chat (if local=true)
   * @param local sysop chat when true (default: false)
   * @since 3.10
   */
  private_chat(local?: boolean): void;

  /**
   * receive and display an inter-node message
   * @param clearline clear the current line (default: false)
   * @since 3.10
   */
  get_node_message(clearline?: boolean): void;

  /**
   * send an inter-node message (specify a node_number value of -1 for 'all active nodes')
   * @param node number of the node to send to, -1 for all nodes (default: ???)
   * @param text text of the message to send to the node(s) in question
   * @returns success result
   * @since 3.17
   */
  put_node_message(node?: number, text?: string): boolean;

  /**
   * receive and display waiting telegrams for specified (or current) user
   * @param user (default: current) the user number to receive telegrams for (default: current)
   * @param clearline (default: false) clear the current line (default: false)
   * @since 3.10
   */
  get_telegram(user?: number, clearline?: boolean): void;

  /**
   * send a telegram (short multi-line stored message) to a user
   * @param user user number to send a telegram to
   * @param text text to send to the user
   * @since 3.17
   */
  put_telegram(user?: number, text?: string): boolean;

  /**
   * list all nodes
   * @since 3.10
   */
  list_nodes(): void;

  /**
   * list active nodes only (who's online)
   * @since 3.10
   */
  whos_online(): void;

  /**
   * spy on a node
   * @param node number of the node to spy on
   * @since 3.10
   */
  spy(node: number): void;

  /**
   * return expanded command string using Synchronet command-line specifiers
   * @param command command string to process
   * @param fpath file path (default: "")
   * @param fspec fspec (default: "")
   * @since 3.10
   */
  cmdstr(command: string, fpath: string, fspec: string): string;

  /**
   * returns a file specification input by the user (optionally with wildcards)
   * @returns filespec string
   * @since 3.10
   */
  get_filespec(): string;

  /**
   * confirm or change a new-scan time, returns the new new-scan time value (time_t format)
   * @param time (default: current) TIME_T formatted time
   * @returns newscan time (TIME_T format)
   * @since 3.10
   */
  get_newscantime(time: number): number; // TODO: TIME_T Type from number

  /**
   * prompt user to select a new command shell
   * @returns ??? changed shell
   * @since 3.10
   */
  select_shell(): boolean;

  /**
   * prompt user to select a new external message editor
   * @returns ??? editor changed
   * @since 3.10
   */
  select_editor(): boolean;

  /**
   * check the user's available remaining time online and return the value, in seconds
   * This method will inform (and disconnect) the user when they are out of time
   * @returns time left in seconds
   * @since 3.14b
   */
  get_time_left(): number;

  /**
   * verify the current user online meets the specified Access Requirements String
   * bbs.compare_ars(ars)
   * @param ars Access Requirements String to check
   * @returns User is a match
   * @since 3.15
   */
  compare_ars(ars: string): boolean;

  /**
   * Choose an active node to interact with.
   * @param all_is_an_option if 'All' is allowed
   * @returns the selected node number, 0 (for none) or -1 for 'All'
   * @since 3.17
   */
  select_node(all_is_an_option: boolean): number;

  /**
   * Choose a user to interact with.
   * @returns user number selected
   * @since 3.17
   */
  select_user(): number;
}
