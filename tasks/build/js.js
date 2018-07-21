'use strict';

const gulp = require('gulp');
const config = require('../../config');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const map = require('lodash.map');

module.exports = function() {
  return map(config.js, function(files, filename) {
    return gulp.src(files)
      .pipe(plumber())
      .pipe(concat(filename + '.js'))
      .pipe(gulp.dest(config.dest.js))
      .pipe(uglify())
      .pipe(rename(filename + '.min.js'))
      .pipe(gulp.dest(config.dest.js))
      .pipe(notify({ message: config.messages.js }));
  });
};
