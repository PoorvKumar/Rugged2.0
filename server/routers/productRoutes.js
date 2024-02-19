const express=require("express");
const router=express.Router();

const productController=require("../controllers/productControllers");

router.get("/products/productID=?",productController.getProductById);
router.get("/products/search/",productController.getSearchedProducts)

module.exports=router;