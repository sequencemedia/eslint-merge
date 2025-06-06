const debug = require('debug')

const log = debug('@sequencemedia/eslint-merge')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`@sequencemedia/eslint-merge` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env',
    {
      useBuiltIns: 'usage',
      corejs: 3
    }
  ]
]

// @ts-expect-error Babel API
module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets
  }
}
