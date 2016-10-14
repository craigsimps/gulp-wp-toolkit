'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.dependencies.jsoutput + config.dependencies.jsfilename + '.js',
        config.dependencies.jsoutput + config.dependencies.jsfilename + '.min.js'
    ], {force: true});
};
