import jwt from "jsonwebtoken";
import User from "../models/User.js";

// MAIN middleware
export const authMiddleware = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Not authorized" });
    }

    const token = header.split(" ")[1];

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (error) {
    res.status(401).json({ error: "Token invalid or expired" });
  }
};

// ALIAS so older routes using "protect" ALSO work
export const protect = authMiddleware;

// ROLE-BASED ACCESS
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: "Access denied: insufficient permissions" });
    }
    next();
  };
};
