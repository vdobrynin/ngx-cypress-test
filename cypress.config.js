const { defineConfig } = require('cypress')
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = defineConfig({
  viewportHeight: 1200, //900,  
  viewportWidth: 1920, //1440, 
  screenshotOnRunFailure: false,
  video: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,
  waitForAnimations: true,
  experimentalWebKitSupport: true,
  env: {
    'cypress-plugin-snapshots': {
      imageConfig: {
        threshold: 0.01,
      },
    },
  },
  e2e: {
    baseUrl: "http://localhost:4200",
    excludeSpecPattern: [
      '**/1-getting-started',
      '**/2-advanced-examples',
      "**/__snapshots__/*",
      "**/__image_snapshots__/*"
    ],
    specPattern: "cypress/integration/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // initPlugin(on, config);
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
  includeShadowDom: true,
  projectId: "gvk4ub"
});
