'use strict';

const gulp = require('gulp');
const config = require('../../config');
const rtlcss = require('gulp-rtlcss');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

module.exports = function() {
  return gulp.src('style.css')
    .pipe(rtlcss())
    .pipe(rename('rtl.css'))
    .pipe(replace(/\/\*#\ssourceMappingURL(.+)$/gm, ''))
    .pipe(gulp.dest(config.dest.css));
};
