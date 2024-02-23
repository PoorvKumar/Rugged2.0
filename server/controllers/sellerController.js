const Product = require("../models/product");
const Analytics = require("../models/analytics");
const User=require("../models/user")
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ seller: req.user._id });
    // console.log(req.user)
    return res.json(products);
  } catch (err) {
    next(err);
  }
};
const addProduct = async (req, res, next) => {
  try {
    const { productName, shortDescription, price, brand, stockQuantity, discount, length, width, height, description, images, tags,categories, colors } = req.body
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
      tags,
      categories: categories.map((category) => { return category.name }),
      images: images.map((image) => ({type: "image", source: image.name })),
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
const becomeSeller = async (req,res,next) => {
  try {
    const { phone, accountNumber, upiId, about } = req.body
    if (!phone || !accountNumber || !upiId || !about) {
      return res.status(400).json({ msg: "Missing Information" });
    }
    const userId = req.user._id;
    const user = await User.findById(userId);
     if (!user) {
       return res.status(404).json({ msg: "User not found" });
    }
    if (!user.roles.includes("seller")) {
      user.roles.push("seller");
      await user.save();
    }
    const analytic = new Analytics({
      items: [],
      seller_id: userId,
      phone,
      accountNumber,
      upiId,
      about
    })
    await analytic.save()
    return res.status(201).json({ msg: "Became Seller Success" });
  }
  catch (err) {
      next(err)
  }
}
const getSellerDetails = async (req, res, next) => {
  try {
    const analytics = await Analytics.findOne({ seller_id: req.user.id });
    if (!analytics) {
      return res
        .status(404)
        .json({ message: "Analytics data not found for this user" });
    }

    const { phone, accountNumber, upiId, about } = analytics;
    console.log(phone)
    console.log(accountNumber)
    console.log(upiId)
    console.log(about)
    res.json({ phone, accountNumber, upiId, about });
  } catch (error) {
    next(error);
  }
};
const getAllAnalytics = async (req, res, next) => {
  try {
    // Find all analytics data
    const analyticsData = await Analytics.find().populate("items.productId");

    // Process analytics data to extract product information
    const productsData = analyticsData
      .map((analytics) => {
        return analytics.items.map((item) => {
          const productName = item.productId.name;
          const shortDescription = item.productId.shortDescription;
          const quantity = item.quantity;
          const earnedMoney = item.quantity * item.productId.price;
          return { productName, shortDescription, quantity, earnedMoney };
        });
      })
      .flat();

    res.json(productsData);
  } catch (error) {
    next(error);
  }
}
    const updateDetails = async (req, res, next) => {
      try {
        const { phone, accountNumber, upiId, about } = req.body; // Assuming sellerId and other fields are provided in the request body

        // Construct the update object with the provided fields
        const updateObj = {
          phone,
          accountNumber,
          upiId,
          about,
        };

        // Find and update the Analytics document by seller_id
        const updatedAnalytics = await Analytics.findOneAndUpdate(
          { seller_id: req.user._id },
          updateObj,
          {
            new: true, // To return the updated document
          }
        );

        if (!updatedAnalytics) {
          return res
            .status(404)
            .json({ message: "Analytics data not found for the seller" });
        }

        res.json({
          message: "Analytics details updated successfully",
          analytics: updatedAnalytics,
        });
      } catch (error) {
        // Handle errors
        console.error("Error updating Analytics details:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    };

module.exports = {
  getAllProducts,
  addProduct,
  getSellerDetails,
  getAllAnalytics,
  becomeSeller,
  updateDetails
};