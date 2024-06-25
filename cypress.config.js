const execa = require("execa");
const { defineConfig } = require("cypress");

const findBrowser = () => {
const browserPath = '/usr/bin/yandex-browser';

  return execa(browserPath, ["--version"]).then((result) => {
    const [, version] = /Yandex (\d+\.\d+\.\d+\.\d+)/.exec(result.stdout);

    const majorVersion = parseInt(version.split(".")[0]);

    return {
      name: "yandex",
      channel: "stable",
      family: "chromium",
      displayName: "Yandex",
      version,
      path: browserPath,
      majorVersion,
    };
  });
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      if (process.platform !== "win32") {
        return findBrowser().then((browser) => {
          return {
            browsers: config.browsers.concat(browser),
          };
        });
      } else {
        return {
          browsers: config.browsers.concat([
            {
              name: "yandex",
              channel: "stable",
              family: "chromium",
              displayName: "Yandex",
              version: "24.6.0.1874",
              path: "C:\\Yandex\\YandexBrowser\\Application\\browser.exe",
              majorVersion: "24",
            },
          ]),
        };
      }
    },
  },
});
