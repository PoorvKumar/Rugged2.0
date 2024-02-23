const Product = require("../models/product");

const getProductById = async (req, res, next) => {
  try {
    const productId = req.query.productId;
    let product = await Product.findById(productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAllProducts = async (req, res, next) => {
  try {
    let products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAverageRating = (product) => {
  let sum = 0;
  sum = product.ratingCounts[1] + product.ratingCounts[2] + product.ratingCounts[3] + product.ratingCounts[4] + product.ratingCounts[5];
  let avg = ((product.ratingCounts[1] * 1) + (product.ratingCounts[2] * 2) + (product.ratingCounts[3] * 3) + (product.ratingCounts[4] * 4) + (product.ratingCounts[5] * 5)) / sum;
  return avg;
}
const getSearchedProducts = async (req, res, next) => {
  try {
    const searchTerm = req.query.q;
    let pattern = new RegExp(searchTerm, "i");
    let products = await Product.find({
      $or:
        [
          { name: { $regex: searchTerm, $options: "i" } },
          { categories: { $in: [pattern] } },
          { tags: { $in: [pattern] } },
          { brand: { $in: [pattern] } },
        ]
    });


    const customerRating = Number(req.query.customerRating);
    const brands = req.query.brands.split(',');
    const priceLL = Number(req.query.priceLL);
    const priceUL = Number(req.query.priceUL);
    const ruggedVerified = req.query.RuggedVerrified;
    const coloursSelected = req.query.colours.split(',');
    const availability = req.query.availability;
    const pageNo=req.query.pageNo;
    const noOfResultsPerPage= Number(req.query.noOfResultsPerPage);
    const categoriesSelected = req.query.categories.split(',');

    const priceFilter = (product) => {
      let priceAfterDiscount = product.price * (1 - product.discount * 0.01);
      return priceAfterDiscount > priceLL && priceAfterDiscount < priceUL;
    };
    
    const customerRatingFilter = (product) => {
      // console.log(getAverageRating(product));
      return getAverageRating(product) >= customerRating;
    };
    
    const brandFilter = (product) => {
      let index = 0;
      for (index = 0; index < brands.length; index++) {
        if (product.brand === brands[index]) {
          return true;
        }
      }
      return false;
    };
    
    const ruggedVerrifiedFilter = (product) => {
      return product.ruggedVerrified === true;
    };
    
    const colorFilter = (product) => {
      let index = 0;
      for (index = 0; index < coloursSelected.length; index++) {
        let jindex=0;
        for(jindex=0;jindex<product.colours.length;jindex++){
          if(coloursSelected[index]===product.colours[jindex]){
            return true;
          }
        }
      }
      return false;
    };
    
    const categoriesFilter = (product) => {
      let index = 0;
      for (index = 0; index < categoriesSelected.length; index++) {
        let jindex=0;
        for(jindex=0;jindex<product.categories.length;jindex++){
          if(categoriesSelected[index]===product.categories[jindex]){
            return true;
          }
        }
      }
      return false;
    };
    const availabilityFilter = (product) => {
      return product.stockQuantity >= 1;
    };
    // Filter the products based on user's requirements and sort them accordingly
    if (brands[0]!=="all") {
      products = products.filter(brandFilter);
    }
    if (ruggedVerified==="true") {
      products = products.filter(ruggedVerrifiedFilter);
    }
    
    if (coloursSelected[0]!=="all") {
      products = products.filter(colorFilter);
    }
    if(categoriesSelected[0]!=="all"){
      products=products.filter(categoriesFilter);
    }
    
    if (availability) {
      products = products.filter(availabilityFilter);
    }
    
    if (true) {
      products = products.filter(priceFilter);
    }
    
    if (customerRating > 0) {
      products = products.filter(customerRatingFilter);
    }

    let newProducts=[];
    let i=0;
    let j=0;
    let ilimit = noOfResultsPerPage*pageNo<products.length ? noOfResultsPerPage*pageNo:products.length 
    for(i=(noOfResultsPerPage*(pageNo-1));i<ilimit;i++){
      newProducts[j]=products[i];
      j=j+1;;
    }
    res.status(200).json({"productList" : newProducts});
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = {
  getProductById,
  getSearchedProducts,
  getAllProducts,
};