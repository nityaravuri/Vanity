import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

// Load Models (clean, optional)
import "./models/User.js";
import "./models/Product.js";
import "./models/Category.js";
import "./models/Order.js";
import "./models/Feedback.js";

// 🟢 REMINDER SERVICE IMPORT
import { startReminderService } from "./utils/reminderScheduler.js";

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES (IMPORTS)
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

// Google OAuth (REAL)
import googleAuthRoutes from "./routes/googleAuthRoutes.js";

// ROUTE MOUNTING
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/search", searchRoutes);

// Google OAuth
app.use("/api/auth", googleAuthRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Error Handler
import { errorHandler } from "./middleware/errorHandler.js";
app.use(errorHandler);

// 🟢 START REMINDER SCHEDULER (VERY IMPORTANT)
startReminderService();

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
