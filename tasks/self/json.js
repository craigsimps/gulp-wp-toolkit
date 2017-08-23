'use strict';

var gulp = require('gulp'),
    path = require('path'),
    jsonlint = require('gulp-jsonlint');

module.exports = function () {

    var jsonFiles = [
        path.join(__dirname, '../../', 'package.json'),
        path.join(__dirname, '../../', '.jshintrc')
    ];

    return gulp
        .src(jsonFiles)
        .pipe(jsonlint());
};
