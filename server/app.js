require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/db");
const morgan = require("morgan");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const rfs = require("rotating-file-stream");
const swaggerRouter = require("./config/swagger");
const path = require("path");
const app = express();

// =================== REDIS CLIENT ===================

// const { connectToRedisClient, client }=require("./config/redisClient");

const { createClient } = require("redis");
const client = createClient({
  url: process.env.REDIS_URL,
});
client.on("connect", () =>
  console.log(`Redis is connected on port ${process.env.REDIS_PORT}`)
);
client.on("error", (err) => {
  console.error("Error Connecting to Redis Client:", err);
});

// ====================================================

const errorMiddleware = require("./middlewares/errorMiddleware");
const notFoundMiddleware = require("./middlewares/notFoundMIddleware");

const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const orderRouter = require("./routers/orderRouter");
const blogRouter = require("./routers/blogRouter");
const sellerRouter = require("./routers/sellerRouter");
const productRouter = require("./routers/productRoutes");
const cartRouter = require("./routers/cartRouter");
const reviewRouter = require("./routers/reviewRouter");
const contactRouter = require("./routers/contactRouter");
const adminRouter = require("./routers/adminRouter");
const wishListRouter=require("./routers/wishlistRouter")
const { authenticateToken } = require("./middlewares/authMiddleware");

//Database Connection
connectDB();

//Redis
// connectToRedisClient();

if (process.env.NODE_ENV !== "test") {
  (async () => {
    await client.connect();
  })();

  client.set("visits", 0);

  app.get("/visits", async (req, res) => {
    try {
      const currentVisits = await client.get("visits");
      let visits = parseInt(currentVisits) || 0;
      visits++;
      await client.set("visits", visits);
      res.send("Number of visits is: " + visits);
    } catch (error) {
      console.error("Error getting or setting visit count:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  // Attach redisClient middleware
  app.use(async (req, res, next) => {
    try {
      if (!client) {
        await client.connect();
      }
      req.redisClient = client;
      next();
    } catch (err) {
      console.error("Error connecting to Redis:", err);
      next(err);
    }
  });
}

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// const accessStream = rfs.createStream("access.log", {
//   interval: "1d",
//   path: path.join(__dirname, "log"),
// });

morgan.token("id", function getId(req) {
  return req.id;
});

app.use((req, res, next) => {
  req.id = uuidv4();
  next();
});
app.use(morgan(":id :method :url :response-time"));

// app.use(
//   morgan(":method :url :status - :response-time ms", { stream: accessStream })
// );

// Multer file upload
const upload = require("./utils/multer");

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admin", adminRouter);
app.use("/api/wishlist", wishListRouter);
// File uploading route
app.post(
  "/api/uploads",
  authenticateToken,
  upload.array("files", 6),
  (req, res) => {
    console.log(req.files);

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    // const imageUrls = req.files.map(file => `${req.protocol}://${req.get('host')}/images/uploads/${file.filename}`);

    const imageUrls = req.files.map((file) => ({
      name: `${req.protocol}://${req.get("host")}/images/uploads/${
        file.filename
      }`, // When susing S3 or another service that provides a location for uploaded files
    }));

    res.status(200).json({ images: imageUrls });
  }
);

// Use Swagger documentation route
app.use("/api-docs", swaggerRouter);

app.get("/", (req, res) => {
  return res.json({ msg: "Server running!" });
});

// Route not found
app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;