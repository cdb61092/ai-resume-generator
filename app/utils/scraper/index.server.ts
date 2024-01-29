import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { next } from 'sucrase/dist/types/parser/tokenizer'
import invariant from 'tiny-invariant'

export async function scrape() {
    puppeteer.use(StealthPlugin())
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage()

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 })

    // Navigate the page to a URL
    await page.goto('https://www.indeed.com/')

    await new Promise((r) => setTimeout(r, 1000 * 1.5))

    // Enter job and location criteria
    await page.type('#text-input-what', 'software engineer')

    await fillSearchLocation()

    // Execute the search
    await page.keyboard.press('Enter')

    // await wait(1000)

    while (true) {
        try {
            const nextButton = await page.waitForSelector('a[data-testid="pagination-page-next"]')
            invariant(nextButton, 'No more pages.')

            // Container for all the job cards
            await page.waitForSelector('#mosaic-jobResults')

            // Grab all the job cards
            const jobCards = await page.$$('.slider_item')

            for (const jobCard of jobCards) {
                const jobCardAnchor = await jobCard.$('.slider_item')
                await jobCardAnchor?.click()

                // await wait(1000)

                const jobIdElement = await jobCard.waitForSelector('a[data-jk]')
                const jobId = await jobIdElement?.evaluate((el) => el.getAttribute('data-jk'))
                console.log('jobId: ', jobId)
            }
            await nextButton?.click()
        } catch (e) {
            console.log('error: ', e)
            await browser.close()
            break
        }
    }

    async function fillSearchLocation() {
        await page.$('#text-input-where').then(async (el) => {
            invariant(el, 'Search location element not found')

            await el.click()

            // Calculate the length of the input text
            const inputLength = await page.evaluate(() => {
                const inputElement = document.querySelector('#text-input-what') as HTMLInputElement
                return inputElement ? inputElement.value.length : 0
            })

            // Delete input text
            for (let i = 0; i < inputLength; i++) {
                await el.press('Backspace')
            }

            // Enter search location
            await page.type('#text-input-where', 'overland park, ks')
        })
    }
}

async function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
