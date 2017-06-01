'use strict'

exports.__esModule = true
exports.copyOptions = exports.copyPattern = exports.copy = undefined

var _extends =
  Object.assign ||
  function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }
/**
 * Webpack block for copy-webpack-plugin
 *
 * @see https://github.com/kevlened/copy-webpack-plugin
 */

var _copyWebpackPlugin = require('copy-webpack-plugin')

var _copyWebpackPlugin2 = _interopRequireDefault(_copyWebpackPlugin)

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

/**
 * Adds a simple copy pattern to the list of patterns for the plugin.
 */
function copy (from, to) {
  return Object.assign(
    function (context) {
      return function (prevConfig) {
        context.copyPlugin = context.copyPlugin || {patterns: []}

        // Merge the provided simple pattern into the config
        context.copyPlugin = _extends({}, context.copyPlugin, {
          patterns: [].concat(context.copyPlugin.patterns, [
            {from: from, to: to},
          ]),
        })

        // Don't alter the config yet
        return prevConfig
      }
    },
    {post: postConfig}
  )
}

/**
 * Adds an advanced pattern to the list of patterns for the plugin.
 */
function copyPattern (pattern) {
  return Object.assign(
    function (context) {
      return function (prevConfig) {
        context.copyPlugin = context.copyPlugin || {patterns: []}

        // Merge the provided advanced pattern into the config
        context.copyPlugin = _extends({}, context.copyPlugin, {
          patterns: [].concat(context.copyPlugin.patterns, [pattern]),
        })

        // Don't alter the config yet
        return prevConfig
      }
    },
    {post: postConfig}
  )
}

/**
 * Sets options for the copy plugin.
 */
function copyOptions (options) {
  return Object.assign(
    function (context) {
      return function (prevConfig) {
        context.copyPlugin = context.copyPlugin || {}

        // Merge the provided copy plugin config into the context
        context.copyPlugin = _extends({}, context.copyPlugin, {
          options: options,
        })

        // Don't alter the config yet
        return prevConfig
      }
    },
    {post: postConfig}
  )
}

/**
 * Instantiate the copy plugin.
 */
function postConfig (context, _ref) {
  var merge = _ref.merge

  return function (prevConfig) {
    var _context$copyPlugin = context.copyPlugin,
      patterns = _context$copyPlugin.patterns,
      options = _context$copyPlugin.options

    var plugin = new _copyWebpackPlugin2.default(patterns, options)
    return merge({plugins: [plugin]})
  }
}

exports.copy = copy
exports.copyPattern = copyPattern
exports.copyOptions = copyOptions
