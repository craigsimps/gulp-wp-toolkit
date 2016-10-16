'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    fs = require('fs'),
    path = require('path'),
    scsslint = require('gulp-scss-lint');

module.exports = function () {

    var lintFile,
        themeLintFile = config.styles.lint;

    lintFile = path.join(__dirname, '../../lintfiles/', '.scss-lint.yml');

    if (fs.existsSync(themeLintFile)) {
        lintFile = themeLintFile;
    }

    return gulp
        .src(config.styles.src)
        .pipe(scsslint({
            'config': lintFile
        }));
};
