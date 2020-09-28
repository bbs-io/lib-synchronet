/**
 * string length values for User Record
 */
export enum LEN {
  ALIAS = 25, // User alias  
  NAME = 25, // User name  
  HANDLE = 8, // User chat handle  
  NOTE = 30, // User note  
  COMP = 30, // User computer description  
  COMMENT = 60, // User comment  
  NETMAIL = 60, // NetMail forwarding address  
  OLDPASS = 8, // User password (old/short location)  
  PASS = 40, // User password  
  PHONE = 12, // User phone number  
  BIRTH = 8, // Birthday in MM/DD/YY format  
  ADDRESS = 30, // User address  
  LOCATION = 30, // Location (City, State)  
  ZIPCODE = 10, // Zip/Postal code  
  MODEM = 8, // User modem type description  
  FDESC = 58, // File description  
  FCDT = 9, // 9 digits for file credit values  
  TITLE = 70, // Message title  
  MAIN_CMD = 34, // Storage in user.dat for custom commands  
  SCAN_CMD = 35,
  IPADDR = 45,
  CID = 45, // Caller ID (phone number or IP address)  
  ARSTR = 40, // Max length of Access Requirement string  
  CHATACTCMD = 9, // Chat action command  
  CHATACTOUT = 65, // Chat action output string  
}


/**
 * field values for system.matchuserdata()
 */
const U_ALIAS:number = 0;
const U_NAME:number = U_ALIAS+LEN.ALIAS;
const U_HANDLE:number = U_NAME+LEN.NAME;
const U_NOTE:number = U_HANDLE+LEN.HANDLE+2;
const U_COMP:number = U_NOTE+LEN.NOTE;
const U_COMMENT:number = U_COMP+LEN.COMP+2;
const U_NETMAIL:number = U_COMMENT+LEN.COMMENT+2;
const U_ADDRESS:number = U_NETMAIL+LEN.NETMAIL+2;
const U_LOCATION:number = U_ADDRESS+LEN.ADDRESS;
const U_ZIPCODE:number = U_LOCATION+LEN.LOCATION;
const U_OLDPASS:number = U_ZIPCODE+LEN.ZIPCODE+2; // OLD PASSWORD LOCATION
const U_PHONE:number = U_OLDPASS+LEN.OLDPASS;
const U_BIRTH:number = U_PHONE+12;
const U_MODEM:number = U_BIRTH+8;
const U_LASTON:number = U_MODEM+8;
const U_FIRSTON:number = U_LASTON+8;
const U_EXPIRE:number = U_FIRSTON+8;
const U_PWMOD:number = U_EXPIRE+8;
const U_LOGONS:number = U_PWMOD+8+2;
const U_LTODAY:number = U_LOGONS+5;
const U_TIMEON:number = U_LTODAY+5;
const U_TEXTRA:number = U_TIMEON+5;
const U_TTODAY:number = U_TEXTRA+5;
const U_TLAST:number = U_TTODAY+5;
const U_POSTS:number = U_TLAST+5;
const U_EMAILS:number = U_POSTS+5;
const U_FBACKS:number = U_EMAILS+5:
const U_ETODAY:number = U_FBACKS+5:
const U_PTODAY:number = U_ETODAY+5;
const U_ULB:number = U_PTODAY+5+2;
const U_ULS:number = U_ULB+10;
const U_DLB:number = U_ULS+5;
const U_DLS:number = U_DLB+10;
const U_CDT:number = U_DLS+5;
const U_MIN:number = U_CDT+10;
const U_LEVEL:number = U_MIN+10+2; // Offset to Security Level  
const U_FLAGS1:number = U_LEVEL+2; // Offset to Flags  
const U_TL:number = U_FLAGS1+8; // Offset to unused field  
const U_FLAGS2:number = U_TL+2;
const U_EXEMPT:number = U_FLAGS2+8;
const U_REST:number = U_EXEMPT+8;
const U_ROWS:number = U_REST+8+2; // Number of Rows on user's monitor  
const U_SEX:number = U_ROWS+2; // Sex, Del, ANSI, color etc.  
const U_MISC:number = U_SEX+1; // Miscellaneous flags in 8byte hex  
const U_OLDXEDIT:number = U_MISC+8; // External editor (Version 1 method  
const U_LEECH:number = U_OLDXEDIT+2; // two hex digits - leech attempt count  
const U_CURSUB:number = U_LEECH+2; // Current sub (internal code)  
const U_CURXTRN:number = U_CURSUB+16; // Current xtrn (internal code)  
const U_MAIN_CMD:number = U_CURXTRN+8+2; // unused  
const U_PASS:number = U_MAIN_CMD+LEN.MAIN_CMD; //   
const U_SCAN_CMD:number = U_PASS+LEN.PASS+2; // unused  
const U_IPADDR:number = U_SCAN_CMD+LEN.SCAN_CMD; // unused  
const U_FREECDT:number = U_IPADDR+LEN.IPADDR+2;
const U_FLAGS3:number = U_FREECDT+10; // Flag set #3  
const U_FLAGS4:number = U_FLAGS3+8; // Flag set #4  
const U_XEDIT:number = U_FLAGS4+8; // External editor (code  
const U_SHELL:number = U_XEDIT+8; // Command shell (code  
const U_QWK:number = U_SHELL+8; // QWK settings  
const U_TMPEXT:number = U_QWK+8; // QWK extension  
const U_CHAT:number = U_TMPEXT+3; // Chat settings  
const U_NS_TIME:number = U_CHAT+8; // New-file scan date/time  
const U_PROT:number = U_NS_TIME+8; // Default transfer protocol  
const U_LOGONTIME:number = U_PROT+1;
const U_CURDIR:number = U_LOGONTIME+8; // Current dir (internal code  
const U_UNUSED:number = U_CURDIR+16;
const U_LEN:number = (U_UNUSED+4+2);


/**
 * field values for system.matchuserdata()
 */
export enum USER_FIELD {
  ALIAS = U_ALIAS,
  NAME = U_NAME,
  HANDLE = U_HANDLE,
  NOTE = U_NOTE,
  COMP = U_COMP,
  COMMENT = U_COMMENT,
  NETMAIL = U_NETMAIL,
  ADDRESS = U_ADDRESS,
  LOCATION = U_LOCATION,
  ZIPCODE = U_ZIPCODE,
  OLDPASS = U_OLDPASS,
  PHONE = U_PHONE,
  BIRTH = U_BIRTH,
  MODEM = U_MODEM,
  LASTON = U_LASTON,
  FIRSTON = U_FIRSTON,
  EXPIRE = U_EXPIRE,
  PWMOD = U_PWMOD,
  LOGONS = U_LOGONS,
  LTODAY = U_LTODAY,
  TIMEON = U_TIMEON,
  TEXTRA = U_TEXTRA,
  TTODAY = U_TTODAY,
  TLAST = U_TLAST,
  POSTS = U_POSTS,
  EMAILS = U_EMAILS,
  FBACKS = U_FBACKS,
  ETODAY = U_ETODAY,
  PTODAY = U_PTODAY,
  ULB = U_ULB,
  ULS = U_ULS,
  DLB = U_DLB,
  DLS = U_DLS,
  CDT = U_CDT,
  MIN = U_MIN,
  LEVEL = U_LEVEL,
  FLAGS1 = U_FLAGS1,
  TL = U_TL,
  FLAGS2 = U_FLAGS2,
  EXEMPT = U_EXEMPT,
  REST = U_REST,
  ROWS = U_ROWS,
  SEX = U_SEX,
  MISC = U_MISC,
  OLDXEDIT = U_OLDXEDIT,
  LEECH = U_LEECH,
  CURSUB = U_CURSUB,
  CURXTRN = U_CURXTRN,
  MAIN_CMD = U_MAIN_CMD,
  PASS = U_PASS,
  SCAN_CMD = U_SCAN_CMD,
  IPADDR = U_IPADDR,
  FREECDT = U_FREECDT,
  FLAGS3 = U_FLAGS3,
  FLAGS4 = U_FLAGS4,
  XEDIT = U_XEDIT,
  SHELL = U_SHELL,
  QWK = U_QWK,
  TMPEXT = U_TMPEXT,
  CHAT = U_CHAT,
  NS_TIME = U_NS_TIME,
  PROT = U_PROT,
  LOGONTIME = U_LOGONTIME,
  CURDIR = U_CURDIR,
  UNUSED = U_UNUSED,
  LEN = U_LEN,
}