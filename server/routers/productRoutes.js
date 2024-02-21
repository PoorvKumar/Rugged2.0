const express=require("express");
const router=express.Router();

const productController=require("../controllers/productControllers");

router.get("/productByID",productController.getProductById);
router.get("/search",productController.getSearchedProducts);
router.get("/allProducts",productController.getAllProducts);
module.exports=router;