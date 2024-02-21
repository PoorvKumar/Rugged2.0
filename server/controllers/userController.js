const User=require("../models/user");

const getAllUsers=async (req,res,next)=>
{
    try
    {
        const { page=1, limit=10 }=req.query;
        const users=await User.find().limit(limit*1).skip((page-1)*limit).sort({ createdAt: -1 });

        return res.json(users);
    }
    catch(err)
    {
        next(err);
    }
};

const getUserById=async (req,res,next)=>
{
    try
    {
        const { id }=req.params;
        const user=await User.findById(id);

        if(!user)
        {
            return res.status(404).json({ msg: "User not found" });
        }

        return res.json(user);
    }
    catch(err)
    {
        next(err);
    }
};

const updateProfile=async (req,res,next)=>
{
    try
    {
        const { id }=req.params;
        const update=req.body;
        const user=await User.findByIdAndUpdate(id,update,{ new: true });

        if(!user)
        {
            return res.status(404).json({ msg: "User not found" });
        }

        return res.json(user);
    }
    catch(err)
    {
        next(err);
    }
};

const deleteUser=async (req,res,next)=>
{
    try
    {
        const { id }=req.params;
        const update=req.body;
        const user=await User.findByIdAndDelete(id);

        if(!user)
        {
            return res.status(404).json({ msg: "User not found" });
        }

        return res.json({ msg: "User deleted successfully" });
    }
    catch(err)
    {
        next(err);
    }
};

module.exports={
    getAllUsers,
    getUserById,
    updateProfile,
    deleteUser,
};