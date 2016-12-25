var gulp = require('gulp');
var concat = require('gulp-concat');
var fs = require('fs');
var _ = require('lodash');
var watch = require('gulp-watch');
var path = require('path');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var paths = require('../config/paths.json');

gulp.task('deploy:fonts', ['deploy:fonts:items', 'deploy:fonts:styles'],function () {
});

gulp.task('deploy:fonts:items', function () {

  gulp.src(paths.fonts.path)
    .pipe(rename(function (_path) {
      _path.dirname = "";
    }))
    .pipe(gulp.dest(paths.theme.media))
});

gulp.task('deploy:fonts:styles', function () {
  gulp.src(paths.fonts.style)
    .pipe(concat('fonts.scss'))
    .pipe(gulp.dest(paths.theme.media))
});
