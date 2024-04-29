// const express = require("express");
// const router = express.Router();

// const { authenticateToken, authorizeRoles } = require("../middlewares/authMiddleware");
// const userController = require("../controllers/userController");

// router.get('/', authenticateToken, authorizeRoles(['admin']), userController.getAllUsers);
// router.get("/nolimitUser",authenticateToken,authorizeRoles(["admin"]),userController.getAllUsersNoLimit);
// router.get('/getUserById', authenticateToken, userController.getUserById);

// router.patch('/updateProfile', authenticateToken, userController.updateProfile);
// router.post('/changePassword', authenticateToken, userController.changePassword)
// router.delete('/deleteUser', authenticateToken, userController.deleteUser);
// router.post('/addAddress', authenticateToken, userController.addAddress);
// router.post('/deleteAddress', authenticateToken, userController.deleteAddress);

// module.exports = router;



const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints for managing users
 */

/**
 * @swagger
 * /api/users/:
 *   get:
 *     summary: Get all users with pagination (admin only)
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Maximum number of users per page
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized - Requires admin role
 *       500:
 *         description: Internal Server Error
 */

router.get('/', userController.getAllUsers);

/**
 * @swagger
 * /api/users/nolimitUser:
 *   get:
 *     summary: Get all users without pagination (admin only)
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized - Requires admin role
 *       500:
 *         description: Internal Server Error
 */

router.get('/nolimitUser', userController.getAllUsersNoLimit);

/**
 * @swagger
 * /api/users/getUserById/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */

router.get('/getUserById/:id', userController.getUserById);


/**
 * @swagger
 * /api/users/updateProfile:
 *   patch:
 *     summary: Update user profile
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phoneNumber:
 *                 type: string
 *                 pattern: '^[0-9]{10}$'
 *             example:
 *               firstName: John
 *               lastName: Doe
 *               email: johndoe@example.com
 *               phoneNumber: "1234567890"
 *     responses:
 *       200:
 *         description: Updated user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */

router.patch('/updateProfile', userController.updateProfile);

/**
 * @swagger
 * /api/users/changePassword:
 *   post:
 *     summary: Change user password
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *             example:
 *               oldPassword: password123
 *               newPassword: newpassword456
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

router.post('/changePassword', userController.changePassword);

/**
 * @swagger
 * /api/users/deleteUser:
 *   delete:
 *     summary: Delete user account
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User account deleted successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

router.delete('/deleteUser', userController.deleteUser);

/**
 * @swagger
 * /api/users/addAddress:
 *   post:
 *     summary: Add new address for the user
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *                 pattern: '^[0-9]{10}$'
 *               street:
 *                 type: string
 *               city:
 *                 type: string
 *               landmark:
 *                 type: string
 *               state:
 *                 type: string
 *               pincode:
 *                 type: string
 *                 pattern: '^[0-9]{6}$'
 *             example:
 *               name: Home
 *               phoneNumber: "1234567890"
 *               street: 123 Street
 *               city: City
 *               landmark: Near Park
 *               state: State
 *               pincode: "123456"
 *     responses:
 *       201:
 *         description: Address added successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

router.post('/addAddress', userController.addAddress);

/**
 * @swagger
 * /api/users/deleteAddress:
 *   post:
 *     summary: Delete an address for the user
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               addressId:
 *                 type: string
 *                 description: ID of the address to delete
 *             example:
 *               addressId: 1234567890
 *     responses:
 *       201:
 *         description: Address deleted successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

router.post('/deleteAddress', userController.deleteAddress);

module.exports = router;
