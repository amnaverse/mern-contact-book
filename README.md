# 📇 MERN Contact Book

A full-stack contact management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Add, view, and delete contacts with a clean, custom-designed dark UI.

## Features

- ➕ Add new contacts with name, phone number, and optional profile photo
- 📋 View all saved contacts in a styled list
- 🗑️ Delete contacts
- 💾 Persistent storage using MongoDB
- 🎨 Custom dark-themed UI with gradient accents

## Tech Stack

**Frontend:** React.js, Axios, Vite
**Backend:** Node.js, Express.js
**Database:** MongoDB, Mongoose

## Project Structure

mern-contact-book/
├── contact-book-frontend/    (React frontend)
└── Node.js Practice Project/
    └── contact-book/         (Express + MongoDB backend)

## How to Run Locally

Backend:
cd "Node.js Practice Project/contact-book"
npm install
node server.js

Frontend:
cd contact-book-frontend
npm install
npm run dev

Backend runs on http://localhost:3000, frontend on http://localhost:5173.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | /contacts | Get all contacts |
| POST | /contacts | Add a new contact |
| PUT | /contacts/:name | Update a contact |
| DELETE | /contacts/:name | Delete a contact |

## Author

Amna Ishaq — GitHub: https://github.com/amnaverse