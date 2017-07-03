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
  var _import = '@import "';
  var content = '';

  _.forEach(stylesPaths, function (_style) {
    var _parsePath = path.parse( _style );
    var addStyle = _style;

    if (_parsePath.name) {
      addStyle = _parsePath.name;
    }

    if (_parsePath.base.indexOf('.css') == -1 || _parsePath.base.indexOf('.scss') == -1) {
      addStyle = _parsePath.base
    }

    if (addStyle.indexOf(path.sep) == -1) {
      content += _import + addStyle + '";\n'
    }
  });

  return content;
};

Contents.prototype.getVariables = function () {
  var self = this;

  var variablesInclude = '';

  _.forEach(paths.scss.all, function(_path) {
    var _files = '';
    try {
      _files = fs.readdirSync(path.normalize(_path));
    } catch (err) {
    }
    variablesInclude += self.getStylesFile(_files)
  });

  return variablesInclude;
};


module.exports = new Contents;
