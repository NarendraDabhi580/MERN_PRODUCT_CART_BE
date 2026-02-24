# 🛒 MERN E-Commerce — Backend

REST API built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
Handles authentication, product management, and cart functionality.

---

## 📦 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NarendraDabhi580/MERN_PRODUCT_CART_BE.git
cd MERN_PRODUCT_CART_BE
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

A `.env` file is already included in the repo with the following variables:

```
PORT=3200
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> If you want to use your own MongoDB database, update `MONGO_URI` in the `.env` file.

---

### 4. Seed the database (optional but recommended)

Run the seeder to populate the database with sample products:

```bash
npm run seed
```

This will **delete all existing products** and insert fresh sample data (Mouse, Keyboard, T-shirt, Chair, etc.).

---

### 5. Start the server

**Development mode** (with auto-restart on file change):

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

The server will start on: **http://localhost:3200**

---

## 📡 API Endpoints

### Auth

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | `/api/auth/register` | Register a new user         |
| POST   | `/api/auth/login`    | Login and receive JWT token |

### Products

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | `/api/product`     | Get all products  |
| GET    | `/api/product/:id` | Get product by ID |
| POST   | `/api/product`     | Add a new product |
| PUT    | `/api/product/:id` | Update a product  |
| DELETE | `/api/product/:id` | Delete a product  |

### Cart _(requires Authorization header)_

| Method | Endpoint                      | Description             |
| ------ | ----------------------------- | ----------------------- |
| GET    | `/api/cart`                   | Get current user's cart |
| POST   | `/api/cart/add`               | Add item to cart        |
| PUT    | `/api/cart/update/:productId` | Update item quantity    |
| DELETE | `/api/cart/remove/:productId` | Remove item from cart   |

> **Note:** All cart routes require a `Bearer <token>` in the `Authorization` header.

---

## 📁 Folder Structure

```
backend/
├── src/
│   ├── app.js              # Entry point
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productContoller.js
│   │   └── cartController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Cart.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── cartRoutes.js
│   └── seeders/
│       └── productSeeder.js
├── .env
├── package.json
└── README.md
```
