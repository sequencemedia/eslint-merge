import type {
  Linter as LinterTypes
} from 'eslint'

declare global {
  namespace MergeTypes {
    type Parser = LinterTypes.Parser

    type LanguageOptions = LinterTypes.LanguageOptions
    type LinterOptions = LinterTypes.LinterOptions
    type Processor = LinterTypes.Processor
    type Plugins = Record<string, unknown> | Record<string, never>
    type Rules = Partial<LinterTypes.RulesRecord>
    type Settings = Record<string, unknown> | Record<string, never>

    export namespace Linter {
      export type {
        LanguageOptions,
        LinterOptions,
        Processor,
        Plugins,
        Rules,
        Settings
      }
    }

    export namespace LanguageOptions {
      export type {
        Parser
      }
    }

    export type Linter = {
      LanguageOptions: LanguageOptions,
      LinterOptions: LinterOptions,
      Processor: Processor,
      Plugins: Plugins,
      Rules: Rules,
      Settings: Rules
    }

    export type Config = {
      languageOptions?: LanguageOptions
      linterOptions?: LinterOptions
      processor?: Processor
      plugins?: Plugins
      rules?: Rules
      settings?: Settings
    }
  }
}

export { default } from '#eslint-merge/merge'
export * from '#eslint-merge/merge'
export {
  default as getMapMerge
} from '#eslint-merge/get-map-merge'
