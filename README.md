# webpack-blocks-utils

Tiny helpers for [webpack-blocks](https://github.com/andywer/webpack-blocks).

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![NPM Version](https://img.shields.io/npm/v/webpack-blocks-utils.svg)](https://www.npmjs.com/package/webpack-blocks-utils)

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

# License

This project is licensed under [MIT](https://github.com/ecliptic/webpack-blocks-utils/blob/master/LICENSE).
