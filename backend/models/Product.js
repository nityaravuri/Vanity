import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  price: Number,
  stock: Number,

  retailer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  wholesaler: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  description: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Product", productSchema);
