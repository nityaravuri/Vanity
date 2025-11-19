import axios from "axios";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const googleAuthCallback = async (req, res) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({ error: "Missing authorization code." });
    }

    // Exchange code for token
    const tokenResponse = await axios.post(
      "https://oauth2.googleapis.com/token",
      {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: "http://localhost:5001/api/auth/google/callback",
        grant_type: "authorization_code",
      }
    );

    const { access_token } = tokenResponse.data;

    // Fetch user profile
    const profileResponse = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    const profile = profileResponse.data;

    // Find or create user
    let user = await User.findOne({ email: profile.email });

    if (!user) {
      user = await User.create({
        name: profile.name,
        email: profile.email,
        googleId: profile.id,
        role: "Customer",  // ALWAYS Customer
      });
    }

    // Create JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "Google OAuth Login Successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Google OAuth Error:", error);
    return res.status(500).json({ error: "Google OAuth failed" });
  }
};
