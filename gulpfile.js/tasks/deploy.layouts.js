var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var writeFile = require('write');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var Promise = require('promise');
var _ = require('lodash');
var paths = require('../config/paths.json');
var settings = require('../config/settings.json');

var contents = require('../help/contents.js');
var styles = [];
var scripts = [];

if (settings.styles === "scss") {
  paths.layouts.styles = paths.layouts.scss;
}

gulp.task('deploy:layouts', ['deploy:layouts:styles', 'deploy:layouts:scripts', 'deploy:layouts:liquid'], function () {

})

gulp.task('deploy:layouts:styles', function (cb) {
  var isConcat = settings.build.css.layouts.concat;

  if (isConcat) {
    gulp.src(paths.layouts.styles)
      .pipe(concat('layouts.scss'))
      .pipe(gulp.dest(paths.theme.media))
  }else{
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
  }
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
  var isConcat = settings.build.js.layouts.concat;

  if (isConcat) {
    gulp.src(paths.layouts.scripts)
      .pipe(concat('layouts.js'))
      .pipe(gulp.dest(paths.theme.media))
  }else{
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
  }
});
