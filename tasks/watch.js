'use strict';

var gulp = require('gulp');
var bs = require('./browser-sync').get('SIM01');

var config = require('../config');

module.exports = function() {
    gulp.watch(config.watch.styles, ['build:css']);
    gulp.watch(config.watch.scripts, ['build:js']);
    gulp.watch(config.watch.images, ['build:images']);
    gulp.watch(config.watch.code, ['build:i18n']);
    gulp.watch(config.watch.root).on('change', bs.reload);
};