'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    jsonlint = require('gulp-jsonlint');

module.exports = function () {
    return gulp
        .src(config.self.json)
        .pipe(jsonlint());
};
