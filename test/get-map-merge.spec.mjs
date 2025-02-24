// @ts-nocheck

import {
  expect
} from 'chai'

import getMapMerge from '@sequencemedia/eslint-merge/get-map-merge'

describe('@sequencemedia/eslint-merge/get-map-merge', () => {
  describe('`getMapMerge`', () => {
    it('is a function', () => expect(getMapMerge).to.be.a('function'))
  })

  /**
   *  const mapMerge = getMapMerge()
   */
  describe('`getMapMerge()`', () => {
    /**
     *  mapMerge()
     */
    describe('`mapMerge()`', () => {
      it('returns an object', () => {
        const ALPHA = {
          languageOptions: { alpha: 'alpha' },
          linterOptions: { alpha: 'alpha' },
          processor: { alpha: 'alpha' },
          plugins: { alpha: 'alpha' },
          rules: { alpha: 'alpha' },
          settings: { alpha: 'alpha' }
        }

        const OMEGA = {
          languageOptions: { omega: 'omega' },
          linterOptions: { omega: 'omega' },
          processor: { omega: 'omega' },
          plugins: { omega: 'omega' },
          rules: { omega: 'omega' },
          settings: { omega: 'omega' }
        }

        const config = [
          ALPHA
        ]

        const mapMerge = getMapMerge(OMEGA)

        return (
          expect(config.map(mapMerge))
            .to.eql([
              {
                languageOptions: { alpha: 'alpha', omega: 'omega' },
                linterOptions: { alpha: 'alpha', omega: 'omega' },
                processor: { alpha: 'alpha', omega: 'omega' },
                plugins: { alpha: 'alpha', omega: 'omega' },
                rules: { alpha: 'alpha', omega: 'omega' },
                settings: { alpha: 'alpha', omega: 'omega' }
              }
            ])
        )
      })
    })
  })
})
