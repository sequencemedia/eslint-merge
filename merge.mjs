/**
 * @typedef {Record<PropertyKey, unknown> | Record<PropertyKey, never>} ConfigLanguageOptions
 * @typedef {Record<PropertyKey, unknown> | Record<PropertyKey, never>} ConfigLinterOptions
 * @typedef {Record<PropertyKey, unknown> | Record<PropertyKey, never>} ConfigProcessor
 * @typedef {Record<PropertyKey, unknown> | Record<PropertyKey, never>} ConfigRules
 * @typedef {Record<PropertyKey, unknown> | Record<PropertyKey, never>} ConfigSettings
 *
 * @typedef {Object} Config
 * @property {ConfigLanguageOptions} [languageOptions]
 * @property {ConfigLinterOptions} [linterOptions]
 * @property {ConfigProcessor} [processor]
 * @property {ConfigRules} [rules]
 * @property {ConfigSettings} [settings]
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

function hasLanguageOptionsParser ({ languageOptions: { parser = null } = {} }) {
  return Boolean(parser)
}

function getLanguageOptionsParser ({ languageOptions: { parser = {} } = {} }) {
  return parser
}

function excludeParserByEntriesKey ([key]) {
  return key !== 'parser'
}

function getLanguageOptionsWithoutParser ({ languageOptions = {} }) {
  const entries = Object.entries(languageOptions)

  return (
    Object.fromEntries(
      entries.filter(excludeParserByEntriesKey)
    )
  )
}

/**
 * @param {Config} config
 * @returns {boolean}
 */
export function hasLanguageOptions ({ languageOptions = null }) {
  return Boolean(languageOptions)
}

/**
 * @param {Config} config
 * @returns {boolean}
 */
export function hasLinterOptions ({ linterOptions = null }) {
  return Boolean(linterOptions)
}

/**
 * @param {Config} config
 * @returns {boolean}
 */
export function hasProcessor ({ processor = null }) {
  return Boolean(processor)
}

/**
 * @param {Config} config
 * @returns {boolean}
 */
export function hasRules ({ rules = null }) {
  return Boolean(rules)
}

/**
 * @param {Config} config
 * @returns {boolean}
 */
export function hasSettings ({ settings = null }) {
  return Boolean(settings)
}

/**
 * @param {Config} config
 * @returns {ConfigLanguageOptions}
 */
export function getLanguageOptions ({ languageOptions = {} }) {
  return languageOptions
}

/**
 * @param {Config} config
 * @returns {ConfigLinterOptions}
 */
export function getLinterOptions ({ linterOptions = {} }) {
  return linterOptions
}

/**
 * @param {Config} config
 * @returns {ConfigProcessor}
 */
export function getProcessor ({ processor = {} }) {
  return processor
}

/**
 * @param {Config} config
 * @returns {ConfigRules}
 */
export function getRules ({ rules = {} }) {
  return rules
}

/**
 * @param {Config} config
 * @returns {ConfigSettings}
 */
export function getSettings ({ settings = {} }) {
  return settings
}

/**
 * @param {Config} [alpha]
 * @param {Config} [omega]
 * @returns {ConfigLanguageOptions}
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
 * @param {Config} [alpha]
 * @param {Config} [omega]
 * @returns {ConfigLinterOptions}
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
 * @param {Config} [alpha]
 * @param {Config} [omega]
 * @returns {ConfigRules}
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
 * @param {Config} [alpha]
 * @param {Config} [omega]
 * @returns {ConfigSettings}
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
 * Merge user config with a flat config element
 *
 * @param {Config} [alpha]
 * @param {Config} [omega]
 * @returns {{
 *  languageOptions: ConfigLanguageOptions
 *  linterOptions: ConfigLinterOptions
 *  rules: ConfigRules
 *  settings: ConfigSettings
 * }}
 */
export default function merge (alpha = {}, omega = {}) {
  return {
    ...alpha,
    ...omega,
    languageOptions: mergeLanguageOptions(alpha, omega),
    linterOptions: mergeLinterOptions(alpha, omega),
    rules: mergeRules(alpha, omega),
    settings: mergeSettings(alpha, omega)
  }
}
