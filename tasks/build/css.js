'use strict';

const gulp = require('gulp');
const config = require('../../config');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const normalize = require('node-normalize-scss').includePaths;
const postcss = require('gulp-postcss');
const bulksass = require('gulp-sass-bulk-import');
const mqpacker = require('css-mqpacker');
const autoprefix = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const cssnano = require('cssnano');
const banner = require('postcss-banner');
const notify = require('gulp-notify');
const map = require('lodash.map');
const rename = require('gulp-rename');
const fs = require('fs');
const csscomb = require('gulp-csscomb');
const gulpif = require('gulp-if');
const path = require('path');
const log = require('fancy-log');

module.exports = function() {

  const buildThemeHeader = function() {
    const themeHeaderArr = {
      // 'Header Name': 'Key under config.theme',
      'Theme Name': 'name',
      'Theme URI': 'themeuri',
      Author: 'author',
      'Author URI': 'authoruri',
      Description: 'description',
      Version: 'version',
      Status: 'status',
      License: 'license',
      'License URI': 'licenseuri',
      Tags: 'tags',
      'Text Domain': 'textdomain',
      'Domain Path': 'domainpath',
      Template: 'template',
      'Template Version': 'templateversion',
    };

    let key;
    let themeHeader = '';

    // Loop through above object properties.
    for (key in themeHeaderArr) {
      // If a value has been set in config.theme.???, ...
      if (config.theme[themeHeaderArr[key]]) {
        // Then build the file header for it.
        themeHeader += key + ': ' + config.theme[themeHeaderArr[key]] + '\n';
      }
    }

    if (config.theme.notes) {
      themeHeader += '\n' + config.theme.notes;
    }

    // Remove final new line character.
    themeHeader = themeHeader.slice(0, -1);

    return themeHeader;
  };

  const getPostProcessors = function(outputConfig, outputFilename) {

    let themeHeader;
    const postProcessors = [
      mqpacker(
        {
          sort: true,
        }
      ),
      autoprefix(),
      pxtorem(
        {
          root_value: config.css.basefontsize,
          replace: config.css.remreplace,
          media_query: config.css.remmediaquery,
        }
      ),
    ];

    // Add CSS Nano to further compress our output..
    if ('compressed' === outputConfig.outputStyle) {
      postProcessors.push(cssnano(config.css.cssnano));
    }

    // If we're working on the main style.css, output the theme header.
    if ('style' === outputFilename) {
      themeHeader = buildThemeHeader();
      postProcessors.push(
        banner(
          {
            banner: themeHeader,
          }
        )
      );
    }

    return postProcessors;

  };

  const getCombFile = function() {
    let themeLintFile = config.lintfiles.csscomb;
    let lintFile = path.join(__dirname, '../../lintfiles/', '.csscomb.json');

    if (fs.existsSync(themeLintFile)) {
      lintFile = themeLintFile;
    }

    return lintFile;
  };

  return map(config.css.scss, function(outputConfig, outputFilename) {

    if (!fs.existsSync(outputConfig.src)) {
      return log('ERROR >> Source file ' + outputConfig.src
        + ' was not found.');
    }

    let isExpanded = function() {
      return 'expanded' === outputConfig.outputStyle;
    };

    let createSourceMap = function() {
      return true === outputConfig.sourceMap;
    };

    return gulp.src(outputConfig.src)
      .pipe(bulksass())
      .pipe(plumber())
      .pipe(rename(outputFilename + '.css'))
      .pipe(gulpif(createSourceMap, sourcemap.init()))
      .pipe(sass.sync({
        outputStyle: outputConfig.outputStyle,
        includePaths: [].concat(normalize),
      }))
      .pipe(postcss(getPostProcessors(outputConfig, outputFilename)))
      .pipe(gulpif(isExpanded, csscomb(getCombFile())))
      .pipe(gulpif(createSourceMap, sourcemap.write('./')))
      .pipe(gulp.dest(outputConfig.dest))
      .pipe(notify({ message: config.messages.css }));
  });
};
