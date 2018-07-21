'use strict';

const gulp = require('gulp');
const config = require('../../config');
const fs = require('fs');
const path = require('path');
const stylelint = require('gulp-stylelint');

module.exports = function() {

  const themeLintFile = config.lintfiles.stylelint;

  let lintFile = path.join(__dirname, '../../lintfiles/', '.stylelintrc');

  if (fs.existsSync(themeLintFile)) {
    lintFile = themeLintFile;
  }

  return gulp.src(config.src.css)
    .pipe(stylelint({
      configFile: lintFile,
      reporters: [
        { formatter: 'string', console: true },
      ],
    }));
};
