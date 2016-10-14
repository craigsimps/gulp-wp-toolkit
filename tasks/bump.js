'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    bump = require('gulp-bump'),
    args = require('yargs').argv;

module.exports = function() {

    var type = args.type;
    var version = args.version;
    var options = {};

    if (version) {
        options.version = version;
    } else {
        options.type = type;
    }

    return gulp
        .src(config.bump.files)
        .pipe(bump(options))
        .pipe(gulp.dest('./'));
};
