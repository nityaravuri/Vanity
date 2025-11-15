import Product from "../models/Product.js";

export const searchProducts = async (req, res) => {
  try {
    const { query, minPrice, maxPrice, category } = req.query;

    const conditions = {};

    if (query) {
      conditions.name = { $regex: query, $options: "i" };
    }

    if (category) {
      conditions.category = category;
    }

    if (minPrice || maxPrice) {
      conditions.price = {};
      if (minPrice) conditions.price.$gte = Number(minPrice);
      if (maxPrice) conditions.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(conditions);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
