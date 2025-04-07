# 🛠️ CRUD API – Node.js, TypeScript, Express & MongoDB

A secure and modular RESTful API built with **Node.js**, **TypeScript**, **Express**, and **MongoDB**, featuring **JWT-based authentication** and complete **CRUD** operations.

## 📦 Features

- 🔐 **User Authentication** – Register and login with JWT token generation
- ✍️ **CRUD Operations** – Create, Read, Update, and Delete posts
- 🧾 **Protected Routes** – Only authenticated users can manage posts
- 🧼 Clean TypeScript structure with separate routes, controllers, models
- 🧪 **Postman Collection** included for testing all endpoints

---

## 📁 Project Structure

src/ ├── config/ # MongoDB connection ├── controllers/ # Business logic for auth and posts ├── middlewares/ # JWT auth middleware ├── models/ # Mongoose schemas ├── routes/ # Route definitions ├── index.ts # Entry point .env


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/crud-api-ts.git
cd crud-api-ts
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup Environment Variables
Create a .env file using the .env.example as a reference:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_super_secret_key
4. Run the Development Server
bash
Copy
Edit
npm run dev
🧪 API Testing with Postman
Import the provided file:
crud-api.postman_collection.json

Start by hitting the Login endpoint

A token will be saved automatically to jwt_token variable

All protected routes will use the saved token via Authorization: Bearer {{jwt_token}}

🛠️ Scripts
bash
Copy
Edit
npm run dev       # Start in development with ts-node-dev
npm run build     # Compile TypeScript to JS
npm start         # Start compiled JS (production)
📬 Endpoints Overview
Auth
Method	Route	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user & return JWT
Posts (Protected)
Method	Route	Description
GET	/api/posts	Get all posts
GET	/api/posts/:id	Get single post
POST	/api/posts	Create new post
PUT	/api/posts/:id	Update a post
DELETE	/api/posts/:id	Delete a post
🧾 License
This project is open source and free to use.

🤝 Contact
Created by [Your Name]
Have questions or feedback? Reach me at [your.email@example.com]


### ✅ What to Do Next:
- Add this `README.md` file to your root directory
- Update the GitHub link and your name/contact details
- Let me know if you want a badge setup (like for TypeScript, Node.js, etc.)

Want help creating the `.env.example` or bundling your submission as a zip?