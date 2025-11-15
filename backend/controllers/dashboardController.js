export const getDashboard = async (req, res) => {
    try {
      const role = req.user.role;
  
      if (role === "customer") {
        return res.json({ dashboard: "Customer Dashboard" });
      }
  
      if (role === "retailer") {
        return res.json({ dashboard: "Retailer Dashboard" });
      }
  
      if (role === "wholesaler") {
        return res.json({ dashboard: "Wholesaler Dashboard" });
      }
  
      res.json({ error: "Invalid role" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  