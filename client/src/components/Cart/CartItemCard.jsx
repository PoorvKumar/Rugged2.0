import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { useState } from 'react';
import { Button } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { decreaseQuan, increaseQuan, removeItem } from '../../reducers/cartReducer';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
function CartItemCard({key,item}) {
  const {id,name,price,desc,image,brand,quantity}=item.item;
  const dispatch=useDispatch();




  // console.log(desc);



 

  // const handleQuantityChange = (index, operation) => {
    
  // };

  
  return (
    <div>
                  <div className=" grid grid-cols-5 gap-2 p-2 items-center  border-y border-gray-300 border-collapse">
                    <div className="box-border h-28 col-span-2  flex justify-start gap-9">
                      <img src={item.image}></img>
                      <div className="grid grid-cols-1 justify-center items-center">
                        <div>{item.name}</div>
                        <div>{item.desc}</div>
                      </div>
                    </div>
                    <div className=" flex justify-center items-center">
                      ${item.price}
                    </div>
                    <div className="flex justify-center items-center ">
                      <div className="box-border w-20 max-h-10  p-4 border-solid border border-gray-400 rounded flex justify-center items-center gap-3">
                        <button
                          className=""
                          onClick={() => dispatch(decreaseQuan(item))}
                        >
                          -
                        </button>
                        <div className="">{item.quantity}</div>
                        <button
                          className=""
                          onClick={() => dispatch(increaseQuan(item))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className=" flex items-center justify-end">
                        ${item.quantity * item.price}
                      </div>
                      <div className="opacity-22 flex justify-center items-center ">
                        <button
                          className=""
                          onClick={() => dispatch(removeItem(item))}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
    
  );
}

export default CartItemCard;


{/* 
{
    
      cart.length?

      

      
      
      
      

      
        
        
        
    




  // console.log(desc);



 

  // const handleQuantityChange = (index, operation) => {
    
  // };

  
  
    <div className=' w-3/4 '>










    
    <table className="w-full max-w-3/4 m-2 border-collapse border-y border-slate-400 border-spacing-4">
      <thead>
        <tr>
          <th className="px-4 py-2">Product</th>
          <th></th>
          <th className="px-4 py-2">price</th>

          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2">Total</th>
         
        </tr>
      </thead>
      
      <tbody className=''>
      {
        
        cart.map((item)=>(
        
      
     <tr className='h-35 border-y border-slate-300'>
            <td className="flex justify-center my-4">
            <img src={item.image} className='w-20 h-20 content-center'></img>
            </td>
            <td><div className='text-center'>{item.name}</div></td>
            <td className="px-4 py-2 text-center">${item.price.toFixed(2)}</td>
            <td className="px-4 py-2 text-center">

            <Button onClick={() => dispatch(decreaseQuan(item))}><RemoveSharpIcon/></Button>
            <input className='w-12 h-7   text-center' value={item.quantity}>
            
          </input>
          <Button onClick={() => dispatch(increaseQuan(item))}><AddSharpIcon/> </Button>
              
              
              
              
            </td>
            <td className="px-4 py-2 text-center"> 
            ${item.quantity*item.price}
            </td>
            <td><Button onClick={()=>dispatch(removeItem(item))}><DeleteOutlineOutlinedIcon/></Button></td>

</tr>  
      ) 
      )
      }
        
          
    
      </tbody>

      

    </table>
  

    </div>  
       
  : 

  <EmptyCart/>

      

      
    
    
}

{cart.length?


      <CartCheck/>
 
:
<div></div>

}    */}