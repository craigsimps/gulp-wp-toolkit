'use strict';

const gulp = require('gulp');
const config = require('../../config');
const fs = require('fs');
const path = require('path');
const eslint = require('gulp-eslint');

module.exports = function() {

  const themeLintFile = config.lintfiles.eslint;

  let lintFile = path.join(__dirname, '../../lintfiles/', '.eslintrc');

  if (fs.existsSync(themeLintFile)) {
    lintFile = themeLintFile;
  }

  return gulp.src(config.src.js)
    .pipe(eslint({
      configFile: lintFile,
    }))
    .pipe(eslint.format());
};
