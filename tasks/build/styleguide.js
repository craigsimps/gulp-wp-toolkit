'use strict';

const gulp = require('gulp'),
  config = require('../../config'),
  hologram = require('gulp-hologram'),
  notify = require('gulp-notify');

module.exports = function() {
  return gulp.src(config.hologram.config)
    .pipe(hologram({logging: true}))
    .pipe(notify({message: config.messages.styleguide}));
};
