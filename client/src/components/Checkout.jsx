import React from 'react'
import StripePayButton from './StripePayButton';
import NewAddressCard from './NewAddressCard';


import { Fragment, useState } from 'react'
import {  Transition } from '@headlessui/react' 
import { Link } from 'react-router-dom'

import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

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

const addresses = [
  {
    name: 'Leslie Alexander',
    street:'20th Main',
    city:'Lucknow',
    pincode:'226645',
    state:'UP',
    phone:56875099832,
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    street:'5th Main',
    city:'Ayodhya',
    pincode:'226695',
    state:'UP',
    phone:5834598349,
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
   }
  // {
  //   name: 'Dries Vincent',
  //   email: 'dries.vincent@example.com',
  //   role: 'Business Relations',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   lastSeen: null,
  // },
  // {
  //   name: 'Lindsay Walton',
  //   email: 'lindsay.walton@example.com',
  //   role: 'Front-end Developer',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   lastSeen: '3h ago',
  //   lastSeenDateTime: '2023-01-23T13:23Z',
  // },
  // {
  //   name: 'Courtney Henry',
  //   email: 'courtney.henry@example.com',
  //   role: 'Designer',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   lastSeen: '3h ago',
  //   lastSeenDateTime: '2023-01-23T13:23Z',
  // },
  // {
  //   name: 'Tom Cook',
  //   email: 'tom.cook@example.com',
  //   role: 'Director of Product',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   lastSeen: null,
  // },
]


//payment integration

// const makePayment = async()=>{
//   const stripe = await loadStripe("pk_test_51OInpfSDY4zO64ajt9jx4McsTdNvhmzYSzaDwL02rAL0y0ykUkI6RHP6k1d94iS368Gs7fRTrYvs8pBIijAsAaaj00tQIV7Puw");

//   const body = {
//       products:products
//   }
//   const headers = {
//       "Content-Type":"application/json"
//   }
//   const response = await fetch("http://localhost:7000/api/create-checkout-session",{
//       method:"POST",
//       headers:headers,
//       body:JSON.stringify(body)
//   });

//   const session = await response.json();

//   const result = stripe.redirectToCheckout({
//       sessionId:session.id
//   });
  
//   if(result.error){
//       console.log(result.error);
//   }
// }

export default function Checkout() {


  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: 90.0,
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: 32.0,
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
  ]);

  const [subtotal, setSubtotal] = useState(
    cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  );

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );

    setCart(updatedCart);
    updateSubtotal(updatedCart);
  };

  const updateSubtotal = (updatedCart) => {
    const newSubtotal = updatedCart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setSubtotal(newSubtotal);
  };

 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    handleOpen(); // Close the dialog after form submission
  };



  return (
  <>
   <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

  <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">

  <div className="lg:col-span-3">

  
               

  <button onClick={handleOpen} className="mt-6 ml-4 text-blue-700">+Add New Address</button>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none "
      >
       <NewAddressCard/>
       
      </Dialog>





    {/* Existing address */}

    <div className="border-b border-gray-900/10 pb-12">
    {/* <h2 className="text-base font-bold leading-7 text-gray-900">Address</h2> */}
    <p className="text-sm leading-6 text-gray-600 font-semibold mt-4 mb-4">
      Choose From Existing Addresses
    </p>

          <ul>
    {addresses.map((address, index) => (
                  <li
                    key={index}
                    className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                  >
                    <div className="flex gap-x-4 ">
                      <input
                        // onChange={handleAddress}
                        name="address"
                        type="radio"
                        value={index}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 "
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {address.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {address.street}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {address.pincode}
                        </p>
                      </div>
                    </div>
                    <div className="sm:flex sm:flex-col sm:items-end flex flex-col">
                      <p className="text-xs sm:text-sm leading-6 text-gray-900">
                        Phone: {address.phone}
                      </p>
                      <p className="text-xs sm:text-sm leading-6 text-gray-500">
                        {address.city}
                      </p>
                    </div>
                  </li>
                ))}
          </ul>

    <div className="mt-10 space-y-10">
     
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">Payment Methods</legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">Choose One</p>
        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="payments"
              name="payments"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="payments" className="block text-sm font-medium leading-6 text-gray-900">
              Cash
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="card"
              name="payments"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="card" className="block text-sm font-medium leading-6 text-gray-900">
              Card Payment
            </label>
          </div>
          
        </div>
      </fieldset>
    </div>
    </div>
   </div>


   {/* order summary part */}

  <div className="lg:col-span-2">
      <div className="mx-auto mt-12 bg-white max-w-7xl px-2 sm:px-2 lg:px-4">
        <div className="border-t border-gray-200 px-0 py-6 sm:px-0">
          <h1 className='text-2xl my-5 font-bold tracking-tight text-gray-900'>Order Summary</h1>
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cart.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="ml-4">{`$${product.price.toFixed(2)}`}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <label
                          htmlFor={`quantity-${product.id}`}
                          className="inline mr-5 text-sm font-medium leading-6 text-gray-900 cursor-pointer"
                        >
                          Qty
                        </label>
                        <select
                          id={`quantity-${product.id}`}
                          value={product.quantity} className='w-16 cursor-pointer border-2 '
                          onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
                        >
                          {[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15].map((quantity) => (
                            <option key={quantity} value={quantity}>
                              {quantity}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 px-2 py-6 sm:px-2">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>{`$${subtotal.toFixed(2)}`}</p>
          </div>
          {/* <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> */}
          <div className="mt-6">

          {/* <button className='ml-28 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700' onClick={makePayment} type='button'> */}
          {/* <Link
              // to="/checkout/payment"
              // className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            > */}
              {/* Proceed to Pay */}
            {/* </Link> */}
          {/* </button> */}
                
               <StripePayButton/>

          
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <Link to="/">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500 mx-4"
                  // onClick={() => setOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>




</div> 
</div> 
</>
  )
}
