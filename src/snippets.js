// @flow
import {group} from '@webpack-blocks/core'
import type {Block} from './types'

/**
 * Sets `target`
 */
export function setTarget (target): Block {
  return (context, {merge}) => merge({target})
}

/**
 * Sets `node`
 */
export function setNode (node): Block {
  return (context, {merge}) => merge({node})
}

/**
 * Sets `externals`
 */
export function setExternals (externals): Block {
  return (context, {merge}) => merge({externals})
}

/**
 * Applies an array of webpack blocks only if `process.env[key]` matches the
 * `targetValue` provided.
 */
export function envVar (key, targetValue, configSetters): Block {
  return (context, {merge}) => {
    const value = process.env[key]

    return value !== targetValue ? config => config : group(configSetters)
  }
}

/**
 * Sets `module.noParse`
 */
export function noParse (expressions): Block {
  return (context, {merge}) => {
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
export function resolveModules (modules): Block {
  return (context, {merge}) => {
    return merge({
      resolve: {modules},
    })
  }
}
