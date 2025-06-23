# 📚 GetBook - Full Stack Book Management Application

**GetBook** is a full stack web application designed to help users explore, manage, and share their book collections. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js, Firebase), this project offers a seamless experience for book lovers.

This project is inspired by learning resources and challenges from freeCodeCamp, with additional features and custom design improvements.
---

## 🚀 Features

✅ User Authentication & Authorization\
✅ Add, Edit, Delete Books\
✅ View Book Collection with Details\
✅ Responsive & Modern UI\
✅ Backend API built with Express.js\
✅ MongoDB Database Integration

---

## 🛠 Tech Stack

**Frontend:** React.js, Vite/CRA, Redux,TailwindCSS
**Backend:** Node.js, Express.js\
**Database:** MongoDB (Atlas)\
**Authenticaton:** Firebase 
**Deployment:** Vercel (Frontend), Render/Railway (Backend)

---

## 📁 Project Structure

```
GetBook/
├── frontend/   # React Application
├── backend/    # Node/Express Backend API
└── README.md
```

---

## 🌐 Live Demo

Link: [https://get-book-9d88tpx0n-shailendrasingh189s-projects.vercel.app/](GetBook)


---

## 🛆 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/shailendrasingh189/GetBook.git
cd GetBook
```

### 2. Setup Backend

```bash
cd backend
npm install
# Create a .env file with your variables (e.g., MONGO_URI, PORT)
npm start
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## ⚡ Environment Variables

### Backend `.env` Example:

```
APP_PORT=5000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key  // Admin Authentication
```

### Frontend `.env` Example:

```
VITE_API_URL=http://localhost:5000

// Firebase Key, domain, etc.
VITE_API_KEY=""
VITE_AUTH_DOMAIN=""
VITE_PROJECT_ID=""
VITE_STORAGE_BUCKET=""
VITE_MESSAGING_SENDER_ID=""
VITE_APP_ID=""
```

---

## 
