const puppeteer = require("puppeteer");
require("dotenv").config();

async function run() {
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    headless: false
  });

  const page = await browser.newPage();

  await page.goto("https://192.0.2.1");

  const usernameInputSelector = 'input[name="username"]';
  const passwordInputSelector = 'input[type="Password"]';
  const submitButtonSelector = '#formId input[type="button"]';

  await page.click(usernameInputSelector);
  await page.keyboard.type(process.env.MANFS_WIFI_USERNAME);

  await page.click(passwordInputSelector);
  await page.keyboard.type(process.env.MANFS_WIFI_PASSWORD);

  await page.click(submitButtonSelector);

  await page.waitForNavigation();

  await timeout(3000);

  browser.close();
}

async function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function check() {
  if (!process.env.MANFS_WIFI_USERNAME || !process.env.MANFS_WIFI_PASSWORD) {
    const message = ".env variables not set - please read the README.md";

    console.error(message);
    throw Error(message);
  }
}

check();
run();
