var gulp = require('gulp');

gulp.task('default', ['theme:clean', 'deploy:components:styles', 'deploy:components:scripts', 'deploy:components:liquid', 'deploy:layouts:styles', 'deploy:layouts:scripts', 'deploy:layouts:liquid', 'deploy:config', 'deploy:plugins', 'theme:watch'], function () {

})
