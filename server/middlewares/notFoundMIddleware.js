const notFoundMiddleware=(req,res,next)=>
{
    return res.status(404).json({ msg: "Route not found" });
};

module.exports=notFoundMiddleware;