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
sudo apt-get update
sudo apt-get install -y libgbm-dev xvfb chromium-browser libvpx7 libevent-2.1-7 libharfbuzz-icu0 libgstgl-1.0-0 libgstcodecparsers-1.0-0 libwebpdemux2 libenchant-2-2 libsecret-1-0 libmanette-0.2-0 libflite1 libx264-155 libgles2-mesa
npx playwright install
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

// Fetch articles by category
getByCategory("artificial-intelligence").then((articles) => {
  console.log(articles);
});

// Fetch articles by tag
getByTag("startups").then((articles) => {
  console.log(articles);
});
```

# ES5 Syntax

```javascript
const techCrunchAPI = require("techcrunch-api");

// Fetch articles by category
techCrunchAPI
  .getByCategory("artificial-intelligence")
  .then(function (articles) {
    console.log(articles);
  });

// Fetch articles by tag
techCrunchAPI.getByTag("startups").then(function (articles) {
  console.log(articles);
});
```

## Running the Scraper

```bash
xvfb-run --auto-servernum --server-args='-screen 0 1024x768x24' node your-script.js
```
