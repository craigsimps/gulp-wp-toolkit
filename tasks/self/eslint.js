'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    fs = require('fs'),
    path = require('path'),
    eslint = require('gulp-eslint');

module.exports = function () {

    var lintFile = path.join(__dirname, '../../lintfiles/', '.eslintrc'),
        filesToCheck = path.join(__dirname, '../../', '**/*.js');

    return gulp
        .src(filesToCheck)
        .pipe(eslint({
            configFile: lintFile
        }))
        .pipe(eslint.format());
};
