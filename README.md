# 🛍️ GenZVibe

> **Jiyo Apni Vibe, Pehno Apna Style.**

GenZVibe is a modern full-stack e-commerce web application built using the **MERN stack**. It provides a complete shopping experience with user authentication, product browsing, cart management, secure online payments, order tracking, and a dedicated admin dashboard.

## ✨ Features

### 👤 User Features

* User registration and login
* JWT-based authentication
* Browse products
* Product details
* Add products to cart
* Update cart quantity
* Remove products from cart
* Secure checkout
* Razorpay payment integration
* Order confirmation
* View previous orders

### 👨‍💼 Admin Features

* Admin authentication and authorization
* Dashboard with store statistics
* Manage products
* Add new products
* Edit products
* Delete products
* Manage users
* View all orders
* Update order status
* View sales and store analytics

### 💳 Payment

* Razorpay payment integration
* Payment verification using backend signature verification
* Order creation after successful payment

### ☁️ Image Management

* Product images uploaded through the backend
* Cloudinary used for image storage
* Only the Cloudinary image URL is stored in MongoDB

## 🛠️ Tech Stack

**Frontend**

* React
* Vite
* Tailwind CSS
* React Router
* Redux Toolkit
* Lucide React

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt.js

**Services**

* MongoDB Atlas
* Cloudinary
* Razorpay

## 🔐 Security

* JWT-based authentication
* Password hashing with bcrypt
* Protected user and admin routes
* Admin authorization middleware
* Environment variables for sensitive credentials
* Payment secrets kept on the backend

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd Ecommerce
```

### 2. Install dependencies

```bash
npm run install-all
```

### 3. Configure environment variables

Create `.env` files for the backend and frontend.

Never commit your `.env` files or secret credentials to GitHub.

### 4. Start the project

```bash
npm run dev
```

The frontend and backend will run together during development.

## 📁 Project Structure

```text
Ecommerce/
├── backend/
│   ├── config/
│   ├── controller/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── utils/
│   └── index.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── .gitignore
├── package.json
└── README.md
```

## 🌐 Deployment

The application is deployed using **Render** with MongoDB Atlas, Cloudinary and Razorpay services.

**Live Demo:** `<ADD_LIVE_URL>`

## 📸 Screenshots

Screenshots of the user interface and admin dashboard will be added here.

## 🎯 Project Highlights

GenZVibe demonstrates practical full-stack development concepts including:

* REST API development
* Authentication and authorization
* Database integration
* Cloud image storage
* Online payment integration
* Protected admin functionality
* CRUD operations
* Order management
* Responsive UI development
* Production deployment

## 👨‍💻 Author

**Shivam Raj**

B.Tech Computer Science Engineering

Built as a full-stack MERN e-commerce project.
