'use strict'

exports.__esModule = true
exports.resolveModules = exports.noParse = exports.setExternals = exports.setNode = exports.setTarget = undefined
exports.envVar = envVar

var _core = require('@webpack-blocks/core')

/**
 * Sets `target`
 */
var setTarget = (exports.setTarget = function setTarget (target) {
  return function () {
    return {target: target}
  }
})

/**
 * Sets `node`
 */

var setNode = (exports.setNode = function setNode (node) {
  return function () {
    return {node: node}
  }
})

/**
 * Sets `externals`
 */
var setExternals = (exports.setExternals = function setExternals (externals) {
  return function () {
    return {externals: externals}
  }
})

/**
 * Applies an array of webpack blocks only if `process.env[key]` matches the
 * `targetValue` provided.
 */
function envVar (key, targetValue, configSetters) {
  var value = process.env[key]

  return value !== targetValue
    ? function () {
      return {}
    }
    : (0, _core.group)(configSetters)
}

/**
 * Sets `module.noParse`
 */
var noParse = (exports.noParse = function noParse (expressions) {
  return function () {
    return {
      module: {
        noParse: expressions,
      },
    }
  }
})

/**
 * Sets `resolve.modules`
 */
var resolveModules = (exports.resolveModules = function resolveModules (
  modules
) {
  return function () {
    return {
      resolve: {modules: modules},
    }
  }
})
