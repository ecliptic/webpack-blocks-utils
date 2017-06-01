# webpack-blocks-utils

Tiny helpers for [webpack-blocks](https://github.com/andywer/webpack-blocks).

[![NPM Version](https://img.shields.io/npm/v/webpack-blocks-utils.svg)](https://www.npmjs.com/package/webpack-blocks-utils)
[![CircleCI](https://circleci.com/gh/ecliptic/webpack-blocks-utils.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/ecliptic/webpack-blocks-utils)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

*Version compatibility:*

* webpack-blocks v0._x_ -> webpack-blocks-utils [v1._x_](https://github.com/ecliptic/webpack-blocks-utils/tree/master) (@latest)
* webpack-blocks v1._x_ -> webpack-blocks-utils [v2._x_](https://github.com/ecliptic/webpack-blocks-utils) (@next)

## Installation

```sh
yarn add --dev webpack-blocks-utils
```

or

```sh
npm install --save-dev webpack-blocks-utils
```

## Usage

### setTarget(target)

Sets [target](https://webpack.github.io/docs/configuration.html#target)

Example usage:

```js
setTarget('electron-renderer')
```

### setNode(node)

Sets [node](https://webpack.github.io/docs/configuration.html#node)

Example usage:

```js
setNode({
  __dirname: false,
  __filename: false,
})
```

### setExternals(externals)

Sets [externals](https://webpack.github.io/docs/configuration.html#externals)

Example usage:

```js
setExternals(['firebase', 'electron-debug', 'debug'])
```

### envVar(key, value, configSetters)

Applies an array of webpack blocks only if `process.env[key]` matches the given
`value`.

```js
envVar('ELECTRON', 'true', [
  setTarget('electron-main'),
  setExternals(['firebase', 'electron-debug', 'debug']),
  // ...
]),
```

### noParse(regexes)

Sets [module.noParse](https://webpack.github.io/docs/configuration.html#module.noParse)

Example usage:

```js
noParse([
  // Don't parse localforage because it's pre-built
  new RegExp('node_modules/localforage/dist/localforage.js'),
]),
```

## Copy

The `copy`, `copyPattern`, and `copyOptions` blocks wrap [copy-webpack-plugin](https://github.com/kevlened/copy-webpack-plugin).

The most basic way to use the plugin is to import `copy` and use it to define simple *from*, *to* pairs that are added to the list of patterns used when the plugin is instantiated.

```js
import {createConfig, entryPoint, setOutput} from '@webpack-blocks/webpack2'
import babel from '@webpack-blocks/babel6'
import {copy} from './src/webpack-block-copy'

export default createConfig([
  entryPoint(['babel-polyfill', './src/Main.js']),
  setOutput('./build/bundle.js'),
  babel(),
  copy('assets/robots.txt', 'robots.txt'),
  copy('assets/favicon.ico', 'favicon.ico'),
])
```

This would result in the following copy plugin config:

```js
new CopyWebpackPlugin([
  {from: 'assets/robots.txt', to: 'robots.txt'},
  {from: 'assets/favicon.ico', to: 'favicon.ico'},
])
```

### Advanced patterns

If you need to use more advanced patterns, described [here](https://github.com/kevlened/copy-webpack-plugin#pattern-properties), use the `copyPattern` function:

```js
import {createConfig} from '@webpack-blocks/webpack2'
import {copyPattern} from './src/webpack-block-copy'

export default createConfig([
  copyPattern({
    context: 'from/directory',
    from: '**/*',
    to: '/absolute/path',
  }),
])
```

### Options

If you need to set options, use the `copyOptions` function:

```js
import {createConfig} from '@webpack-blocks/webpack2'
import {copyOptions} from './src/webpack-block-copy'

export default createConfig([
  copyOptions({copyUnmodified: true}),
])
```

See the options list [here](https://github.com/kevlened/copy-webpack-plugin#available-options).

# License

This project is licensed under [MIT](https://github.com/ecliptic/webpack-blocks-utils/blob/master/LICENSE).
