import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: Number,
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Feedback", feedbackSchema);
