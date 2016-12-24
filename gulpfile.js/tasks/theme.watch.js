var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var paths = require('../config/paths.json');
var settings = require('../config/settings.json');

gulp.task('theme:watch', ['theme:watch:components', 'theme:watch:layouts', 'theme:watch:plugins', 'theme:watch:config', 'theme:watch:media'],function () {
});

gulp.task('theme:watch:components', function () {
    var isConcatStyles = settings.build.css.theme.concat;
    var isConcatScripts = settings.build.js.theme.concat;
    if (isConcatStyles) {
      watch(paths.components.styles, function () {
        gulp.src(paths.components.styles)
          .pipe(concat('theme.scss'))
          .pipe(gulp.dest(paths.theme.media))
      })
    }else{
      watch(paths.components.styles, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.media));
    }

    if (isConcatScripts) {
      watch(paths.components.scripts, function () {
        gulp.src(paths.components.scripts)
          .pipe(concat('theme.js'))
          .pipe(gulp.dest(paths.theme.media))
      })
    }else{
      watch(paths.components.scripts, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.media));
    }

    watch(paths.components.liquid, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.snippets));
});

gulp.task('theme:watch:layouts', function () {
  var isConcatStyles = settings.build.css.layouts.concat;
  var isConcatScripts = settings.build.js.layouts.concat;

  if (isConcatStyles) {
    watch(paths.layouts.styles, function () {
      gulp.src(paths.layouts.styles)
        .pipe(concat('layouts.scss'))
        .pipe(gulp.dest(paths.theme.media))
    })
  }else{
    watch(paths.layouts.styles, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.media));
  }
  if (isConcatScripts) {
    watch(paths.layouts.scripts, function () {
      gulp.src(paths.layouts.scripts)
        .pipe(concat('layouts.js'))
        .pipe(gulp.dest(paths.theme.media))
    })
  }else{
    watch(paths.layouts.scripts, { ignoreInitial: true })
        .pipe(rename(function (_path) {
          _path.dirname = "";
        }))
        .pipe(gulp.dest(paths.theme.media));
    }
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
