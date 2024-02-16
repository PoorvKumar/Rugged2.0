import React from 'react'
// import cartReducer from '../../reducers/cartReducer'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Cart from './Cart'
import EmptyCart from './EmptyCart'
import HeaderTitle from '../HeaderTitle'
import BreadCrumb from '../BreadCrumb'


const Cart2=()=> {
    const {cart}=useSelector(state=>state.cart)
    // console.log(cart);

    const bc = [
      { name: 'Cart', link: '/cart' },
      // { name: 'Default', link: '/product/Default' },
    ];

  return (
    <div className='min-h-screen'>
      <HeaderTitle title={"Your Cart"} subtitle={"View your products"}/>
      <BreadCrumb breadcrumbs={bc} style={`pc`} />
    {
        cart.length>0?<Cart/>:<EmptyCart/>
        
    }
      
    </div>
  )
}

export default Cart2
