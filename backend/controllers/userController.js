import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import axios from "axios";


// ================= REGISTER ==================
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const allowedRoles = ["Customer", "Retailer", "Wholesaler"];
    if (role && !allowedRoles.includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "Customer",
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ================= LOGIN =====================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid email" });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ================= GET PROFILE ==================
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ================= UPDATE PROFILE ==================
export const updateProfile = async (req, res) => {
  try {
    const { name, password } = req.body;

    const updates = {};
    if (name) updates.name = name;
    if (password) updates.password = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
    }).select("-password");

    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ================= SEND OTP ==================
export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = Date.now() + 5 * 60 * 1000;

    user.otp = otp;
    user.otpExpires = otpExpiry;
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.OTP_EMAIL,
        pass: process.env.OTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.OTP_EMAIL,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}\nThis OTP will expire in 5 minutes.`,
    });

    res.json({ message: "OTP sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ================= VERIFY OTP ==================
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.otp !== otp)
      return res.status(400).json({ error: "Invalid OTP" });

    if (Date.now() > user.otpExpires)
      return res.status(400).json({ error: "OTP expired" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    user.otp = null;
    user.otpExpires = null;
    await user.save();

    res.json({ message: "OTP verified successfully", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// with google this one works
// export const updateLocation = async (req, res) => {
//   try {
//     const { lat, lng } = req.body;

//     if (!lat || !lng) {
//       return res.status(400).json({ error: "Latitude and longitude required" });
//     }

//     const apiKey = process.env.GOOGLE_MAPS_API_KEY;

//     // Call Google Geocoding API
//     const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

//     const response = await axios.get(geoUrl);

//     if (!response.data.results || response.data.results.length === 0) {
//       return res.status(400).json({ error: "Invalid coordinates" });
//     }

//     // Extract address info
//     const result = response.data.results[0];
//     const addressComponents = result.address_components;

//     const get = (type) =>
//       addressComponents.find((c) => c.types.includes(type))?.long_name || null;

//     const formattedLocation = {
//       lat,
//       lng,
//       address: result.formatted_address,
//       city: get("locality"),
//       state: get("administrative_area_level_1"),
//       pincode: get("postal_code"),
//       country: get("country"),
//     };

//     // Save to DB
//     const user = await User.findByIdAndUpdate(
//       req.user.id,
//       { location: formattedLocation },
//       { new: true }
//     ).select("-password");

//     res.json({
//       message: "Location updated successfully",
//       location: user.location
//     });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

export const updateLocation = async (req, res) => {
  try {
    const { lat, lng } = req.body;

    if (!lat || !lng) {
      return res.status(400).json({ error: "Latitude and longitude required" });
    }

    // Use OpenStreetMap Nominatim API (FREE)
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

    const response = await fetch(url, {
      headers: { "User-Agent": "VanityApp/1.0" }
    });

    const data = await response.json();

    if (!data || !data.address) {
      return res.status(400).json({ error: "Invalid coordinates" });
    }

    const formattedLocation = {
      lat,
      lng,
      address: data.display_name,
      city: data.address.city || data.address.town || data.address.village || null,
      state: data.address.state || null,
      pincode: data.address.postcode || null,
      country: data.address.country || null
    };

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { location: formattedLocation },
      { new: true }
    ).select("-password");

    res.json({
      message: "Location updated successfully",
      location: user.location
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
