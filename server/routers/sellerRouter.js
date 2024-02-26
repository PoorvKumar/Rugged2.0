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

router.post("/add-product/bulk", authenticateToken, authorizeRoles(["seller","admin"]),sellerController.addBulkProducts);
router.patch("/updateProduct", authenticateToken, authorizeRoles(["seller"]), sellerController.updateProduct);
router.patch(
  "/deleteProduct",
  authenticateToken,
  authorizeRoles(["seller"]),
  sellerController.deleteProduct
);
router.post(
  "/become",
  authenticateToken,
  authorizeRoles(["customer"]),
  sellerController.becomeSeller
);
// router.patch(
//   "/products/:id",
//   authenticateToken,
//   authorizeRoles(["seller"]),
//   sellerController.updateProduct
// );
// Important Route
// router.delete(
//   "/products/:id",
//   authenticateToken,
//   authorizeRoles(["seller"]),
//   sellerController.deleteProduct
// );
router.get(
  "/details",
  authenticateToken,
  authorizeRoles(["seller"]),
  sellerController.getSellerDetails
);
router.put(
  "/update",
  authenticateToken,
  authorizeRoles(["seller"]),
  sellerController.updateDetails
);
// router.patch(
//   "/analytics",
//   authenticateToken,
//   authorizeRoles(["seller"]),
//   sellerController.getAllAnalytics
// );
module.exports = router;
