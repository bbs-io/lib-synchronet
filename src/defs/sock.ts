/*
 * Constants and structures defined by the internet system,
 * Per RFC 790, September 1981, taken from the BSD file netinet/in.h.
 */

// These values come from the Syncrhonet BBS Socket Class
declare class Socket {
  static PF_UNSPEC: number;
  static PF_INET: number;
  static PF_INET6: number;
  static AF_INET: number;
  static AF_INET6: number;
}

/*
 * Protocols
 */
export enum IPPROTO {
  IP = 0, // dummy for IP
  ICMP = 1, // control message protocol
  IGMP = 2, // internet group management protocol
  GGP = 3, // gateway^2 (deprecated)
  TCP = 6, // tcp
  PUP = 12, // pup
  UDP = 17, // user datagram protocol
  IDP = 22, // xns idp
  ND = 77, // UNOFFICIAL net disk proto

  RAW = 255, // raw IP packet
  MAX = 256,
}

/**
 * IP Port Functions
 */
export enum IPPORT {
  /*
   * Port/socket numbers: network standard functions
   */
  ECHO = 7,
  DISCARD = 9,
  SYSTAT = 11,
  DAYTIME = 13,
  NETSTAT = 15,
  MSP = 18 /* Message Send Protocol */,
  FTP = 21,
  TELNET = 23,
  SMTP = 25,
  TIMESERVER = 37,
  NAMESERVER = 42,
  WHOIS = 43,
  MTP = 57,

  /*
   * Port/socket numbers: host specific functions
   */
  TFTP = 69,
  RJE = 77,
  FINGER = 79,
  TTYLINK = 87,
  SUPDUP = 95,

  /*
   * UNIX TCP sockets
   */
  EXECSERVER = 512,
  LOGINSERVER = 513,
  CMDSERVER = 514,
  EFSSERVER = 520,

  /*
   * UNIX UDP sockets
   */
  BIFFUDP = 512,
  WHOSERVER = 513,
  ROUTESERVER = 520,
  /* 520+1 also used */

  /*
   * Ports < IPPORT_RESERVED are reserved for
   * privileged processes (e.g. root).
   */
  RESERVED = 1024,
}

/*
 * Types
 */
export enum TYPE {
  STREAM = 1 /* stream socket */,
  DGRAM = 2 /* datagram socket */,
  RAW = 3 /* raw-protocol interface */,
  RDM = 4 /* reliably-delivered message */,
  SEQPACKET = 5 /* sequenced packet stream */,
}

/**
 * ListeningSocket Domain
 */
export enum LISTENING_DOMAIN {
  UNSPEC = Socket.PF_UNSPEC,
  INET = Socket.PF_INET,
  INET6 = Socket.PF_INET6,
}

/**
 * ConnectedSocket Domain
 */
export enum CONNECTED_DOMAIN {
  UNSPEC = Socket.PF_UNSPEC,
  INET = Socket.AF_INET,
  INET6 = Socket.AF_INET6,
}

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
