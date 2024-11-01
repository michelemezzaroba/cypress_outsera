const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      mochawesome(on); // Adiciona o mochawesome ao setup de eventos

      return config;
    },
    specPattern: [
      'cypress/api/**/*.cy.js', // Para testes de API normais
      'cypress/e2e/**/*.feature'// Para testes de Cucumber
    ],
    supportFile: "cypress/support/e2e.js",
    reporter: "cypress-mochawesome-reporter", // Define o mochawesome como o reporter
    reporterOptions: {
      reportDir: "cypress/reports", // Diretório onde os relatórios serão salvos
      overwrite: false,
      html: true,
      json: false,
    },
  },
});
