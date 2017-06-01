// @flow
/**
 * Webpack block for html-webpack-plugin
 *
 * @see https://github.com/ampedandwired/html-webpack-plugin
 */
import HtmlWebpackPlugin from 'html-webpack-plugin'
import deepmerge from 'deepmerge'

import type {Block, Helpers, Config} from './types'

export function html (options): Block {
  return Object.assign(
    context => prevConfig => {
      const defaultOpts = {
        filename: 'index.html',
        template: 'templates/index.html',
        showErrors: false,
      }

      // Merge the provided html config into the context
      const html = context.html || defaultOpts

      context.html = deepmerge(html, options, {clone: true})

      // Don't modify the config yet
      return prevConfig
    },
    {post: postConfig}
  )
}

function postConfig (context: Object, {merge}: Helpers): Config => Config {
  const plugin = new HtmlWebpackPlugin(context.html)
  return merge({plugins: [plugin]})
}
