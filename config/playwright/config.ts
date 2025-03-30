import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import { env } from 'process';

const config: PlaywrightTestConfig = {
    expect: {
        timeout: 20000,
        toHaveScreenshot: {
            threshold: 0
        },
        toMatchSnapshot: {
            threshold: 0
        }
    },
    forbidOnly: !!env.CI,
    fullyParallel: true,
    outputDir: '../../playwright-results',
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },
        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox']
            }
        },
        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari']
            }
        }
    ],
    reporter: 'html',
    retries: env.CI ? 2 : 0,
    snapshotDir: '../../test/screenshots',
    testDir: '../../test',
    testMatch: /(e2e|regression)\/(?!.*\.po\.ts$).*\.ts$/,
    use: {
        baseURL: env.IS_SMOKE_TEST ? 'https://chrisguttandin.github.io/demuxed-2022/' : 'http://localhost:7722',
        trace: 'on-first-retry'
    },
    webServer: env.IS_SMOKE_TEST
        ? undefined
        : {
              command: 'npm run monitor',
              port: 7722
          },
    workers: env.CI ? 1 : undefined
};

export default config;
