'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    postcss = require('gulp-postcss'),
    colorguard = require('colorguard');

module.exports = function () {
    return gulp
        .src(config.src.css)
        .pipe(postcss([colorguard()]));
};
