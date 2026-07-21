# 🚗 Driveflow Frontend

A React and Vite frontend for the Driveflow project.

## 📖 Overview

Driveflow is a headless WordPress project that separates content management from the user interface.

This repository contains the frontend application built with React. Content is retrieved from a separate WordPress backend through the WordPress REST API.

## 🛠️ Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- WordPress REST API

## ✨ Features

- Fetches content from WordPress
- Component-based architecture
- Custom React hooks
- Responsive layout
- API-driven content

## 🔗 Related Repository

This frontend requires the [Driveflow backend](https://github.com/FredH2O/driveflow-backend) to be running locally, since content is pulled live from the WordPress REST API — the app will not work on its own.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- The `driveflow-backend` WordPress site running locally (e.g. via LocalWP), reachable at a URL like `http://driveflow-backend.local`

### 1. Clone the repository

```bash
git clone https://github.com/FredH2O/driveflow-frontend.git
cd driveflow-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Point the app at your local WordPress backend

The API base URL is currently hardcoded inside each custom hook in `src/hooks/`:

- `useAuth.js`
- `useBookings.js`
- `usePosts.js`
- `useServices.js`
- `useTestimonials.js`

Open each file and update the URL to match your local backend, for example:

```javascript
// Before
const API_URL = "http://driveflow-backend.local/wp-json/wp/v2/services";

// After (replace with your own local site URL)
const API_URL = "http://your-site-name.local/wp-json/wp/v2/services";
```

> ⚠️ **Note:** Because the URL is duplicated across five files, a mismatch in even one of them can cause requests to silently fail. See [Future Improvements](#-future-improvements) below.

### 4. Start the development server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

## 🔧 Future Improvements

- **Centralize the API URL.** Move it into a single `src/api/config.js` file (or a `.env` file using Vite's `VITE_` prefix convention) so it only needs to be updated in one place instead of five.

## 🎯 Learning Goals

This project was created to practice:

- React development
- API consumption
- Custom hooks
- Headless WordPress architecture
- Frontend and backend integration
