const { chromium } = require('playwright');

const routes = ['/', '/about', '/services', '/contact', '/gallery'];

(async () => {
  const browser = await chromium.launch();
  for (const route of routes) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const errors = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push('PAGEERROR: ' + err.message));

    await page.goto('http://localhost:3000' + route, { waitUntil: 'networkidle' });
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 400) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(100);
    }
    await page.waitForTimeout(350);

    const name = (route === '/' ? 'home' : route.slice(1));
    await page.screenshot({ path: process.argv[2] + '/' + name + '2.png', fullPage: true });
    console.log(name, 'ERRORS:', JSON.stringify(errors));
    await page.close();
  }
  await browser.close();
})();
