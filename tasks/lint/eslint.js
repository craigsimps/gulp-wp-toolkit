'use strict';

const gulp   = require( 'gulp' ),
      config = require( '../../config' ),
      fs     = require( 'fs' ),
      path   = require( 'path' ),
      eslint = require( 'gulp-eslint' );

module.exports = function () {

    const themeLintFile = config.lintfiles.eslint;
    let lintFile;

    lintFile = path.join(__dirname, '../../lintfiles/', '.eslintrc');

    if (fs.existsSync(themeLintFile)) {
        lintFile = themeLintFile;
    }

    return gulp
        .src(config.src.js)
        .pipe(eslint({
            configFile: lintFile
        }))
        .pipe(eslint.format());
};
