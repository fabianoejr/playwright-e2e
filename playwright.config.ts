import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'src/scenarios',
  timeout: 60000,
  retries: 0,
  use: {
    trace: 'on',
    locale: 'pt-BR',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'off'
  },
  expect: {
    timeout: 60000
  },
  reporter: [
    [
      'html',
      {
        outputFolder: 'artifacts/report',
        open: 'never'
      }
    ]
  ]
};
export default config;
