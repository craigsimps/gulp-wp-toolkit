'use strict';

const gulp = require('gulp'),
  config = require('../../config'),
  changed = require('gulp-changed'),
  imagemin = require('gulp-imagemin'),
  notify = require('gulp-notify'),
  ignore = require('gulp-ignore'),
  filter = require('gulp-filter');

module.exports = function() {
  const allButScreenshot = filter(['**/*', '!**/screenshot.*'], {restore: true});
  const onlyScreenshot = filter(['**/screenshot.*']);

  return gulp.src(config.src.images)
    .pipe(changed(config.dest.images))
    .pipe(imagemin({
      verbose: true,
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(allButScreenshot)
    .pipe(gulp.dest(config.dest.images))
    .pipe(allButScreenshot.restore)
    .pipe(onlyScreenshot)
    .pipe(gulp.dest('./'))
    .pipe(notify({message: config.messages.images}));
};
