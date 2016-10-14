'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    jshint = require('gulp-jshint');

module.exports = function () {
    return gulp
        .src(config.self.src)
        .pipe(jshint(config.self.jshint))
        .pipe(jshint.reporter('default'));
};
