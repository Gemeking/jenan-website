const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on('response', (res) => { if (res.status() >= 400) console.log(res.status(), res.url()); });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await browser.close();
})();
