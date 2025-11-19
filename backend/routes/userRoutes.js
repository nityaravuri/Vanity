import express from "express";
import {
  register,
  login,
  getProfile,
  updateProfile,
  sendOtp,
  verifyOtp,
  updateLocation
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";  // ✅ FIXED

const router = express.Router();

// AUTH
router.post("/register", register);
router.post("/login", login);

// OTP
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

// PROFILE
router.get("/me", protect, getProfile);       // ✅ changed
router.put("/me", protect, updateProfile);    // ✅ changed

// LOCATION UPDATE
router.put("/update-location", protect, updateLocation);   // ✅ changed

export default router;
