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

The frontend requires the Driveflow backend to provide content through the WordPress REST API.

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/FredH2O/driveflow-frontend.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

## Environment

Update the API URL to point to your local WordPress installation.

Example:

```javascript
http://driveflow.local/wp-json/wp/v2/services
```

## Learning Goals

This project was created to practice:

- React development
- API consumption
- Custom hooks
- Headless WordPress architecture
- Frontend and backend integration
