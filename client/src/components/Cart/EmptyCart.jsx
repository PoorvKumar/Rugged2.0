import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";



function EmptyCart() {


  return (


    <div className=' min-w-full min-h-screen flex items-center justify-center'>

    {


    

   
   

    
    <div className=''>


    <img src='https://visualpharm.com/assets/482/Shopping%20Cart-595b40b65ba036ed117d241c.svg' className='w-40 h-40'></img>
    {/* <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                Subscribed Successfully !
              </motion.p> */}

    <p className='flex justify-center animate-bounce text-red-400 font-semibold'> Cart is Empty !</p>

    {/* <Link to='/' className='flex justify-center'><Button variant="outlined" >Add now</Button></Link> */}



    </div>
    
   
    }
    </div>
    
   
  )
}

export default EmptyCart;
