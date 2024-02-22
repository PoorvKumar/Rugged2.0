import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, Grid } from "@mui/material";
import { addToCart } from "../../features/cartReducer";

import CartItemCard from "./CartItemCard";
import CartCheck from "./CartCheck";
import EmptyCart from "./EmptyCart";
import { clearCart } from "../../features/cartReducer";
import {
  decreaseQuan,
  increaseQuan,
  removeItem,
} from "../../features/cartReducer";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import HeaderTitle from "../HeaderTitle";
import api from "@/api/api";
function Cart({ cart }) {
  // const { cart } = useSelector((state) => state.cart);
  // const { cartQuantity } = useSelector((state) => state.cart);
  // console.log(cart);

  // const dispatch = useDispatch();

  return (
    <div className=" min-h-screen">
      <div className="mx-16 gap-5 max-[1000px]:flex-col flex  justify-center items-center ">
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
              {cart.map((item, _id) => (
                <CartItemCard key={_id} item={item} />
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
        <div className=" 3/12 flex pb-5 ">
          {cart.length ? <CartCheck /> : ""}
        </div>
      </div>
    </div>
  );
}
export default Cart;
