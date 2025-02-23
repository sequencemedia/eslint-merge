type ConfigLanguageOptions = Record<PropertyKey, unknown> | Record<PropertyKey, never>
type ConfigLinterOptions = Record<PropertyKey, unknown> | Record<PropertyKey, never>
type ConfigProcessor = Record<PropertyKey, unknown> | Record<PropertyKey, never>
type ConfigPlugins = Record<PropertyKey, unknown> | Record<PropertyKey, never>
type ConfigRules = Record<PropertyKey, unknown> | Record<PropertyKey, never>
type ConfigSettings = Record<PropertyKey, unknown> | Record<PropertyKey, never>

type Config = {
  languageOptions?: ConfigLanguageOptions
  linterOptions?: ConfigLinterOptions
  processor?: ConfigProcessor
  plugins?: ConfigPlugins
  rules?: ConfigRules
  settings?: ConfigSettings
}

export function hasLanguageOptions (config: Config): config is { languageOptions: ConfigLanguageOptions }

export function hasLinterOptions (config: Config): config is { linterOptions: ConfigLinterOptions }

export function hasProcessor (config: Config): config is { processor: ConfigProcessor }

export function hasPlugins (config: Config): config is { plugins: ConfigPlugins }

export function hasRules (config: Config): config is { rules: ConfigRules }

export function hasSettings (config: Config): config is { settings: ConfigSettings }

export function getLanguageOptions (config: Config): ConfigLanguageOptions | Record<PropertyKey, never>

export function getLinterOptions (config: Config): ConfigLinterOptions | Record<PropertyKey, never>

export function getProcessor (config: Config): ConfigProcessor | Record<PropertyKey, never>

export function getPlugins (config: Config): ConfigPlugins | Record<PropertyKey, never>

export function getRules (config: Config): ConfigRules | Record<PropertyKey, never>

export function getSettings (config: Config): ConfigSettings | Record<PropertyKey, never>

export function mergeLanguageOptions (alpha?: Config, omega?: Config): ConfigLanguageOptions

export function mergeLinterOptions (alpha?: Config, omega?: Config): ConfigLinterOptions

export function mergeProcessor (alpha?: Config, omega?: Config): ConfigRules

export function mergePlugins (alpha?: Config, omega?: Config): ConfigRules

export function mergeRules (alpha?: Config, omega?: Config): ConfigRules

export function mergeSettings (alpha?: Config, omega?: Config): ConfigSettings

export default function merge (alpha?: Config, omega?: Config): Config
