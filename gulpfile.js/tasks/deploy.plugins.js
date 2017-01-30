var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var writeFile = require('write');
var rename = require("gulp-rename");
var _ = require('lodash');
var paths = require('../config/paths.json');
var contents = require('../help/contents.js');
var styles = [];
var scripts = [];

gulp.task('deploy:plugins', ['deploy:plugins:styles', 'deploy:plugins:scripts', 'deploy:plugins:media'], function () {

})

gulp.task('deploy:plugins:styles', function (cb) {
    gulp.src(paths.plugins.styles)
      .pipe(rename(function (_path) {
        styles.push(_path.basename);
        _path.dirname = "";
      }))
      .pipe(gulp.dest(paths.theme.media))
      .on('end', function() {
        var contentStyle = contents.getStylesFile(styles);
        writeFile(paths.theme.media + '/plugins.scss', contentStyle, function (err) {
          if (err) {
            console.log('Ошибка при генерации стилей');
          }
        });
        cb();
      });
});

gulp.task('deploy:plugins:media', function (cb) {
    gulp.src(paths.plugins.media)
      .pipe(rename(function (_path) {
        _path.dirname = "";
      }))
      .pipe(gulp.dest(paths.theme.media))
      .on('end', function() {
        cb();
      });
});

gulp.task('deploy:plugins:scripts', function (cb) {
    gulp.src(paths.plugins.scripts)
      .pipe(rename(function (_path) {
        scripts.push(_path.basename);
        _path.dirname = "";
      }))
      .pipe(gulp.dest(paths.theme.media))
      .on('end', function() {
        var contentScripts = contents.getScriptFile(scripts);
        writeFile(paths.theme.media + '/plugins.js', contentScripts, function (err) {
          if (err) {
            console.log('Ошибка при генерации стилей');
          }
        });
        cb();
      });
});
