export enum ALGO {
  NONE = CryptContext.ALGO.NONE,
  DES = CryptContext.ALGO.DES,
  "3DES" = CryptContext.ALGO["3DES"],
  IDEA = CryptContext.ALGO.IDEA,
  CAST = CryptContext.ALGO.CAST,
  RC2 = CryptContext.ALGO.RC2,
  RC4 = CryptContext.ALGO.RC4,
  AES = CryptContext.ALGO.AES,
  DH = CryptContext.ALGO.DH,
  RSA = CryptContext.ALGO.RSA,
  DSA = CryptContext.ALGO.DSA,
  ELGAMAL = CryptContext.ALGO.ELGAMAL,
  ECDSA = CryptContext.ALGO.ECDSA,
  ECDH = CryptContext.ALGO.ECDH,
  MD5 = CryptContext.ALGO.MD5,
  SHA1 = CryptContext.ALGO.SHA1,
  SHA2 = CryptContext.ALGO.SHA2,
  SHAng = CryptContext.ALGO.SHAng,
  "HMAC-SHA1" = CryptContext.ALGO["HMAC-SHA1"],
  "HMAC-SHA2" = CryptContext.ALGO["HMAC-SHA2"],
  "HMAC-SHAng" = CryptContext.ALGO["HMAC-SHAng"],
}

export enum MODE {
  None = CryptContext.MODE.None,
  ECB = CryptContext.MODE.ECB,
  CBC = CryptContext.MODE.CBC,
  CFB = CryptContext.MODE.CFB,
  GCM = CryptContext.MODE.GCM,
}

/**
 * Class used for encryption/decryption - introduced in v3.16b
 *
 * To create a new CryptContext object: var c = new CryptContext('algorithm')
 * where algorithm is a property of CryptContext.ALGO
 */
export declare class CryptContext {
  // **************************************************************************
  // STATIC PROPERTIES
  // **************************************************************************

  /**
   * Use specific/expected values from ALGO enum
   */
  static ALGO: Record<string, number>;

  /**
   * Use specific/expected values from MODE enum
   */
  static MODE: Record<string, number>;

  // **************************************************************************
  // PROPERTIES
  // **************************************************************************
  /**
   * Algorithm constant (CryptContext.ALGO.XXX):
   * @since 3.16
   */
  algo: ALGO;

  /**
   * Cipher block size in bytes
   * @since 3.16
   */
  blocksize: number;

  /**
   * Output of hasing algorithms (ie: MD5, SHA1, etc)
   * @since 3.16
   */
  hashvalue: any;

  /**
   * Cipher IV
   * @since 3.16
   */
  iv: any;

  /**
   * Cipher IV size in bytes
   * @since 3.16
   */
  ivsize: number;

  /**
   * The keying algorithm used to derive the key
   * @since 3.16
   */
  keying_algo: any;

  /**
   * The number of iterates used to derive the key
   * @since 3.16
   */
  keying_iterations: number;

  /**
   * The salt value used to derive an encryption key from a key (Length must be between 8 and 64)
   * @since 3.16
   */
  keying_salt: any;

  /**
   * Key size in bytes
   * @since 3.16
   */
  keysize: number;

  /**
   * Key label
   * @since 3.16
   */
  label: any;

  /**
   * Mode constant (CryptContext.MODE.XXX):
   * @since 3.16
   */
  mode: MODE;

  /**
   * Algorithm name
   * @since 3.16
   */
  algo_name: string;

  /**
   * Mode name
   * @since 3.16
   */
  mode_name: string;

  // **************************************************************************
  // METHODS
  // **************************************************************************
}
