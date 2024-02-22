import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { useState } from 'react';
import { Button } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { decreaseQuan, increaseQuan, removeItem } from '../../features/cartReducer';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
function CartItemCard({item}) {
  console.log(item);
  const product=item.product;
  const quantity=item.quantity;
  // const {id,name,price,desc,image,brand,quantity}=item.item;
  const dispatch=useDispatch();
  return (
            <div>    
                  <div className=" grid grid-cols-5 gap-2 p-2  items-center  border-y border-gray-300 border-collapse">
                    <div className="box-border h-28 col-span-2  flex justify-start gap-9">
                      <img src={product.images[0].source}></img>
                      <div className="grid grid-cols-1 justify-center items-center">
                        <div>{product.name}</div>
                        <div>{product.shortDescription}</div>
                      </div>
                    </div>
                    <div className=" flex justify-center items-center">
                    ₹{product.price}
                    </div>
                    <div className="flex justify-center items-center ">
                      <div className="box-border w-20 max-h-10  p-4 border-solid border border-gray-400 rounded flex justify-center items-center gap-3">
                        {/* <button
                          className=""
                          onClick={() => dispatch(decreaseQuan(item.item))}
                        >
                          -
                        </button> */}
                        <div className="">{quantity}</div>
                        {/* <button
                          className=""
                          onClick={() => dispatch(increaseQuan(item.item))}
                        >
                          +
                        </button> */}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className=" flex items-center justify-end">
                        ${quantity * product.price}
                      </div>
                      <div className="opacity-22 flex justify-center items-center ">
                        <button
                          className=""
                          onClick={() => dispatch(removeItem(item.item))}
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

