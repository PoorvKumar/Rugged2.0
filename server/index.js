import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import stripe from "stripe";
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
app.use(cors())
//Routes
app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.listenerCount("/sales", salesRoutes)

const stripe = stripe('sk_test_51OInpfSDY4zO64ajgkeujwhWRBCKNkVmpf4cyW4CS0yAJGHZFCAJ2X8D697eT9qP3CxR8YvfDxcMOTh9rfoWAPvm002sB4B6uU');

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

//Mongoose setup
const PORT = process.env.PORT || 9000
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)
}).catch((error) => console.log(`${error} did not connect`))
