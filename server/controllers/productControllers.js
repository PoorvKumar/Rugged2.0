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
//   try {
//     const searchTerm = req.query.q;
//     let pattern = new RegExp(searchTerm, "i");
//     let products = await Product.find({
//       $or: [
//         { name: { $regex: searchTerm, $options: "i" } },
//         { categories: { $in: [pattern] } },
//         { tags: { $in: [pattern] } },
//         { brand: { $in: [pattern] } },
//       ],
//     });

//     const customerRating = Number(req.query.customerRating);
//     const brands = req.query.brands.split(",");
//     const priceLL = Number(req.query.priceLL);
//     const priceUL = Number(req.query.priceUL);
//     const ruggedVerified = req.query.RuggedVerrified;
//     const coloursSelected = req.query.colours.split(",");
//     const availability = req.query.availability;
//     const pageNo = req.query.pageNo;
//     const noOfResultsPerPage = Number(req.query.noOfResultsPerPage);
//     const categoriesSelected = req.query.categories.split(",");

//     const priceFilter = (product) => {
//       let priceAfterDiscount = product.price * (1 - product.discount * 0.01);
//       return priceAfterDiscount > priceLL && priceAfterDiscount < priceUL;
//     };

//     const customerRatingFilter = (product) => {
//       // console.log(getAverageRating(product));
//       return getAverageRating(product) >= customerRating;
//     };

//     const brandFilter = (product) => {
//       let index = 0;
//       for (index = 0; index < brands.length; index++) {
//         if (product.brand === brands[index]) {
//           return true;
//         }
//       }
//       return false;
//     };

//     const ruggedVerrifiedFilter = (product) => {
//       return product.ruggedVerrified === true;
//     };

//     const colorFilter = (product) => {
//       let index = 0;
//       for (index = 0; index < coloursSelected.length; index++) {
//         let jindex = 0;
//         for (jindex = 0; jindex < product.colours.length; jindex++) {
//           if (coloursSelected[index] === product.colours[jindex]) {
//             return true;
//           }
//         }
//       }
//       return false;
//     };

//     const categoriesFilter = (product) => {
//       let index = 0;
//       for (index = 0; index < categoriesSelected.length; index++) {
//         let jindex = 0;
//         for (jindex = 0; jindex < product.categories.length; jindex++) {
//           if (categoriesSelected[index] === product.categories[jindex]) {
//             return true;
//           }
//         }
//       }
//       return false;
//     };
//     const availabilityFilter = (product) => {
//       return product.stockQuantity >= 1;
//     };
//     // Filter the products based on user's requirements and sort them accordingly
//     if (brands[0] !== "all") {
//       products = products.filter(brandFilter);
//     }
//     if (ruggedVerified === "true") {
//       products = products.filter(ruggedVerrifiedFilter);
//     }

//     if (coloursSelected[0] !== "all") {
//       products = products.filter(colorFilter);
//     }
//     if (categoriesSelected[0] !== "all") {
//       products = products.filter(categoriesFilter);
//     }

//     if (availability) {
//       products = products.filter(availabilityFilter);
//     }

//     if (true) {
//       products = products.filter(priceFilter);
//     }

//     if (customerRating > 0) {
//       products = products.filter(customerRatingFilter);
//     }

//     let newProducts = [];
//     let i = 0;
//     let j = 0;
//     let ilimit =
//       noOfResultsPerPage * pageNo < products.length
//         ? noOfResultsPerPage * pageNo
//         : products.length;
//     for (i = noOfResultsPerPage * (pageNo - 1); i < ilimit; i++) {
//       newProducts[j] = products[i];
//       j = j + 1;
//     }
//     const noPages = Math.ceil(products.length / noOfResultsPerPage);
//     res
//       .status(200)
//       .json({ productList: newProducts, totalNumberOfPages: noPages });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error.message);
//   }
// };

const getSearchedProducts = async (req, res, next) => {
  try {
    const searchTerm = req.query.q;
    let redisOutput = await req.redisClient.get(`search_${searchTerm}`);

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
      if (req.query.customerRating && Number(req.query.customerRating) > 0) {
        query = { ...query, customerRating: { $gte: Number(req.query.customerRating) } };
      }
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
      // console.log(query);
      let products = await Product.find(query);
      console.log(products);
      // Pagination
      const pageNo = req.query.pageNo ? Number(req.query.pageNo) : 1;
      const noOfResultsPerPage = req.query.noOfResultsPerPage ? Number(req.query.noOfResultsPerPage) : 10;
      const startIndex = (pageNo - 1) * noOfResultsPerPage;
      const endIndex = pageNo * noOfResultsPerPage;
      const newProducts = products.slice(startIndex, endIndex);
      const noPages = Math.ceil(products.length / noOfResultsPerPage);

      await req.redisClient.set(
        `search_${searchTerm}`,
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