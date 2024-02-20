const Product = require("../models/product");
const User = require("../models/user");
const getAllProducts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const products = await Product.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    return res.json(products);
  } catch (err) {
    next(err);
  }
};
