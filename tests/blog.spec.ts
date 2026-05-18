import { expect, test } from '@playwright/test';

test.describe('Blog', () => {
    test('lists articles', async ({ page }) => {
        await page.goto('/blog');
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
        const cards = page.locator('a.blog-card');
        await expect(cards.first()).toBeVisible();
        expect(await cards.count()).toBeGreaterThanOrEqual(6);
    });

    test('opens a recent article', async ({ page }) => {
        await page.goto('/blog');
        await page.getByRole('link', { name: /Combien coûte un site web/i }).click();
        await expect(page).toHaveURL(/\/articles\/prix-site-web-maroc-2026/);
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    });

    test('serves sitemap and robots', async ({ request }) => {
        const sitemap = await request.get('/sitemap.xml');
        expect(sitemap.status()).toBe(200);
        expect(await sitemap.text()).toContain('/articles/prix-site-web-maroc-2026');

        const robots = await request.get('/robots.txt');
        expect(robots.status()).toBe(200);
    });
});
