const express = require("express");
const router = express.Router();
const adminController=require("../controllers/adminController")
const {
  authenticateToken,
  authorizeRoles,
} = require("../middlewares/authMiddleware");
router.get(
  "/products",
  authenticateToken,
  authorizeRoles(["admin"]),
  adminController.getAllProducts
);
router.patch(
  "/updateProfile",
  authenticateToken,
  authorizeRoles(["admin"]),
  adminController.updateUserProfile
);
router.patch(
  "/updateProduct",
  authenticateToken,
  authorizeRoles(["admin"]),
  adminController.updateProduct
);
router.patch(
  "/deleteProduct",
  authenticateToken,
  authorizeRoles(["admin"]),
  adminController.deleteProduct
);
router.get("/userbyid", authenticateToken,adminController.getUserbyID);
module.exports = router;