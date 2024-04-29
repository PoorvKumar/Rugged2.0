// const express=require("express");
// const router=express.Router();

// const { authenticateToken, authorizeRoles }=require("../middlewares/authMiddleware");
// const blogController=require("../controllers/blogController");

// router.get('/',blogController.getAllBlogs);
// router.get('/:id',blogController.getBlog);

// router.post('/',authenticateToken,blogController.createBlog);
// router.patch('/:id',authenticateToken,authorizeRoles(['blogger','admin']),blogController.updateBlog);
// router.delete('/:id',authenticateToken,authorizeRoles(['blogger','admin']),blogController.deleteBlog);

// router.patch('/:id',authenticateToken,blogController.addComment);

// module.exports=router;




const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');
/**
 * @swagger
 * tags:
 *   name: Blog
 *   description: Blog operations
 */

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     summary: Retrieve all blogs
 *     description: Retrieve a list of all blogs.
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: A list of blogs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 *       401:
 *         description: Unauthorized - Missing or invalid token.
 *       403:
 *         description: Forbidden - User does not have necessary permissions.
 *       500:
 *         description: Internal Server Error - Failed to retrieve blogs.
 *     security:
 *       - bearerAuth: []
 */
router.get('/', blogController.getAllBlogs);

/**
 * @swagger
 * /api/blogs/{id}:
 *   get:
 *     summary: Get a single blog post by ID
 *     tags: [Blog]
 *     description: Retrieve a single blog post by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the blog post to retrieve
 *     responses:
 *       '200':
 *         description: A single blog post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       '404':
 *         description: Blog post not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:id', blogController.getBlog);

/**
 * @swagger
 * /api/blogs:
 *   post:
 *     summary: Create a new blog post
 *     tags: [Blog]
 *     description: Create a new blog post.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Blog'
 *     responses:
 *       '201':
 *         description: Blog post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       '400':
 *         description: Bad request, missing required parameters
 *       '401':
 *         description: Unauthorized, invalid or missing authentication token
 *       '500':
 *         description: Internal server error
 * components:
 *  schemas:
 *    Blog:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The unique identifier of the blog post.
 *        title:
 *          type: string
 *          description: The title of the blog post.
 *        content:
 *          type: string
 *          description: The content of the blog post.
 *        imgSrc:
 *          type: string
 *          description: The image source URL for the blog post.
 *        author:
 *          type: string
 *          description: The ID of the author (user) who created the blog post.
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date and time when the blog post was created.
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date and time when the blog post was last updated.
 *        comments:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              _id:
 *                type: string
 *                description: The unique identifier of the comment.
 *              user:
 *                type: string
 *                description: The ID of the user who posted the comment.
 *              comment:
 *                type: string
 *                description: The content of the comment.
 *              createdAt:
 *                type: string
 *                format: date-time
 *                description: The date and time when the comment was posted.
 *      required:
 *        - title
 *        - content
 *        - author
 */
router.post('/', authenticateToken, blogController.createBlog);

/**
 * @swagger
 * /api/blogs/{id}:
 *   patch:
 *     summary: Update a blog post by ID
 *     tags: [Blog]
 *     description: Update an existing blog post by its ID.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the blog post to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogUpdate'
 *     responses:
 *       '200':
 *         description: Updated blog post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       '404':
 *         description: Blog post not found
 *       '401':
 *         description: Unauthorized, invalid or missing authentication token
 *       '500':
 *         description: Internal server error
 */
router.patch('/:id', authenticateToken, authorizeRoles(['blogger', 'admin']), blogController.updateBlog);

/**
 * @swagger
 * /api/blogs/{id}:
 *   delete:
 *     tags: [Blog]
 *     summary: Delete a blog post by ID
 *     description: Delete an existing blog post by its ID.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the blog post to delete
 *     responses:
 *       '200':
 *         description: Blog post deleted successfully
 *       '404':
 *         description: Blog post not found
 *       '401':
 *         description: Unauthorized, invalid or missing authentication token
 *       '500':
 *         description: Internal server error
 */
router.delete('/:id', authenticateToken, authorizeRoles(['blogger', 'admin']), blogController.deleteBlog);

/**
 * @swagger
 * /api/blogs/{id}/comments:
 *   patch:
 *     summary: Add a comment to a blog post
 *     tags: [Blog]
 *     description: Add a comment to an existing blog post by its ID.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the blog post to add a comment to
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewComment'
 *     responses:
 *       '200':
 *         description: Added comment to the blog post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       '404':
 *         description: Blog post not found
 *       '401':
 *         description: Unauthorized, invalid or missing authentication token
 *       '500':
 *         description: Internal server error
 */
router.patch('/:id/comments', authenticateToken, blogController.addComment);

module.exports = router;
