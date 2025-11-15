import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";
import {
  placeOrder,
  getOrdersByUser,
  updateOrderStatus
} from "../controllers/orderController.js";

const router = express.Router();

// customer places order
router.post("/place", protect, allowRoles("customer"), placeOrder);

// customer sees order history
router.get("/my-orders", protect, allowRoles("customer"), getOrdersByUser);

// retailer/wholesaler updates status
router.put(
  "/update-status/:id",
  protect,
  allowRoles("retailer", "wholesaler"),
  updateOrderStatus
);

export default router;
