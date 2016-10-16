'use strict';

var gulp = require('gulp'),
    path = require('path'),
    jsvalidate = require('gulp-jsvalidate');

module.exports = function () {

    var filesToCheck = path.join(__dirname, '../../', '**/*.js');

    return gulp
        .src(filesToCheck)
        .pipe(jsvalidate());
};
