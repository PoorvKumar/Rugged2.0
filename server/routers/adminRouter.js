// const express = require("express");
// const router = express.Router();
// const adminController = require("../controllers/adminController")
// const {
//   authenticateToken,
//   authorizeRoles,
// } = require("../middlewares/authMiddleware");
// router.get(
//   "/products",
//   authenticateToken,
//   authorizeRoles(["admin"]),
//   adminController.getAllProducts
// );
// router.patch(
//   "/updateProfile",
//   authenticateToken,
//   authorizeRoles(["admin"]),
//   adminController.updateUserProfile
// );
// router.patch(
//   "/updateProduct",
//   authenticateToken,
//   authorizeRoles(["admin"]),
//   adminController.updateProduct
// );
// router.patch(
//   "/deleteProduct",
//   authenticateToken,
//   authorizeRoles(["admin"]),
//   adminController.deleteProduct
// );
// router.get("/userbyid", authenticateToken, adminController.getUserbyID);
// module.exports = router;



const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const {
  authenticateToken,
  authorizeRoles,
} = require("../middlewares/authMiddleware");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin operations
 */

/**
 * @swagger
 * /api/admin/products:
 *   get:
 *     summary: Get all products (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '401':
 *         description: Unauthorized, missing or invalid token
 *       '403':
 *         description: Forbidden, user does not have admin privileges
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The unique identifier for the product.
 *        name:
 *          type: string
 *          description: The name of the product.
 *        shortDescription:
 *          type: string
 *          description: A short description of the product.
 *        description:
 *          type: string
 *          description: The detailed description of the product.
 *        price:
 *          type: number
 *          description: The price of the product.
 *        brand:
 *          type: string
 *          description: The brand of the product.
 *        tags:
 *          type: array
 *          items:
 *            type: string
 *          description: Tags associated with the product.
 *        categories:
 *          type: array
 *          items:
 *            type: string
 *          description: Categories to which the product belongs.
 *        images:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              type:
 *                type: string
 *                description: The type of the image.
 *              source:
 *                type: string
 *                description: The source URL of the image.
 *          description: Images associated with the product.
 *        stockQuantity:
 *          type: integer
 *          description: The current stock quantity of the product.
 *        seller:
 *          type: string
 *          description: The ID of the user who is selling the product.
 *        reviews:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              user:
 *                type: string
 *                description: The ID of the user who posted the review.
 *              name:
 *                type: string
 *                description: The name of the reviewer.
 *              rating:
 *                type: number
 *                description: The rating given by the reviewer.
 *              review:
 *                type: string
 *                description: The review text.
 *              reviewTitle:
 *                type: string
 *                description: The title of the review.
 *              helpful:
 *                type: array
 *                items:
 *                  type: string
 *                description: Users who found the review helpful.
 *              unhelpful:
 *                type: array
 *                items:
 *                  type: string
 *                description: Users who found the review unhelpful.
 *              date:
 *                type: string
 *                format: date-time
 *                description: The date and time when the review was posted.
 *          description: Reviews of the product.
 *        ratingCounts:
 *          type: object
 *          properties:
 *            "1":
 *              type: number
 *              description: Number of ratings with value 1.
 *            "2":
 *              type: number
 *              description: Number of ratings with value 2.
 *            "3":
 *              type: number
 *              description: Number of ratings with value 3.
 *            "4":
 *              type: number
 *              description: Number of ratings with value 4.
 *            "5":
 *              type: number
 *              description: Number of ratings with value 5.
 *          description: Counts of different rating values.
 *        discount:
 *          type: number
 *          description: The discount percentage applied to the product.
 *        colours:
 *          type: array
 *          items:
 *            type: string
 *          description: Available colors for the product.
 *        dimensions:
 *          type: object
 *          properties:
 *            length:
 *              type: number
 *              description: The length dimension of the product.
 *            width:
 *              type: number
 *              description: The width dimension of the product.
 *            height:
 *              type: number
 *              description: The height dimension of the product.
 *        ruggedVerrified:
 *          type: boolean
 *          description: Indicates if the product is rugged verified.
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date and time when the product was created.
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date and time when the product was last updated.
 *      required:
 *        - name
 *        - shortDescription
 *        - description
 *        - price
 *        - images
 *        - stockQuantity
 *        - seller
 *        - createdAt
 *        - updatedAt

 */
router.get(
  "/products",
  authenticateToken,
  authorizeRoles(["admin"]),
  adminController.getAllProducts
);

/**
 * @swagger
 * /api/admin/updateProfile:
 *   patch:
 *     summary: Update user profile (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               update:
 *                 type: object
 *     responses:
 *       '200':
 *         description: Updated user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '401':
 *         description: Unauthorized, missing or invalid token
 *       '403':
 *         description: Forbidden, user does not have admin privileges
 *       '404':
 *         description: User not found
 * components:
 *  schemas:
 *    Address:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: The name associated with the address.
 *        phoneNumber:
 *          type: string
 *          description: The phone number associated with the address.
 *        street:
 *          type: string
 *          description: The street address.
 *        city:
 *          type: string
 *          description: The city of the address.
 *        landmark:
 *          type: string
 *          description: A landmark near the address (optional).
 *        state:
 *          type: string
 *          description: The state of the address.
 *        pincode:
 *          type: string
 *          description: The postal code of the address.
 *
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The unique identifier for the user.
 *        name:
 *          type: string
 *          description: The name of the user.
 *        email:
 *          type: string
 *          format: email
 *          description: The email address of the user (must be unique).
 *        addresses:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Address'
 *          description: The list of addresses associated with the user.
 *        phoneNumber:
 *          type: string
 *          description: The phone number of the user.
 *        roles:
 *          type: array
 *          items:
 *            type: string
 *            enum: ["admin", "customer", "seller", "blogger"]
 *          description: The roles assigned to the user.
 *        refreshToken:
 *          type: string
 *          description: The refresh token used for authentication.
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date and time when the user was created.
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date and time when the user was last updated.
 *      required:
 *        - name
 *        - email
 *        - addresses
 *        - roles
 *        - refreshToken
 *        - createdAt
 *        - updatedAt
 *      example:
 *        _id: "609b0ef5472a2d001f4e902a"
 *        name: "John Doe"
 *        email: "johndoe@example.com"
 *        addresses:
 *          - name: "Home"
 *            phoneNumber: "1234567890"
 *            street: "123 Main St"
 *            city: "Anytown"
 *            state: "CA"
 *            pincode: "12345"
 *        phoneNumber: "9876543210"
 *        roles:
 *          - "customer"
 *        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *        createdAt: "2021-05-12T12:00:00Z"
 *        updatedAt: "2021-05-12T15:30:00Z"
 */
router.patch(
  "/updateProfile",
  authenticateToken,
  authorizeRoles(["admin"]),
  adminController.updateUserProfile
);

/**
 * @swagger
 * /api/admin/updateProduct:
 *   patch:
 *     summary: Update product details (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '200':
 *         description: Updated product details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '401':
 *         description: Unauthorized, missing or invalid token
 *       '403':
 *         description: Forbidden, user does not have admin privileges
 *       '404':
 *         description: Product not found
 */
router.patch(
  "/updateProduct",
  authenticateToken,
  authorizeRoles(["admin"]),
  adminController.updateProduct
);

/**
 * @swagger
 * /api/admin/deleteProduct:
 *   patch:
 *     summary: Delete a product (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Product deleted successfully
 *       '401':
 *         description: Unauthorized, missing or invalid token
 *       '403':
 *         description: Forbidden, user does not have admin privileges
 *       '404':
 *         description: Product not found
 */
router.patch(
  "/deleteProduct",
  authenticateToken,
  authorizeRoles(["admin"]),
  adminController.deleteProduct
);

/**
 * @swagger
 * /api/admin/userbyid:
 *   get:
 *     summary: Get user details by ID (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '401':
 *         description: Unauthorized, missing or invalid token
 *       '403':
 *         description: Forbidden, user does not have admin privileges
 *       '404':
 *         description: User not found
 */
router.get(
  "/userbyid",
  authenticateToken,
  authorizeRoles(["admin"]),
  adminController.getUserbyID
);

module.exports = router;