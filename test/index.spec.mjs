import {
  expect
} from 'chai'

import merge, {
  getLanguageOptions,
  getLinterOptions,
  getRules,
  getSettings,
  mergeLanguageOptions,
  mergeLinterOptions,
  mergeRules,
  mergeSettings,
  getMapMerge
} from '@sequencemedia/eslint-merge'

describe('@sequencemedia/eslint-merge', () => {
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

  describe('`getMapMerge`', () => {
    it('is a function', () => expect(getMapMerge).to.be.a('function'))
  })
})
