type Config = MergeTypes.Config

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
 */
export default function getMapMerge (omega: Config): (alpha: Config) => Config
