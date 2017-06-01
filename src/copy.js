// @flow
/**
 * Webpack block for copy-webpack-plugin
 *
 * @see https://github.com/kevlened/copy-webpack-plugin
 */
import CopyWebpackPlugin from 'copy-webpack-plugin'
import type {Config, Helpers, Block} from './types'

export type Pattern = {
  from: string | Object,
  to?: string,
  toType?: "file" | "dir" | "template",
  context?: string,
  flatten?: boolean,
  ignore?: Array<string>,
  transform?: (content: string, path: string) => string,
  force?: boolean
}

export type Options = {
  ignore?: Array<string>,
  copyUnmodified?: boolean,
  debug?: "warning" | "info" | "debug"
}

/**
 * Adds a simple copy pattern to the list of patterns for the plugin.
 */
function copy (from: string, to?: string): Block {
  return Object.assign(
    context => prevConfig => {
      context.copyPlugin = context.copyPlugin || {patterns: []}

      // Merge the provided simple pattern into the config
      context.copyPlugin = {
        ...context.copyPlugin,
        patterns: [...context.copyPlugin.patterns, {from, to}],
      }

      // Don't alter the config yet
      return prevConfig
    },
    {post: postConfig}
  )
}

/**
 * Adds an advanced pattern to the list of patterns for the plugin.
 */
function copyPattern (pattern: Pattern): Block {
  return Object.assign(
    context => prevConfig => {
      context.copyPlugin = context.copyPlugin || {patterns: []}

      // Merge the provided advanced pattern into the config
      context.copyPlugin = {
        ...context.copyPlugin,
        patterns: [...context.copyPlugin.patterns, pattern],
      }

      // Don't alter the config yet
      return prevConfig
    },
    {post: postConfig}
  )
}

/**
 * Sets options for the copy plugin.
 */
function copyOptions (options: Options): Block {
  return Object.assign(
    context => prevConfig => {
      context.copyPlugin = context.copyPlugin || {}

      // Merge the provided copy plugin config into the context
      context.copyPlugin = {...context.copyPlugin, options}

      // Don't alter the config yet
      return prevConfig
    },
    {post: postConfig}
  )
}

/**
 * Instantiate the copy plugin.
 */
function postConfig (context: Object, {merge}: Helpers): Config => Config {
  const {patterns, options} = context.copyPlugin
  const plugin = new CopyWebpackPlugin(patterns, options)
  return merge({plugins: [plugin]})
}

export {copy, copyPattern, copyOptions}
