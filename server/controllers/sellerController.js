const Product = require("../models/product");
const Analytics = require("../models/analytics");
const User = require("../models/user")
const Order = require("../models/order")
const Cart=require("../models/cart")
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
    const { productName, shortDescription, price, brand, stockQuantity, discount, length, width, height, description, imageUrls, tags,categories, colors } = req.body
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
      !imageUrls ||
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
      tags:tags.map((tag) => { return tag.name }),
      categories: categories.map((category) => { return category.name }),
      images: imageUrls.map((image) => ({type: "image", source: image.name })),
      stockQuantity: parseInt(stockQuantity),
      seller: req.user._id,
      reviews: [],
      ratingCounts: {},
      discount,
      colours: colors.map((color) => (color.name)),
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
const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.body;
    const {
      productName,
      shortDescription,
      price,
      brand,
      stockQuantity,
      discount,
      length,
      width,
      height,
      description,
      imageUrls,
      tags,
      categories,
      colors,
      seller_id
    } = req.body;
    if (
      !id ||
      !productName ||
      !shortDescription ||
      !price ||
      !brand ||
      !stockQuantity ||
      !discount ||
      !length ||
      !width ||
      !height ||
      !description ||
      !imageUrls ||
      !categories ||
      !colors ||
      !seller_id
    ) {
      return res.status(400).json({ msg: "Missing Information" });
    }
    if (imageUrls.length == 0) {
      return res.status(400).json({ msg: "Missing Information" });
    }
    if (seller_id !== String(req.user._id)) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    const product = {
      name: productName,
      shortDescription,
      description,
      price: parseInt(price),
      brand,
      tags: tags.map((tag) => {
        return tag.name;
      }),
      categories: categories.map((category) => {
        return category.name;
      }),
      images: imageUrls.map((image) => ({
        type: "image",
        source: image.name,
      })),
      stockQuantity: parseInt(stockQuantity),
      discount,
      colours: colors.map((color) => color.name),
      dimensions: {
        length: parseFloat(length),
        width: parseFloat(width),
        height: parseFloat(height),
      },
    };

    const newproduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    if (!newproduct) {
      return res.status(404).json({ msg: "Product not found" });
    }
    console.log(newproduct);
    res.json(newproduct);
  } catch (error) {
    next(error);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const { id, seller_id } = req.body;
    if (seller_id !== String(req.user._id)) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
    // Delete the product
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    // Delete all orders containing this product
    await Order.deleteMany({ "items.productId": id });

    // Remove the product from users' carts
    await Cart.updateMany({}, { $pull: { items: { product: id } } });

    return res.json({ msg: "Product deleted successfully" });
  } catch (err) {
    next(err);
  }
};
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

    const addBulkProducts = async (req, res, next) => {
      try {
        const productsData = req.body.products;
    
        if (!Array.isArray(productsData) || productsData.length === 0) {
          return res.status(400).json({ msg: "Products data should be provided as a non-empty array" });
        }
    
        const products = productsData.map(productData => {
          const { productName, shortDescription, price, brand, stockQuantity, discount, length, width, height, description, images, tags, categories, colors } = productData;
          
          // Validate product data here
    
          return new Product({
            name: productName,
            shortDescription,
            description,
            price: parseInt(price),
            brand,
            tags,
            categories: categories.map(category => category.name),
            images: images.map(image => ({ type: "image", source: image.name })),
            stockQuantity: parseInt(stockQuantity),
            seller: req.user._id,
            reviews: [],
            ratingCounts: {},
            discount,
            colors: colors.map(color => color.name),
            dimensions: {
              length: parseFloat(length),
              width: parseFloat(width),
              height: parseFloat(height),
            }
          });
        });
    
        await Product.insertMany(products);
        return res.status(201).json({ msg: "Products Created Successfully" });
      } catch (error) {
        next(error);
      }
    };    

module.exports = {
  getAllProducts,
  addProduct,
  addBulkProducts,
  getSellerDetails,
  getAllAnalytics,
  becomeSeller,
  updateDetails,
  updateProduct,
  deleteProduct
};