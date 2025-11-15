import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["customer", "retailer", "wholesaler"] },
  location: {
    latitude: Number,
    longitude: Number,
  },
  purchaseHistory: [],
});

export default mongoose.model("User", userSchema);
