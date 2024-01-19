const jwt=require("jsonwebtoken");

const generateToken=(user)=>
{
    return jwt.sign({ userId: user._id, roles: user.roles})
}