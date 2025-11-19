import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      enum: ["Cabinets", "Carpets", "Sofas", "Tables and Chairs"],
    },
    description: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);
