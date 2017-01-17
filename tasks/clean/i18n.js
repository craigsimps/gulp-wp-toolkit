'use strict';

var config = require('../../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.dest.i18npo + config.theme.textdomain + '.pot',
        config.dest.i18nmo
    ], {force: true});
};
