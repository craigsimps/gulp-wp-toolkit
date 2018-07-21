'use strict';

const gulp = require('gulp');
const config = require('../../config');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const filter = require('gulp-filter');

module.exports = function() {
  const allButScreenshot = filter(
    ['**/*', '!**/screenshot.*'],
    { restore: true }
  );
  const onlyScreenshot = filter(['**/screenshot.*']);

  return gulp.src(config.src.images)
    .pipe(changed(config.dest.images))
    .pipe(imagemin({
      verbose: true,
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
    }))
    .pipe(allButScreenshot)
    .pipe(gulp.dest(config.dest.images))
    .pipe(allButScreenshot.restore)
    .pipe(onlyScreenshot)
    .pipe(gulp.dest('./'))
    .pipe(notify({ message: config.messages.images }));
};
