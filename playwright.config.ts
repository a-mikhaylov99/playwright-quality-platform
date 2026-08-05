import { defineConfig, devices } from '@playwright/test';

import { environment } from './src/config/environment';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,

  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    baseURL: environment.baseUrl,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: environment.defaultTimeoutMs,
    navigationTimeout: 20_000,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
