var gulp = require('gulp');
var Promise = require('promise');

gulp.task('default', function () {
  return Promise.all( [gulp.start('theme:deploy'), gulp.start('theme:watch')] )
})
