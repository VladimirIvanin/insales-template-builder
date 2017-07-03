var _ = require('lodash');
var path = require('path');
var paths = require('../config/paths.json');
var fs = require('fs');

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
  _.forEach(stylesPaths, function (_style) {
    var style = _style.split('.');
    if (style.indexOf(path.sep) == -1) {
      content += _import + style[0] + '";\n'
    }
  })
  return content;
};

Contents.prototype.getVariables = function (stylesPaths) {
  var self = this;
  var variablesInclude = '';
  _.forEach(paths.scss.all, function(path) {
    try {
      var _files = fs.readdirSync(path, 'r');
      variablesInclude += self.getStylesFile(_files)
    } catch (err) {
    }
  });
  return variablesInclude;
};


module.exports = new Contents;
