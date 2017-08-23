'use strict';

const gulp    = require( 'gulp' ),
      config  = require( '../../config' ),
      concat  = require( 'gulp-concat' ),
      plumber = require( 'gulp-plumber' ),
      uglify  = require( 'gulp-uglify' ),
      rename  = require( 'gulp-rename' ),
      notify  = require( 'gulp-notify' ),
      map     = require( 'lodash.map' );

module.exports = function () {
    return map(config.js, function(files, filename) {
        return gulp
            .src(files)
            .pipe(plumber())
            .pipe(concat(filename + '.js'))
            .pipe(gulp.dest(config.dest.js))
            .pipe(uglify())
            .pipe(rename(filename + '.min.js'))
            .pipe(gulp.dest(config.dest.js))
            .pipe(notify({message: config.messages.js}));
    });
};
