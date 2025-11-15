import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// CREATE APP FIRST
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES IMPORT
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

// ROUTE MOUNTING (AFTER app is created)
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/search", searchRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
