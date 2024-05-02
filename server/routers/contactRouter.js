// const express = require("express");
// const router = express.Router();


// const control = require('../controllers/ComplaintController');
// router.post('/addcomplaint', control.addComplaint);
// router.get('/getcomplaints', control.getComplaints)


// module.exports = router;

const express = require("express");
const router = express.Router();

const { addComplaint, getComplaints } = require('../controllers/ComplaintController');

/**
 * @swagger
 * tags:
 *   name: Complaints
 *   description: Endpoints for managing complaints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Complaint:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the person making the complaint
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the person making the complaint
 *         phone:
 *           type: string
 *           description: Phone number of the person making the complaint
 *         subject:
 *           type: string
 *           description: Subject of the complaint
 *         message:
 *           type: string
 *           description: Message or details of the complaint
 *       required:
 *         - name
 *         - email
 *         - subject
 *         - message
 */

/**
 * @swagger
 * /api/contact/addcomplaint:
 *   post:
 *     summary: Add a new complaint
 *     tags: [Complaints]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Complaint added successfully
 *       400:
 *         description: Bad request - Missing required fields
 *       500:
 *         description: Internal Server Error - Failed to add complaint
 */

router.post('/addcomplaint', addComplaint);

/**
 * @swagger
 * /api/contact/getcomplaints:
 *   get:
 *     summary: Get all complaints
 *     tags: [Complaints]
 *     responses:
 *       200:
 *         description: A list of all complaints
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Complaint'
 *       500:
 *         description: Internal Server Error - Failed to retrieve complaints
 */

router.get('/getcomplaints', getComplaints);

module.exports = router;


