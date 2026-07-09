import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../lib/db.js";
import authRoutes from "../routes/auth.routes.js";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();
const app = express();



app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5001;

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  connectDB().catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
});

