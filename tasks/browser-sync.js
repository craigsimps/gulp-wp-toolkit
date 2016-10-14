'use strict';

var bs = require('browser-sync').create('SIM01'),
    config = require('../config');

module.exports = function() {
    bs.init({
        proxy: config.server.url
    });
};