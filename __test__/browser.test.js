const puppeteer = require("puppeteer")

describe("My first test with puppeteer", () => {
	it("Should open browser", async () => {
		const browser = await puppeteer.launch({
			headless: false,
			devtools: true,
		})
		const page = await browser.newPage()
        // click, double click, close dialog
		// await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
		// await page.click("#authentication > span", { button: "right" })
		// await page.on("dialog", async (dialog) => {
		// 	await dialog.accept()
		// })
		// await page.click("#authentication > button", { clickCount: 2 })
        await page.goto("https://devexpress.github.io/testcafe/example/")
        await page.type("#developer-name", 'el pepe');
        await page.waitForTimeout(5000)
		await browser.close()
	})
})
