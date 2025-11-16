import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {
  try {
    const { items, retailer, wholesaler, totalPrice } = req.body;

    const order = await Order.create({
      customer: req.user.id,
      retailer,
      wholesaler,
      items,
      totalPrice
    });

    res.json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({
      customer: req.user.id
    }).populate("items.product");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
