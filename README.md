# 📒 Contact Book App

A basic Contact Book web application built using **Node.js** and **Express.js**, developed as part of a test project at **Baitussalam**.

This app allows users to register, log in with session-based authentication, and manage their personal contact list with full **CRUD** functionality. All data is stored **locally** using Node.js’s built-in `fs` module — no database is used.

---

## ✨ Features

- 🔐 User registration and login using sessions
- 📇 Add, edit, view, and delete contacts
- 💾 Local file-based data storage (`fs` module)
- 🖥️ Clean and simple UI using EJS templates
- 🔄 Fully functional backend with routing and middleware

---

## 🛠 Technologies Used

- **Node.js** – Backend runtime environment
- **Express.js** – Web framework
- **EJS** – Templating engine for frontend views
- **express-session** – Session management
- **fs module** – File system operations for storing data

---

## 🚀 How to Run Locally

## 1. Clone the Repository

- git clone https://github.com/iMuhammadAnas/Contact-Book-App.git
- cd Contact-Book-App
  
- Install Dependencies
- npm install
  
- Start the Application
- node app.js
  
- Then open your browser and visit:
- 👉 http://localhost:3000

---

📌 Notes
This app is created for learning and testing purposes.

All user and contact data is stored in local .json files inside the data/ folder.

No database like MongoDB or MySQL is used.

Auth system uses sessions, not JWT.
