var gulp = require('gulp');
// Insales Uploader
var uploader = require('../config/uploader.json');
var InsalesUploader = require('insales-uploader');
var InsalesUp = new InsalesUploader(uploader);

gulp.task('uploader:watch', function () {
  setTimeout(function () {
    if (uploader.use) {
      InsalesUp.stream()
    }else{
      console.log('uploader.use = false');
    }
  }, 1000)
})

gulp.task('uploader:download', function () {
  setTimeout(function () {
    if (uploader.use) {
      InsalesUp.download()
    }else{
      console.log('uploader.use = false');
    }
  }, 2000)
})

gulp.task('uploader:push', function () {
  setTimeout(function () {
    if (uploader.use) {
      InsalesUp.pushTheme()
    }else{
      console.log('uploader.use = false');
    }
  }, 2000)
})

gulp.task('uploader:pull', function () {
  setTimeout(function () {
    if (uploader.use) {
      InsalesUp.pullTheme()
    }else{
      console.log('uploader.use = false');
    }
  }, 2000)
})

gulp.task('uploader:upload', function () {
  setTimeout(function () {
    if (uploader.use) {
      InsalesUp.upload({ update: false })
    }else{
      console.log('uploader.use = false');
    }
  }, 1000)
})
