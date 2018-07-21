'use strict';

const gulp = require('gulp');
const config = require('../../config');
const jsonlint = require('gulp-jsonlint');

module.exports = function() {
  return gulp.src(config.src.json)
    .pipe(jsonlint());
};
