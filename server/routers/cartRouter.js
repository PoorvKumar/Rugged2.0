const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const {
  authenticateToken,
  authorizeRoles,
} = require("../middlewares/authMiddleware");
router.get(
  "/",
  authenticateToken,
  authorizeRoles(["customer"]),
  cartController.getCart
);
router.post(
  "/add",
  authenticateToken,
  authorizeRoles(['customer','seller']),
  cartController.addCart
);
router.patch(
  "/update",
  authenticateToken,
  authorizeRoles(["customer"]),
  cartController.updateCart
);
router.delete(
  "/delete/:id",
  authenticateToken,
  authorizeRoles(["customer"]),
  cartController.deleteCart
);
router.delete(
  "/empty",
  authenticateToken,
  authorizeRoles(["customer"]),
  cartController.emptyCart
);
module.exports = router;