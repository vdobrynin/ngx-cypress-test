module.exports = (on, config) => {
    // cypress-plugin-snapshots is not compatible with Cypress 16 (crypto.randomBytes)
    // initPlugin(on, config);
    return config;
};