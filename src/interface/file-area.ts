export enum FM {
  NONE = 0,
  EXTDESC = 1,
  ANON = 1 << 1,
}

export interface IFileAreaDirectory {
  /**
   * into dir_list array (or -1 if not in array) (introduced in v3.12)
   * @since index
   */
  index: number;

  /**
   * number for this directory
   * @since unique
   */
  number: number;

  /**
   * index (introduced in v3.12)
   * @since library
   */
  lib_index: number;

  /**
   * number
   * @since library
   */
  lib_number: number;

  /**
   * name (introduced in v3.12)
   * @since library
   */
  lib_name: string;

  /**
   * internal code
   * @since directory
   */
  code: string;

  /**
   * name
   * @since directory
   */
  name: string;

  /**
   * description
   * @since directory
   */
  description: string;

  /**
   * file storage location
   * @since directory
   */
  path: string;

  /**
   * access requirements
   * @since directory
   */
  ars: string;

  /**
   * upload requirements
   * @since directory
   */
  upload_ars: string;

  /**
   * download requirements
   * @since directory
   */
  download_ars: string;

  /**
   * exemption requirements
   * @since directory
   */
  exempt_ars: string;

  /**
   * operator requirements
   * @since directory
   */
  operator_ars: string;

  /**
   * file extensions (comma delimited)
   * @since allowed
   */
  extensions: string;

  /**
   * semaphore file
   * @since upload
   */
  upload_sem: string;

  /**
   * data storage location
   * @since directory
   */
  data_dir: string;

  /**
   * options (bitfield)
   * @since toggle
   */
  settings: number;

  /**
   * (slow storage) device number
   * @since sequential
   */
  seqdev: number;

  /**
   * order (see SORT_* in sbbsdefs.js for valid values)
   * @since sort
   */
  sort: number;

  /**
   * maximum number of files
   * @since configured
   */
  max_files: number;

  /**
   * maximum age (in days) of files before expiration
   * @since configured
   */
  max_age: number;

  /**
   * of file size awarded uploader in credits upon file upload
   * @since percent
   */
  upload_credit_pct: number;

  /**
   * of file size awarded uploader in credits upon subsequent downloads
   * @since percent
   */
  download_credit_pct: number;

  /**
   * link (for HTML index)
   * @since directory
   */
  link: string;

  /**
   * has sufficient access to view this directory (e.g. list files) (introduced in v3.18)
   * @since user
   */
  can_access: boolean;

  /**
   * has sufficient access to upload files to this directory
   * @since user
   */
  can_upload: boolean;

  /**
   * has sufficient access to download files from this directory
   * @since user
   */
  can_download: boolean;

  /**
   * is exempt from download credit costs (or the directory is configured for free downloads)
   * @since user
   */
  is_exempt: boolean;

  /**
   * has operator access to this directory
   * @since user
   */
  is_operator: boolean;

  /**
   * is for offline storage (introduced in v3.14)
   * @since directory
   */
  is_offline: boolean;

  /**
   * is for uploads only (introduced in v3.14)
   * @since directory
   */
  is_upload: boolean;

  /**
   * is for uploads to sysop only (introduced in v3.14)
   * @since directory
   */
  is_sysop: boolean;
}

export interface IFileAreaLibrary {
  /**
   * into lib_list array (or -1 if not in array) (introduced in v3.12)
   * @since index
   */
  index: number;

  /**
   * number for this library
   * @since unique
   */
  number: number;

  /**
   * name
   * @since library
   */
  name: string;

  /**
   * description
   * @since library
   */
  description: string;

  /**
   * access requirements
   * @since library
   */
  ars: string;

  /**
   * link (for HTML index)
   * @since library
   */
  link: string;

  /**
   * has sufficient access to this library's directories (introduced in v3.18)
   * @since user
   */
  can_access: boolean;

  /**
   * File Transfer Directories (current user has access to) - introduced in v3.10
   */
  lib_list: IFileAreaDirectory[];
}

/**
 * File Transfer Areas
 *
 * @since v3.10
 */
export interface IFileArea {
  // **************************************************************************
  // PROPERTIES
  // **************************************************************************
  /**
   * amount of available disk space (in kilobytes) required for user uploads to be allowed
   * @since v3.10
   */
  min_diskspace: number;

  /**
   * area settings (bitfield)
   * @since v3.10
   */
  settings: FM;

  /**
   * of alternative file paths. NOTE: this array is zero-based, but alt path fields are one-based.
   * @since v3.10
   */
  alt_paths: string[];

  /**
   * Associative array of all libraries (use name as index)
   * @since v3.12
   */
  lib: Record<string, IFileAreaLibrary>;

  /**
   * Associative array of all directories (use internal code as index)
   * @since v3.11
   */
  dir: Record<string, IFileAreaDirectory>;

  /**
   * File Transfer Libraries (current user has access to)
   * @since v3.10
   */
  lib_list: IFileAreaLibrary[];
}
