'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    fs = require('fs'),
    path = require('path'),
    scsslint = require('gulp-scss-lint');

module.exports = function () {

    var lintFile,
        themeLintFile = config.lintfiles.scsslint;

    lintFile = path.join(__dirname, '../../lintfiles/', '.scss-lint.yml');

    if (fs.existsSync(themeLintFile)) {
        lintFile = themeLintFile;
    }

    return gulp
        .src(config.src.css)
        .pipe(scsslint({
            'config': lintFile,
            'maxBuffer': 1048576
        }));
};
