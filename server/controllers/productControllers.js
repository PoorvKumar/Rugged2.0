const Product = require("../models/product");

const getProductById = async (req, res, next) => {
  try {
    const productId = req.query.productId;
    let product = await req.redisClient.get(`product_${productId}`);
    if (product) {
      return res.status(200).json(JSON.parse(product));
    } else {
      product = await Product.findById(productId);
      await req.redisClient.set(
        `product_${productId}`,
        JSON.stringify(product),
        "EX",
        3600
      ); // Cache for 1 hour
      return res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    let products = await req.redisClient.get("all_products");
    if (products) {
      return res.status(200).json(JSON.parse(products));
    } else {
      products = await Product.find();
      await req.redisClient.set(
        "all_products",
        JSON.stringify(products),
        "EX",
        3600
      ); // Cache for 1 hour
      return res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAverageRating = (product) => {
  let sum = 0;
  sum =
    product.ratingCounts[1] +
    product.ratingCounts[2] +
    product.ratingCounts[3] +
    product.ratingCounts[4] +
    product.ratingCounts[5];
  let avg =
    (product.ratingCounts[1] * 1 +
      product.ratingCounts[2] * 2 +
      product.ratingCounts[3] * 3 +
      product.ratingCounts[4] * 4 +
      product.ratingCounts[5] * 5) /
    sum;
  return avg;
};

const getSearchedProducts = async (req, res, next) => {
  try {
    const searchTerm = req.query.q;
    let redisOutput = await req.redisClient.get(`search_q=${searchTerm}&customerRating=${req.query.customerRating}&priceLL=${req.query.priceLL}&priceUL=${req.query.priceUL}&RuggedVerrified=${req.query.RuggedVerrified}&colours=${req.query.colours}&availability=${req.query.availability}&noOfResultsPerPage=12&pageNo=${req.query.pageNo}&categories=${req.query.categories}&brands=${req.query.brands}`);

    if (redisOutput) {
      return res.status(200).json(JSON.parse(redisOutput));
    } else {
      let pattern = new RegExp(searchTerm, "i");
      let query = {
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          { categories: { $in: [pattern] } },
          { tags: { $in: [pattern] } },
          { brand: { $in: [pattern] } },
        ],
      };

      // Check if other query parameters exist and modify the query accordingly
      if (req.query.brands) {
        const brands = req.query.brands.split(",");
        if (brands[0] !== "all") {
          query = { ...query, brand: { $in: brands } };
        }
      }
      if (req.query.priceLL && req.query.priceUL) {
        const priceLL = Number(req.query.priceLL);
        const priceUL = Number(req.query.priceUL);
        query = { ...query, price: { $gt: priceLL, $lt: priceUL } };
      }
      if (req.query.RuggedVerrified === "true") {
        query = { ...query, ruggedVerrified: true };
      }
      if (req.query.colours) {
        const coloursSelected = req.query.colours.split(",");
        if (coloursSelected[0] !== "all") {
          query = { ...query, colours: { $in: coloursSelected } };
        }
      }
      if (req.query.availability) {
        query = { ...query, stockQuantity: { $gte: 1 } };
      }
      if (req.query.categories) {
        const categoriesSelected = req.query.categories.split(",");
        if (categoriesSelected[0] !== "all") {
          query = { ...query, categories: { $in: categoriesSelected } };
        }
      }
      let products = await Product.find(query);
      const customerRatingFilter = (product) => {
        return getAverageRating(product) >= req.query.customerRating;
      };
      if (req.query.customerRating && Number(req.query.customerRating) > 0) {
        products = products.filter(customerRatingFilter);
      }
      // Pagination
      const pageNo = req.query.pageNo ? Number(req.query.pageNo) : 1;
      const noOfResultsPerPage = req.query.noOfResultsPerPage ? Number(req.query.noOfResultsPerPage) : 10;
      const startIndex = ((pageNo - 1) * noOfResultsPerPage);
      const endIndex = Math.min(pageNo * noOfResultsPerPage,products.length);
      const newProducts = products.slice(startIndex, endIndex);
      const noPages = Math.ceil(products.length / noOfResultsPerPage);
      await req.redisClient.set(
        `search_q=${searchTerm}&customerRating=${req.query.customerRating}&priceLL=${req.query.priceLL}&priceUL=${req.query.priceUL}&RuggedVerrified=${req.query.RuggedVerrified}&colours=${req.query.colours}&availability=${req.query.availability}&noOfResultsPerPage=12&pageNo=${req.query.pageNo}&categories=${req.query.categories}&brands=${req.query.brands}`,
        JSON.stringify({ productList: newProducts, totalNumberOfPages: noPages }),
        "EX",
        3600
      ); // Cache for 1 hour

      return res
        .status(200)
        .json({ productList: newProducts, totalNumberOfPages: noPages });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getProductById,
  getSearchedProducts,
  getAllProducts,
};