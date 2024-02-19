
const Product = require("../models/Product");

export const getProductById=async (req,res,next)=>
{
    try {
        
    } catch (error) {
        
    }
};

export const getSearchedProducts=async (req,res,next)=>
{
    const searchTerm = req.query.q;

  function getProductsRatingArray(products) {
    let productsRatingArray = [
      // {
      //   productID: String,
      //   ratingArray: [],
      // },
    ];
    for (let index = 0; index < products.length; index++) {
      productsRatingArray.push({
        productID: products[index]._id.toString(),
        ratingArray: [0, 0, 0, 0, 0, 0],
      });
    }
    for (let index = 0; index < products.length; index++) {
      let product = products[index];
      let prai = productsRatingArray[index];
      for (let j = 0; j < product.reviewsArray.length; j++) {
        prai.ratingArray[product.reviewsArray[j].rating] =
          prai.ratingArray[product.reviewsArray[j].rating] + 1;
      }
    }
    return productsRatingArray;
  }

  // Query MongoDB for products matching the search term

  // {$or:
  //   [ 
  //     { name: { pattern } }, 
  //     { categories: { $in: [ pattern ] } },
  //     { tags: { pattern  } }
  // ]}
  // { $regex: searchTerm, $options: "i" }

  let pattern=new RegExp(searchTerm,"i");

  Product.find({$or:
    [ 
      { name: { $regex: searchTerm, $options: "i" }}, 
      { categories: { $in: [ pattern ] } },
      { tags: { $in:[ pattern ] } }
  ]})
    .then((products) => {
      const productsRatingArray = getProductsRatingArray(products);
      if (req.session.isLoggedin) {
        req.user
          .populate("cart.item.productID")
          .then((user) => {
            const cartproducts = user.cart.item;
            // res.json(products);
            res.render("productSearchPage", {
              productsData: products,
              isLoggedin: req.session.isLoggedin,
              user: req.session.user,
              searchTerm: searchTerm,
              cartprod: cartproducts,
              productsRatingArray: productsRatingArray
            });
          })
          .catch((err) => console.log(err));
      }
      else {
        res.render("productSearchPage", {
          productsData: products,
          isLoggedin: req.session.isLoggedin,
          user: { firstname: "User" },
          searchTerm: searchTerm,
          productsRatingArray: productsRatingArray,
        });

      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server Error");
      return;
    });
};