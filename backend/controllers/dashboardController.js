export const getAdminDashboard = (req, res) => {
    try {
      res.json({
        message: "Admin Dashboard Stats",
        totalUsers: 128,
        totalOrders: 540,
        totalProducts: 92,
        revenueToday: "₹12,400"
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getRetailerDashboard = (req, res) => {
    try {
      res.json({
        message: "Retailer Dashboard Stats",
        assignedProducts: 38,
        lowStockAlerts: 5,
        ordersToday: 13
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getWholesalerDashboard = (req, res) => {
    try {
      res.json({
        message: "Wholesaler Dashboard Stats",
        bulkOrdersPending: 9,
        shipmentsThisWeek: 15,
        totalRetailers: 23
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  import User from "../models/User.js";
import Product from "../models/Product.js";

export const getRetailerProxyProducts = async (req, res) => {
  try {
    const retailerId = req.user.id;

    // get retailer details
    const retailer = await User.findById(retailerId);

    if (!retailer || retailer.role !== "Retailer") {
      return res.status(403).json({ error: "Only retailers can access this" });
    }

    // retailer must have location saved earlier
    if (!retailer.location || !retailer.location.lat || !retailer.location.lng) {
      return res.status(400).json({
        error: "Retailer location not set. Update location before continuing."
      });
    }

    const { lat, lng } = retailer.location;
    const maxDistance = Number(req.query.maxDistance || 15); // km

    // find wholesalers within radius
    const wholesalers = await User.find({
      role: "Wholesaler",
      "location.lat": { $exists: true },
      "location.lng": { $exists: true }
    });

    const wholesalersWithinRange = wholesalers.filter((wh) => {
      const R = 6371;
      const dLat = (wh.location.lat - lat) * Math.PI / 180;
      const dLng = (wh.location.lng - lng) * Math.PI / 180;

      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat * Math.PI / 180) *
          Math.cos(wh.location.lat * Math.PI / 180) *
          Math.sin(dLng / 2) ** 2;

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;

      return distance <= maxDistance;
    });

    const wholesalerIds = wholesalersWithinRange.map((w) => w._id);

    // get products sold by those wholesalers
    const products = await Product.find({
      sellerId: { $in: wholesalerIds }
    })
      .populate("sellerId", "name email role")
      .populate("category");

    res.json({
      count: products.length,
      products
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  