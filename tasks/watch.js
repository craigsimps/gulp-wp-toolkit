'use strict';

const gulp   = require( 'gulp' ),
      config = require( '../config' ),
      bs     = require( 'browser-sync' ).get( 'SIM01' );

module.exports = function() {
    gulp.watch(config.src.scss, ['build:css']);
    gulp.watch(config.src.js, ['build:js']);
    gulp.watch(config.src.images, ['build:images']);
    gulp.watch(config.src.php, ['build:i18n']);
    gulp.watch([
        config.src.css,
        config.src.js,
        config.src.images,
        config.src.php
    ]).on('change', bs.reload);
};
