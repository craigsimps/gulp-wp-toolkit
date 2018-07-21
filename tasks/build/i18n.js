'use strict';

const gulp = require('gulp');
const config = require('../../config');
const sort = require('gulp-sort');
const plumber = require('gulp-plumber');
const potgen = require('gulp-wp-pot');
const notify = require('gulp-notify');

module.exports = function() {
  return gulp.src(config.src.php)
    .pipe(plumber())
    .pipe(sort())
    .pipe(potgen({
      domain: config.theme.textdomain,
      package: config.theme.name + ' ' + config.theme.version,
    }))
    .pipe(gulp.dest(config.dest.i18npo + config.theme.textdomain + '.pot'))
    .pipe(notify({ message: config.messages.i18n }));
};
