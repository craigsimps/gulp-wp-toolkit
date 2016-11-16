'use strict';

var gulp = require('gulp'),
    path = require('path'),
    jscs = require('gulp-jscs');

module.exports = function () {

    var filesToCheck = path.join(__dirname, '../../', '**/*.js'),
        lintFile = path.join(__dirname, '../../', '.jscsrc');

    return gulp
        .src(filesToCheck)
	    .pipe(jscs({
			configPath: lintFile
		}));
};
