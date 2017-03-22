var gulp = require('gulp');
var concat = require('gulp-concat');
var fs = require('fs');
var autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss');
var syntax = require('postcss-scss');
var _ = require('lodash');
var watch = require('gulp-watch');
var path = require('path');
var sass = require('gulp-sass');
var paths = require('../config/paths.json');
var settings = require('../config/settings.json');

gulp.task('bundle:css', function(cb) {
  var plugins = [
      autoprefixer({
          browsers: ['last 20 versions'],
          cascade: false
      }),
  ];

  fs.readdir(paths.bundles.css, function(err, list) {
    _.forEach(list, function (item) {
      var _path = path.normalize( paths.bundles.css + '/' + item + '/**.*css' );
      var name = item + '.scss';

      var _src = [];
      if (settings.styles === 'scss') {
        _src.push(paths.scss.variables_default);
        _src.push(paths.scss.variables);
      }
      _src.push( _path );

      gulp.src(_src)
        .pipe(postcss({
          plugins: plugins,
          options: { syntax: syntax }
        }))
        .pipe(concat(name))
        .pipe(gulp.dest(paths.theme.media))
    })
    cb();
  });
})

gulp.task('bundle:js', function(cb) {
  fs.readdir(paths.bundles.js, function(err, list) {
    _.forEach(list, function (item) {
      var _path = path.normalize( paths.bundles.js + '/' + item + '/**.js' );
      var name = item + '.js';

      gulp.src(_path)
        .pipe(concat(name))
        .pipe(gulp.dest(paths.theme.media))
    })
    cb();
  });
})
