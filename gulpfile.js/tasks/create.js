var gulp = require('gulp');
var _ = require('lodash');
var writeFile = require('write');
var paths = require('../config/paths.json');

var createList = [
  'product-gallery'
]

gulp.task('create', function () {
  _.forEach(createList, function (componentName) {
    var componentsFolder = paths.components.root + componentName + '/';
    var componentsStyle = componentsFolder + 'scss/' + componentName + '.scss';
    var componentsLiquid = componentsFolder + componentName + '.liquid';
    var componentsJs = componentsFolder + componentName + '.js';
    writeFile(componentsStyle, '', function (err) {
      if (err) {
        console.log('Ошибка при генерации файла: ' + componentsStyle);
      }
    });
    writeFile(componentsLiquid, '', function (err) {
      if (err) {
        console.log('Ошибка при генерации файла: ' + componentsLiquid);
      }
    });
    writeFile(componentsJs, '', function (err) {
      if (err) {
        console.log('Ошибка при генерации файла: ' + componentsJs);
      }
    });

  })
})
