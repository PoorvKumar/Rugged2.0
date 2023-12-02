import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
// import products from '../Products/Products';

const products=[
  {
    id: 1,
    name: "iPhone 12 Pro",
    brand: "Apple",
    desc: "6.1-inch display",
    price: 999,
    rent:true,
    quantity:1,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/z/4/-original-imagqxx2haehpjnf.jpeg?q=70",
  },
  {
    id: 2,
    name: "iPhone 12",
    brand: "Apple",
    desc: "5.4-inch mini display",
    price: 699,
    rent:false,
    quantity:1,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
  },
  {
    id: 3,
    name: "Galaxy S",
    brand: "Samsung",
    desc: "6.5-inch display",
    price: 399,
    rent:true,
    quantity:1,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/p/2/-original-imaguechhujc7ujh.jpeg?q=70",
  },
];




    const cartReducer=createSlice({
        name:'cartRducer',
        initialState:{
            
            cart: products,
            productsData:products,
            cartTotal:0,
            cartQuantity:0,
        }
        ,
        reducers:{
            addToCart: (state, action) => {
                let find = state.cart.findIndex((item) => item.id === action.payload.id);
                if (find >= 0) {
                  state.cart[find].quantity += 1;
                } else {
                  state.cart.push(action.payload);
                }
                state.cartQuantity+=1
              },
            
            removeItem: (state, action) => {
                    state.cart = state.cart.filter((item) => item.id !== action.payload.id);
                    state.cartQuantity-=1;
                  },
            increaseQuan:(state,action)=>{
              state.cartQuantity+=1
              
              
                let find = state.cart.findIndex((item) => item.id === action.payload.id);
                state.cart[find].quantity+=1
                
                
              

              

            },

            decreaseQuan:(state,action)=>{
              
              let find = state.cart.findIndex((item) => item.id === action.payload.id);
              state.cartQuantity-=1
              if (state.cart[find].quantity>1){
                state.cart[find].quantity-=1
              }

                
                else{
              
                  state.cart = state.cart.filter((item) => item.id !== action.payload.id);
                }
                
            },

        getCartTotal:(state,action)=>{
          state.cartTotal=state.cart.reduce((s,item)=>s+item.quantity*item.price,0);
         




            // let { total, quantity } = state.cartItems.reduce(
            //     (cartTotal, cartItem) => {
            //       const { price, cartQuantity } = cartItem;
            //       const itemTotal = price * cartQuantity;
        
            //       cartTotal.total += itemTotal;
            //       cartTotal.quantity += cartQuantity;
        
            //       return cartTotal;
            //     },
            //     {
            //       total: 0,
            //       quantity: 0,
            //     }
            //   );
            //   total = parseFloat(total.toFixed(2));
            //   state.cartTotalQuantity = quantity;
            //   state.cartTotalAmount = total;
            

        },
        
        clearCart:(state)=>{
state.cart=[];
          
        }
        }
    }
        
    )
 

export const {addToCart,removeItem,getCartTotal,increaseQuan,decreaseQuan,clearCart} =cartReducer.actions;

export default cartReducer.reducer;
