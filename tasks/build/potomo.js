'use strict';

const gulp   = require( 'gulp' ),
      config = require( '../../config' ),
      potomo = require( 'gulp-potomo' ),
      notify = require( 'gulp-notify' );

module.exports = function () {
    return gulp
        .src([config.src.i18n + '*.po'])
        .pipe(potomo())
        .pipe(gulp.dest(config.dest.i18nmo))
        .pipe(notify({message: config.messages.potomo}));
};
