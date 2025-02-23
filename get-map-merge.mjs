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
 * @param {Record<string, unknown>} omega
 * @returns {(alpha: Record<string, unknown>) => Record<string, unknown> }
 */
export default function getMapMerge (omega) {
  /**
   * @param {Record<string, unknown>} alpha
   * @returns {Record<string, unknown>}
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
