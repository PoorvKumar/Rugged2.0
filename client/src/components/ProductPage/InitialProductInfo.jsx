import React, { useEffect, useState } from "react";
import { Rating, TextField } from "@mui/material";
import { Button, Modal } from "@mui/material";
import { BsCartPlus, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { ImHappy } from "react-icons/im";
import { MdCompare } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineFacebook,
  AiOutlineLink,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../features/wishListReducer";
import { addToCart } from "../../features/cartReducer";
import { useAuthenticate } from "@/context/AuthContext";

const InitialProductInfo = ({ productData, id }) => {
  const dispatch=useDispatch();
  const [buyInfo, setBuyInfo] = useState({
    quantity: 1,
  });
  const [inCart, setInCart] = useState(false);
  const [isComparison, setIsComparison] = useState(false);
  const handleChangeInput = (event) => {
    if (event.target.value=="") {
      setBuyInfo((prevInfo) => {
        return { ...prevInfo, quantity: 1 };
      });
    }else if (Number(buyInfo.quantity) <= 1) {
      setBuyInfo((prevInfo) => {
        return { ...prevInfo, quantity: 1 };
      });
    } else {
      setBuyInfo((prevState) => {
        console.log({ ...prevState, [event.target.name]: event.target.value });
        return { ...prevState, [event.target.name]: event.target.value };
      });
    }
  };
  const AddToCompare = () => {
    // use redux and redux-toolkit
    setIsComparison((prevState) => !prevState);
  };
  const shareLink = () => {
    //to do share link
  };
  const colours = [
    {
      c1: "bg-[#2563eb]",
      c2: "dark:bg-[#dbeafe]",
      c3: "dark:text-[#172554]",
    },
    {
      c1: "bg-[#fb8c00]",
      c2: "dark:bg-[#ffe0b2]",
      c3: "dark:text-[#e65100]",
    },
    {
      c1: "bg-[#43a047]",
      c2: "dark:bg-[#c8e6c9]",
      c3: "dark:text-[#1b5e20]",
    },
    {
      c1: "bg-[#e53935]",
      c2: "dark:bg-[#ffcdd2]",
      c3: "dark:text-[#b71c1c]",
    },
    {
      c1: "bg-[#fdd835]",
      c2: "dark:bg-[#fff9c4]",
      c3: "dark:text-[#f57f17]",
    },
    {
      c1: "bg-[#8e24aa]",
      c2: "dark:bg-[#e1bee7]",
      c3: "dark:text-[#4a148c]",
    },
    {
      c1: "bg-[#d81b60]",
      c2: "dark:bg-[#f8bbd0]",
      c3: "dark:text-[#880e4f]",
    },
  ];
  let totalNumberOfRatingCounts=0;
  let average=0;
  let index=0;
  console.log(productData.ratingCounts);
  for(index=0;index<5;index++){
    totalNumberOfRatingCounts+=productData.ratingCounts[`${index+1}`];
    average+=((index+1)*productData.ratingCounts[`${index+1}`]);
  }
  average/=totalNumberOfRatingCounts;
  console.log(average);
  console.log(totalNumberOfRatingCounts);

  const { addToCart }=useAuthenticate();

  const handleAddToCart=()=>
  {
    const cartData={
      productId: id,
      quantity: 1
    };

    addToCart(cartData);
  }

  return (
    <div className="block mb-8 text-[#666] z-[100]">
      {/* Product Name */}
      <div className="flex flex-row justify-between max-md:mt-8">
        <h1 className="font-medium text-[1.6rem] text-[#333] tracking-tight leading-5 mb-[1.2rem] mt-[-0.5rem] pr-4">
          {productData.name}
        </h1>
        <div className="flex flex-row gap-4 ">
          <div
            className="text-2xl mt-[-0.75rem] text-cyan-400 cursor-pointer rounded-md"
            onClick={() => {
              AddToCompare();
            }}
          >
            {isComparison ? (
              <div className="bg-cyan-950 rounded-md" > 
                <MdCompare />
              </div>
            ) : (
              <MdCompare />
            )}
          </div>
          <div
            onClick={() => {
              setInCart((previnfo) => !previnfo);
              dispatch(addToWishlist(productData));
            }}
            className="text-red-500 text-2xl mt-[-0.75rem] cursor-pointer"
          >
            {inCart ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
          <div
            className="text-2xl mt-[-0.75rem] text-grey-400 cursor-pointer"
            onClick={shareLink()}
          >
            <FaShareSquare />
          </div>
        </div>
      </div>
      {/* ratings */}
      <div className="flex items-center text-[1.3rem] leading-4 whitespace-nowrap mb-[1.3rem]">
        <div className="inline-flex flex-row text-[1.4rem] tracking-widest relative text-[#ccc]">
          <Rating
            name={`${productData._id}-Rating`}
            value={average}
            precision={0.1}
            readOnly
          />
          <div className="mt-1 ml-5 text-sm">
            {average} Stars
          </div>
          <div className="bg-gray-700 py-3 px-[1px] ml-2"></div>
          <div className="mt-1 ml-5 text-sm">
            {totalNumberOfRatingCounts} Reviews
          </div>
        </div>
      </div>
      {/* Price */}
      <div className="inline-flex flex-row">
        <div className="text-xl text-gray-600 dark:text-gray-200 flex items-center flex-wrap mb-[1.3rem] leading-5 line-through">
          ₹ {productData.price}
        </div>
        <div className="pl-5 text-4xl text-cyan-600 dark:text-cyan-300 flex items-center flex-wrap mb-[1.3rem] leading-5">
          ₹ {(productData.price * (1 - productData.discount / 100)).toFixed(2)}
        </div>
      </div>
      {/* Description */}
      <div className="mb-[1.6rem]">{productData.shortDescription}</div>
      {/* Quantity */}
      <div className="flex items-center">
        <div className="text-[1rem]">Qty:</div>
        <div className="mx-1 ml-8 px-1 flex flex-row border-gray-100 border-[2px] w-[150px] rounded-[0.25rem] items-center">
          <div
            onClick={() => {
              setBuyInfo((prevInfo) => ({
                ...prevInfo,
                quantity: Number(prevInfo.quantity) + 1,
              }));
            }}
            className="w-[10%] text-[1.5rem] pr-4 hover:cursor-pointer"
          >
            +
          </div>
          <input
            type="text"
            name="quantity"
            id="qty"
            value={buyInfo.quantity}
            onChange={handleChangeInput}
            className="p-2 w-[80%] text-center hover:border-cyan-300 "
          />
          <div
            onClick={() => {
              setBuyInfo((prevInfo) => {
                if (prevInfo.quantity > 0) {
                  return {
                    ...prevInfo,
                    quantity: prevInfo.quantity - 1,
                  };
                }
                return prevInfo;
              });
            }}
            className="w-[10%] text-[1.5rem] pl-1 hover:cursor-pointer"
          >
            -
          </div>
        </div>
      </div>
      {/* Buy Now , Add to Cart, Get on Rent */}
      <div className="flex flex-row flex-wrap mb-[2rem] ">
        <a
          href="#"
          className="hover:bg-cyan-600 hover:text-white text-cyan-600 border-[2px] border-cyan-600 px-4 py-2 w-fit m-2 ml-0"
        >
          <span className="text-[1rem] uppercase transition-all flex flex-row align-middle items-center">
            <div className="mr-3 pt-[0.5px]">
              <ImHappy />
            </div>
            Buy Now
          </span>
        </a>
        <a
          href="#"
          className="hover:text-cyan-300 hover:underline text-gray-700 border-[2px] border-transparent px-4 py-2 w-fit m-2 ml-0"
        >
          <span className="text-[1rem] uppercase transition-all flex flex-row align-middle items-center font-bold" onClick={handleAddToCart}>
            <div className="mr-3 pt-[0.5px] text-2xl">
              <BsCartPlus />
            </div>
            Add to Cart
          </span>
        </a>
        {/* <a
          href="#"
          className="hover:bg-purple-700 hover:text-white text-purple-700 border-[2px] border-purple-700 px-4 py-2 w-fit m-2 ml-0"
        >
          <span className="text-[1rem] uppercase transition-all flex flex-row align-middle items-center">
            <div className="mr-3 pt-[0.5px]">
              <MdCompare />
            </div>
            Compare
          </span>
        </a> */}
        {/* <a
          href="#"
          className="hover:bg-blue-500 hover:text-white text-blue-500 border-[2px] border-blue-500 px-4 py-2 w-fit m-2 ml-0"
        >
          <span className="text-[1rem] uppercase transition-all flex flex-row align-middle items-center">
            <div className="mr-3 pt-[0.5px]">
              <GiTwoCoins />
            </div>
            Rent It
          </span>
        </a> */}
      </div>
      {/* Categories and Share */}
      <div className="align-middle">
        <span className="font-semibold text-lg mt-4">Categories: </span>
        {productData.categories.map((cat, i) => {
          const mod_i = i % 7;
          return (
            <span
              key={cat}
              className={`mx-1 ${colours[mod_i].c1} ${colours[mod_i].c3} ${colours[mod_i].c3} text-white rounded-full py-1 px-3`}
            >
              {cat}
            </span>
          );
        })}
      </div>
      <div className=" flex flex-row flex-wrap align-middle">
        <span className="font-semibold text-lg mt-4">Share: </span>
        <a className="rounded-full mt-5 mx-2 text-lg">
          <AiOutlineFacebook />
        </a>
        <a className="rounded-full mt-5 mx-2 text-lg">
          <BsInstagram />
        </a>
        <a className="rounded-full mt-5 mx-2 text-lg">
          <BsWhatsapp />
        </a>
        <a className="rounded-full mt-5 mx-2 text-lg">
          <AiOutlineLink />
        </a>
      </div>
    </div>
  );
};

export default InitialProductInfo;
