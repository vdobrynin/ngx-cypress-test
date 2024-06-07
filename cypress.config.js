import { defineConfig } from "cypress";

module.exports = defineConfig({
  viewportHeight: 900, //1080,//1440,
  viewportWidth: 1440, //1920,//2560,
  // video: false,
  defaultCommandTimeout: 10000,
  experimentalWebKitSupport: true,
  e2e: {
    baseUrl: "http://localhost:4200",
    excludeSpecPattern: [
      "**/examples/*",
      "**/__snapshots__/*",
      "**/__image_snapshots__/*"
    ],
    specPattern: "cypress/integration/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  includeShadowDom: true,
  projectId: "gvk4ub"
});
