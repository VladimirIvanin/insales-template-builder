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
var gap = require('gulp-append-prepend');
var contents = require('../help/contents.js');
var rename = require("gulp-rename");
var gutil = require('gulp-util');

gulp.task('variables:scss', function(cb) {
  var variablesScss = [];

  _.forEach(paths.scss.all, function (_path) {
    variablesScss.push(path.normalize( _path + '*.*' ) );
  })

  gulp.src(variablesScss)
      .pipe(rename(function (_path) {
        _path.dirname = "";
      }))
      .pipe(gulp.dest(paths.theme.media));

      cb();
})

gulp.task('bundle:css', function(cb) {

  var plugins = [
      autoprefixer({
          browsers: ['last 20 versions'],
          cascade: false
      }),
  ];

  var variablesInclude = '';

  fs.readdir(paths.bundles.css, function(err, list) {
    _.forEach(list, function (item) {
      var _path = path.normalize( paths.bundles.css + '/' + item + '/**.*css' );
      var name = item + '.scss';

      if (settings.styles === 'scss') {
        variablesInclude = contents.getVariables();
      }

      gulp.src(_path)
        .pipe(postcss({
          plugins: plugins,
          options: { syntax: syntax }
        }).on('error',  function (err) {
          gutil.log(err.message)
        }))
        .pipe(gap.prependText(variablesInclude))
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
