import React from 'react'
import { useDispatch} from 'react-redux';
import { useAuthenticate } from "../../context/AuthContext";
import { removeFromWishlist } from '../../features/wishListReducer';
import { Button } from '@mui/material';
import WishList from './WishList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import api from '../../api/api'
import { IoCart } from 'react-icons/io5';




function WishListCard({ item,setWishListChange }) {
  const { _id, name, shortDescription, price, images, stockQuantity } = item;
  const { addToCart } = useAuthenticate();
  const handleAddToCart = (id, quan) => {
    addToCart({ productId: id, quantity: quan });
  };
    const Delete = async () => {
      await DeleteProduct();
      setWishListChange((prevCartChange) => !prevCartChange);
      setTimeout(() => {
        setWishListChange((prevCartChange) => !prevCartChange);
      }, 0);
    };
    const DeleteProduct = async () => {
      try {
        const response = await api.post("/wishlist/removeProduct", {productId:_id},{
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        // console.log(response.data)
      } catch (error) {
        console.error(`Error fetching blogs: ${error}`);
      }
    };
  console.log("quantity::",item)
  let avilable='' 
    if (stockQuantity>=0){
    avilable='Available'
    }
    else{
      avilable='Not Available'
    }
  return (
    <div>
     <div className=' grid grid-cols-5 gap-2 p-2  items-center  border-y border-gray-300 border-collapse'>
        <div className='box-border h-28 col-span-2  flex justify-start gap-9'>
        <img src={images[0].source}></img>
        <div className='grid grid-cols-1 justify-center items-center'>
    <div>{name}</div>
    <div>{shortDescription}</div>
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
              onClick={() => { handleAddToCart(_id, 1) }}
          
        >
          <IoCart />
          <span>Add to Cart</span>
        </button>
        </div>

        <div className='w-1/3'>

        <button onClick={Delete} className='flex justify-center items-center'> <DeleteOutlineOutlinedIcon/> <span>Delete</span></button>
        </div>
        </div>


    </div>
  

    

      
    </div>
  )
}

export default WishListCard;






