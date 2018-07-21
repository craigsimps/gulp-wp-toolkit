'use strict';

const merge = require('lodash.merge');
const defaultConfig = require('../config');

module.exports = function extendConfig(config) {
  merge(defaultConfig, config);
};
