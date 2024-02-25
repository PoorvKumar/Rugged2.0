const User=require("../models/user");
const bcrypt = require("bcryptjs");

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
const getAllUsersNoLimit = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.json(users);
  } catch (err) {
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
        const id =req.user._id;
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

const addAddress=async (req,res,next)=>
{
    const { name, phoneNumber, street, city, landmark, state, pincode } = req.body;
    
    try {
        const newAddress = {
            name,
            phoneNumber,
            street,
            city,
            landmark,
            state,
            pincode
        };

        const user=req.user;
        user.addresses.push(newAddress);
        
        await user.save();

        res.status(201).json({ message: 'Address added successfully', user });
    } catch (err) {
        next(err);
    }

};

const deleteAddress=async (req,res,next)=>
{
    const {_id, name, phoneNumber, street, city, landmark, state, pincode } = req.body;
    
    try {
        const newAddress = {
            _id,
            name,
            phoneNumber,
            street,
            city,
            landmark,
            state,
            pincode
        };

        const user=req.user;
        const adr = user.addresses.find((addr) => addr._id !== newAddress._id); 
        user.addresses=adr;
        await user.save();
        res.status(201).json({ message: 'Address deleted successfully', user });
    } catch (err) {
        next(err);
    }

};
const changePassword = async(req,res,next)=>{
    try {
        const { oldPassword, newPassword } = req.body;
        if(!oldPassword || !newPassword ){
            return res.status(404).json({ msg: "Current Password or New Password not provided." });
        }
        const match = await bcrypt.compare(oldPassword, req.user.password);
        let updatedUser;
        if(match){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);
            updatedUser = await User.findByIdAndUpdate(req.user._id,{password:hashedPassword},{ new: true })    
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}

module.exports={
    getAllUsers,
    getUserById,
    updateProfile,
    deleteUser,
    addAddress,
    changePassword,
    deleteAddress,
    getAllUsersNoLimit
};