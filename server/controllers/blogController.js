const Blog=require("../models/blog");
const User = require("../models/user");

const getAllBlogs=async (req,res,next)=>
{
    try
    {
        const { page=1, limit=10 }=req.query;
        const blogs=await Blog.find().limit(limit*1).skip((page-1)*limit).sort({ createdAt: -1 });

        return res.json(blogs);
    }
    catch(err)
    {
        next(err);
    }
};

const getBlog=async (req,res,next)=>
{
    try
    {
        const { id }=req.params;
        const blog=await Blog.findById(id);

        return res.json(blog);
    }
    catch(err)
    {
        next(err);
    }
};

const createBlog=async (req,res,next)=>
{
    try
    {
        const { title, content }=req.body;
        const blog=new Blog({
            title,
            content,
            author: req.user
        });

        await blog.save();

        const userId=req.user._id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!user.roles.includes("blogger")) {
            user.roles.push("blogger");
            await user.save();
        }

        return res.status(201).json({ msg: "Blog created successfully" });
    }
    catch(err)
    {
        next(err);
    }
};

const updateBlog=async (req,res,next)=>
{
    try
    {
        const { id }=req.params;
        const updates=req.body;

        const blog=await Blog.findByIdAndUpdate(id, updates, { new: true });

        if(!blog)
        {
            return res.status(404).json({ msg: "Blog not found" });
        }

        return res.json(blog);
    }
    catch(err)
    {
        next(err);
    }
};

const deleteBlog=async (req,res,next)=>
{
    try
    {
        const { id }=req.params;
        const blog=await Blog.findByIdAndDelete(id);

        if(!blog)
        {
            return res.status(404).json({ msg: "Blog not found" });
        }

        return res.json({ msg: "Blog deleted successfully" });
    }
    catch(err)
    {
        next(err);
    }
};

const addComment=async (req,res,next)=>
{
    try
    {
        const { id }=req.params;
        const updates=req.body;

        const blog=await Blog.findByIdAndUpdate(id, updates, { new: true });

        if(!blog)
        {
            return res.status(404).json({ msg: "Blog not found" });
        }

        return res.json(blog);
    }
    catch(err)
    {
        next(err);
    }
};

module.exports={
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    addComment
};