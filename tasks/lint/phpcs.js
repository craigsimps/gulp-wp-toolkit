'use strict';

const gulp = require('gulp');
const config = require('../../config');
const fs = require('fs');
const path = require('path');
const phpcs = require('gulp-phpcs');

module.exports = function() {

  const themeConfigFile = config.lintfiles.phpcs;
  let configFile;

  configFile = path.join(__dirname, '../../lintfiles/', 'phpcs.xml');

  if (fs.existsSync(themeConfigFile)) {
    configFile = themeConfigFile;
  }

  if (fs.existsSync(themeConfigFile + '.dist')) {
    configFile = themeConfigFile + '.dist';
  }

  return gulp.src(config.src.php)
    .pipe(phpcs({
      standard: configFile,
      warningSeverity: 0,
    }))
    .pipe(phpcs.reporter('log'));
};
