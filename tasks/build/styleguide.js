'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    hologram = require('gulp-hologram');

module.exports = function () {
    return gulp
        .src(config.hologram.config)
        .pipe(hologram({logging:true}));
};
