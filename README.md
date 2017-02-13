# webpack-blocks-html

A [webpack-block](https://github.com/andywer/webpack-blocks) for [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![NPM Version](https://img.shields.io/npm/v/webpack-blocks-html.svg)](https://www.npmjs.com/package/webpack-blocks-html)

## Installation

```sh
yarn add --dev webpack-blocks-html
```

or

```sh
npm install --save-dev webpack-blocks-html
```

## Usage

```js
import {createConfig, entryPoint, setOutput} from '@webpack-blocks/webpack2'
import babel from '@webpack-blocks/babel6'
import html from './src/webpack-block-html'

export default createConfig([
  entryPoint(['babel-polyfill', './src/Main.js']),
  setOutput('./build/bundle.js'),
  babel(),
  html({
    filename: 'index.html',
    template: 'assets/index.html',
    showErrors: false,
  }),
])
```

## Options

See the options list [here](https://github.com/jantimon/html-webpack-plugin#configuration).

# License

This project is licensed under [MIT](https://github.com/ecliptic/webpack-blocks-html/blob/master/LICENSE).
