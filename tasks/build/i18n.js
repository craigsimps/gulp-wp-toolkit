'use strict';

const gulp = require('gulp'),
  config = require('../../config'),
  sort = require('gulp-sort'),
  plumber = require('gulp-plumber'),
  potgen = require('gulp-wp-pot'),
  notify = require('gulp-notify');

module.exports = function() {
  return gulp.src(config.src.php)
    .pipe(plumber())
    .pipe(sort())
    .pipe(potgen({
      domain: config.theme.textdomain,
      package: config.theme.name + ' ' + config.theme.version,
    }))
    .pipe(gulp.dest(config.dest.i18npo + config.theme.textdomain + '.pot'))
    .pipe(notify({message: config.messages.i18n}));
};
