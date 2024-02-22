const express=require("express");
const router=express.Router();


const control=require('../controllers/ComplaintController');
router.post('/addcomplaint',control.addComplaint);
router.get('/getcomplaints',control.getComplaints)


module.exports=router;


