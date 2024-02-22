const express=require("express");
const router=express.Router();

const reviewController=require("../controllers/reviewController");

const {
    authenticateToken,
    authorizeRoles,
} = require("../middlewares/authMiddleware");

router.post(
    "/addReview",
    authenticateToken,
    authorizeRoles(["customer"]),
    reviewController.addReview
  );

module.exports=router;