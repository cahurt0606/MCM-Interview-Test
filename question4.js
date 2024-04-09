const puppeteer = require('puppeteer');

async function searchAndLoadMore(query) {
    const browser = await puppeteer.launch({ headless: false }); // Set headless to false to see the browser actions
    const page = await browser.newPage();

    await page.goto('https://www.google.com');

    // Type the query into the search box and press Enter
    await page.type('input[name="q"]', query);
    await page.keyboard.press('Enter');

    await page.waitForNavigation();

    let loadMoreExists = true;

    while (loadMoreExists) {
        try {
            await page.waitForSelector('button#pnnext', { timeout: 5000 }); // Waits for the "Next" button
            await page.click('button#pnnext'); // Clicks the "Next" button
            await page.waitForNavigation(); // Waits for the navigation to complete
        } catch (error) {
            console.log('No more pages left.');
            loadMoreExists = false; // Set to false to exit the loop when there are no more pages left
        }
    }

    await browser.close();
}

// Replace 'your_query_here' with the query you want to search for
searchAndLoadMore('pictures of dophins');