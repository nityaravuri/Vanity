import express from "express";
import { addFeedback, getAllFeedback } from "../controllers/feedbackController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addFeedback);
router.get("/", getAllFeedback);

export default router;
