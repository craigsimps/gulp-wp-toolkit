'use strict';

const bs = require('browser-sync').create('SIM01'),
  config = require('../config');

module.exports = function() {
  if (config.server.url) {
    bs.init( config.server );
  }
};
