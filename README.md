Crypto Price Tracker 🪙

<p align="center">
A sleek, real-time web application that displays the top 10 cryptocurrencies, built with React, TypeScript, and Redux Toolkit. This project fetches live data from the CoinRanking API and provides a clean, user-friendly interface to track cryptocurrency prices and trends.
</p>

<p align="center">
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="Redux" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"/>
<img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
<img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
</p>

✨ Features
Live Data: Fetches and displays the top 10 cryptocurrencies with their name, symbol, price, and rank.

Auto-Refresh: Automatically updates prices every 60 seconds to provide near real-time data.

Dynamic Search: Instantly filter the list by cryptocurrency name or symbol.

Advanced Sorting: Sort the list by rank, name, or price in ascending or descending order.

Skeleton Loading: Displays an elegant skeleton screen while fetching data for a smooth user experience.

Responsive Design: A fully responsive, mobile-first interface built with Tailwind CSS.

🛠️ Tech Stack & Tools
Framework: React

Language: TypeScript

State Management: Redux Toolkit

Styling: Tailwind CSS

API Client: Axios

Build Tool: Vite

Icons: React Icons

🚀 Getting Started
Follow these instructions to get a local copy of the project up and running.

Prerequisites
Node.js (v16 or later)

npm or yarn

A free API key from RapidAPI (CoinRanking)

Installation & Setup
Clone the repository:

git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker

Install dependencies:

npm install

Set up environment variables:
Create a new file named .env in the root of your project and add your RapidAPI credentials. Vite requires the VITE_ prefix to expose variables to the client.

VITE_RAPIDAPI_KEY=your_rapidapi_key_here
VITE_RAPIDAPI_HOST=coinranking1.p.rapidapi.com

Run the development server:

npm run dev

Open http://localhost:5173 (or the port shown in your terminal) to view the application in your browser.

📜 Available Scripts
In the project directory, you can run:

npm run dev: Runs the app in development mode.

npm run build: Builds the app for production to the dist folder.

npm run lint: Lints the project files using ESLint.

npm run preview: Serves the production build locally to preview it.

📂 Project Structure
The project follows a feature-based structure to keep the code organized and scalable.

src/
├── app/              # Redux store setup and typed hooks
├── components/       # Reusable React components (UI)
├── features/         # Redux state logic ("slices")
│   └── crypto/
│       └── cryptoSlice.ts
├── types/            # Shared TypeScript interfaces
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
