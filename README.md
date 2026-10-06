# 📇 MERN Contact Book

A full-stack contact management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) with a clean, custom-designed dark UI.

**🔗 Live Demo:** https://magnificent-reprieve-production-316c.up.railway.app/

## Features
- ➕ Add contacts with name, phone number, and optional profile photo
- 📋 View all saved contacts in a styled list
- 🗑️ Delete contacts
- 💾 Persistent storage with MongoDB
- 🎨 Custom dark-themed UI with gradient accents

## Tech Stack
- **Frontend:** React.js, Axios, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Deployment:** Railway

## How to Run Locally

**Backend**
```bash
cd "Node.js Practice Project/contact-book"
npm install
node server.js
```

**Frontend**
```bash
cd contact-book-frontend
npm install
npm run dev
```

Backend runs on `http://localhost:3000` and frontend on `http://localhost:5173`.

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/contacts` | Get all contacts |
| POST | `/contacts` | Add a new contact |
| PUT | `/contacts/:name` | Update a contact |
| DELETE | `/contacts/:name` | Delete a contact |

## Author
**Amna Ishaq**: [GitHub](https://github.com/amnaverse)
Amna Ishaq — GitHub: https://github.com/amnaverse
