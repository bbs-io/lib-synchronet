import * as SBBS from "../defs/sbbs";

export interface Bbs {
  /**
   * @param code_string - code string without @ character delimiters
   * @returns @-code value
   * @since 3.10
   */
  atCode(code_string: string): string;

  // text	string	bbs.text(line_number)	3.10	returns specified text string from text.dat
  text(line_number: number): string;

  // replace_text	boolean	bbs.replace_text(line_number, text)	3.10	replaces specified text string in memory
  replace_text(line_number: number, text: string): boolean;

  // revert_text	boolean	bbs.revert_text([line_number=all])	3.10	reverts specified text string to original text string; if line_number unspecified, reverts all text lines
  revert_text(line_number?: number): boolean;

  // load_text	boolean	bbs.load_text(base_filename)	3.10	load an alternate text.dat from ctrl directory, automatically appends '.dat' to basefilename
  load_text(base_filename: string): boolean;

  // newuser	void	bbs.newuser()	3.10	interactive new user procedure
  newuser(): void;

  // login	boolean	bbs.login(user_name [,password_prompt] [,user_password] [,system_password])	3.10	login with user_name, displaying password_prompt for user's password (if required), optionally supplying the user's password and the system password as arguments so as to not be prompted
  login(
    user_name: string,
    password_prompt?: string,
    user_password?: string,
    system_password?: string
  ): boolean;

  // logon	boolean	bbs.logon()	3.10	interactive logon procedure
  logon(): boolean;

  // logoff	void	bbs.logoff([prompt=true])	3.15	interactive logoff procedure, pass false for prompt argument to avoid yes/no prompt
  logoff(prompt: boolean): void;

  // logout	void	bbs.logout()	3.10	non-interactive logout procedure
  logout(): void;

  // hangup	void	bbs.hangup()	3.10	hangup (disconnect) immediately
  hangup(): void;

  // nodesync	void	bbs.nodesync([clearline=false])	3.10	synchronize with node database, checks for messages, interruption, etc. (AKA node_sync), clears the current console line if there's a message to print when clearline is true.
  nodesync(clearline: boolean): void;

  // auto_msg	void	bbs.auto_msg()	3.10	read/create system's auto-message
  auto_msg(): void;

  // time_bank	void	bbs.time_bank()	3.10	enter the time banking system
  time_bang(): void;

  // qwk_sec	void	bbs.qwk_sec()	3.10	enter the QWK message packet upload/download/config section
  qwk_sec(): void;

  // text_sec	void	bbs.text_sec()	3.10	enter the text files section
  text_sec(): void;

  // xtrn_sec	void	bbs.xtrn_sec([section])	3.10	enter the external programs section (or go directly to the specified section)
  xtrn_sec(section: string): void;

  // xfer_policy	void	bbs.xfer_policy()	3.10	display the file transfer policy
  xfer_policy(): void;

  // batch_menu	void	bbs.batch_menu()	3.10	enter the batch file transfer menu
  batch_menu(): void;

  // batch_download	boolean	bbs.batch_download()	3.10	start a batch download
  batch_download(): boolean;

  // batch_add_list	void	bbs.batch_add_list(list_filename)	3.10	add file list to batch download queue
  batch_add_list(): void;

  // send_file	boolean	bbs.send_file(filename [,protocol] [,description] [,autohang=true])	3.14	send specified filename (complete path) to user via user-prompted (or optionally specified) protocol.
  // The optional description string is used for logging purposes.
  // When autohang=true, disconnect after transfer based on user's default setting.
  send_file(
    filename: string,
    protocol?: string,
    description?: string,
    autohang?: boolean
  ): boolean;

  // receive_file	boolean	bbs.receive_file(filename [,protocol] [,autohang=true])	3.14	received specified filename (complete path) from user via user-prompted (or optionally specified) protocol.
  // When autohang=true, disconnect after transfer based on user's default setting.
  receive_file(
    filename: string,
    protocol?: string,
    autohang?: boolean
  ): boolean;

  // temp_xfer	void	bbs.temp_xfer()	3.10	enter the temporary file tranfer menu
  temp_xfer(): void;

  // user_sync	void	bbs.user_sync()	3.10	read the current user data from the database
  user_sync(): void;

  // user_config	void	bbs.user_config()	3.10	enter the user settings configuration menu
  user_config(): void;

  // sys_info	void	bbs.sys_info()	3.10	display system information
  sys_info(): void;

  // sub_info	void	bbs.sub_info([sub-board=current])	3.10	display message sub-board information (current sub-board, if unspecified)
  sub_info(): void;

  // dir_info	void	bbs.dir_info([directory=current])	3.10	display file directory information (current directory, if unspecified)
  dir_info(): void;

  // user_info	void	bbs.user_info()	3.10	display current user information
  user_info(): void;

  // ver	void	bbs.ver()	3.10	display software version information
  ver(): void;

  // sys_stats	void	bbs.sys_stats()	3.10	display system statistics
  sys_stats(): void;

  // node_stats	void	bbs.node_stats([node_number=current])	3.10	display current (or specified) node statistics
  node_stats(node_number?: number): void;

  // list_users	void	bbs.list_users([mode=UL_ALL])	3.10	display user list(see UL_* in sbbsdefs.js for valid mode values)
  list_users(mode: SBBS.UL): void;

  // edit_user	void	bbs.edit_user([user_number=current])	3.10	enter the user editor
  edit_user(user_number?: number): void;

  // change_user	void	bbs.change_user()	3.10	change to a different user
  change_user(): void;

  // list_logons	void	bbs.list_logons([arguments])	3.10	display the logon list (optionally passing arguments to the logon list module)
  list_logons(...args: any): void;

  // read_mail	void	bbs.read_mail([which=MAIL_YOUR] [,user_number=current] [,loadmail_mode=0])	3.10	read private e-mail(see MAIL_* in sbbsdefs.js for valid which values)
  read_mail(which?: any, user_number?: number, loadmail_mode?: SBBS.MAIL): void;

  // email	boolean	bbs.email(to_user_number [,mode=WM_EMAIL] [,top=none] [,subject=none] [,object reply_header])	3.10	send private e-mail to a local user (reply_header added in v3.17c)
  email(
    to_user_number: number,
    mode?: SBBS.WM,
    top?: string,
    subject?: string,
    reply_header?: any // TODO: interface definition
  ): boolean;

  // netmail	boolean	bbs.netmail([string address or array of addresses] [,mode=WM_NONE] [,subject=none] [,object reply_header])	3.10	send private netmail (reply_header added in v3.17c, array of addresses added in v3.18a)
  netmail(
    address: string | string[],
    mode?: SBBS.WM,
    subject?: string,
    reply_header?: any // TODO: interface
  ): boolean;

  // bulk_mail	void	bbs.bulk_mail([ars])	3.10	send bulk private e-mail, if ars not specified, prompt for destination users
  bulk_mail(ars?: string): void;

  // upload_file	boolean	bbs.upload_file([directory=current])	3.10	upload file to file directory specified by number or internal code
  upload_file(directory?: number | string): boolean;

  // bulk_upload	boolean	bbs.bulk_upload([directory=current])	3.10	add files (already in local storage path) to file directory specified by number or internal code
  bulk_upload(directory?: number | string): boolean;

  // resort_dir	boolean	bbs.resort_dir([directory=current])	3.10	re-sort the file directory specified by number or internal code)
  resort_dir(directory?: number | string): boolean;

  // list_files	number	bbs.list_files([directory=current] [,filespec="*.*" or search_string] [,mode=FL_NONE])	3.10	list files in the specified file directory, optionally specifying a file specification (wildcards) or a description search string, and mode (bitfield)
  list_files(
    directory?: number | string,
    filespec?: string,
    mode?: SBBS.FL
  ): number;

  // list_file_info	number	bbs.list_file_info([directory=current] [,filespec="*.*"] [,mode=FI_INFO])	3.10	list extended file information for files in the specified file directory
  list_file_info(
    directory?: number | string,
    filespec?: string, // default "*.*"
    mode?: SBBS.FI
  ): number;

  // post_msg	boolean	bbs.post_msg([sub-board=current] [,mode=WM_NONE] [,object reply_header])	3.13	post a message in the specified message sub-board (number or internal code) with optional mode (bitfield)
  // If reply_header is specified (a header object returned from MsgBase.get_msg_header()), that header will be used for the in-reply-to header fields.
  post_msg(
    sub_board?: string,
    mode?: SBBS.WM,
    reply_header?: any // TODO
  ): boolean;

  // show_msg	boolean	bbs.show_msg(object header [,mode=P_NONE] )	3.17c	show a message's header and body (text) with optional print mode (bitfield)
  // header must be a header object returned from MsgBase.get_msg_header())
  show_msg(
    header: any, // TODO: header interface
    mode: SBBS.P
  ): boolean;

  // show_msg_header	void	bbs.show_msg_header(object header [,subject] [,from] [,to])	3.17c	show a message's header (only)
  // header must be a header object returned from MsgBase.get_msg_header())
  show_msg_header(
    header: any, // TODO
    subject?: string,
    from?: string,
    to?: string
  ): void;

  // download_msg_attachments	void	bbs.download_msg_attachments(object header)	3.17c	prompt the user to download each of the message's file attachments (if there are any)
  // header must be a header object returned from MsgBase.get_msg_header())
  download_msg_attachments(header: any): void; // TODO: header interface

  // change_msg_attr	number	bbs.change_msg_attr(object header)	3.17c	prompt the user to modify the specified message header attributes
  change_msg_attr(header: any): number; // TODO: header interface

  // cfg_msg_scan	void	bbs.cfg_msg_scan([type=SCAN_CFG_NEW])	3.10	configure message scan (type is either SCAN_CFG_NEW or SCAN_CFG_TOYOU)
  cfg_msg_scan(type?: SBBS.SCAN): void;

  // cfg_msg_ptrs	void	bbs.cfg_msg_ptrs()	3.10	change message scan pointer values
  cfg_msg_ptrs(): void;

  // reinit_msg_ptrs	void	bbs.reinit_msg_ptrs()	3.10	re-initialize new message scan pointers
  reinit_msg_ptrs(): void;

  // scan_subs	void	bbs.scan_subs([mode=SCAN_NEW] [,all=false])	3.10	scan sub-boards for messages
  scan_subs(mode?: SBBS.SCAN, all?: boolean): void;

  // scan_dirs	void	bbs.scan_dirs([mode=FL_NONE] [,all=false])	3.10	scan directories for files
  scan_dirs(mode?: SBBS.FL, all?: boolean): void;

  // scan_msgs	boolean	bbs.scan_msgs([sub-board=current] [,mode=SCAN_READ] [,find])	3.10	scan messages in the specified message sub-board (number or internal code), optionally search for 'find' string (AKA scan_posts)
  scan_msgs(
    subboard?: string | number,
    mode?: SBBS.SCAN,
    find?: string
  ): boolean;

  // list_msgs	number	bbs.list_msgs([sub-board=current] [,mode=SCAN_INDEX] [,message_number=0] [,find])	3.14
  // list messages in the specified message sub-board (number or internal code),
  // optionally search for 'find' string, returns number of messages listed
  list_msgs(
    subboard?: string | number,
    mode?: SBBS.SCAN,
    message_number?: number,
    find?: string
  ): number;

  // menu	boolean	bbs.menu(base_filename [,mode=P_NONE] [,object scope])	3.10	display a menu file from the text/menu directory.
  // See P_* in sbbsdefs.js for mode flags.
  // When scope is specified, @JS:property@ codes will expand the referenced property names.
  // To display a randomly-chosen menu file, including wild-card (* or ?) characters in the base_filename.
  menu(base_filename: string, mode?: SBBS.P, scope?: any): boolean; // TODO: scope interface

  // menu_exists	boolean	bbs.menu_exists(base_filename)	3.17	returns true if the referenced menu file exists (i.e. in the text/menu directory)
  menu_exists(base_filename: string): boolean;

  // log_key	boolean	bbs.log_key(key [,comma=false])	3.10	log key to node.log (comma optional)
  log_key(key: string, comma?: boolean): boolean;

  // log_str	boolean	bbs.log_str(text)	3.10	log string to node.log
  log_str(text: string): boolean;

  // finduser	number	bbs.finduser(username_or_number)	3.10	find user name (partial name support), interactive
  finduser(username_or_number: string | number): number;

  // trashcan	boolean	bbs.trashcan(base_filename, search_string)	3.10	search file for pseudo-regexp (search string) in trashcan file (text/base_filename.can)
  trashcan(base_filename: string, search_strings: string): boolean;

  // exec	number	bbs.exec(cmdline [,mode=EX_NONE] [,startup_dir])	3.10	execute a program, optionally changing current directory to startup_dir (see EX_* in sbbsdefs.js for valid mode flags.)
  exec(cmdline: string, mode?: SBBS.EX, startup_dir?: string): number;

  // exec_xtrn	boolean	bbs.exec_xtrn(xtrn_number_or_code)	3.10	execute external program by number or internal code
  exec_xtrn(xtrn_number_or_code: number | string): boolean;

  // user_event	boolean	bbs.user_event(event_type)	3.10	execute user event by event type (see EVENT_* in sbbsdefs.js for valid values)
  user_event(event_type: SBBS.USER_EVENT): boolean; // TODO: EVENT_*

  // telnet_gate	void	bbs.telnet_gate(address [,mode=TG_NONE])	3.10	external Telnet gateway (see TG_* in sbbsdefs.js for valid mode flags.)
  telnet_gate(address: string, mode?: SBBS.TG): void;

  // rlogin_gate	void	bbs.rlogin_gate(address [,client-user-name=user.alias, server-user-name=user.name, terminal=console.terminal] [,mode=TG_NONE])	3.16	external RLogin gateway (see TG_* in sbbsdefs.js for valid mode flags.)
  rlogin_gate(
    address: string,
    client_user_name?: string,
    server_user_name?: string,
    terminal?: any,
    mode?: SBBS.TG
  ): void;

  // check_syspass	boolean	bbs.check_syspass([sys_pw])	3.10	verify system password, prompting for the password if not passed as an argument
  check_syspass(systemPassword?: string): boolean;

  // good_password	boolean	bbs.good_password(password)	3.10	check if requested user password meets minimum password requirements (length, uniqueness, etc.)
  good_password(password: string): boolean;

  // page_sysop	boolean	bbs.page_sysop()	3.10	page the sysop for chat, returns false if the sysop could not be paged
  page_sysop(): boolean;

  // page_guru	boolean	bbs.page_guru()	3.10	page the guru for chat
  page_guru(): boolean;

  // multinode_chat	void	bbs.multinode_chat()	3.10	enter multi-node chat
  multinode_chat(): void;

  // private_message	void	bbs.private_message()	3.10	use the private inter-node message prompt
  private_message(): void;

  // private_chat	void	bbs.private_chat([local=false])	3.10	enter private inter-node chat, or local sysop chat (if local=true)
  private_chat(local?: boolean): void;

  // get_node_message	void	bbs.get_node_message([clearline=false])	3.10	receive and display an inter-node message
  get_node_message(clearline?: boolean): void;

  // put_node_message	boolean	bbs.put_node_message([node_number] [,text])	3.17	send an inter-node message (specify a node_number value of -1 for 'all active nodes')
  put_node_message(node?: number, text?: string): boolean;

  // get_telegram	void	bbs.get_telegram([user_number=current], [clearline=false])	3.10	receive and display waiting telegrams for specified (or current) user
  get_telegram(user?: number, clearline?: boolean): void;

  // put_telegram	boolean	bbs.put_telegram([user_number] [,text])	3.17	send a telegram (short multi-line stored message) to a user
  put_telegram(user?: number, text?: string): boolean;

  // list_nodes	void	bbs.list_nodes()	3.10	list all nodes
  list_nodes(): void;

  // whos_online	void	bbs.whos_online()	3.10	list active nodes only (who's online)
  whos_online(): void;

  // spy	void	bbs.spy(node_number)	3.10	spy on a node
  spy(node: number): void;

  // cmdstr	string	bbs.cmdstr(command_string [,fpath=""] [,fspec=""])	3.10	return expanded command string using Synchronet command-line specifiers
  cmdstr(command: string, fpath: string, fspec: string): string;

  // get_filespec	string	bbs.get_filespec()	3.10	returns a file specification input by the user (optionally with wildcards)
  get_filespec(): string;

  // get_newscantime	number	bbs.get_newscantime(time=current)	3.10	confirm or change a new-scan time, returns the new new-scan time value (time_t format)
  get_newscantime(time: number): number; // TODO: TIME_T Type from number

  // select_shell	boolean	bbs.select_shell()	3.10	prompt user to select a new command shell
  select_shell(): boolean;

  // select_editor	boolean	bbs.select_editor()	3.10	prompt user to select a new external message editor
  select_editor(): boolean;

  // get_time_left	number	bbs.get_time_left()	3.14b	check the user's available remaining time online and return the value, in seconds
  // This method will inform (and disconnect) the user when they are out of time
  get_time_left(): number;

  // compare_ars	boolean	bbs.compare_ars(ars)	3.15	verify the current user online meets the specified Access Requirements String
  compare_ars(ars: string): boolean;

  // select_node	number	bbs.select_node(all_is_an_option=false)	3.17	Choose an active node to interact with.
  // Returns the selected node number, 0 (for none) or -1 for 'All'.
  select_node(all_is_an_option: boolean): number;

  // select_user	number	bbs.select_user()	3.17	Choose a user to interact with.
  select_user(): number;
}
