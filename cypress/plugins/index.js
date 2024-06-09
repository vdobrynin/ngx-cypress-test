const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
    // isPercyEnabled();
    initPlugin(on, config);
    return config;
};