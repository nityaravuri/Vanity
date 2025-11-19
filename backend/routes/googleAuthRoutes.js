import express from "express";
import { googleAuthCallback } from "../controllers/googleAuthController.js";

const router = express.Router();

router.get("/", (req, res) => {
  const redirectUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      response_type: "code",
      scope: "email profile",
      access_type: "offline",
      prompt: "consent",
    }).toString();

  res.redirect(redirectUrl);
});

// Callback route
router.get("/callback", googleAuthCallback);

export default router;
