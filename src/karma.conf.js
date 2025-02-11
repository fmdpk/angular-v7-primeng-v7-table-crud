// // Karma configuration file, see link for more information
// // https://karma-runner.github.io/1.0/config/configuration-file.html

// module.exports = function (config) {
//   config.set({
//     basePath: '',
//     frameworks: ['jasmine', '@angular-devkit/build-angular'],
//     plugins: [
//       require('karma-jasmine'),
//       require('karma-chrome-launcher'),
//       require('karma-jasmine-html-reporter'),
//       require('karma-coverage-istanbul-reporter'),
//       require('@angular-devkit/build-angular/plugins/karma')
//     ],
//     client: {
//       clearContext: false // leave Jasmine Spec Runner output visible in browser
//     },
//     coverageIstanbulReporter: {
//       dir: require('path').join(__dirname, '../coverage/angular-v7-primeng-v7-table-crud'),
//       reports: ['html', 'lcovonly', 'text-summary'],
//       fixWebpackSourcePaths: true
//     },
//     reporters: ['progress', 'kjhtml'],
//     port: 9876,
//     colors: true,
//     logLevel: config.LOG_INFO,
//     autoWatch: true,
//     browsers: ['Chrome'],
//     singleRun: false,
//     restartOnFileChange: true
//   });
// };


// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-verbose-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      'karma-sonarqube-unit-reporter',
      'karma-junit-reporter'
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    sonarQubeUnitReporter:{
      sonarQubeVersion: 'LATEST',
      outputFile: '../TEST-reports/TEST-report.xml',
      useBrowserName: false
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/angular-v7-primeng-v7-table-crud'),
      reports: ['cobertura','lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: [ 'verbose','coverage-istanbul','sonarqubeUnit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true
  });
};
