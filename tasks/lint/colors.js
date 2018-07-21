'use strict';

const gulp = require('gulp');
const config = require('../../config');
const postcss = require('gulp-postcss');
const colorguard = require('colorguard');

module.exports = function() {
  return gulp.src(config.src.css)
    .pipe(postcss([colorguard()]));
};
