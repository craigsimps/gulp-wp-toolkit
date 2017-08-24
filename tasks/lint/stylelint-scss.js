'use strict';

const gulp      = require( 'gulp' ),
      config    = require( '../../config' ),
      fs        = require( 'fs' ),
      path      = require( 'path' ),
      stylelint = require( 'gulp-stylelint' );

module.exports = function () {

    const themeLintFile = config.lintfiles.stylelint;
    let lintFile;

    lintFile = path.join(__dirname, '../../lintfiles/', '.stylelintscssrc');

    if (fs.existsSync(themeLintFile)) {
        lintFile = themeLintFile;
    }

    return gulp
        .src(config.src.scss)
        .pipe(stylelint({
            configFile: lintFile,
            reporters: [
                {formatter: 'string', console: true}
            ]
        }));
};
