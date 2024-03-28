import { test, expect, ConsoleMessage } from '@playwright/test';
import { Home } from './home.po';

let home: Home;
let removeListener: () => ConsoleMessage[];

test.afterEach(() => {
    const consoleMessages = removeListener();
    const severeConsoleMessages = consoleMessages.filter(
        (consoleMessage) => !['debug', 'info', 'log', 'warn', 'warning'].includes(consoleMessage.type())
    );

    // eslint-disable-next-line no-console
    severeConsoleMessages.forEach((consoleMessage) => console.log(`${consoleMessage.type()}: ${consoleMessage.text()}`));

    expect(severeConsoleMessages).toEqual([]);
});

test.beforeEach(async ({ page }) => {
    const consoleMessages: ConsoleMessage[] = [];
    const listener = (consoleMessage) => consoleMessages.push(consoleMessage);

    page.addListener('console', listener);

    removeListener = () => {
        page.removeListener('console', listener);

        return consoleMessages;
    };

    home = new Home(page);

    await home.navigateTo();
});

test('should display the correct headline', async () => {
    await expect(home.getHeadline()).toHaveText('Time forthe Timing Object');
});

test('should go to the first slide', async ({ page }) => {
    await expect(page).toHaveURL(/\/slides\/1$/);
});

test('should go to the next slide', async ({ page }) => {
    await page.waitForURL(/\/slides\/1$/);
    await page.keyboard.press('ArrowRight');
    await page.waitForURL(/\/slides\/2$/);

    await expect(home.getSubHeadline()).toHaveText('The Timing Object specification');
});
