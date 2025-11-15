import Feedback from "../models/Feedback.js";

export const addFeedback = async (req, res) => {
  try {
    const fb = await Feedback.create({
      product: req.body.product,
      user: req.user.id,
      rating: req.body.rating,
      comment: req.body.comment
    });

    res.json({ message: "Feedback submitted", fb });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getFeedbackForProduct = async (req, res) => {
  try {
    const feedback = await Feedback.find({ product: req.params.id }).populate("user");
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
