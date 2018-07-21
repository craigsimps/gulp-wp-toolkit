'use strict';

const config = require('../../config');
const del = require('del');

module.exports = function() {
  return del([
    config.dest.js + config.js.filename + '.js',
    config.dest.js + config.js.filename + '.min.js',
  ], { force: true });
};
