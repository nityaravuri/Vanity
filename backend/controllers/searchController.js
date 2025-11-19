import Product from "../models/Product.js";
import User from "../models/User.js";  // Retailers & Wholesalers

// ====================== PRODUCT SEARCH =========================
export const searchProducts = async (req, res) => {
  try {
    const { q, minPrice, maxPrice, stock, category, minQty } = req.query;

    let filter = {};

    // Text search
    if (q) {
      filter.name = { $regex: q, $options: "i" };
    }

    // Category filter
    if (category) {
      filter.category = category;
    }

    // Price filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // Quantity filter
    if (minQty) {
      filter.quantity = { $gte: Number(minQty) };
    }

    // Stock availability
    if (stock === "in") filter.stockStatus = "In Stock";
    if (stock === "out") filter.stockStatus = "Out of Stock";

    const products = await Product.find(filter).populate("category");

    res.json({
      count: products.length,
      products
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ====================== LOCATION-BASED SHOP SEARCH =========================

function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI/180);
  const dLng = (lng2 - lng1) * (Math.PI/180);

  const a = 
    Math.sin(dLat/2) ** 2 +
    Math.cos(lat1 * (Math.PI/180)) *
    Math.cos(lat2 * (Math.PI/180)) *
    Math.sin(dLng/2) ** 2;

  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export const nearbyShops = async (req, res) => {
  try {
    const { lat, lng, maxDistance = 10 } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({ error: "lat and lng required" });
    }

    // Only retailers & wholesalers counted as "shops"
    const shops = await User.find({
      role: { $in: ["Retailer", "Wholesaler"] },
      location: { $ne: null }
    }).select("name email role location");

    const nearby = shops.filter(shop => {
      const distance = calculateDistance(
        Number(lat),
        Number(lng),
        shop.location.lat,
        shop.location.lng
      );

      return distance <= Number(maxDistance);
    });

    res.json({
      count: nearby.length,
      shops: nearby
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
