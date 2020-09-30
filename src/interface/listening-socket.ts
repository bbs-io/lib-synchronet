import * as SOCK from "../defs/sock";
import { Socket } from "./socket";

export interface ListeningSocketOptions {
  /**
   * (default: LISTENING_DOMAIN.UNSPEC) (PF_UNSPEC)
   *
   * - IPv4: LISTENING_DOMAIN.INET (AF_INET)
   * - IPv6: LISTENING_DOMAIN.INET6 (AF_INET6)
   */
  domain?: SOCK.LISTENING_DOMAIN;

  /**
   * (default: IPPROTO.IP)
   */
  proto?: SOCK.IPPROTO;

  /**
   * (default: TYPE.STREAM)
   *
   * - TCP: TYPE.STREAM
   * - UDP: TYPE.DGRAM
   */
  type?: SOCK.TYPE;

  /**
   * (default: 0) number of times to retry binding
   */
  retry_count?: number;

  /**
   * (default: 15) seconds to wait before a retry
   */
  retry_delay?: number;
}

/**
 * Class used for incoming TCP/IP socket communications - introduced in v3.17
 *
 * @since v3.17
 */
export declare class ListeningSocket extends Socket {
  /**
   * @param interface An array or strings or a single string of hostnames or address optionally including a :port suffix
   * @param port a port to use when the interface doesn't specify one
   * @param protocol protocol name, used for socket options and logging.
   * @param options additional connection options
   */
  constructor(
    interface: string | string[],
    port: number,
    protocol: string,
    options?: ListeningSocketOptions
  );
}
