/**
 *  @typedef {MergeTypes.Linter} Linter
 *  @typedef {MergeTypes.Config} Config
 *
 *  @typedef {MergeTypes.Linter.LanguageOptions} LanguageOptions
 *  @typedef {MergeTypes.Linter.LinterOptions} LinterOptions
 *  @typedef {MergeTypes.Linter.Processor} Processor
 *  @typedef {MergeTypes.Linter.Plugins} Plugins
 *  @typedef {MergeTypes.Linter.Rules} Rules
 *  @typedef {MergeTypes.Linter.Settings} Settings
 *
 *  @typedef {Record<string, never>} PlainObject
 */

/**
 *  name - A name for the configuration object. This is used in error messages and config inspector to help identify which configuration object is being used. (Naming Convention)
 *  files - An array of glob patterns indicating the files that the configuration object should apply to. If not specified, the configuration object applies to all files matched by any other configuration object.
 *  ignores - An array of glob patterns indicating the files that the configuration object should not apply to. If not specified, the configuration object applies to all files matched by files. If ignores is used without any other keys in the configuration object, then the patterns act as global ignores.
 *  languageOptions - An object containing settings related to how JavaScript is configured for linting.
 *    - ecmaVersion - The version of ECMAScript to support. May be any year (i.e., 2022) or version (i.e., 5). Set to "latest" for the most recent supported version. (default: "latest")
 *    - sourceType - The type of JavaScript source code. Possible values are "script" for traditional script files, "module" for ECMAScript modules (ESM), and "commonjs" for CommonJS files. (default: "module" for .js and .mjs files; "commonjs" for .cjs files)
 *    - globals - An object specifying additional objects that should be added to the global scope during linting.
 *    - parser - An object containing a parse() method or a parseForESLint() method. (default: espree)
 *    - parserOptions - An object specifying additional options that are passed directly to the parse() or parseForESLint() method on the parser. The available options are parser-dependent.
 *  linterOptions - An object containing settings related to the linting process.
 *    - noInlineConfig - A Boolean value indicating if inline configuration is allowed.
 *    - reportUnusedDisableDirectives - A severity string indicating if and how unused disable and enable directives should be tracked and reported. For legacy compatibility, true is equivalent to "warn" and false is equivalent to "off". (default: "warn").
 *  processor - Either an object containing preprocess() and postprocess() methods or a string indicating the name of a processor inside of a plugin (i.e., "pluginName/processorName").
 *  plugins - An object containing a name-value mapping of plugin names to plugin objects. When files is specified, these plugins are only available to the matching files.
 *  rules - An object containing the configured rules. When files or ignores are specified, these rule configurations are only available to the matching files.
 *  settings - An object containing name-value pairs of information that should be available to all rules.
 */

/**
 *  @param {Config} config
 *  @returns {config is { languageOptions: { parser: MergeTypes.LanguageOptions.Parser } }}
 */
function hasLanguageOptionsParser ({ languageOptions: { parser } = {} }) {
  return Boolean(parser)
}

/**
 *  @param {Config} config
 *  @returns {MergeTypes.LanguageOptions.Parser | undefined}
 */
function getLanguageOptionsParser ({ languageOptions: { parser } = {} }) {
  return parser
}

/**
 * @param {[key: string, value: unknown]} entry
 * @returns {boolean}
 */
function excludeParserByEntriesKey ([key]) {
  return key !== 'parser'
}

/**
 *  @param {Config} config
 *  @returns {Omit<LanguageOptions, 'parser'>}
 */
function getLanguageOptionsWithoutParser ({ languageOptions = {} }) {
  const entries = Object.entries(languageOptions)

  return (
    Object.fromEntries(
      entries.filter(excludeParserByEntriesKey)
    )
  )
}

/**
 *  @param {Config} config
 *  @returns {config is { languageOptions: LanguageOptions }}
 */
export function hasLanguageOptions ({ languageOptions }) {
  return Boolean(languageOptions)
}

/**
 *  @param {Config} config
 *  @returns {config is { linterOptions: LinterOptions }}
 */
export function hasLinterOptions ({ linterOptions }) {
  return Boolean(linterOptions)
}

/**
 *  @param {Config} config
 *  @returns {config is { processor: Processor }}
 */
export function hasProcessor ({ processor }) {
  return Boolean(processor)
}

/**
 *  @param {Config} config
 *  @returns {config is { plugins: Plugins }}
 */
export function hasPlugins ({ plugins }) {
  return Boolean(plugins)
}

/**
 *  @param {Config} config
 *  @returns {config is { rules: Rules }}
 */
export function hasRules ({ rules }) {
  return Boolean(rules)
}

/**
 *  @param {Config} config
 *  @returns {config is { settings: Settings }}
 */
export function hasSettings ({ settings }) {
  return Boolean(settings)
}

/**
 *  @param {Config} config
 *  @returns {LanguageOptions | PlainObject}
 */
export function getLanguageOptions ({ languageOptions = {} }) {
  return languageOptions
}

/**
 *  @param {Config} config
 *  @returns {LinterOptions}
 */
export function getLinterOptions ({ linterOptions = {} }) {
  return linterOptions
}

/**
 *  @param {Config} config
 *  @returns {Processor | PlainObject}
 */
export function getProcessor ({ processor = {} }) {
  return processor
}

/**
 *  @param {Config} config
 *  @returns {Plugins | PlainObject}
 */
export function getPlugins ({ plugins = {} }) {
  return plugins
}

/**
 *  @param {Config} config
 *  @returns {Rules | PlainObject}
 */
export function getRules ({ rules = {} }) {
  return rules
}

/**
 *  @param {Config} config
 *  @returns {Settings | PlainObject}
 */
export function getSettings ({ settings = {} }) {
  return settings
}

/**
 *  @param {Config} [alpha]
 *  @param {Config} [omega]
 *  @returns {LanguageOptions}
 */
export function mergeLanguageOptions (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        hasLanguageOptionsParser(alpha) ? { parser: getLanguageOptionsParser(alpha) } : {},
        structuredClone(getLanguageOptionsWithoutParser(alpha)),
        getLanguageOptions(omega)
      )
  )
}

/**
 *  @param {Config} [alpha]
 *  @param {Config} [omega]
 *  @returns {LinterOptions}
 */
export function mergeLinterOptions (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        structuredClone(getLinterOptions(alpha)),
        getLinterOptions(omega)
      )
  )
}

/**
 *  @param {Config} [alpha]
 *  @param {Config} [omega]
 *  @returns {Processor}
 */
export function mergeProcessor (alpha = {}, omega = {}) {
  /**
   *  There may be structures that can't be duplicated in a deep clone with `structuredClone`
   *  but we just want to override `processor` wholesale so spread a shallow clone
   */
  return {
    ...getProcessor(alpha),
    ...getProcessor(omega)
  }
}

/**
 *  @param {Config} [alpha]
 *  @param {Config} [omega]
 *  @returns {Plugins}
 */
export function mergePlugins (alpha = {}, omega = {}) {
  /**
   *  There may be structures that can't be duplicated in a deep clone with `structuredClone`
   *  but we just want to override `plugins` wholesale so spread a shallow clone
   */
  return {
    ...getPlugins(alpha),
    ...getPlugins(omega)
  }
}

/**
 *  @param {Config} [alpha]
 *  @param {Config} [omega]
 *  @returns {Rules}
 */
export function mergeRules (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        structuredClone(getRules(alpha)),
        getRules(omega)
      )
  )
}

/**
 *  @param {Config} [alpha]
 *  @param {Config} [omega]
 *  @returns {Settings}
 */
export function mergeSettings (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        structuredClone(getSettings(alpha)),
        getSettings(omega)
      )
  )
}

/**
 *  Merge user config with a flat config element
 *
 *  @param {Config} [alpha]
 *  @param {Config} [omega]
 *  @returns {Config}
 */
export default function merge (alpha = {}, omega = {}) {
  return {
    ...alpha,
    ...omega,
    ...(hasLanguageOptions(alpha) || hasLanguageOptions(omega) ? { languageOptions: mergeLanguageOptions(alpha, omega) } : {}),
    ...(hasLinterOptions(alpha) || hasLinterOptions(omega) ? { linterOptions: mergeLinterOptions(alpha, omega) } : {}),
    ...(hasProcessor(alpha) || hasProcessor(omega) ? { processor: mergeProcessor(alpha, omega) } : {}),
    ...(hasPlugins(alpha) || hasPlugins(omega) ? { plugins: mergePlugins(alpha, omega) } : {}),
    ...(hasRules(alpha) || hasRules(omega) ? { rules: mergeRules(alpha, omega) } : {}),
    ...(hasSettings(alpha) || hasSettings(omega) ? { settings: mergeSettings(alpha, omega) } : {})
  }
}
