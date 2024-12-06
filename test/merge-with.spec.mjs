import {
  expect
} from 'chai'

import mergeWith from '#eslint-merge/merge-with'

describe('#eslint-merge/merge-with', () => {
  describe('`mergeWith`', () => {
    it('is a function', () => expect(mergeWith).to.be.a('function'))
  })

  describe('`mergeWith()`', () => {
    it('returns a function', () => expect(mergeWith()).to.be.a('function'))

    describe('Merge `omega` into `alpha`', () => {
      it('returns an object', () => {
        const ALPHA = {
          languageOptions: { alpha: 'alpha' },
          linterOptions: { alpha: 'alpha' },
          rules: { alpha: 'alpha' },
          settings: { alpha: 'alpha' }
        }

        const OMEGA = {
          languageOptions: { omega: 'omega' },
          linterOptions: { omega: 'omega' },
          rules: { omega: 'omega' },
          settings: { omega: 'omega' }
        }

        return (
          expect([ALPHA].map(mergeWith(OMEGA)))
            .to.eql([
              {
                languageOptions: { alpha: 'alpha', omega: 'omega' },
                linterOptions: { alpha: 'alpha', omega: 'omega' },
                rules: { alpha: 'alpha', omega: 'omega' },
                settings: { alpha: 'alpha', omega: 'omega' }
              }
            ])
        )
      })
    })
  })
})
