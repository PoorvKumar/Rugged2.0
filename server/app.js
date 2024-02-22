require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const corsOptions=require("./config/corsOptions");
const connectDB=require("./config/db");
const morgan=require("morgan");
const multer=require("multer");
const rfs=require("rotating-file-stream");
const path = require("path");
const app=express();

const errorMiddleware=require("./middlewares/errorMiddleware");
const notFoundMiddleware=require("./middlewares/notFoundMIddleware");

const authRouter=require("./routers/authRouter");
const userRouter=require("./routers/userRouter");
const orderRouter=require("./routers/orderRouter");
const blogRouter=require("./routers/blogRouter");
const sellerRouter=require("./routers/sellerRouter");
const productRouter = require("./routers/productRoutes");
const cartRouter=require("./routers/cartRouter");
const reviewRouter = require('./routers/reviewRouter');

const { authenticateToken } = require("./middlewares/authMiddleware");

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

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/uploads') // specify the folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) // specify the file naming convention
  }
});

const upload = multer({ storage: storage });

app.use('/api/auth',authRouter);
app.use('/api/users',userRouter);
app.use('/api/orders',orderRouter);
app.use('/api/blogs',blogRouter);
app.use('/api/seller',sellerRouter);
app.use('/api/products',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/reviews',reviewRouter);

app.post('/api/uploads',authenticateToken, upload.array('files', 5), (req, res) => {

  console.log(req.files);

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  const imageUrls = req.files.map(file => `${req.protocol}://${req.get('host')}/images/uploads/${file.filename}`);
  res.status(200).json({ imageUrls: imageUrls });
});

app.get("/", (req, res) => {
  return res.json({ msg: "Server running!" });
});

// Route not found
app.use(notFoundMiddleware);

app.use(errorMiddleware);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>
{
    console.log(`Server listeing on PORT:${PORT}`);
});