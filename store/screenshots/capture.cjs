// Capture the raw Hearers screens from the web export of the mobile app.
// node capture.cjs <outDir> [baseUrl] [iphone|ipad]
// The device is iphone (440 × 956 at 3x) or ipad (13-inch, 1032 × 1376 at 2x).
const { chromium } = require('playwright')
const OUT = process.argv[2]
const B = process.argv[3] ?? 'http://localhost:18183'
const DEVICES = {
  iphone: { viewport: { width: 440, height: 956 }, deviceScaleFactor: 3 },
  ipad: { viewport: { width: 1032, height: 1376 }, deviceScaleFactor: 2 },
}
const device = DEVICES[process.argv[4] ?? 'iphone']
if (!device) throw new Error(`Unknown device: ${process.argv[4]}`)
;(async () => {
  const b = await chromium.launch()
  const ctx = await b.newContext({ ...device, isMobile: true, hasTouch: true, serviceWorkers: 'block' })
  const p = await ctx.newPage()
  const shot = async (n) => {
    await p.waitForTimeout(900)
    await p.screenshot({ path: `${OUT}/${n}.png` })
    console.log(n)
  }
  await p.goto(B + '/', { waitUntil: 'networkidle' })
  await p.getByText('Reformed', { exact: true }).first().click()
  await p.goto(B + '/learn/wsc', { waitUntil: 'networkidle' })
  await p.getByText('Trace it').click()
  await p.waitForTimeout(500)
  await p.keyboard.type('mceitgG', { delay: 80 })
  await shot('trace')
  await p.goto(B + '/unit/wsc/wsc-1', { waitUntil: 'networkidle' })
  await p.getByText('to glorify God').first().click()
  await shot('proof')
  await p.goto(B + '/library', { waitUntil: 'networkidle' })
  await shot('library')
  await p.goto(B + '/doc/wsc', { waitUntil: 'networkidle' })
  await shot('doc')
  await b.close()
})().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
