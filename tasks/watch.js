'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    bs = require('browser-sync').get('SIM01');

module.exports = function() {
    gulp.watch(config.watch.styles, ['build:css']);
    gulp.watch(config.watch.scripts, ['build:js']);
    gulp.watch(config.watch.images, ['build:images']);
    gulp.watch(config.watch.code, ['build:i18n']);
    gulp.watch(config.watch.root).on('change', bs.reload);
};