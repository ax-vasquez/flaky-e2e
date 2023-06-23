module.exports = {
  projectId: 'xywvj1',

  component: {
    // devServer: {
    //   framework: "create-react-app",
    //   bundler: "webpack",
    // },
    devServer: () => ({ port: [] })
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    port: 3001
  },
  retries: {
    runMode: 2,
    openMode: 0
  },
};
