# KoinX Frontend Intern Assignment

This repository contains the submission for the **KoinX Frontend Intern Assignment**. The project is a web application built using **React.js/Next.js**, showcasing responsiveness and dynamic features as per the provided Figma design.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [APIs Used](#apis-used)
- [Contact](#contact)

---

## Overview

The task involves:
- Converting a Figma design into a functional web application.
- Using React.js or Next.js for frontend development.
- Integrating real-time data using APIs and widgets.
- Ensuring responsiveness and design fidelity.

---

## Features

- **Responsive Design**: Fully functional UI matching the Figma design.
- **Real-time Bitcoin Data**:
  - Displays Bitcoin prices in USD and INR.
  - Shows the 24-hour price change percentage.
- **Trending Cryptocurrencies**:
  - Fetches and displays the top 3 trending cryptocurrencies.
- **Advanced Charting**:
  - Integrates TradingView's advanced chart widget for BTC/USD.
- **Dynamic Carousel**:
  - Horizontally scrollable carousel for a "You May Also Like" section.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## Project Structure

### `app/`
The primary folder for the application's source code. It contains the following:
- **`[coinId]/`**: Handles dynamic routing for pages related to individual cryptocurrencies.
- **`api/`**: Contains server-side API routes.
- **`components/`**: Houses reusable components used across the app.

### `components/ui/`
Contains reusable UI components like buttons, cards, or layouts to maintain consistency across the application.

### `public/`
This folder contains all static assets, such as images, icons, and other media files.
- Subfolder: 
  - **`team/`**: Includes images of team members (`team1.png`, `team2.png`, `team3.png`).

---

  ## API used
### `CoinGecko /simple/price API`
- Endpoint: https://api.coingecko.com/api/v3/simple/price
### `CoinGecko /search/trending API`
- Endpoint: https://api.coingecko.com/api/v3/search/trending
### `CoinGecko /coins/{id} API`
- Endpoint: https://api.coingecko.com/api/v3/coins/{id}
