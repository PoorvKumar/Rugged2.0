// const express=require("express");
// const router=express.Router();

// const productController=require("../controllers/productControllers");

// router.get("/productByID",productController.getProductById);
// router.get("/search",productController.getSearchedProducts);
// router.get("/allProducts",productController.getAllProducts);
// module.exports=router;

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Endpoints for managing products
 */

/**
 * @swagger
 * /api/products/productByID:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to retrieve
 *     responses:
 *       200:
 *         description: A product object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal Server Error - Failed to retrieve product
 */

router.get("/productByID", productController.getProductById);

/**
 * @swagger
 * /api/products/search:
 *   get:
 *     summary: Search for products based on criteria
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Search term to match against product name, brand, tags, or categories
 *       - in: query
 *         name: customerRating
 *         schema:
 *           type: number
 *         description: Minimum customer rating required
 *       - in: query
 *         name: brands
 *         schema:
 *           type: string
 *         description: Comma-separated list of brand names to filter by
 *       - in: query
 *         name: priceLL
 *         schema:
 *           type: number
 *         description: Lower price limit
 *       - in: query
 *         name: priceUL
 *         schema:
 *           type: number
 *         description: Upper price limit
 *       - in: query
 *         name: RuggedVerrified
 *         schema:
 *           type: string
 *         description: Flag to filter rugged verified products
 *       - in: query
 *         name: colours
 *         schema:
 *           type: string
 *         description: Comma-separated list of colors to filter by
 *       - in: query
 *         name: availability
 *         schema:
 *           type: string
 *         description: Filter by availability
 *       - in: query
 *         name: pageNo
 *         schema:
 *           type: number
 *         description: Page number for pagination
 *       - in: query
 *         name: noOfResultsPerPage
 *         schema:
 *           type: number
 *         description: Number of results per page
 *       - in: query
 *         name: categories
 *         schema:
 *           type: string
 *         description: Comma-separated list of categories to filter by
 *     responses:
 *       200:
 *         description: List of filtered products and pagination info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productList:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *                 totalNumberOfPages:
 *                   type: number
 *       500:
 *         description: Internal Server Error - Failed to retrieve products
 */

router.get("/search", productController.getSearchedProducts);

/**
 * @swagger
 * /api/products/allProducts:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal Server Error - Failed to retrieve products
 */

router.get("/allProducts", productController.getAllProducts);

module.exports = router;
