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
const addProduct = async (req, res, next) => {
  try {
    const { productName, shortDescription, price, brand, stockQuantity, discount, length, width, height, description, images, categories, colors } = req.body
    if (!productName ||
      !shortDescription ||
      !price ||
      !brand ||
      !stockQuantity ||
      !discount ||
      !length ||
      !width ||
      !height ||
      !description ||
      !images ||
      !categories ||
      !colors
    ) {
      return res.status(400).json({ msg: "Missing Information" });
    }
    const product = new Product({
      name: productName,
      shortDescription,
      description,
      price:parseInt(price),
      brand,
      categories: categories.map((category) => { return category.name }),
      images: images.map((image) => (image.name)),
      stockQuantity: parseInt(stockQuantity),
      seller: req.user._id,
      reviews: [],
      ratingCounts: {},
      discount,
      colors: colors.map((color) => (color.name)),
      dimensions: {
        length: parseFloat(length),
        width: parseFloat(width),
        height:parseFloat(height),
      }
    });
    await product.save();
    return res.status(201).json({ msg: "Product Created Successfully" });
  }
  catch (error){
     next(error)
  }
}
module.exports = {
  addProduct
};