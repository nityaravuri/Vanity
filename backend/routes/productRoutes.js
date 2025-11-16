import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";
import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);

router.post(
  "/add",
  protect,
  allowRoles("retailer", "wholesaler"),
  addProduct
);

router.put(
  "/update/:id",
  protect,
  allowRoles("retailer", "wholesaler"),
  updateProduct
);

router.delete(
  "/delete/:id",
  protect,
  allowRoles("retailer", "wholesaler"),
  deleteProduct
);

export default router;
