module.exports = (on, config) => {
    on('before:browser:launch', (browser, launchOptions) => {
        const isHeadlessChrome = browser.name === 'chrome' && browser.isHeadless;
        const isHeadlessYandex = browser.name === 'yandex' && browser.isHeadless;

        if (isHeadlessChrome || isHeadlessYandex) {
            // fullPage screenshot size is 1920x1080 on non-retina screens
            // and 2800x2400 on retina screens
            launchOptions.args.push('--window-size=1920,1080')

            // force screen to be non-retina (1920x1080 size)
            launchOptions.args.push('--force-device-scale-factor=1')
            launchOptions.args.push('--disable-gpu')
            launchOptions.args.push('--disable-software-rasterizer')

            // force screen to be retina (2800x2400 size)
            // launchOptions.args.push('--force-device-scale-factor=2')
        }

        if (browser.name === 'electron' && browser.isHeadless) {
            // fullPage screenshot size is 1920x1080
            launchOptions.preferences.width = 1920
            launchOptions.preferences.height = 1080
        }

        if (browser.name === 'firefox' && browser.isHeadless) {
            // menubars take up height on the screen
            // so fullPage screenshot size is 1920x1126
            launchOptions.args.push('--width=1920')
            launchOptions.args.push('--height=1080')
        }

        return launchOptions
    })

    return config;
}