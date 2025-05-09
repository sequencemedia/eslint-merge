/**
 *  @typedef {MergeTypes.Config} Config
 */

import merge from './merge.mjs'

/**
 *  Get a map function to merge user config with flat config array elements
 *
 *  ```
 *  const flatConfig = [
 *    { name: 'flat-config-element' }
 *  ]
 *  const userConfig = {
 *    files: [ '**\/*.{mjs,cjs}' ]
 *  }
 *  const mapMerge = getMapMerge(userConfig)
 *  const [
 *    {
 *      name,
 *      files
 *    }
 *  ] = flatConfig.map(mapMerge)
 *  ```
 *
 *  @param {Config} omega
 *  @returns {(alpha: Config) => Config}
 */
export default function getMapMerge (omega) {
  /**
   *  @param {Config} alpha
   *  @returns {Config}
   */
  return function mapMerge (alpha) {
    return (
      merge(
        alpha,
        omega
      )
    )
  }
}
