'use strict';

const gulp = require('gulp'),
  config = require('../../config'),
  changed = require('gulp-changed'),
  imagemin = require('gulp-imagemin'),
  notify = require('gulp-notify'),
  tap = require('gulp-tap'),
  path = require('path'),
  ignore = require('gulp-ignore'),
  conditional = require('gulp-if');

module.exports = function() {
  let screenshotPath = false;

  return gulp.src(config.src.images)
    .pipe(changed(config.dest.images))
    .pipe(imagemin({
      verbose: true,
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
    }))
    .pipe(tap(function(file) {
      const fullPath = file.path,
        fileExtension = path.extname(file.path),
        fileName = path.basename(fullPath, fileExtension),
        allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

      if (('screenshot' === fileName) &&
        (-1 !== allowedExtensions.indexOf(fileExtension))) {
        screenshotPath = fullPath;
        return gulp.src(screenshotPath).pipe(gulp.dest('./'));
      }
    }))
    .pipe(conditional(false !== screenshotPath, ignore.include(screenshotPath)))
    .pipe(gulp.dest(config.dest.images))
    .pipe(notify({message: config.messages.images}));
};
