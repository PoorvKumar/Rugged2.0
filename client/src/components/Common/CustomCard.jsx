import {
  Button,
  Modal,
  Rating,
  TextField,
  Box,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { FcBinoculars } from "react-icons/fc";
import { BsCartPlus, BsHeart, BsHeartFill } from "react-icons/bs";
import { FaBinoculars } from "react-icons/fa";
import { MdCompare, MdCompareArrows } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import CustomCardModal from "./CustomCardModal";
import VerticalImageCarousel from "../ProductPage/VerticalImageCarousel";
import InitialProductInfo from "../ProductPage/InitialProductInfo";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../features/wishListReducer";
import { addToCart } from "../../features/cartReducer";
const CustomCard = ({ productData }) => {
  const valueFormatter = (value) => `${value} persons`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch=useDispatch();

  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [hoverState, setHoverState] = useState(false);
  const [hoverCompare, setHoverCompare] = useState(false);
  const [majorHoverState, setMajorHoverState] = useState(false);
  const [isAddedToCompareList, setIsAddedToCompareList] = useState(false);
  const categoriesList = productData.categories.join(", ");

  return (
    <div className="w-60 mt-10 mx-4 rounded-3xl relative hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <div className="flex flex-col justify-start items-center">
        {/* Upper Div */}
        <div
          className={`flex flex-col justify-evenly`}
          onMouseEnter={() => {
            setMajorHoverState(true);
          }}
          onMouseLeave={() => {
            setMajorHoverState(false);
          }}
        >
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col justify-start">
              {productData.tags.map(
                (tag, index) =>
                  index < 2 && (
                    <div
                      key={index}
                      className="rounded-full w-fit bg-cyan-500 p-1 px-2 text-xs font-semibold text-white ml-2 mt-2 z-20"
                    >
                      {tag}
                    </div>
                  )
              )}
            </div>
            {majorHoverState && (
              <div className="flex flex-col justify-start items-end">
                <div
                  onClick={() => {
                    setIsAddedToWishlist((curr) => !curr);
                    dispatch(addToWishlist(productData));
                  }}
                  onMouseEnter={() => {
                    setHoverState(true);
                  }}
                  onMouseLeave={() => {
                    setHoverState(false);
                  }}
                  className={`${
                    hoverState
                      ? "bg-[#fcb941] rounded-full z-20 text-white mt-4 mr-4 p-2"
                      : "rounded-full mt-4 mr-4"
                  } h-full flex flex-row align-middle items-center justify-center`}
                >
                  <div
                    className={`font-medium bg-[#fcb941] text-[10px] pr-2 ${
                      hoverState ? "opacity-100 z-20" : "opacity-0 z-0"
                    } transition-opacity duration-[300ms] ease-out `}
                  >
                    {isAddedToWishlist
                      ? "Remove from Wishlist"
                      : "Add to Wishlist"}
                  </div>

                  {isAddedToWishlist === true ? (
                    <div
                      className={`text-[1rem] ${
                        !hoverState
                          ? "bg-[#fcb941] rounded-full z-20 text-white p-2"
                          : ""
                      }`}
                    >
                      <BsHeartFill />
                    </div>
                  ) : (
                    <div
                      className={`text-[1rem] ${
                        !hoverState
                          ? "bg-[#fcb941] rounded-full z-20 text-white p-2"
                          : ""
                      }`}
                    >
                      <BsHeart />
                    </div>
                  )}
                </div>
                <div
                  onClick={() => {
                    setIsAddedToCompareList((curr) => !curr);
                  }}
                  onMouseEnter={() => {
                    setHoverCompare(true);
                  }}
                  onMouseLeave={() => {
                    setHoverCompare(false);
                  }}
                  className={`${
                    hoverCompare
                      ? "bg-[#fcb941] rounded-full z-20 text-white mt-4 mr-4 p-2"
                      : "rounded-full mt-4 mr-4"
                  } ${isAddedToCompareList?"bg-cyan-600":"bg-[#fcb941]"} h-full flex flex-row align-middle items-center justify-center`}
                >
                  <div
                    className={`font-medium text-[10px] pr-2 ${
                      hoverCompare ? "opacity-100 z-20" : "opacity-0 z-0"
                    } transition-opacity duration-[300ms] ease-out`}
                  >
                    {isAddedToCompareList
                      ? "Don't compare"
                      : "Add for Comparison"}
                  </div>

                  {isAddedToCompareList ? (
                    <div
                      className={`text-[1rem] ${
                        !hoverCompare
                          ? "bg-cyan-600 rounded-full z-20 text-white p-2"
                          : ""
                      }`}
                    >
                      <MdCompare className="bg-cyan-600 rounded-full"/>
                    </div>
                  ) : (
                    <div
                      className={`text-[1rem] ${
                        !hoverCompare
                          ? "bg-[#fcb941] rounded-full z-20 text-white p-2"
                          : ""
                      }`}
                    >
                      <MdCompare />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {!majorHoverState && (
            <img
              src="https://d-themes.com/react_asset_api/molla/uploads/product_5_1_300x300_3dbc9b1611.jpg"
              alt="image1"
              className={`w-full h-full mt-[-44%] rounded-3xl object-cover`}
            />
          )}
          {majorHoverState && (
            <img
              src="https://d-themes.com/react_asset_api/molla/uploads/product_5_2_300x300_100e169228.jpg"
              alt="image1"
              className="w-full h-full mt-[-44%] rounded-3xl object-cover "
            />
          )}
          <div
            className={`${
              majorHoverState ? "opacity-100 z-30" : "opacity-0 z-0"
            } transition-opacity duration-[300ms] ease-out flex flex-row justify-around items-center align-middle px-8 bg-[rgba(0,0,0,1)] mt-[-20%]`}
          >
            <div className="text-white text-2xl p-2 hover:bg-[rgba(255,255,255,0.25)] rounded-full" onClick={()=>dispatch(addToCart(productData))}>
              {" "}
              <BsCartPlus />{" "}
            </div>
            <div className="text-white text-2xl p-2">|</div>
            <div
              className="text-white text-2xl p-2 hover:bg-[rgba(255,255,255,0.25)] rounded-full"
              onClick={handleOpen}
            >
              {" "}
              <FaBinoculars />{" "}
            </div>
          </div>
        </div>
        {/* Lower Div */}
        <div className="flex flex-col px-4">
          <div className="text-sm text-gray-400">
            {categoriesList.slice(0, 25)}...
          </div>
          <a href={`/products/${productData.id}`}>
          <div className="text-base font-medium text-[rgba(0,0,0,0.9)]">
            {productData.name}
          </div>
          </a>
          <div>
            <span className="text-gray-600 text-sm line-through">₹800.00</span>
            <span className="text-cyan-600 text-2xl font-medium">₹ 500.00</span>
          </div>
          <div>
            <Rating
              name={`${productData._id}-Rating`}
              value={productData.rating.avgValue}
              precision={0.1}
              readOnly
            />
          </div>
        </div>
      </div>
      <CustomCardModal open={open} handleClose={handleClose}>
          <div className="lg:grid grid-cols-2 gap-4 px-10 py-4">
            <div className="col-span-1">
              <VerticalImageCarousel
                data={productData.diaplayUrl}
                txtList={productData.tags}
                isModal={true}
              />
            </div>
            <div className="col-span-1 mt-4">
              <InitialProductInfo productData={productData}/>
            </div>
          </div>
        {/* </div> */}
      </CustomCardModal>
    </div>
  );
};

export default CustomCard;
