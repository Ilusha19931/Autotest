const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'evg43n',
  e2e: {
    baseUrl: 'https://dev-pre-release-frontend.tatbg.ru/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    'url':"https://dev-pre-release-frontend.tatbg.ru/",
    'urlApplication': "https://dev-pre-release-frontend.tatbg.ru/application-create"
  }

});