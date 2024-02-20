const express = require("express");
const router = express.Router();
const sellerController = require("../controllers/sellerController");
const {
  authenticateToken,
  authorizeRoles,
} = require("../middlewares/authMiddleware");
router.get(
  "/products",
  authenticateToken,
  authorizeRoles(["seller"]),
  sellerController.getAllProducts
);
router.post(
  "/product",
  authenticateToken,
  authorizeRoles(["seller"]),
  sellerController.addProduct
);
router.patch(
  "/products/:id",
  authenticateToken,
  authorizeRoles(["seller"]),
  sellerController.updateProduct
);
// Important Route
router.delete(    
  "/products/:id",
  authenticateToken,
  authorizeRoles(["seller"]),
  sellerController.deleteProduct
);
router.get(
  "/:id",
  authenticateToken,
  authorizeRoles(["seller"]),
  sellerController.getDetails
);
router.patch(
  "/:id",
  authenticateToken,
  authorizeRoles(["seller"]),
  sellerController.updateDetails
);
router.patch(
  "/:id/analytics",
  authenticateToken,
  authorizeRoles(["seller"]),
  sellerController.getAnalytics
);

