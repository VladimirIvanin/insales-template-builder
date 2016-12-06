var gulp = require('gulp');
var del = require('del');
var paths = require('../config/paths.json');

gulp.task('theme:deploy', ['theme:clean', 'deploy:components:styles', 'deploy:components:scripts', 'deploy:components:liquid', 'deploy:layouts:styles', 'deploy:layouts:scripts', 'deploy:layouts:liquid', 'deploy:config', 'deploy:plugins', 'deploy:media'], function () {

})

gulp.task('theme:clean', function(cb) {
  del.sync(paths.clear.path);
  cb()
});
