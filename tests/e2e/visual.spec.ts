import { test, expect } from "@playwright/test";

const routes = ["/", "/cars", "/cars/ray", "/services/short-term", "/contact"];
for (const route of routes) {
  test(`시각적 회귀 ${route}`, async ({ page }) => {
    await page.goto(route);
    await page.evaluate(async () => { await document.fonts.ready; window.scrollTo(0, 0); });
    await expect(page).toHaveScreenshot(`page-${route.replaceAll("/", "-") || "home"}.png`, {
      animations: "disabled", fullPage: true, caret: "hide", maxDiffPixelRatio: 0.02,
    });
  });
}
