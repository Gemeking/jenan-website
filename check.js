const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('response', (res) => { if (res.status() >= 400) errors.push(res.status() + ' ' + res.url()); });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: process.argv[2] + '/hero-slide1.png' });

  // cycle through slide indicator dots to capture each slide
  for (let i = 0; i < 4; i++) {
    await page.click(`button[aria-label]:nth-of-type(${i+1})`).catch(()=>{});
  }
  // click each dot individually by index using evaluate
  const dots = await page.$$('.flex.items-center.gap-3.mt-4 button');
  for (let i = 0; i < dots.length; i++) {
    await dots[i].click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: process.argv[2] + `/hero-slide-${i}.png` });
  }
  console.log('ERRORS:', JSON.stringify(errors));
  await browser.close();
})();
