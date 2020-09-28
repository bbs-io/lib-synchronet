/**
 * Options for Node.status (bbs.node[number])
 */
export enum NODE_STATUS {
  WFC = 0, // Waiting for Caller/Connection
  LOGON = 1, // at logon prompt
  NEWUSER = 2, // New user applying
  INUSE = 3, // In Use
  QUIET = 4, // In Use - quiet mode
  OFFLINE = 5, // Offline
  NETTING = 6, // Networking (obsolete)
  EVENT_WAITING = 7, // Waiting for all nodes to be inactive
  EVENT_RUNNING = 8, // Running an external event
  EVENT_LIMBO = 9, // Allowing another node to run an event
  LOGOUT = 10, // User logging out
  LAST_STATUS = 11, // Must be last (anyone using this?)
}

/**
 * NODE_STATUS Description Text
 */
var NodeStatus = [
  "Waiting for connection",
  "At logon prompt",
  "New user",
  "In-use",
  "Waiting for connection",
  "Offline",
  "Networking",
  "Waiting for all nodes to become inactive",
  "Running external event",
  "Waiting for node %d to finish external event",
  "Logging out ",
];

/**
 * Options for Node.action
 */
export enum NODE_ACTION {
  MAIN = 0, // Main Prompt,
  RMSG = 1, // Reading Messages,
  RMAL = 2, // Reading Mail,
  SMAL = 3, // Sending Mail,
  RTXT = 4, // Reading G-Files,
  RSML = 5, // Reading Sent Mail,
  PMSG = 6, // Posting Message,
  AMSG = 7, // Auto-message,
  XTRN = 8, // Running External Program,
  DFLT = 9, // Main Defaults Section,
  XFER = 10, // Transfer Prompt,
  DLNG = 11, // Downloading File,
  ULNG = 12, // Uploading File,
  BXFR = 13, // Bidirectional Transfer,
  LFIL = 14, // Listing Files,
  LOGN = 15, // Logging on,
  LCHT = 16, // In Local Chat with Sysop,
  MCHT = 17, // In Multi-Chat with Other Nodes,
  GCHT = 18, // In Local Chat with Guru,
  CHAT = 19, // In Chat Section,
  SYSP = 20, // Sysop Activity,
  TQWK = 21, // Transferring QWK packet,
  PCHT = 22, // In Private Chat,
  PAGE = 23, // Paging another node for Private Chat,
  RFSD = 24, // Retrieving file from seq dev (aux=dev),
  LAST_ACTION = 25, // Must be last,
}

/**
 * NODE_ACTION Description Text
 */
export const NodeAction = [
  "at main menu",
  "reading messages",
  "reading mail",
  "sending mail",
  "reading text files",
  "reading sent mail",
  "posting message",
  "posting auto-message",
  "at external program menu",
  "changing defaults",
  "at transfer menu",
  "downloading",
  "uploading",
  "transferring bidirectional",
  "listing files",
  "logging on",
  "in local chat with sysop",
  "in multinode chat",
  "chatting with The Guru",
  "in chat section",
  "performing sysop activities",
  "transferring QWK packet",
  "in private chat with node %u",
  "paging node %u for private chat",
  "retrieving from device #%d",
];

/**
 * Node.misc Flags (bitwise values)
 */
export enum NODE_MISC {
  ANON = 1 << 0, // Anonymous User,
  LOCK = 1 << 1, // Locked for sysops only,
  INTR = 1 << 2, // Interrupted - hang up,
  MSGW = 1 << 3, // Message is waiting (old way),
  POFF = 1 << 4, // Page disabled,
  AOFF = 1 << 5, // Activity Alert disabled,
  UDAT = 1 << 6, // User data has been updated,
  RRUN = 1 << 7, // Re-run this node when log off,
  EVENT = 1 << 8, // Must run node event after log off,
  DOWN = 1 << 9, // Down this node after logoff,
  RPCHT = 1 << 10, // Reset private chat,
  NMSG = 1 << 11, // Node message waiting (new way),
  EXT = 1 << 12, // Extended info on node action,
  LCHAT = 1 << 13, // Being pulled into local chat,
}

/**
 * Options for bbs.node_connection
 */
export enum NODE_CONNECTION {
  LOCAL = 0,
  TELNET = 0xffff,
  RLOGIN = 0xfffe,
  SSH = 0xfffd,
  RAW = 0xfffc,
}

export const NodeConnection = {
  "0": "local",
  "65535": "telnet",
  "65534": "rlogin",
  "65533": "ssh",
  "65532": "raw",
};

export const NodeConnectionProper = {
  "0": "Local",
  "65535": "Telnet",
  "65534": "RLogin",
  "65533": "SSH",
  "65532": "Raw",
};
