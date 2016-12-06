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

gulp.task('deploy:layouts', ['deploy:layouts:styles', 'deploy:layouts:scripts', 'deploy:layouts:liquid'], function () {

})

gulp.task('deploy:layouts:styles', function (cb) {
    gulp.src(paths.layouts.styles)
      .pipe(rename(function (_path) {
        styles.push(_path.basename);
        _path.dirname = "";
      }))
      .pipe(gulp.dest(paths.theme.media))
      .on('end', function() {
        var contentStyle = contents.getStylesFile(styles);
        writeFile(paths.theme.media + '/layouts.scss', contentStyle, function (err) {
          if (err) {
            console.log('Ошибка при генерации стилей');
          }
        });
        cb();
      });
});

gulp.task('deploy:layouts:liquid', function (cb) {
    gulp.src(paths.layouts.liquid)
      .pipe(rename(function (_path) {
        _path.dirname = "";
      }))
      .pipe(gulp.dest(paths.theme.templates))
      .on('end', function() {
        cb();
      });
});

gulp.task('deploy:layouts:scripts', function (cb) {
    gulp.src(paths.layouts.scripts)
      .pipe(rename(function (_path) {
        scripts.push(_path.basename);
        _path.dirname = "";
      }))
      .pipe(gulp.dest(paths.theme.media))
      .on('end', function() {
        var contentScripts = contents.getScriptFile(scripts);
        writeFile(paths.theme.media + '/layouts.js', contentScripts, function (err) {
          if (err) {
            console.log('Ошибка при генерации стилей');
          }
        });
        cb();
      });
});
