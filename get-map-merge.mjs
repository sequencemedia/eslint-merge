import merge from './merge.mjs'

/**
 * Get a map function to merge user config with flat config array elements
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
 * @param {Record<PropertyKey, unknown>} omega
 * @returns {(alpha: Record<PropertyKey, unknown>) => Record<PropertyKey, unknown> }
 */
export default function getMapMerge (omega) {
  /**
   * @param {Record<PropertyKey, unknown>} alpha
   * @returns {Record<PropertyKey, unknown>}
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
