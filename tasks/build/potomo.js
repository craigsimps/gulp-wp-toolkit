'use strict';

const gulp = require('gulp');
const config = require('../../config');
const potomo = require('gulp-potomo');
const notify = require('gulp-notify');

module.exports = function() {
  return gulp.src([config.src.i18n + '*.po'])
    .pipe(potomo())
    .pipe(gulp.dest(config.dest.i18nmo))
    .pipe(notify({ message: config.messages.potomo }));
};
