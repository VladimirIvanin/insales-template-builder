var gulp = require('gulp');
var concat = require('gulp-concat');
var fs = require('fs');
var path = require('path');
var sass = require('gulp-sass');
var paths = require('../config/paths.json');


gulp.task('bundle:css', function(cb) {
  fs.readdir(paths.bundles.css, 'a+', function(err, stats) {
    console.log(stats);
  });
})
