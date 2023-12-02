import React from 'react'
import cartReducer from '../../reducers/cartReducer'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Cart from './Cart'
import EmptyCart from './EmptyCart'


const Cart2=()=> {
    const {cart}=useSelector(state=>state.cart)
    console.log(cart);
  return (
    <div className='min-h-screen'>

    {
        cart.length>0?<Cart/>:<EmptyCart/>
        
    }
      
    </div>
  )
}

export default Cart2
