'use strict';

const config = require( '../../config' ),
      del    = require( 'del' );

module.exports = function () {
    return del([
        config.dest.images + '**/*'
    ], {force: true});
};
