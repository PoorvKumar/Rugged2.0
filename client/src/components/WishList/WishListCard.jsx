import React from 'react'
import { useDispatch} from 'react-redux';

import { addToCart } from '../../features/cartReducer';
import { removeFromWishlist } from '../../features/wishListReducer';
import { Button } from '@mui/material';
import WishList from './WishList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IoCart } from 'react-icons/io5';




function WishListCard(item) {
  const {id,name,brand,desc,price,image,quantity}=item.item;
  const {productsData}=useSelector(state=>state.cart)
  let avilable=''
  
    if (quantity>=0){
    avilable='Available'
    }
    else{
      avilable='Not Available'
      
    }
    
  


  
   
    
    const dispatch=useDispatch();
    // console.log(item,item.item.name);

    
  return (
    <div>



     <div className=' grid grid-cols-5 gap-2 p-2  items-center  border-y border-gray-300 border-collapse'>
        

        <div className='box-border h-28 col-span-2  flex justify-start gap-9'>
        <img src={image}></img>
        <div className='grid grid-cols-1 justify-center items-center'>
    <div>{name}</div>
    <div>{desc}</div>
    </div>
    
    

    </div>
    <div className=' flex justify-center items-center'>
    ${price}
      
    </div>


    <div className=''>
    {
      avilable 
    }

    </div>
   
        <div className='flex gap-4'>
        <div className='w-2/3'>
        <button
        className='box bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center gap-4 p-4 rounded-xl text-white'
          onClick={() => dispatch(addToCart(item.item))}
          
        >
          <IoCart />
          <span>Add to Cart</span>
        </button>
        </div>

        <div className='w-1/3'>

        <button onClick={()=>dispatch(removeFromWishlist(item.item))} className='flex justify-center items-center'> <DeleteOutlineOutlinedIcon/> <span>Delete</span></button>
        </div>
        </div>


    </div>
  

    

      
    </div>
  )
}

export default WishListCard;






