const { initPlugin } = require('cypress-plugin-snapshots/plugin');
let percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
    // initPlugin(on, config);
    on("task", percyHealthCheck);
    return config;
};