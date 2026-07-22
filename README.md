<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="Logo" width="80" height="80">
  <h1 align="center">Connect - Real-Time Chat Application</h1>

  <p align="center">
    A full-stack, real-time messaging application built with the MERN stack and Socket.io.
    <br />
    <br />
    <a href="https://real-time-chat-application-iota-lilac.vercel.app/"><strong>🔴 View Live Demo </strong></a>
    ·
    <a href="https://github.com/your-username/REAL-TIME-CHAT-APPLICATION/issues">Report Bug</a>
    ·
    <a href="https://github.com/your-username/REAL-TIME-CHAT-APPLICATION/issues">Request Feature</a>
  </p>
</div>

<!-- BADGES -->
<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" alt="Socket.io" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

<br />

## 📸 Screenshots

Here is a glimpse of the Connect application:

<div align="center">
  <img src="./screenshots/Screenshot%202026-07-22%20083406.png" alt="Chat Application Screenshot 1" width="80%" style="border-radius: 10px; margin-bottom: 20px;" />
  <br />
  <img src="./screenshots/Screenshot%202026-07-22%20083516.png" alt="Chat Application Screenshot 2" width="80%" style="border-radius: 10px;" />
</div>

<br />

## 🚀 Features

- ⚡ **Real-time Messaging**: Instant message delivery using Socket.io.
- 🟢 **Online Status Indicator**: See who is currently active and online.
- 🔒 **Authentication**: Secure JWT-based authentication and authorization.
- 🖼️ **Image Sharing**: Send images in chats (powered by Cloudinary).
- 🎨 **Profile Customization**: Update your profile picture and personal information.
- 📱 **Responsive Design**: Beautiful UI built with Tailwind CSS and DaisyUI, working seamlessly on mobile and desktop.
- 🌙 **Dark Mode Support**: Multiple dynamic themes available out of the box.

<br />

## 📁 Project Structure

```text
REAL-TIME-CHAT-APPLICATION/
├── backend/                  # Node.js Express Server
│   ├── src/
│   │   ├── controllers/      # Route controllers (auth, messages, etc.)
│   │   ├── lib/              # Utilities (Cloudinary, Socket.io, Token generation)
│   │   ├── middleware/       # Custom Express middlewares (Protected routes)
│   │   ├── models/           # Mongoose schemas (User, Message)
│   │   └── routes/           # Express API routes
│   └── index.js              # Server entry point
│
├── Frontend/                 # React Application
│   └── chat-app/
│       ├── src/
│       │   ├── components/   # Reusable UI components (Navbar, Chat container, Sidebar)
│       │   ├── lib/          # Utilities (Axios config)
│       │   ├── pages/        # Application Pages (Home, Login, Profile, etc.)
│       │   └── store/        # Zustand global state management
│       └── index.html        # Vite HTML entry point
│
├── screenshots/              # Demo screenshots
├── package.json              # Root scripts and workspace config
└── README.md                 # Project documentation
```

<br />

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS & DaisyUI
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Real-time**: Socket.io-client
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB & Mongoose
- **Real-time**: Socket.io
- **Auth**: JSON Web Tokens (JWT) & Bcryptjs
- **Media**: Cloudinary

<br />

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

<br />

## 🌍 Deployment

This application is configured for a split-deployment architecture:
- **Frontend**: Designed to be deployed on [Vercel](https://vercel.com/). Ensure you set the `VITE_BACKEND_URL` environment variable to point to your backend.
- **Backend**: Designed to be deployed on [Render](https://render.com/). Ensure you set the `FRONTEND_URL` environment variable to allow CORS from your Vercel domain, and set `NODE_ENV=production`.

> **Note**: The application explicitly handles secure, cross-site cookies between Render and Vercel in production.
