require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const corsOptions=require("./config/corsOptions");
const connectDB=require("./config/db");
const morgan=require("morgan");
const rfs=require("rotating-file-stream");
const path = require("path");
const app=express();

const errorMiddleware=require("./middlewares/errorMiddleware");

const authRouter=require("./routers/authRouter");
const userRouter=require("./routers/userRouter");
const orderRouter=require("./routers/orderRouter");
const blogRouter=require("./routers/blogRouter");
const sellerRouter=require("./routers/sellerRouter")
//Database Connection
connectDB();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const accessStream=rfs.createStream('access.log',{
  interval: "1d",
  path: path.join(__dirname,"log")
});

app.use(morgan("combined",{ stream: accessStream }));

app.use('/api/auth',authRouter);
app.use('/api/users',userRouter);
app.use('/api/orders',orderRouter);
app.use('/api/blogs',blogRouter);
app.use('/api/seller',sellerRouter)
app.get("/", (req, res) => {
  return res.json({ msg: "Server running!" });
});

// Route not found
app.use((req,res,next)=>
{
  return res.status(404).json({ msg: "Route not found" });
})

app.use(errorMiddleware);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>
{
    console.log(`Server listeing on PORT:${PORT}`);
});