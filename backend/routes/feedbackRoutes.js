import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";
import {
  addFeedback,
  getFeedbackForProduct
} from "../controllers/feedbackController.js";

const router = express.Router();

router.post("/add", protect, allowRoles("customer"), addFeedback);

router.get("/:id", getFeedbackForProduct);

export default router;
