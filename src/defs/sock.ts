/*
 * Constants and structures defined by the internet system,
 * Per RFC 790, September 1981, taken from the BSD file netinet/in.h.
 */

/* $Id: sockdefs.js,v 1.8 2020/04/09 19:16:46 deuce Exp $ */

/*
 * Protocols
 */
export const IPPROTO_IP = 0; /* dummy for IP */
export const IPPROTO_ICMP = 1; /* control message protocol */
export const IPPROTO_IGMP = 2; /* internet group management protocol */
export const IPPROTO_GGP = 3; /* gateway^2 (deprecated) */
export const IPPROTO_TCP = 6; /* tcp */
export const IPPROTO_PUP = 12; /* pup */
export const IPPROTO_UDP = 17; /* user datagram protocol */
export const IPPROTO_IDP = 22; /* xns idp */
export const IPPROTO_ND = 77; /* UNOFFICIAL net disk proto */

export const IPPROTO_RAW = 255; /* raw IP packet */
export const IPPROTO_MAX = 256;

/*
 * Port/socket numbers: network standard functions
 */
export const IPPORT_ECHO = 7;
export const IPPORT_DISCARD = 9;
export const IPPORT_SYSTAT = 11;
export const IPPORT_DAYTIME = 13;
export const IPPORT_NETSTAT = 15;
export const IPPORT_MSP = 18; /* Message Send Protocol */
export const IPPORT_FTP = 21;
export const IPPORT_TELNET = 23;
export const IPPORT_SMTP = 25;
export const IPPORT_TIMESERVER = 37;
export const IPPORT_NAMESERVER = 42;
export const IPPORT_WHOIS = 43;
export const IPPORT_MTP = 57;

/*
 * Port/socket numbers: host specific functions
 */
export const IPPORT_TFTP = 69;
export const IPPORT_RJE = 77;
export const IPPORT_FINGER = 79;
export const IPPORT_TTYLINK = 87;
export const IPPORT_SUPDUP = 95;

/*
 * UNIX TCP sockets
 */
export const IPPORT_EXECSERVER = 512;
export const IPPORT_LOGINSERVER = 513;
export const IPPORT_CMDSERVER = 514;
export const IPPORT_EFSSERVER = 520;

/*
 * UNIX UDP sockets
 */
export const IPPORT_BIFFUDP = 512;
export const IPPORT_WHOSERVER = 513;
export const IPPORT_ROUTESERVER = 520;
/* 520+1 also used */

/*
 * Ports < IPPORT_RESERVED are reserved for
 * privileged processes (e.g. root).
 */
export const IPPORT_RESERVED = 1024;

/*
 * Types
 */
export const SOCK_STREAM = 1; /* stream socket */
export const SOCK_DGRAM = 2; /* datagram socket */
export const SOCK_RAW = 3; /* raw-protocol interface */
export const SOCK_RDM = 4; /* reliably-delivered message */
export const SOCK_SEQPACKET = 5; /* sequenced packet stream */

// TODO: Figure out how to make this work in typescript?
// if (Socket.PF_INET !== undefined) export const PF_INET = Socket.PF_INET;
// if (Socket.PF_INET6 !== undefined) export const PF_INET6 = Socket.PF_INET6;
// if (Socket.AF_INET !== undefined) export const AF_INET = Socket.AF_INET;
// if (Socket.AF_INET6 !== undefined) export const AF_INET6 = Socket.AF_INET6;

/* Option name parameter to Socket.getoption/setoption */
export const sockopts = [
  "TYPE",
  "DEBUG",
  "LINGER",
  "SNDBUF",
  "RCVBUF",
  "SNDLOWAT",
  "RCVLOWAT",
  "SNDTIMEO",
  "RCVTIMEO",
  "KEEPALIVE",
  "REUSEADDR",
  "DONTROUTE",
  "BROADCAST",
  "OOBINLINE",
  "ACCEPTCONN",
  "TCP_NODELAY",
];
