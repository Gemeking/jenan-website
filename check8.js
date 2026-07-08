const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await page.screenshot({ path: process.argv[2] + '/mobile-hero2.png' });
  const el = await page.$('#doctors');
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: process.argv[2] + '/mobile-doctors2.png' });
  await browser.close();
})();
