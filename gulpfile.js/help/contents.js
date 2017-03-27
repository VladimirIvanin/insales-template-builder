var _ = require('lodash');
var path = require('path');

var Contents = function () {};

Contents.prototype.getScriptFile = function (scriptsPaths) {
  let _import = '#= require ';
  let content = '';
  _.forEach(scriptsPaths, function (_script) {
    if (_script.indexOf(path.sep) == -1) {
      content += _import + _script + '\n'
    }
  })
  return content;
};

Contents.prototype.getStylesFile = function (stylesPaths) {
  let _import = '@import "';
  let content = '';
  _.forEach(stylesPaths, function (style) {
    if (style.indexOf(path.sep) == -1) {
      content += _import + style + '";\n'
    }
  })
  return content;
};


module.exports = new Contents;
