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

Create a `.env` file in the root of the project (same folder as `package.json`):

```text
VITE_API_URL=http://driveflow-backend.local/wp-json/wp/v2
```

Replace the URL with your own local backend address if it's different. This value is used by the custom hooks in `src/hooks/` (`useAuth.js`, `useBookings.js`, `usePosts.js`, `useServices.js`, `useTestimonials.js`) to build each API request, for example:

```javascript
const result = await fetch(`${import.meta.env.VITE_API_URL}/services`);
```

> ⚠️ **Note:** Vite only reads `.env` on startup. If you create or edit it while the dev server is running, restart `npm run dev` for the change to take effect.

> 🔒 `.env` is already included in `.gitignore` and should never be committed, since it can hold environment-specific or sensitive config.

### 4. Start the development server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

## 🎯 Learning Goals

This project was created to practice:

- React development
- API consumption
- Custom hooks
- Headless WordPress architecture
- Frontend and backend integration
