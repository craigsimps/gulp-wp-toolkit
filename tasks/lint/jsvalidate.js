'use strict';

const gulp = require('gulp');
const config = require('../../config');
const jsvalidate = require('gulp-jsvalidate');

module.exports = function() {
  return gulp.src(config.src.js)
    .pipe(jsvalidate());
};
