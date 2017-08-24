'use strict';

const gulp = require('gulp'),
  config = require('../config'),
  bump = require('gulp-bump'),
  args = require('yargs').argv;

module.exports = function() {

  const type = args.type,
    version = args.version;

  let options = {};

  if (version) {
    options.version = version;
  } else {
    options.type = type;
  }

  return gulp.src(config.bump.files)
    .pipe(bump(options))
    .pipe(gulp.dest('./'));
};
