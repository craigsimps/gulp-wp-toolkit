'use strict';

const merge         = require( 'lodash.merge' ),
      defaultConfig = require( '../config' );

module.exports = function extendConfig(config) {
    merge(defaultConfig, config);
};
