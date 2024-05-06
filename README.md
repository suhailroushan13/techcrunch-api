# TechCrunch API 🧑‍💻

TechCrunch API is a Node.js package that allows you to scrape articles from TechCrunch based on categories or tags. This package is designed for systems using Ubuntu or other Debian-based distributions that support `sudo` commands, leveraging Puppeteer to navigate and scrape content from a headless Chromium environment. 🌐

## Features 🚀

- **Scrape by Category:** Automatically retrieve all articles under a specified category. 📂
- **Scrape by Tag:** Collect articles that are tagged with a specific keyword. 🏷️
- **Headless Browser Support:** Runs Chromium in headless mode to scrape dynamic content. 👻
- **Optimized for Ubuntu:** Includes installation instructions specifically for Ubuntu, but compatible with other Linux distributions. 🐧

## Prerequisites 📋

Before installing the TechCrunch Scraper, you need to ensure your system has the following dependencies installed:

- Node.js (Version 14 or later recommended) 🟢
- Puppeteer 🎭
- Dependencies required for Puppeteer and headless Chromium 🔧

## Installation

Follow these steps to set up the TechCrunch Scraper package:

### Step 1: Install System Dependencies

Open a terminal and execute the following commands to install necessary libraries:

```bash
npm install puppeteer
sudo apt-get update
sudo apt-get install -y libgbm-dev xvfb chromium-browser libvpx7 libevent-2.1-7 libharfbuzz-icu0  libwebpdemux2 libenchant-2-2 libsecret-1-0  libmanette-0.2-0 libflite1  libgles2-mesa
Xvfb :99 -screen 0 1920x1080x24 &
export DISPLAY=:99
```

### Step 2: Install TechCrunch API Package

Install the package via npm with the following command:

```bash
npm install techcrunch-api
```

## Usage

#### After installation, you can use the package in your Node.js scripts as follows:

# ES6 Syntax

```javascript
import { getByCategory, getByTag } from "techcrunch-api";

// Fetch articles by category using async/await
// Valid categories/tags for fetching articles (must be used in lowercase):
// 1. media-entertainment
// 2. transportation
// 3. cryptocurrency
// 4. security
// 5. artificial-intelligence
// 6. apps
// 7. fintech
// 8. startups
// 9. venture
// 10. hardware

const fetchArticles = async () => {
  try {
    const articles = await getByCategory("security"); 
    console.log(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

fetchArticles();

const fetchTag = async () => {
  try {
    const tags = await getByTag("apis");
    console.log(tags);
  } catch (error) {
    console.error("Error fetching tags:", error);
  }
};

fetchTag();
```


## Running the Scraper

```bash
node app.js 
```
