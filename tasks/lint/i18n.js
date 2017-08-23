'use strict';

const gulp            = require( 'gulp' ),
      config          = require( '../../config' ),
      checktextdomain = require( 'gulp-checktextdomain' );

module.exports = function () {
    return gulp
        .src(config.src.i18n)
        .pipe(checktextdomain({
            text_domain: config.theme.textdomain,
            keywords: config.i18n.keywords
        }));
};
