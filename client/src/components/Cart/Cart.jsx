import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, Grid } from "@mui/material";
import { addToCart } from "../../reducers/cartReducer";

import CartItemCard from "./CartItemCard";
import CartCheck from "./CartCheck";
import EmptyCart from "./EmptyCart";
import { clearCart } from "../../reducers/cartReducer";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  decreaseQuan,
  increaseQuan,
  removeItem,
} from "../../reducers/cartReducer";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import HeaderTitle from "../HeaderTitle";
function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const { cartQuantity } = useSelector((state) => state.cart);
  // const {cartTotal}=useSelector(state=>state.cartTotal)

  // const{cartTotal}=useSelector(state=>state.cartTotal);
  console.log(cart);

  const dispatch = useDispatch();

  return (
    <div className=" min-h-screen">
      <HeaderTitle title={"Shopping Cart"} subtitle={"View your items"}/>

      <div className="mx-16 gap-5 flex-col flex md:flex-row justify-center items-center ">
        <div className="w-9/12 max-[1000px]:w-full">
          {cart.length ? (
            <div className="p-2 grid grid-cols-5 gap-x-1">
              <div className="col-span-2 pl-2 h-10 text-lg">Product</div>
              <div className=" flex justify-center">Price</div>
              <div className=" flex justify-center">Quantity</div>
              <div className=" grid grid-cols-2 gap-6">
                <div className="flex justify-end ">Total</div>
                <div></div>
              </div>
            </div>
          ) : (
            ""
          )}

          {cart.length ? (
            <div>
              {cart.map((item) => (
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
              ))}
              <div className="p-4">
                <button
                  className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                  onClick={() => dispatch(clearCart(cart))}
                >
                  clear
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className=" 3/12 flex justify-center pt-12">
          {cart.length ? <CartCheck /> : ""}
        </div>
      </div>
    </div>
  );
}
export default Cart;
