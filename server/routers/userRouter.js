const express=require("express");
const router=express.Router();

const { authenticateToken, authorizeRoles }=require("../middlewares/authMiddleware");
const userController=require("../controllers/userController");

router.get('/', authenticateToken, authorizeRoles(['admin']), userController.getAllUsers);
router.get(
  "/nolimitUser",
  authenticateToken,
  authorizeRoles(["admin"]),
  userController.getAllUsersNoLimit
);
router.get('/getUserById',authenticateToken,userController.getUserById);

router.patch('/updateProfile',authenticateToken,userController.updateProfile);
router.post('/changePassword',authenticateToken,userController.changePassword)
router.delete('/deleteUser',authenticateToken,userController.deleteUser);
router.post('/addAddress',authenticateToken,userController.addAddress);
router.post('/deleteAddress',authenticateToken,userController.deleteAddress);

module.exports=router;