import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import dns from "node:dns";
import cookieParser from "cookie-parser"
import messageRoutes from "./routes/message.route.js"
import cors from "cors"

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
}))

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  connectDB().catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
});

