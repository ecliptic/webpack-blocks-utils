'use strict';

exports.__esModule = true;
exports.html = html;

var _htmlWebpackPlugin = require('html-webpack-plugin');

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Webpack block for html-webpack-plugin
 *
 * @see https://github.com/ampedandwired/html-webpack-plugin
 */
function html(options) {
  return Object.assign(function (context) {
    return function (prevConfig) {
      var defaultOpts = {
        filename: 'index.html',
        template: 'templates/index.html',
        showErrors: false

        // Merge the provided html config into the context
      };var html = context.html || defaultOpts;

      context.html = (0, _deepmerge2.default)(html, options, { clone: true }

      // Don't modify the config yet
      );return prevConfig;
    };
  }, { post: postConfig });
}

function postConfig(context, _ref) {
  var merge = _ref.merge;

  var plugin = new _htmlWebpackPlugin2.default(context.html);
  return merge({ plugins: [plugin] });
}