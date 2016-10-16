'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    path = require('path'),
    jsonlint = require('gulp-jsonlint');

module.exports = function () {

    var jsonFiles = [
        path.join(__dirname, '../../', 'package.json'),
        path.join(__dirname, '../../', '.jscsrc'),
        path.join(__dirname, '../../', '.jshintrc')
    ];

    return gulp
        .src(jsonFiles)
        .pipe(jsonlint());
};
