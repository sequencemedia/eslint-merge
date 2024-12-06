import {
  expect
} from 'chai'

import merge, {
  hasLanguageOptions,
  hasLinterOptions,
  hasRules,
  hasSettings,
  getLanguageOptions,
  getLinterOptions,
  getRules,
  getSettings,
  mergeLanguageOptions,
  mergeLinterOptions,
  mergeRules,
  mergeSettings
} from '@sequencemedia/eslint-merge/merge'

describe('@sequencemedia/eslint-merge/merge', () => {
  const MOCK_LANGUAGE_OPTIONS = {}
  const MOCK_LINTER_OPTIONS = {}
  const MOCK_RULES = {}
  const MOCK_SETTINGS = {}

  describe('`merge`', () => {
    it('is a function', () => expect(merge).to.be.a('function'))
  })

  describe('`getLanguageOptions`', () => {
    it('is a function', () => expect(getLanguageOptions).to.be.a('function'))
  })

  describe('`getLinterOptions`', () => {
    it('is a function', () => expect(getLinterOptions).to.be.a('function'))
  })

  describe('`getRules`', () => {
    it('is a function', () => expect(getRules).to.be.a('function'))
  })

  describe('`getSettings`', () => {
    it('is a function', () => expect(getSettings).to.be.a('function'))
  })

  describe('`mergeLanguageOptions`', () => {
    it('is a function', () => expect(mergeLanguageOptions).to.be.a('function'))
  })

  describe('`mergeLinterOptions`', () => {
    it('is a function', () => expect(mergeLinterOptions).to.be.a('function'))
  })

  describe('`mergeRules`', () => {
    it('is a function', () => expect(mergeRules).to.be.a('function'))
  })

  describe('`mergeSettings`', () => {
    it('is a function', () => expect(mergeSettings).to.be.a('function'))
  })

  describe('`merge()`', () => {
    it('returns an object', () => {
      const alpha = {
        languageOptions: {
          alpha: 'alpha'
        },
        linterOptions: {
          alpha: 'alpha'
        },
        rules: {
          alpha: 'alpha'
        },
        settings: {
          alpha: 'alpha'
        }
      }

      const omega = {
        languageOptions: {
          omega: 'omega'
        },
        linterOptions: {
          omega: 'omega'
        },
        rules: {
          omega: 'omega'
        },
        settings: {
          omega: 'omega'
        }
      }

      return (
        expect(merge(alpha, omega))
          .to.eql({
            languageOptions: {
              alpha: 'alpha',
              omega: 'omega'
            },
            linterOptions: {
              alpha: 'alpha',
              omega: 'omega'
            },
            rules: {
              alpha: 'alpha',
              omega: 'omega'
            },
            settings: {
              alpha: 'alpha',
              omega: 'omega'
            }
          })
      )
    })
  })

  describe('`hasLanguageOptions()`', () => {
    describe('Has `languageOptions`', () => {
      it('returns true', () => (
        expect(hasLanguageOptions({ languageOptions: MOCK_LANGUAGE_OPTIONS }))
          .to.be.true
      ))
    })

    describe('Does not have `languageOptions`', () => {
      it('returns false', () => (
        expect(hasLanguageOptions({}))
          .to.be.false
      ))
    })
  })

  describe('`hasLinterOptions()`', () => {
    describe('Has `linterOptions`', () => {
      it('returns true', () => (
        expect(hasLinterOptions({ linterOptions: MOCK_LINTER_OPTIONS }))
          .to.be.true
      ))
    })

    describe('Does not have `linterOptions`', () => {
      it('returns false', () => (
        expect(hasLinterOptions({}))
          .to.be.false
      ))
    })
  })

  describe('`hasRules()`', () => {
    describe('Has `rules`', () => {
      it('returns true', () => (
        expect(hasRules({ rules: MOCK_RULES }))
          .to.be.true
      ))
    })

    describe('Does not have `rules`', () => {
      it('returns false', () => (
        expect(hasRules({ }))
          .to.be.false
      ))
    })
  })

  describe('`hasSettings()`', () => {
    describe('Has `settings', () => {
      it('returns true', () => (
        expect(hasSettings({ settings: MOCK_SETTINGS }))
          .to.be.true
      ))
    })

    describe('Does not have `settings', () => {
      it('returns false', () => (
        expect(hasSettings({}))
          .to.be.false
      ))
    })
  })

  describe('`getLanguageOptions()`', () => {
    it('returns an object', () => (
      expect(getLanguageOptions({ languageOptions: MOCK_LANGUAGE_OPTIONS }))
        .to.equal(MOCK_LANGUAGE_OPTIONS)
    ))
  })

  describe('`getLinterOptions()`', () => {
    it('returns an object', () => (
      expect(getLinterOptions({ linterOptions: MOCK_LINTER_OPTIONS }))
        .to.equal(MOCK_LINTER_OPTIONS)
    ))
  })

  describe('`getRules()`', () => {
    it('returns an object', () => (
      expect(getRules({ rules: MOCK_RULES }))
        .to.equal(MOCK_RULES)
    ))
  })

  describe('`getSettings()`', () => {
    it('returns an object', () => (
      expect(getSettings({ settings: MOCK_SETTINGS }))
        .to.equal(MOCK_SETTINGS)
    ))
  })

  describe('`mergeLanguageOptions()`', () => {
    describe('Language options has a field `parser`', () => {
      it('returns an object', () => {
        function mockAlphaParser () {
          //
        }

        function mockOmegaParser () {
          //
        }

        return (
          expect(mergeLanguageOptions({ languageOptions: { parser: { parse: mockAlphaParser } } }, { languageOptions: { parser: { parse: mockOmegaParser } } }))
            .to.eql({ parser: { parse: mockOmegaParser } })
        )
      })

      it('returns an object', () => {
        function mockOmegaParser () {
          //
        }

        return (
          expect(mergeLanguageOptions({ languageOptions: { mockOption: 'alpha' } }, { languageOptions: { parser: { parse: mockOmegaParser } } }))
            .to.eql({ mockOption: 'alpha', parser: { parse: mockOmegaParser } })
        )
      })

      it('returns an object', () => {
        function mockAlphaParser () {
          //
        }

        return (
          expect(mergeLanguageOptions({ languageOptions: { parser: { parse: mockAlphaParser } } }, { languageOptions: { mockOption: 'omega' } }))
            .to.eql({ mockOption: 'omega', parser: { parse: mockAlphaParser } })
        )
      })
    })

    describe('Language options does not have a field `parser`', () => {
      it('returns an object', () => (
        expect(mergeLanguageOptions({ languageOptions: { mockOption: 'alpha' } }, { languageOptions: { mockOption: 'omega' } }))
          .to.eql({ mockOption: 'omega' })
      ))
    })
  })

  describe('`mergeLinterOptions()`', () => {
    it('returns an object', () => (
      expect(mergeLinterOptions({ linterOptions: { mockOption: 'alpha' } }, { linterOptions: { mockOption: 'omega' } }))
        .to.eql({ mockOption: 'omega' })
    ))
  })

  describe('`mergeRules()`', () => {
    it('returns an object', () => (
      expect(mergeRules({ rules: { mockOption: 'alpha' } }, { rules: { mockOption: 'omega' } }))
        .to.eql({ mockOption: 'omega' })
    ))
  })

  describe('`mergeSettings()`', () => {
    it('returns an object', () => (
      expect(mergeSettings({ settings: { mockOption: 'alpha' } }, { settings: { mockOption: 'omega' } }))
        .to.eql({ mockOption: 'omega' })
    ))
  })
})
