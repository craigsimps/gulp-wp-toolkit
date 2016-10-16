'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.dest.js + config.scripts.filename + '.js',
        config.dest.js + config.scripts.filename + '.min.js'
    ], {force: true});
};
