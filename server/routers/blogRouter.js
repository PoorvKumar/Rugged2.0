const express=require("express");
const router=express.Router();

const { authenticateToken, authorizeRoles }=require("../middlewares/authMiddleware");
const blogController=require("../controllers/blogController");

router.get('/',blogController.getAllBlogs);
router.get('/:id',blogController.getBlog);

router.post('/',authenticateToken,blogController.createBlog);
router.patch('/:id',authenticateToken,authorizeRoles(['blogger','admin']),blogController.updateBlog);
router.delete('/:id',authenticateToken,authorizeRoles(['blogger','admin']),blogController.deleteBlog);

router.patch('/:id',authenticateToken,blogController.addComment);

module.exports=router;