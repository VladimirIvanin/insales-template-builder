var gulp = require('gulp');
var concat = require('gulp-concat');
var fs = require('fs');
var autoprefixer = require('gulp-autoprefixer');
var _ = require('lodash');
var watch = require('gulp-watch');
var path = require('path');
var sass = require('gulp-sass');
var paths = require('../config/paths.json');


gulp.task('bundle:css', function(cb) {
  fs.readdir(paths.bundles.css, 'a+', function(err, list) {
    _.forEach(list, function (item) {
      var _path = path.normalize( paths.bundles.css + '/' + item + '/**.*css' );
      var name = item + '.scss';

      gulp.src(_path)
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(concat(name))
        .pipe(gulp.dest(paths.theme.media))
    })
  });
})

gulp.task('bundle:js', function(cb) {
  fs.readdir(paths.bundles.js, 'a+', function(err, list) {
    _.forEach(list, function (item) {
      var _path = path.normalize( paths.bundles.js + '/' + item + '/**.js' );
      var name = item + '.js';

      gulp.src(_path)
        .pipe(concat(name))
        .pipe(gulp.dest(paths.theme.media))
    })
  });
})
