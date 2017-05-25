'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    fs = require('fs'),
    path = require('path'),
    stylelint = require('gulp-stylelint');

module.exports = function () {

    var lintFile,
        themeLintFile = config.lintfiles.stylelint;

    lintFile = path.join(__dirname, '../../lintfiles/', '.stylelintrc');

    if (fs.existsSync(themeLintFile)) {
        lintFile = themeLintFile;
    }

    return gulp
        .src(config.src.css)
        .pipe(stylelint({
            configFile: lintFile,
            reporters: [
                {formatter: 'string', console: true}
            ]
        }));
};
