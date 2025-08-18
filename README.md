# 🪙 Crypto Price Tracker

<p align="center">
  <em>A sleek, real-time cryptocurrency price tracker built with React, TypeScript, and Redux Toolkit.</em>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="Redux" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
</p>

---

## ✨ Features
- **Live Data** → Displays the top 10 cryptocurrencies (name, symbol, price, rank).  
- **Auto Refresh** → Updates prices every 60 seconds for near real-time accuracy.  
- **Dynamic Search** → Instantly filter by cryptocurrency name or symbol.  
- **Advanced Sorting** → Sort by rank, name, or price (ascending/descending).  
- **Skeleton Loading** → Smooth loading experience with skeleton UI.  
- **Responsive Design** → Mobile-first, fully responsive interface.  

---

## 🛠️ Tech Stack
- **Framework:** React  
- **Language:** TypeScript  
- **State Management:** Redux Toolkit  
- **Styling:** Tailwind CSS  
- **API Client:** Axios  
- **Build Tool:** Vite  
- **Icons:** React Icons  

---

## 🚀 Getting Started

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later)  
- npm or yarn  
- Free [RapidAPI CoinRanking](https://rapidapi.com/) API key  

### 📦 Installation
```bash
# Clone the repository
git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker

# Install dependencies
npm install

# .env.example

# RapidAPI Credentials
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
VITE_RAPIDAPI_HOST=coinranking1.p.rapidapi.com

