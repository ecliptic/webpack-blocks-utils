'use strict';

exports.__esModule = true;

var _copy = require('./copy');

Object.keys(_copy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _copy[key];
    }
  });
});

var _snippets = require('./snippets');

Object.keys(_snippets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _snippets[key];
    }
  });
});