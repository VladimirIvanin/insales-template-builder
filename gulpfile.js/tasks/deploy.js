var gulp = require('gulp');
var del = require('del');
var paths = require('../config/paths.json');
var Promise = require('promise');
var runSequence = require('run-sequence');

gulp.task('theme:deploy', function (callback) {
  runSequence('theme:clean',
              'deploy:media',
              'deploy:components:styles',
              'deploy:components:scripts',
              'deploy:plugins',
              'variables:scss',
              'bundle:css',
              'bundle:js',
              'deploy:fonts',
              'deploy:layouts:styles',
              'deploy:layouts:scripts',
              'deploy:config',
              'deploy:components:liquid',
              'deploy:layouts:liquid',
              callback);
})

gulp.task('theme:clean', function(cb) {
  del.sync(paths.clear.path);
  cb()
});
