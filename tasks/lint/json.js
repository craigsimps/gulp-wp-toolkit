'use strict';

const gulp = require('gulp'),
  config = require('../../config'),
  jsonlint = require('gulp-jsonlint');

module.exports = function() {
  return gulp.src(config.src.json)
    .pipe(jsonlint());
};
