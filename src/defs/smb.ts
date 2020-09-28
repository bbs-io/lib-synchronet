// Synchronet Message Base export constant definitions (from smbdefs.h and smblib.h)

/**
 * TODO: Break into separate enum collections
 */

/* Values for MsgBase.status (SMBLIB function return values) */
export const SMB_SUCCESS = 0; // Successful result/return code
export const SMB_DUPE_MSG = 1; // Duplicate message detected by smb_addcrc()
export const SMB_FAILURE = -1; // Generic error (discouraged)
export const SMB_ERR_NOT_OPEN = -100; // Message base not open
export const SMB_ERR_HDR_LEN = -101; // Invalid message header length (>64k)
export const SMB_ERR_HDR_OFFSET = -102; // Invalid message header offset
export const SMB_ERR_HDR_ID = -103; // Invalid header ID
export const SMB_ERR_HDR_VER = -104; // Unsupported version
export const SMB_ERR_HDR_FIELD = -105; // Missing header field
export const SMB_ERR_NOT_FOUND = -110; // Item not found
export const SMB_ERR_DAT_OFFSET = -120; // Invalid data offset (>2GB)
export const SMB_ERR_DAT_LEN = -121; // Invalid data length (>2GB)
export const SMB_ERR_OPEN = -200; // File open error
export const SMB_ERR_SEEK = -201; // File seek/setpos error
export const SMB_ERR_LOCK = -202; // File lock error
export const SMB_ERR_READ = -203; // File read error
export const SMB_ERR_WRITE = -204; // File write error
export const SMB_ERR_TIMEOUT = -205; // File operation timed-out
export const SMB_ERR_FILE_LEN = -206; // File length invalid
export const SMB_ERR_DELETE = -207; // File deletion error
export const SMB_ERR_UNLOCK = -208; // File unlock error
export const SMB_ERR_MEM = -300; // Memory allocation error

/* MsgBase.attributes bit flags */
export const SMB_EMAIL = 1; // User numbers stored in Indexes
export const SMB_HYPERALLOC = 2; // No allocation (also storage value for smb_addmsghdr)
export const SMB_NOHASH = 4; // Do not calculate or store hashes

/* Message Types */
export const MSG_TYPE_NORMAL = 0; // Classic message (for reading)
export const MSG_TYPE_POLL = 1; // A poll question
export const MSG_TYPE_BALLOT = 2; // Voter response to poll or normal message
export const MSG_TYPE_POLL_CLOSURE = 3; // Closure of an existing poll

/* Message attributes */
export const MSG_PRIVATE = 1 << 0;
export const MSG_READ = 1 << 1;
export const MSG_PERMANENT = 1 << 2;
export const MSG_LOCKED = 1 << 3;
export const MSG_DELETE = 1 << 4;
export const MSG_ANONYMOUS = 1 << 5;
export const MSG_KILLREAD = 1 << 6;
export const MSG_MODERATED = 1 << 7;
export const MSG_VALIDATED = 1 << 8;
export const MSG_REPLIED = 1 << 9; // User replied to this message
export const MSG_NOREPLY = 1 << 10; // No replies (or bounces) should be sent to the sender
export const MSG_UPVOTE = 1 << 11; // This message is an upvote
export const MSG_DOWNVOTE = 1 << 12; // This message is a downvote
export const MSG_POLL = 1 << 13; // This message is a poll
export const MSG_SPAM = 1 << 14; // This message has been flagged as SPAM

export const MSG_VOTE = MSG_UPVOTE | MSG_DOWNVOTE; // This message is a poll-vote
export const MSG_POLL_CLOSURE = MSG_POLL | MSG_VOTE; // This message is a poll-closure
export const MSG_POLL_VOTE_MASK = MSG_POLL_CLOSURE;

export const MSG_POLL_MAX_ANSWERS = 16;

/* Auxiliary header attributes */
export const MSG_FILEREQUEST = 1 << 0; // File request
export const MSG_FILEATTACH = 1 << 1; // File(s) attached to Msg
export const MSG_MIMEATTACH = 1 << 2; // Truncate file(s) when sent
export const MSG_KILLFILE = 1 << 3; // Delete file(s) when sent
export const MSG_RECEIPTREQ = 1 << 4; // Return receipt requested
export const MSG_CONFIRMREQ = 1 << 5; // Confirmation receipt requested
export const MSG_NODISP = 1 << 6; // Msg may not be displayed to user
export const MSG_HFIELDS_UTF8 = 1 << 13; // Message header fields are UTF-8 encoded
export const POLL_CLOSED = 1 << 24; // Closed to voting
export const POLL_RESULTS_MASK = 3 << 30; // 4 possible values:
export const POLL_RESULTS_SECRET = 3 << 30; // No one but pollster can see results
export const POLL_RESULTS_CLOSED = 2 << 30; // No one but pollster can see results until poll is closed
export const POLL_RESULTS_OPEN = 1 << 30; // Results are visible to everyone always
export const POLL_RESULTS_VOTERS = 0 << 30; // Voters can see results right away, everyone else when closed
export const POLL_RESULTS_SHIFT = 30;

/* Message network attributes */
export const MSG_LOCAL = 1 << 0; // Msg created locally
export const MSG_INTRANSIT = 1 << 1; // Msg is in-transit
export const MSG_SENT = 1 << 2; // Sent to remote
export const MSG_KILLSENT = 1 << 3; // Kill when sent
export const MSG_ARCHIVESENT = 1 << 4; // Archive when sent
export const MSG_HOLD = 1 << 5; // Hold for pick-up
export const MSG_CRASH = 1 << 6; // Crash
export const MSG_IMMEDIATE = 1 << 7; // Send Msg now, ignore restrictions
export const MSG_DIRECT = 1 << 8; // Send directly to destination

/* Net types */
export const NET_NONE = 0; // Local message
export const NET_UNKNOWN = 1; // Networked, but unknown type
export const NET_FIDO = 2; // FidoNet
export const NET_POSTLINK = 3; // PostLink
export const NET_QWK = 4; // QWK
export const NET_INTERNET = 5; // NNTP
export const NET_WWIV = 6; // WWIV
export const NET_MHS = 7; // MHS

/* Agent types */
export const AGENT_PERSON = 0; // Human
export const AGENT_PROCESS = 1; // Unknown process type
export const AGENT_SMBUTIL = 2; // Imported via Synchronet SMBUTIL
export const AGENT_SMTPSYSMSG = 3; // Synchronet SMTP server system message

/* Message Priority */
export const SMB_PRIORITY_UNSPECIFIED = 0;
export const SMB_PRIORITY_HIGHEST = 1;
export const SMB_PRIORITY_HIGH = 2;
export const SMB_PRIORITY_NORMAL = 3;
export const SMB_PRIORITY_LOW = 4;
export const SMB_PRIORITY_LOWEST = 5;

/* Message hfield types */
export const SMB_SUMMARY = 0x61; // Not currently used for messages
export const SMB_COMMENT = 0x62; // Appear in message text, before body
export const SMB_TAGS = 0x69; // Tags (ala hashtags) for a message
export const SMB_TAG_DELIMITER = " "; // Tags are space-separated
export const SMB_POLL_ANSWER = 0xe0; // One poll answer (the subject is the question)

export const FIDOCTRL = 0xa0;
export const FIDOSEENBY = 0xa2;
export const FIDOPATH = 0xa3;
export const RFC822HEADER = 0xb0;
export const SMTPRECEIVED = 0xd3;
