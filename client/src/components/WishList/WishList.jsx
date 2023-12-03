import React from "react";
import { useSelector } from "react-redux";
import WishListCard from "./WishListCard";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HeaderTitle from "../HeaderTitle";

function WishList() {
  const { wishlist } = useSelector((state) => state.wishlist);

  return (
    <div className="min-h-screen bg-gray-100 px-12">
    <HeaderTitle title={"Your Wishlist"} subtitle={"View your favorites"}/>
      {wishlist.length ? (
        <>
          <div className="grid grid-cols-5 pt-10">
            <div className="col-span-2 pl-4 h-10 text-lg ">


              
                <h2>Product</h2>
              
            </div>


            <div className=" flex justify-center">
              <h2>Price</h2>
            </div>
            <div className=" flex justify-center">
              <h2>Stock</h2>
            </div>
          </div>
          {wishlist.map((item) => (
            <WishListCard item={item} />
          ))}
        </>
      ) : (
        <div>
          <div className="min h-screen flex justify-center items-center">
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"></img>

              {/* <h1 className="flex justify-center text-lg animate-bounce text-red-400 font-semibold">
                WishList is Empty !
              </h1> */}

              <Link to='/' className='flex justify-center pt-5'><Button variant="outlined" >Add now</Button></Link>


              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WishList;
