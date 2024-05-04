import puppeteer from 'puppeteer';

async function scrapeData(url) {
    const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const articles = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('article.post-block')).map(element => ({
            title: element.querySelector('h2.post-block__title a')?.textContent.trim(),
            link: element.querySelector('h2.post-block__title a')?.href,
            category: element.querySelector('.article__primary-category__link')?.textContent.trim(),
            author: element.querySelector('.river-byline__authors a')?.textContent.trim(),
            date: element.querySelector('.river-byline__full-date-time')?.textContent.trim(),
            excerpt: element.querySelector('.post-block__content')?.textContent.trim()
        }));
    });

    await browser.close();
    return articles;
}

export async function getByCategory(category) {
    const url = `https://techcrunch.com/category/${category}/`;
    return scrapeData(url);
}

export async function getByTag(tag) {
    const url = `https://techcrunch.com/tag/${tag}/`;
    return scrapeData(url);
}
