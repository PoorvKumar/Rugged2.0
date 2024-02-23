import React from "react";
import CustomCarouselProductPage from "../Common/CustomCarouselProductPage";
import CustomTable from "./CustomTable";
// import { Carousel } from "@material-tailwind/react";

const Description = ({ productData }) => {
  return (
    <div className="w-full mx-28 my-8 border p-8 rounded-lg" dangerouslySetInnerHTML={{ __html: productData.description }}>
      {/* Upper Description with points
      <div className="flex flex-col border-[2px] border-gray-200 rounded-3xl px-8 py-6 w-[90%] ml-[5%] mb-8">
        <h1 className="py-2 font-bold uppercase text-cyan-800">
          {productData.detailedDescription.heading}
        </h1>
        <p className="py-2 leading-7 text-left pr-4">
          {productData.detailedDescription.description}
        </p>
        <ul className="">
          {productData.detailedDescription.bullets.map((bullet, index) => (
            <li className="font-semibold pl-2 list-disc" key={index}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      Carousels
      {productData.caro.map((indCaro, index) => (
        <CustomCarouselProductPage
          key={index}
          caroData={indCaro}
          classNm="w-[90%] ml-[5%] my-[0%]"
        />
      ))}
      Table
      <CustomTable data={productData.table} classNm='w-[90%]' classNm2='rounded-full border border-gray-300'/> */}
      {/* {productData.description} */}
    </div>
  );
};

export default Description;
