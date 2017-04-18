import {group} from '@webpack-blocks/core'

/**
 * Sets `target`
 */
export const setTarget = target => () => ({target})

/**
 * Sets `node`
 */
export const setNode = node => () => ({node})

/**
 * Sets `externals`
 */
export const setExternals = externals => () => ({externals})

/**
 * Applies an array of webpack blocks only if `process.env[key]` matches the
 * `targetValue` provided.
 */
export function envVar (key, targetValue, configSetters) {
  const value = process.env[key]

  return value !== targetValue
    ? () => ({})
    : group(configSetters)
}

/**
 * Sets `module.noParse`
 */
export const noParse = expressions => () => ({
  module: {
    noParse: expressions,
  },
})

/**
 * Sets `resolve.modules`
 */
export const resolveModules = modules => () => ({
  resolve: {modules},
})
