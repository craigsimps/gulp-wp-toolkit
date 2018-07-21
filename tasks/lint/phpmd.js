'use strict';

const gulp = require('gulp');
const config = require('../../config');
const fs = require('fs');
const path = require('path');
const phpmd = require('gulp-phpmd-plugin');

module.exports = function() {

  const themeConfigFile = config.lintfiles.phpmd;

  let configFile = path.join(__dirname, '../../lintfiles/', 'phpmd.xml');

  if (fs.existsSync(themeConfigFile)) {
    configFile = themeConfigFile;
  }

  if (fs.existsSync(themeConfigFile + '.dist')) {
    configFile = themeConfigFile + '.dist';
  }

  return gulp.src(config.src.php)
    .pipe(phpmd({
      format: 'text',
      ruleset: configFile,
    }))
    .pipe(phpmd.reporter('log'));
};
