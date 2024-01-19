require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const corsOptions=require("./config/corsOptions");
const connectDB=require("./config/db");
const app=express();


//Database Connection
connectDB();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>
{
    console.log(`Server listeing on PORT:${PORT}`);
});