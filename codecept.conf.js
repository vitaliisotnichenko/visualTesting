require('dotenv').config({ path: './env'})

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    // Playwright: {
    //   url: 'http://192.168.178.132:8080/index2.html',
    //   // port: 63342,
    //   show: true,
    //   browser: 'chromium'
    // },
    WebDriver: {
      url: 'http://192.168.178.132:8080/index2.html',
      browser: 'chrome',
      restart: true,
      host: 'localhost',
      port: 4444,
      protocol: 'http',
      windowSize: '1600x1080',
      outputDir: './output',
      smartWait: 5000,
      timeouts: {
        'script': 60000,
        'page load': 10000
      },
    },
    ResembleHelper : {
      require: "codeceptjs-resemblehelper",
      screenshotFolder: "./tests/output/",
      baseFolder: "./tests/screenshots/base/",
      diffFolder: "./tests/screenshots/diff/"
    },

    ApplitoolsHelper: {
      require: 'codeceptjs-applitoolshelper',
      applitoolsKey: 'ZA0y20TMtiFMKiVFivjZfUW6UrjxQtAPYE101nPIDYf9s110'
    },

    VisualRegressionTrackerHelper: {
      require: "@visual-regression-tracker/agent-codeceptjs",
      apiUrl: "http://localhost:4200",
      apiKey: "BQTZV7FSW2M7FMQKXRB220BSTDSD",
      project: "ebc5bbf2-3616-4a7b-835c-a60452c4bbcc",
      branchName: "master",
      ciBuildId: "commit_sha",
      enableSoftAssert: false
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'visualTesting',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      outputDir: './output',
      enableScreenshotDiffPlugin: true
    },
    selenoid: {
      enabled: true,
      deletePassed: false,
      autoCreate: false,
      enableVNC: true
    }
  }
}