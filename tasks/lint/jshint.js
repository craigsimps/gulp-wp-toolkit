'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    fs = require('fs'),
    path = require('path'),
    jshint = require('gulp-jshint');

module.exports = function () {

    var lintFile,
        themeLintFile = config.lintfiles.jshint;

    lintFile = path.join(__dirname, '../../lintfiles/', '.jshintrc');

    if (fs.existsSync(themeLintFile)) {
        lintFile = themeLintFile;
    }

    return gulp
        .src(config.scripts.src)
        .pipe(jshint(lintFile))
        .pipe(jshint.reporter('default'));
};
