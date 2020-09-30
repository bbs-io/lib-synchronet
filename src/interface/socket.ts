/**
 * Class used for TCP/IP socket communications
 *
 * To create a new Socket object: load('sockdefs.js'); var s = new Socket(type, protocol ,ipv6=false)
 * where type = SOCK_STREAM for TCP (default) or SOCK_DGRAM for UDP
 * and protocol (optional) = the name of the protocol or service the socket is to be used for
 * To create a socket from an existing socket descriptor: var s = new Socket(true, descriptor)
 * where descriptor is the numerical value of an existing valid socket descriptor
 *
 * @since v3.10
 */
export declare class Socket {
  constructor(type: any, protocol: any, ipv6: boolean);

  // **************************************************************************
  // STATIC PROPERTIES
  // **************************************************************************
  static PF_UNSPEC: number;
  static PF_INET: number;
  static PF_INET6: number;
  static AF_INET: number;
  static AF_INET6: number;

  // **************************************************************************
  // PROPERTIES
  // **************************************************************************
  /**
   * error status for the last socket operation that failed - READ ONLY
   * @since 3.11
   */
  error: number;

  /**
   * error description for the last socket operation that failed - READ ONLY
   * @since 3.18
   */
  error_str: string;

  /**
   * true if socket is in a connected state - READ ONLY
   * @since 3.10
   */
  is_connected: boolean;

  /**
   * true if socket can accept written data - Setting to false will shutdown the write end of the socket.
   * @since 3.11
   */
  is_writeable: boolean;

  /**
   * alias for is_writeable
   * @since 3.12
   */
  is_writable: boolean;

  /**
   * true if data is waiting to be read from socket - READ ONLY
   * @since 3.10
   */
  data_waiting: boolean;

  /**
   * number of bytes waiting to be read - TLS sockets will never return more than 1 - READ ONLY
   * @since 3.10
   */
  nread: number;

  /**
   * enable debug logging
   * @since 3.10
   */
  debug: number;

  /**
   * socket descriptor (advanced uses only)
   * @since 3.10
   */
  descriptor: number;

  /**
   * use non-blocking operation (default is false)
   * @since 3.10
   */
  nonblocking: boolean;

  /**
   * local IP address (string in dotted-decimal format)
   * @since 3.10
   */
  local_ip_address: string;

  /**
   * local TCP or UDP port number
   * @since 3.10
   */
  local_port: number;

  /**
   * remote IP address (string in dotted-decimal format)
   * @since 3.10
   */
  remote_ip_address: string;

  /**
   * remote TCP or UDP port number
   * @since 3.10
   */
  remote_port: number;

  /**
   * socket type, SOCK_STREAM (TCP) or SOCK_DGRAM (UDP)
   * @since 3.10
   */
  type: number;

  /**
   * socket protocol family, PF_INET (IPv4) or PF_INET6 (IPv6)
   * @since 3.18
   */
  family: number;

  /**
   * true if binary data is to be sent in Network Byte Order (big end first), default is true
   * @since 3.11
   */
  network_byte_order: boolean;

  /**
   * set to true to enable SSL as a client on the socket
   * @since 3.16
   */
  ssl_session: boolean;

  /**
   * set to true to enable SSL as a server on the socket
   * @since 3.16
   */
  ssl_server: boolean;

  /**
   * array of socket option names supported by the current platform
   * @since N/A
   */
  option_list: object;

  // **************************************************************************
  // METHODS
  // **************************************************************************
}
