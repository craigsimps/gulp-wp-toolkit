'use strict';

var config = require('../../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.dest.images + '**/*'
    ], {force: true});
};
