'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    path = require('path'),
    jshint = require('gulp-jshint');

module.exports = function () {

    var filesToCheck = path.join(__dirname, '../../', '**/*.js'),
        lintFile = path.join(__dirname, '../../', '.jshintrc');

    return gulp
        .src(filesToCheck)
        .pipe(jshint(lintFile))
        .pipe(jshint.reporter('default'));
};
