/**
 * Class used for opening, creating, reading, or writing files on the local file system
 *
 * Special features include:
 *
 * - Exclusive-access files (default) or shared files
 *   - optional record-locking
 *   - buffered or non-buffered I/O
 * - Support for binary files
 *   - native or network byte order (endian)
 *   - automatic Unix-to-Unix (UUE), yEncode (yEnc) or Base64 encoding/decoding
 * - Support for ASCII text files
 *   - supports line-based I/O
 *     - entire file may be read or written as an array of strings
 *     - individual lines may be read or written one line at a time
 *   - supports fixed-length records
 *     - optional end-of-text (etx) character for automatic record padding/termination
 *     - Synchronet .dat files use an etx value of 3 (Ctrl-C)
 *   - supports .ini formated configuration files
 *     - concept and support of root ini sections added in v3.12
 *   - optional ROT13 encoding/translation
 * - Dynamically-calculated industry standard checksums (e.g. CRC-16, CRC-32, MD5)
 *
 * @since v3.10
 *
 * @example ```
 * var f = new File(filename)
 * ```
 */
export declare class File {
  // **************************************************************************
  // PROPERTIES
  // **************************************************************************
  /**
   * filename specified in constructor - READ ONLY
   * @since 3.10
   */
  name: string;

  /**
   * mode string specified in open call - READ ONLY
   * @since 3.10
   */
  mode: string;

  /**
   * true if the file is open or exists (case-insensitive) - READ ONLY
   * @since 3.10
   */
  exists: boolean;

  /**
   * true if the file has been opened successfully - READ ONLY
   * @since 3.10
   */
  is_open: boolean;

  /**
   * true if the current file position is at the end of file - READ ONLY
   * @since 3.10
   */
  eof: boolean;

  /**
   * the last occurred error value (use clear_error to clear) - READ ONLY
   * @since 3.10
   */
  error: number;

  /**
   * the open file descriptor (advanced use only) - READ ONLY
   * @since 3.10
   */
  descriptor: number;

  /**
   * end-of-text character (advanced use only), if non-zero used by read, readln, and write
   * @since 3.10
   */
  etx: number;

  /**
   * set to true to enable debug log output
   * @since 3.10
   */
  debug: boolean;

  /**
   * the current file position (offset in bytes), change value to seek within file
   * @since 3.10
   */
  position: number;

  /**
   * last modified date/time (in time_t format)
   * @since 3.11
   */
  date: number;

  /**
   * the current length of the file (in bytes)
   * @since 3.10
   */
  length: number;

  /**
   * file type/mode flags (i.e. struct stat.st_mode value, compatible with file_chmod())
   * @since 3.10
   */
  attributes: number;

  /**
   * set to true if binary data is to be written and read in Network Byte Order (big end first)
   * @since 3.11
   */
  network_byte_order: boolean;

  /**
   * set to true to enable automatic ROT13 translation of text
   * @since 3.11
   */
  rot13: boolean;

  /**
   * set to true to enable automatic Unix-to-Unix encode and decode on read and write calls
   * @since 3.11
   */
  uue: boolean;

  /**
   * set to true to enable automatic yEnc encode and decode on read and write calls
   * @since 3.11
   */
  yenc: boolean;

  /**
   * set to true to enable automatic Base64 encode and decode on read and write calls
   * @since 3.11
   */
  base64: boolean;

  /**
   * calculated 16-bit CRC of file contents - READ ONLY
   * @since 3.11
   */
  crc16: number;

  /**
   * calculated 32-bit CRC of file contents - READ ONLY
   * @since 3.11
   */
  crc32: number;

  /**
   * calculated 32-bit checksum of file contents - READ ONLY
   * @since 3.11
   */
  chksum: number;

  /**
   * calculated 128-bit MD5 digest of file contents as hexadecimal string - READ ONLY
   * @since 3.11
   */
  md5_hex: undefined;

  /**
   * calculated 128-bit MD5 digest of file contents as base64-encoded string - READ ONLY
   * @since 3.11
   */
  md5_base64: undefined;

  /**
   * ini style: minimum key length (for left-justified white-space padded keys)
   * @since 3.17
   */
  ini_key_len: number;

  // **************************************************************************
  // METHODS
  // **************************************************************************
}
