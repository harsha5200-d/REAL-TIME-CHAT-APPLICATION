import express from "express";
import authRoutes from "../routes/auth.routes.js";

const app = express();

app.use("/api/auth", authRoutes);
const PORT = 5001
app.listen(5001, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
});

