'use strict';

const gulp = require('gulp'),
  config = require('../config'),
  bump = require('gulp-bump'),
  args = require('yargs').argv;

module.exports = function() {

  let options = {
    type: 'patch'
  };

  if ( args.hasOwnProperty('ma') ) {
    options.type = 'major';
  } else if ( args.hasOwnProperty('mi') ) {
    options.type = 'minor';
  }

  return gulp.src(config.bump.files)
    .pipe(bump(options))
    .pipe(gulp.dest('./'));
};
