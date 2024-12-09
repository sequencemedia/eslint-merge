# `@sequencemedia/eslint-merge`

Merge Flat Config for ESLint `v9`

## Install

```shell
npm i -D @sequencemedia/eslint-merge
```

## Use

The `merge` function combines two objects and returns the result

```javascript
import merge from '@sequencemedia/eslint-merge'
```

The first argument should be a config, and the second argument an object which contains your changes

```javascript
const result = merge(sharedConfig, changes)
```

You can easily achieve this with the _spread_ operator in your `eslint.config.*`

```javascript
/**
 *  You probably will use `import` to get this as a module!
 */
const sharedConfig = {
  name: 'shared config',
  files: [
    '**/*.{js,mjs,cjs}'
  ]
}

export default [
  {
    ...sharedConfig,
    files: [
      'src/**/*.{mjs,cjs}'
    ]
  }
]
```

But! Sometimes you need to make _lots_ of changes, and many _spreads_ is hard to manage, and hard to read

`@sequencemedia/eslint-merge` enables you to merge _just_ your changes

```javascript
/**
 *  Again, you will probably `import` this
 */
const sharedConfig = {
  name: 'shared config',
  files: [
    '**/*.{js,mjs,cjs}'
  ]
}

export default [
  merge(sharedConfig, {
    files: [
      'src/**/*.{mjs,cjs}'
    ]
  })
]
```

It's simpler to use _spread_ for small projects, but for large or complex configurations (or for producing your own shared configs) use `merge`
