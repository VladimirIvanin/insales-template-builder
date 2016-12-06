var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var writeFile = require('write');
var rename = require("gulp-rename");
var Promise = require('promise');
var _ = require('lodash');
var paths = require('../config/paths.json');
var contents = require('../help/contents.js');
var replace = require('gulp-replace');

var styles = [];
var scripts = [];
var conponents = [];

gulp.task('deploy:components', ['deploy:components:styles', 'deploy:components:scripts', 'deploy:components:liquid'], function () {

})


gulp.task('deploy:components:list', ['deploy:components:get_list'], function () {
  console.log(conponents)
});

gulp.task('deploy:components:get_list', function () {
  return new Promise(function (resolve, reject) {

  gulp.src(paths.components.liquid)
      .pipe(replace(/{% include .* %}/g, function (matchInclude) {
        var includes = replaceQuotes(matchInclude);
        var values = includes.split('"');
        conponents.push(values[1])
      }))

  gulp.src(paths.layouts.liquid)
      .pipe(replace(/{% include .* %}/g, function (matchInclude) {
        var includes = replaceQuotes(matchInclude);
        var values = includes.split('"');
        conponents.push(values[1])
      }))


      setTimeout(function(){
        conponents = _.uniq(conponents);
        resolve()
      }, 4000)
  })
})

function replaceQuotes(AInputText) {
  var AReplaceText = '"';
  var VRegExp = new RegExp(/[']/g);
  var VResult = AInputText.replace(VRegExp, AReplaceText);
  return VResult;
}

gulp.task('deploy:components:styles', function (cb) {
    gulp.src(paths.components.styles)
      .pipe(rename(function (_path) {
        styles.push(_path.basename);
        _path.dirname = "";
      }))
      .pipe(gulp.dest(paths.theme.media))
      .on('end', function() {
        var contentStyle = contents.getStylesFile(styles);
        writeFile(paths.theme.media + '/theme.scss', contentStyle, function (err) {
          if (err) {
            console.log('Ошибка при генерации стилей');
          }
        });
        cb();
      });
});

gulp.task('deploy:components:scripts', function (cb) {
    gulp.src(paths.components.scripts)
      .pipe(rename(function (_path) {
        scripts.push(_path.basename);
        _path.dirname = "";
      }))
      .pipe(gulp.dest(paths.theme.media))
      .on('end', function() {
        var contentScripts = contents.getScriptFile(scripts);
        writeFile(paths.theme.media + '/theme.js', contentScripts, function (err) {
          if (err) {
            console.log('Ошибка при генерации стилей');
          }
        });
        cb();
      });
});

gulp.task('deploy:components:liquid', function (cb) {
    gulp.src(paths.components.liquid)
      .pipe(rename(function (_path) {
        _path.dirname = "";
      }))
      .pipe(gulp.dest(paths.theme.snippets))
      .on('end', function() {
        cb();
      });
});
