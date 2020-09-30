/**
 * JavaScript engine internal control object
 *
 * @since v3.11
 */
export interface IJs {
  // **************************************************************************
  // PROPERTIES
  // **************************************************************************

  /**
   * JavaScript engine version information (AKA system.js_version)
   * @since 3.11
   */
  version: string;

  /**
   * set to false to disable the automatic termination of the script upon external request
   * @since 3.11
   */
  auto_terminate: boolean;

  /**
   * termination has been requested (stop execution as soon as possible)
   * @since 3.11
   */
  terminated: boolean;

  /**
   * number of operation callbacks performed in this runtime
   * @since 3.16
   */
  counter: number;

  /**
   * maximum number of operation callbacks, used for infinite-loop detection (0=disabled)
   * @since 3.16
   */
  time_limit: number;

  /**
   * interval of periodic time-slice yields (lower number=higher frequency, 0=disabled)
   * @since 3.11
   */
  yield_interval: number;

  /**
   * interval of periodic garbage collection attempts (lower number=higher frequency, 0=disabled)
   * @since 3.11
   */
  gc_interval: number;

  /**
   * number of garbage collections attempted in this runtime - READ ONLY
   * @since 3.11
   */
  gc_attempts: number;

  /**
   * global (top level) object - READ ONLY
   * @since 3.14
   */
  global: object;

  /**
   * full path and filename of JS file executed
   */
  exec_path: string;

  /**
   * JS filename executed (with no path)
   */
  exec_file: string;

  /**
   * directory of executed JS file
   */
  exec_dir: string;

  /**
   * Either the configured startup directory in SCFG (for externals) or the cwd when jsexec is started
   */
  startup_dir: string;

  /**
   * global scope for this script
   */
  scope: object;

  /**
   * load() search path array.
   * For relative load paths (e.g. not beginning with '/' or '\'),
   * the path is assumed to be a sub-directory of the (configurable)
   * mods or exec directories and is searched accordingly.
   *
   * So, by default, load("somefile.js") will search in this order:
   * - mods/load/somefile.js
   * - exec/load/somefile.js
   * - mods/somefile.js
   * - exec/somefile.js
   */
  load_path_list: object;

  // **************************************************************************
  // METHODS
  // **************************************************************************

  /**
   * evaluate a JavaScript string in its own (secure) context
   *
   * @param script script to evaluate
   * @returns script result
   * @since 3.11
   */
  eval(script: string): any;

  /**
   * perform a garbage collection operation (freeing memory for unused allocated objects),
   *
   * @param forced (default: true) when true, a garbage collection is always performed, otherwise it is only performed if deemed appropriate by the JavaScript engine
   * @since 3.11
   */
  gc(forced?: boolean): void;

  /**
   * add a string to evaluate/execute (LIFO stack) upon script's termination
   *
   * @param to_eval script literal to evaluate/execute
   * @since 3.13
   */
  on_exit(to_eval: string): void;

  /**
   * report an error using the standard JavaScript error reporting mechanism (including script filename and line number)
   *
   * @param error error to report
   * @param fatal (default: false) when true, immediately terminates script
   * @since 3.13
   */
  report_error(error: any, fatal?: boolean): void;

  /**
   * return the parent of the specified object
   *
   * @param obj object to retrieve the parent for
   * @returns parent object
   * @since 3.14
   */
  get_parent(obj: any): any;

  /**
   * get the memory allocation of an object (forces GC)
   *
   * @param obj object to retrieve the size of
   * @return size in bytes of the object in memory
   * @since 3.16
   */
  get_size(obj: any): number;

  /**
   * flatten a string, optimizing allocated memory used for concatenated strings
   *
   * @param str string to flatten
   * @since 3.16
   */
  flatten_string(str?: string): void;

  /**
   * execute a script within the specified scope.
   * The main difference between this method and `load()`
   * is that scripts called this way can call `exit()`
   * without terminating the caller. If it does, any
   * `on_exit()` handlers will be evaluated in scripts
   * scope when the script exists.
   *
   * NOTE: to get a child of the current scope, you
   * need to create an object in the current scope.
   * An anonymous object can be created using
   * `new function(){}`.
   *
   * NOTE: Use `js.exec.apply()` if you need to pass a
   * variable number of arguments to the executed script
   *
   * @param filename file path/name to execute
   * @param startup_dir (default: current) working directory to use
   * @param scope (optional) context to execute the script within
   * @returns exit status
   * @since 3.17c
   */
  exec(filename: string, startup_dir?: string, ...scope: any[]): number;
}
