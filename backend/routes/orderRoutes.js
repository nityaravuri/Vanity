import express from "express";
import {
  placeOrder,
  getAllOrders,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  getOfflineOrders,
} from "../controllers/orderController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Place order (online/offline)
router.post("/", authMiddleware, placeOrder);

// Get all orders
router.get("/", getAllOrders);

// Get orders of ONE USER
router.get("/user/:userId", getUserOrders);

// Get offline appointments for logged in user
router.get("/offline/me", authMiddleware, getOfflineOrders);

// Update order status
router.put("/:id/status", updateOrderStatus);

// Get a single order
router.get("/:id", getOrderById);

export default router;
