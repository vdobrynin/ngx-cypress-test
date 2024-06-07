const { defineConfig } = require('cypress')
const { initPlugin } = require('cypress-plugin-snapshots/plugin');
//let percyHealthCheck = require('@percy/cypress/task')

module.exports = defineConfig({
  viewportHeight: 900, //1080,//1440,
  viewportWidth: 1440, //1920,//2560,
  // video: false,
  defaultCommandTimeout: 10000,
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
      initPlugin(on, config);
      //on("task", percyHealthCheck);
    },
  },
  includeShadowDom: true,
  projectId: "gvk4ub"
});
