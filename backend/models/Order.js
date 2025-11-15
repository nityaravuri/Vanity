import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  retailer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  wholesaler: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number
    }
  ],

  totalPrice: Number,
  status: {
    type: String,
    enum: ["placed", "processing", "shipped", "delivered"],
    default: "placed"
  },

  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
