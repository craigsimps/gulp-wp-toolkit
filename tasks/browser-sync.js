'use strict';

const bs = require('browser-sync').create('SIM01');
const config = require('../config');

module.exports = function() {
  if (config.server) {
    bs.init(config.server);
  }
};
