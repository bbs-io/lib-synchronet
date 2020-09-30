/**
 * Class used for storing CryptContext keys
 *
 * To create a new CryptKeyset object: var c = new CryptKeyset('filename' [ opts = CryptKeyset.KEYOPT.NONE ])
 * where filename is the name of the file to create, and opts is a value from CryptKeyset.KEYOPT
 *
 * @since v3.16b
 */
export declare class CryptKeyset {
  // **************************************************************************
  // STATIC PROPERTIES
  // **************************************************************************
  static KEYOPT: Record<string, number>;

  // **************************************************************************
  // CONSTRUCTOR
  // **************************************************************************

  /**
   * @param filename name of the file to create
   * @param opts (default: CryptKeySet.KEYOPT.NONE) value from CryptKeyset.KEYOPT ???
   */
  constructor(filename: string, opts?: number);

  // **************************************************************************
  // PROPERTIES
  // **************************************************************************

  // No Properties defined

  // **************************************************************************
  // METHODS
  // **************************************************************************
}
