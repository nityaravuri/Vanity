import express from "express";
import { searchProducts, nearbyShops } from "../controllers/searchController.js";

const router = express.Router();

// Search products with filters
router.get("/", searchProducts);

// Location-based retailers (optional for dashboard)
router.get("/nearby", nearbyShops);

export default router;
