const User=require("../models/User");
const bcrypt=require("bcryptjs");
const { generateToken, generateRefreshToken } = require("../utils/jwtUtils");

const register=async (req,res)=>
{
    try
    {
        const { username, email, password, roles }=req.body;

        if(!username || !email || !password || !roles)
        {
            res.status(400).json({ msg: "Missing Information"});
        }

        const foundUser=await User.findOne({email});
        if(foundUser)
        {
            return res.status(409).json({ msg: "User already exists"});
        }

        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const user=new User({
            username,
            email,
            password: hashedPassword,
            roles
        });

        await user.save();

        return res.status(201).json({msg: "User registered seccessfully!"});
    }
    catch(error)
    {
        return res.status(500).json({ error: error.message });
    }
}

const login=async (req,res)=>
{
    try
    {
        const { email, password }=req.body;

        if(!email && !password)
        {
            return res.status(400).json({ msg: "Email or Password missing"});
        }

        const user=await User.findOne({email});

        if(!user)
        {
            return res.status(404).json({ msg: "User not found" });
        }

        const isValidPassword=await bcrypt.compare(password,user.password);

        if(!isValidPassword)
        {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        const token=generateToken(user);
        const refreshToken=generateRefreshToken(user);

        user.refreshToken=refreshToken;
        await user.save();

        return res.status(200).json({ data: { accessToken: token, refreshToken }});
    }
    catch(error)
    {
        return res.status(500).json({ error: error.message });
    }
    
}

module.exports={
    register,
    login
}