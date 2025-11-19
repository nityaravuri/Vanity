import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: { type: String, required: true, trim: true },

    description: { type: String, required: true },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    images: [
      {
        url: { type: String, required: true }
      }
    ],

    stock: { type: Number, required: true, min: 0 },

    status: {
      type: String,
      enum: ["Pending Approval", "Live", "Rejected", "Out of Stock"],
      default: "Pending Approval",
    },

    prices: {
      customer: { type: Number, required: true },
      retailer: { type: Number, required: true },
      wholesaler: { type: Number, required: true },
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
