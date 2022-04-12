import { playwrightLauncher } from '@web/test-runner-playwright';
import { defaultReporter } from '@web/test-runner';
import { junitReporter } from '@web/test-runner-junit-reporter';

const exclude = [
  'rollup.config.js',
  'serviceWorker.js',
  'workbox-config.js',
  'web-dev-server.config.js',
  'web-test-runner.config.js',

  'configs/**/*',
  '.storybook/**/*',
  'node_modules/**/*',

  'components/*/test/*.js',
  'components/*/stories/*.js',

  'components/golfleet-app/**/*',
  'components/golfleet-store/**/*',
  'components/golfleet-polyfill/**/*',
  'components/golfleet-drag-n-drop/**/*',
  'components/golfleet-fetch-pattern/**/*',
];

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  /** Test files to run */
  files: [ 'components/golfleet-login/test/**/*.test.js' ],

  /** Browsers to run tests on */
  browsers: [
    // playwrightLauncher({ product: 'webkit' }),
    // playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'chromium' }),
  ],

  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },

  /** Amount of test files per browser to test concurrently */
  concurrency: 1,

  /** Amount of browsers to run concurrently */
  concurrentBrowsers: 3,

  /** Code coverage configuration */
  coverage: true,
  coverageConfig: {
    include: [ 'components/*/src/**/*.js' ],
    exclude: [...exclude],
    threshold: {
      lines: 90,
      branches: 90,
      functions: 90,
      statements: 90,
    },
    report: true,
    reportDir: './coverage/',
    reporters: ['lcov'],
    nativeInstrumentation: true,
  },

  /** Test timeout configuration */
  testFramework: {
    config: {
      timeout: 1.5 * 60 * 1000,
    },
  },
  testsStartTimeout: 2 * 60 * 1000,
  testsFinishTimeout: 2 * 60 * 1000,
  browserStartTimeout: 5 * 60 * 1000,

  /** Test report configuration */
  report: true,
  reporters: [
    // use the default reporter only for reporting test progress
    defaultReporter({ reportTestResults: true, reportTestProgress: true }),
    // use another reporter to report test results
    junitReporter({
      outputPath: './coverage/junit.xml', // default `'./test-results.xml'`
      reportLogs: false, // default `false`
    }),
  ],

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto',

  // See documentation for all available options
});
