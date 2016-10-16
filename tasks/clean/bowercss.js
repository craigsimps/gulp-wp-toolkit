'use strict';

var config = require('../../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.dest.bowercss + config.bower.cssfilename + '.css',
        config.dest.bowercss + config.bower.cssfilename + '.min.css'
    ], {force: true});
};
