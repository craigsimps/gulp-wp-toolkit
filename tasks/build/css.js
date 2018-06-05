'use strict';

const gulp = require('gulp'),
  config = require('../../config'),
  plumber = require('gulp-plumber'),
  sourcemap = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  normalize = require('node-normalize-scss').includePaths,
  postcss = require('gulp-postcss'),
  bulksass = require('gulp-sass-bulk-import'),
  mqpacker = require('css-mqpacker'),
  autoprefix = require('autoprefixer'),
  pxtorem = require('postcss-pxtorem'),
  cssnano = require('cssnano'),
  banner = require('postcss-banner'),
  notify = require('gulp-notify'),
  map = require('lodash.map'),
  rename = require('gulp-rename'),
  fs = require('fs'),
  csscomb = require('gulp-csscomb'),
  gulpif = require('gulp-if'),
  path = require('path');

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
      return console.log('ERROR >> Source file ' + outputConfig.src +
        ' was not found.');
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
      .pipe(notify({message: config.messages.css}));
  });
};
