var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var writeFile = require('write');
var rename = require("gulp-rename");
var Promise = require('promise');
var _ = require('lodash');
var paths = require('../config/paths.json');
var contents = require('../help/contents.js');
var styles = [];
var scripts = [];

gulp.task('deploy:components', ['deploy:components:styles', 'deploy:components:scripts', 'deploy:components:liquid'], function () {

})

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
