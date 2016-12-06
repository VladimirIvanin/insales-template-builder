var gulp = require('gulp');
var watch = require('gulp-watch');
var rename = require("gulp-rename");
var paths = require('../config/paths.json');

gulp.task('theme:watch', ['theme:watch:components', 'theme:watch:layouts', 'theme:watch:plugins', 'theme:watch:config', 'theme:watch:media'],function () {
});

gulp.task('theme:watch:components', function () {
    watch(paths.components.styles, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.media));

    watch(paths.components.scripts, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.media));

    watch(paths.components.liquid, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.snippets));
});

gulp.task('theme:watch:layouts', function () {
    watch(paths.layouts.styles, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.media));

    watch(paths.layouts.scripts, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.media));

    watch(paths.layouts.liquid, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.templates));
});

gulp.task('theme:watch:plugins', function () {
    watch(paths.plugins.styles, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.media));

    watch(paths.plugins.scripts, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.media));
});

gulp.task('theme:watch:config', function () {
    watch(paths.config.configs, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.config));
});

gulp.task('theme:watch:media', function () {
    watch(paths.media.paths, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.media));
});
