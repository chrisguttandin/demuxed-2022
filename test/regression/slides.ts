import { expect, test } from '@playwright/test';

test.use({ viewport: { height: 1080, width: 1920 } });

for (let slide = 1; slide < 26; slide += 1) {
    test.describe(`slide ${slide}`, () => {
        test.beforeEach(({ page }) => page.emulateMedia({ reducedMotion: 'reduce' }));

        test('should look the same', async ({ page }) => {
            await page.goto(`./slides/${slide}`);

            await expect(page).toHaveScreenshot({
                fullPage: true
            });
        });
    });
}
