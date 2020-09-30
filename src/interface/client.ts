/**
 * Represents a TCP/IP client session
 * @since v3.10
 */
export interface IClient {
  /**
   * client's IPv4 or IPv6 address
   * @since 3.10
   */
  ip_address: string;

  /**
   * client's host name (up to 64 characters)
   * @since 3.10
   */
  host_name: string;

  /**
   * client's TCP or UDP port number
   * @since 3.10
   */
  port: number;

  /**
   * date/time of initial connection (in time_t format)
   * @since 3.10
   */
  connect_time: number;

  /**
   * protocol/service name (e.g. 'Telnet', 'FTP', etc.)
   * @since 3.10
   */
  protocol: string;

  /**
   * user's name/alias
   * @since 3.10
   */
  user_name: string;

  /**
   * user's number (non-zero if logged in)
   * @since 3.17c
   */
  user_number: number;

  /**
   * instance of Socket class representing client's TCP/IP connection
   * @since N/A
   */
  socket: object;
}
