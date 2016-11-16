'use strict';

module.exports = {
    tasks: require('./tasks'),
    config: require('./config'),
    bs: require('browser-sync'),
    extendTasks: require('./utils/extend-tasks'),
    extendConfig: require('./utils/extend-config')
};
