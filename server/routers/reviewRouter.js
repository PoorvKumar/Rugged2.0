// const express = require("express");
// const router = express.Router();
// const reviewController = require("../controllers/reviewController");
// const {authenticateToken,authorizeRoles} = require("../middlewares/authMiddleware");
// router.post("/addReview",authenticateToken,authorizeRoles(["customer"]),reviewController.addReview);
// module.exports = router;


const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Endpoints for managing product reviews
 */

/**
 * @swagger
 * /api/reviews/addReview:
 *   post:
 *     summary: Add a new review for a product
 *     tags: [Reviews]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productData:
 *                 type: object
 *                 description: Information about the product to review
 *               newReview:
 *                 type: object
 *                 properties:
 *                   userEmail:
 *                     type: string
 *                     description: Email of the user submitting the review
 *                   rating:
 *                     type: number
 *                     description: Rating given by the user (1-5)
 *                   review:
 *                     type: string
 *                     description: Text content of the review
 *     responses:
 *       201:
 *         description: New review added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request - Missing information in request body
 *       500:
 *         description: Internal Server Error - Failed to add review
 */

router.post("/addReview", reviewController.addReview);

module.exports = router;
