var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var writeFile = require('write');
var rename = require("gulp-rename");
var paths = require('../config/paths.json');
var Promise = require('promise');

gulp.task('deploy:media', function (cb) {
  return new Promise(function (resolve, reject) {
    gulp.src(paths.media.paths)
      .pipe(rename(function (_path) {
        _path.dirname = "";
      }))
      .pipe(gulp.dest(paths.theme.media))
      .on('end', function() {
        resolve();
      });
    });
});
