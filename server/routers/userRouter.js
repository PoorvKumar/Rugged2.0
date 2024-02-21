const express=require("express");
const router=express.Router();

const { authenticateToken, authorizeRoles }=require("../middlewares/authMiddleware");
const userController=require("../controllers/userController");

router.get('/',authenticateToken,authorizeRoles(['admin']),userController.getAllUsers);
router.get('/:id',authenticateToken,userController.getUserById);
router.patch('/:id',authenticateToken,userController.updateProfile);
router.delete('/:id',authenticateToken,userController.deleteUser);

module.exports=router;