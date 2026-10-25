# 📇 MERN Contact Book

A full-stack contact management application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js), featuring a clean, custom-designed dark UI.

## 🔗 Live Demo

# 📇 MERN Contact Book

A full-stack contact management application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js), featuring a clean, custom-designed dark UI.

## 🔗 Live Demo

**Frontend Demo:** [View Live Demo](https://magnificent-reprieve-production-316c.up.railway.app/)

**Backend API:** [Suga Deployment](https://zqzrwz0k7kuy-production-3zcu11ra.us-central1.suga.run/)

> Note: The backend is deployed on Suga. The frontend demo URL above is the previous Railway URL and may need to be updated if it is no longer active.

## ✨ Features

- ➕ Add contacts with a name, phone number, and optional profile photo
- 📋 View all saved contacts in a styled list
- 🗑️ Delete contacts
- 💾 Persistent data storage with MongoDB
- 🎨 Custom dark-themed UI with gradient accents
- 🔌 REST API integration between frontend and backend

## 🛠️ Tech Stack

- **Frontend:** React.js, Axios, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Deployment:** Suga (Backend), Railway (Previous Frontend Deployment)

## 🚀 Run Locally

### Backend

```
cd "Node.js Practice Project/contact-book"
npm install
node server.js
```

The backend runs on `http://localhost:3000`.

### Frontend

Open a separate terminal:

```
cd frontend
npm install
npm run dev
```

The frontend typically runs on `http://localhost:5173`.

Create a `.env` file inside the frontend folder and configure the backend URL:

```
VITE_API_URL=https://zqzrwz0k7kuy-production-3zcu11ra.us-central1.suga.run
```

Restart the Vite development server after changing environment variables.

## 🔌 API Endpoints

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| GET    | `/contacts`       | Retrieve all contacts |
| POST   | `/contacts`       | Add a new contact     |
| PUT    | `/contacts/:name` | Update a contact      |
| DELETE | `/contacts/:name` | Delete a contact      |

## 👩‍💻 Author

**Amna Ishaq**

- **GitHub:** [amnaverse](https://github.com/amnaverse)
- **Project Repository:** [MERN Contact Book]\([https://github.com/amnaverse/mern-](https://github.com/amnaverse/mern-)

> Note: The backend is deployed on Suga. The frontend demo URL above is the previous Railway URL and may need to be updated if it is no longer active.

## ✨ Features

- ➕ Add contacts with a name, phone number, and optional profile photo
- 📋 View all saved contacts in a styled list
- 🗑️ Delete contacts
- 💾 Persistent data storage with MongoDB
- 🎨 Custom dark-themed UI with gradient accents
- 🔌 REST API integration between frontend and backend

## 🛠️ Tech Stack

- **Frontend:** React.js, Axios, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Deployment:** Suga (Backend), Railway (Previous Frontend Deployment)

## 🚀 Run Locally

### Backend

```bash
cd "Node.js Practice Project/contact-book"
npm install
node server.js
```

The backend runs on `http://localhost:3000`.

### Frontend

Open a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend typically runs on `http://localhost:5173`.

Create a `.env` file inside the frontend folder and configure the backend URL:

```env
VITE_API_URL=https://zqzrwz0k7kuy-production-3zcu11ra.us-central1.suga.run
```

Restart the Vite development server after changing environment variables.

## 🔌 API Endpoints

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| GET    | `/contacts`       | Retrieve all contacts |
| POST   | `/contacts`       | Add a new contact     |
| PUT    | `/contacts/:name` | Update a contact      |
| DELETE | `/contacts/:name` | Delete a contact      |

## 👩‍💻 Author

**Amna Ishaq**

- **GitHub:** [amnaverse](https://github.com/amnaverse)
- **Project Repository:** [MERN Contact Book](https://github.com/amnaverse/mern-contact-book)
