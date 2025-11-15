import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    // Authorization header format: "Bearer token"
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store user info from token in req.user
    req.user = decoded;

    next(); // Continue to the protected route
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
};
