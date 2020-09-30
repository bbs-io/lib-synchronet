import * as SOCK from "../defs/sock";
import { Socket } from "./socket";

export interface ConnectedSocketOptions {
  /**
   * - (default: CONNECTED_DOMAIN.UNSPEC)
   * - IPv4: CONNECTED_DOMAIN.INET
   * - IPv6: CONNECTED_DOMAIN.INET6
   */
  domain?: SOCK.CONNECTED_DOMAIN;

  /**
   * (default: IPPROTO.IP)
   */
  proto?: SOCK.IPPROTO;

  /**
   * - TYPE.STREAM for TCP (default)
   * - TYPE.DGRAM for UDP
   */
  type?: SOCK.TYPE;

  /**
   * the name of the protocol or service the socket is to be used for
   */
  protocol?: string;

  /**
   * (default: 10)
   */
  timeout?: number;

  /**
   * (optional) the name or number of the source port to bind to
   */
  bindport?: string | number;

  /**
   * (optional) the name or number of the source addresses
   * to bind to. The first of each IPv4 or IPv6 type is used
   * for that family.
   */
  bindaddrs?: string | number;
}

/**
 * Class used for outgoing TCP/IP socket communications
 *
 * @since v3.17
 */
export declare class ConnectedSocket extends Socket {
  /**
   * @param hostname name or address for the connected socket
   * @param port number of the port connected to
   * @param options additional connection options
   */
  constructor(hostname: string, port: number, options?: ConnectedSocketOptions);
}
