'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.scripts.dest + config.scripts.filename + '.js',
        config.scripts.dest + config.scripts.filename + '.min.js'
    ], {force: true});
};
