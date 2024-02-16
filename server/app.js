require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const corsOptions=require("./config/corsOptions");
const connectDB=require("./config/db");
const authRouter=require("./routers/authRouter");
const path = require("path");
const app=express();

const errorMiddleware=require("./middlewares/errorMiddleware");

//Database Connection
connectDB();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use('/api/auth',authRouter);

app.get("/", (req, res) => {
    return res.json({ msg: "Server running!" });
  });
  
app.use(errorMiddleware);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>
{
    console.log(`Server listeing on PORT:${PORT}`);
});