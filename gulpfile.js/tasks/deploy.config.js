var gulp = require('gulp');
var paths = require('../config/paths.json');

gulp.task('deploy:config', function (cb) {
    gulp.src(paths.config.configs)
      .pipe(gulp.dest(paths.theme.config))
      .on('end', function() {
        cb();
      });
});
