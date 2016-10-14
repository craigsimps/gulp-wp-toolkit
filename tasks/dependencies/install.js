'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    bower = require('gulp-bower');

module.exports = function () {
    // Change current working directory to one level above our `/gulp/` subdir (ie main theme root).
    return bower({cwd: '../'});
};
