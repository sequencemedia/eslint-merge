
type Linter = MergeTypes.Linter
type Config = MergeTypes.Config

type LanguageOptions = MergeTypes.Linter.LanguageOptions
type LinterOptions = MergeTypes.Linter.LinterOptions
type Processor = MergeTypes.Linter.Processor
type Plugins = MergeTypes.Linter.Plugins
type Rules = MergeTypes.Linter.Rules
type Settings = MergeTypes.Linter.Settings

export type {
  Linter,
  Config
}

export function hasLanguageOptions (config: Config): config is { languageOptions: LanguageOptions }

export function hasLinterOptions (config: Config): config is { linterOptions: LinterOptions }

export function hasProcessor (config: Config): config is { processor: Processor }

export function hasPlugins (config: Config): config is { plugins: Plugins }

export function hasRules (config: Config): config is { rules: Rules }

export function hasSettings (config: Config): config is { settings: Settings }

export function getLanguageOptions (config: Config): LanguageOptions | Record<PropertyKey, never>

export function getLinterOptions (config: Config): LinterOptions | Record<PropertyKey, never>

export function getProcessor (config: Config): Processor | Record<PropertyKey, never>

export function getPlugins (config: Config): Plugins | Record<PropertyKey, never>

export function getRules (config: Config): Rules | Record<PropertyKey, never>

export function getSettings (config: Config): Settings | Record<PropertyKey, never>

export function mergeLanguageOptions (alpha?: Config, omega?: Config): LanguageOptions

export function mergeLinterOptions (alpha?: Config, omega?: Config): LinterOptions

export function mergeProcessor (alpha?: Config, omega?: Config): Processor

export function mergePlugins (alpha?: Config, omega?: Config): Plugins

export function mergeRules (alpha?: Config, omega?: Config): Rules

export function mergeSettings (alpha?: Config, omega?: Config): Settings

export default function merge (alpha?: Config, omega?: Config): Config
