'use strict';

const gulp = require('gulp'),
  config = require('../../config'),
  changed = require('gulp-changed'),
  cache = require('gulp-cache'),
  imagemin = require('gulp-imagemin'),
  notify = require('gulp-notify'),
  tap = require('gulp-tap');

module.exports = function() {
  return gulp.src(config.src.images)
    .pipe(changed(config.dest.images))
    .pipe(cache(
      imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
    .pipe(tap(function(file) {
      if ('screenshot.png' === path.basename(file.path)) {
        return gulp.dest('./');
      }
    }))
    .pipe(gulp.dest(config.dest.images))
    .pipe(notify({message: config.messages.images}));
};
