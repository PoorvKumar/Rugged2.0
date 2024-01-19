import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'

//data imports
import User from './models/User.js'
import Product from './models/Product.js'
import ProductStat from './models/ProductStat.js'
// import {dataUser} from './data/index.js'
import { dataUser, dataProduct, dataProductStat,dataTransaction} from './data/index.js'
import Transaction from './models/Transaction.js'

//Configuration file
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const allowedOrigins=["http://localhost:5173","https://rugged-five.vercel.app"];

const corsOptions={
    origin: allowedOrigins,
};

app.use(cors(corsOptions));

//Routes
app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.listenerCount("/sales", salesRoutes)

import stripePackage from 'stripe';

const stripe = stripePackage('sk_test_51OInpfSDY4zO64ajgkeujwhWRBCKNkVmpf4cyW4CS0yAJGHZFCAJ2X8D697eT9qP3CxR8YvfDxcMOTh9rfoWAPvm002sB4B6uU');


// checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;
    // console.log(products)

    //details of payment
    const lineItems = products.map((product) => {
        // Function to extract price excluding dollar symbol
        const extractPrice = (priceWithSymbol) => parseFloat(priceWithSymbol.replace('$', ''));
      
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: product.name,
              images: [product.imageSrc],
            },
            unit_amount: extractPrice(product.price) * 100, // Multiply by 100 for cents in the unit amount
          },
          quantity: product.quantity,
        };
      });
      
      // Display the result
      console.log(lineItems);
      

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:5173/orders",
        cancel_url:"http://localhost:5173/cart",
    });

    res.json({id:session.id})
 
})

const blogData = [
  {
    id: 1,
    title: 'Exploring the World of AI',
    imgSrc: 'https://picsum.photos/800/600', // Random image from Lorem Picsum
    date: '2023-12-05',
    commentNo: 24,
    category: 'Artificial Intelligence',
  },
  {
    id: 2,
    title: 'A Journey into Space Exploration',
    imgSrc: 'https://picsum.photos/800/600', // Random image from Lorem Picsum
    date: '2023-11-28',
    commentNo: 16,
    category: 'Space Science',
  },
  {
    id: 3,
    title: 'The Beauty of Nature Photography',
    imgSrc: 'https://picsum.photos/800/600', // Random image from Lorem Picsum
    date: '2023-11-20',
    commentNo: 32,
    category: 'Photography',
  },
  {
    id: 4,
    title: 'The Wonders of Underwater Life',
    imgSrc: 'https://picsum.photos/800/600', // Random image from Lorem Picsum
    date: '2023-10-15',
    commentNo: 19,
    category: 'Marine Biology',
  },
  {
    id: 5,
    title: 'Adventures in the Rainforest',
    imgSrc: 'https://picsum.photos/800/600', // Random image from Lorem Picsum
    date: '2023-09-30',
    commentNo: 27,
    category: 'Travel',
  },
  // Add more blog posts as needed
];


app.get("/blogs",(req,res)=>
{
  res.json(blogData);
});

//Mongoose setup
const PORT = process.env.PORT || 5001
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
}).then(() => {
  console.log("MongoDB connection established");
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)
}).catch((error) => console.log(`${error} did not connect`))
