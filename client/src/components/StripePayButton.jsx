import React from 'react'
import {loadStripe} from '@stripe/stripe-js';




const products = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: '$90.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '$32.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
  ]

const makePayment = async()=>{
    const stripe = await loadStripe("pk_test_51OInpfSDY4zO64ajt9jx4McsTdNvhmzYSzaDwL02rAL0y0ykUkI6RHP6k1d94iS368Gs7fRTrYvs8pBIijAsAaaj00tQIV7Puw");
  
    const body = {
        products:products
    }
    const headers = {
        "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:5001/api/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
    });
  
    const session = await response.json();
  
    const result = stripe.redirectToCheckout({
        sessionId:session.id
    });
    
    if(result.error){
        console.log(result.error);
    }
  }



export default function StripePayButton() {
  return (
    <button className='ml-28 flex items-center justify-center rounded-md border border-transparent bg-cyan-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:cyan-700' onClick={makePayment} type='button'>
           Proceed to Pay        
    </button>
  )
}
