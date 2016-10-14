'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    postcss = require('gulp-postcss'),
    colorguard = require('colorguard'),
    filterstream = require('postcss-filter-stream'),
    scss = require('postcss-scss');

module.exports = function () {
    return gulp
        .src(config.src)
        .pipe(postcss([
            filterstream('**/node_modules/**', colorguard())
        ], {syntax: scss}));
};
