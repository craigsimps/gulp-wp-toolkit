'use strict';

const gulp = require('gulp');
const config = require('../config');
const bump = require('gulp-bump');
const args = require('yargs').argv;

module.exports = function() {

  let options = {
    type: 'patch',
  };

  if (args.hasOwnProperty('ma')) {
    options.type = 'major';
  } else if (args.hasOwnProperty('mi')) {
    options.type = 'minor';
  }

  return gulp.src(config.bump.files)
    .pipe(bump(options))
    .pipe(gulp.dest('./'));
};
