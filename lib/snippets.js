'use strict'

exports.__esModule = true
exports.setTarget = setTarget
exports.setNode = setNode
exports.setExternals = setExternals
exports.envVar = envVar
exports.noParse = noParse
exports.resolveModules = resolveModules

var _core = require('@webpack-blocks/core')

/**
 * Sets `target`
 */
function setTarget (target) {
  return function (context, _ref) {
    var merge = _ref.merge
    return merge({target: target})
  }
}

/**
 * Sets `node`
 */

function setNode (node) {
  return function (context, _ref2) {
    var merge = _ref2.merge
    return merge({node: node})
  }
}

/**
 * Sets `externals`
 */
function setExternals (externals) {
  return function (context, _ref3) {
    var merge = _ref3.merge
    return merge({externals: externals})
  }
}

/**
 * Applies an array of webpack blocks only if `process.env[key]` matches the
 * `targetValue` provided.
 */
function envVar (key, targetValue, configSetters) {
  return function (context, _ref4) {
    var merge = _ref4.merge

    var value = process.env[key]

    return value !== targetValue
      ? function (config) {
        return config
      }
      : (0, _core.group)(configSetters)
  }
}

/**
 * Sets `module.noParse`
 */
function noParse (expressions) {
  return function (context, _ref5) {
    var merge = _ref5.merge

    return merge({
      module: {
        noParse: expressions,
      },
    })
  }
}

/**
 * Sets `resolve.modules`
 */
function resolveModules (modules) {
  return function (context, _ref6) {
    var merge = _ref6.merge

    return merge({
      resolve: {modules: modules},
    })
  }
}
