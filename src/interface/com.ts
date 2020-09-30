/**
 * Class used for serial port communications
 * @since v3.15b
 */
export declare class COM {
  /**
   * @param device
   *   device to open for communication
   *
   *   - windows: use `COMx`, ex: `"COM1"`
   *   - nix: use device path, ex: `"/dev/tty0"`
   */
  constructor(device: string);

  // **************************************************************************
  // PROPERTIES
  // **************************************************************************

  /**
   * error status for the last COM operation that failed - READ ONLY
   * @since 3.15
   */
  error: number;

  /**
   * true if port is in a connected state - READ ONLY
   * @since 3.15
   */
  is_open: boolean;

  /**
   * enable debug logging
   * @since 3.15
   */
  debug: boolean;

  /**
   * COM handle (advanced uses only)
   * @since 3.15
   */
  descriptor: number;

  /**
   * true if binary data is to be sent in Network Byte Order (big end first), default is true
   * @since 3.15
   */
  network_byte_order: boolean;

  /**
   * COM port Baud rate
   * @since 3.15
   */
  baud_rate: number;

  /**
   * Device name
   * @since 3.15
   */
  device: string;

  /**
   * Data Terminal Ready
   * @since 3.15
   */
  dtr: boolean;

  /**
   * Clear To Send
   * @since 3.15
   */
  cts: boolean;

  /**
   * Data Set Ready
   * @since 3.15
   */
  dsr: boolean;

  /**
   * Ring Indicator
   * @since 3.15
   */
  ring: boolean;

  /**
   * Data Carrier Detect
   * @since 3.15
   */
  dcd: boolean;

  // **************************************************************************
  // METHODS
  // **************************************************************************
}
