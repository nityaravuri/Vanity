import Order from "../models/Order.js";
import Product from "../models/Product.js";

// =========================
// PLACE ORDER (online/offline)
// =========================
export const placeOrder = async (req, res) => {
    try {
      const { products, orderType, appointmentDate } = req.body;
      const userId = req.user.id;
      const role = req.user.role || "Customer";
  
      if (!products || !products.length) {
        return res.status(400).json({ error: "Products required" });
      }
  
      let totalAmount = 0;
  
      for (let item of products) {
        const prod = await Product.findById(item.product);
        if (!prod) return res.status(404).json({ error: "Product not found" });
  
        const price =
          role === "Retailer"
            ? prod.prices.retailer
            : role === "Wholesaler"
            ? prod.prices.wholesaler
            : prod.prices.customer;
  
        totalAmount += price * item.quantity;
  
        if (prod.stock < item.quantity)
          return res.status(400).json({ error: `${prod.name} is out of stock` });
  
        prod.stock -= item.quantity;
        await prod.save();
      }
  
      const order = await Order.create({
        user: userId,
        products,
        orderType,
        appointmentDate: orderType === "offline" ? appointmentDate : null,
        totalAmount,
      });
  
      res.status(201).json({ message: "Order placed", order });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


// =========================
// GET ALL ORDERS
// =========================
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// =========================
// GET USER ORDERS
// =========================
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId })
      .populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// =========================
// GET ORDER BY ID
// =========================
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("products.product");
    if (!order) return res.status(404).json({ error: "Order not found" });

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// =========================
// UPDATE ORDER STATUS
// =========================
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) return res.status(404).json({ error: "Order not found" });

    res.json({
      message: "Order status updated",
      order,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// =========================
// GET OFFLINE APPOINTMENTS
// =========================
export const getOfflineOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id,
      orderType: "offline",
    }).select("appointmentDate status products");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
