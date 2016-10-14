'use strict';

var merge = require('lodash.merge');
var defaultConfig = require('../config');

module.exports = function extendConfig(config) {
    merge(defaultConfig, config);
};
