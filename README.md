# Connect - Real-Time Chat Application

A full-stack, real-time messaging application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. 

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using Socket.io.
- **Online Status Indicator**: See who is currently active and online.
- **Authentication**: Secure JWT-based authentication and authorization.
- **Image Sharing**: Send images in chats (powered by Cloudinary).
- **Contact Management**: Hide or delete contacts from your sidebar.
- **Profile Customization**: Update your profile picture and information.
- **Responsive Design**: Beautiful UI built with Tailwind CSS and DaisyUI, working seamlessly on mobile and desktop.
- **Dark Mode Support**: Multiple dynamic themes available out of the box.

## 🛠️ Tech Stack

**Frontend:**
- React 19 (Vite)
- Tailwind CSS & DaisyUI
- Zustand (Global State Management)
- Socket.io-client
- React Router DOM
- Axios

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- Socket.io (WebSocket implementation)
- JSON Web Tokens (JWT) for Auth
- Cloudinary (Image hosting)
- Bcryptjs (Password hashing)

## 📦 Local Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/REAL-TIME-CHAT-APPLICATION.git
cd REAL-TIME-CHAT-APPLICATION
```

### 2. Install dependencies
This project uses a monolithic structure. You need to install dependencies for both the frontend and backend.
```bash
# Install root and backend dependencies
npm install

# Install frontend dependencies
cd Frontend/chat-app
npm install
cd ../..
```

### 3. Setup Environment Variables
Create a `.env` file in the `backend` folder and configure the following variables:
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

### 4. Run the Application
The root `package.json` is configured with `concurrently` to run both servers with a single command.
```bash
npm run dev
```
- Frontend will run on `http://localhost:5173`
- Backend will run on `http://localhost:5001`

## 🌍 Deployment

This application is configured for a split-deployment architecture:
- **Frontend**: Designed to be deployed on [Vercel](https://vercel.com/). Ensure you set the `VITE_BACKEND_URL` environment variable to point to your backend.
- **Backend**: Designed to be deployed on [Render](https://render.com/). Ensure you set the `FRONTEND_URL` environment variable to allow CORS from your Vercel domain, and set `NODE_ENV=production`.

*Note: The application explicitly handles secure, cross-site cookies between Render and Vercel in production.*
