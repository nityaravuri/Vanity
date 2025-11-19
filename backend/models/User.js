import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ["Customer", "Retailer", "Wholesaler"],
        default: "Customer",
        required: true,
    },

    location: {
        lat: { type: Number, default: null },
        lng: { type: Number, default: null },
        address: { type: String, default: null },
        city: { type: String, default: null },
        state: { type: String, default: null },
        pincode: { type: String, default: null },
        country: { type: String, default: null }
    },


    otp: {
        type: String,
        default: null,
      },
    
    otpExpires: {
        type: Date,
        default: null,
      }
      
}, { timestamps: true });

export default mongoose.model("User", userSchema);
