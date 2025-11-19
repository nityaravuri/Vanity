import express from "express";
import { 
  getAdminDashboard,
  getRetailerDashboard,
  getWholesalerDashboard,
  getRetailerProxyProducts
} from "../controllers/dashboardController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Retailer proxy products
router.get("/retailer/products", protect, authorizeRoles("Retailer"), getRetailerProxyProducts);

// Admin dashboard
router.get("/admin", protect, authorizeRoles("Admin"), getAdminDashboard);

// Retailer dashboard
router.get("/retailer", protect, authorizeRoles("Retailer"), getRetailerDashboard);

// Wholesaler dashboard
router.get("/wholesaler", protect, authorizeRoles("Wholesaler"), getWholesalerDashboard);

export default router;
