import { Rating } from "@mui/material";
import React, { useState } from "react";
import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
const Review = ({ reviewData }) => {
  const [helpful, setHelpful] = useState(0);
  return (
    <div className="pb-5 mb-8 border-b border-solid border-[#ebebeb]">
      <div className="flex flex-row justify-between items-start">
        <div className="w-[15%] flex items-center justify-center flex-col">
          <div>{reviewData.name}</div>
          {/* <div>
            <img
              src=""
              alt="Akash Image"
              height={`100px`}
              width={`100px`}
              className="bg-slate-600"
            />
          </div> */}
          <div className="">
            <Rating
              name={`${reviewData._id}-Rating`}
              value={reviewData.rating}
              precision={0.1}
              readOnly
            />
          </div>
          <div>{String(new Date(reviewData.date)).slice(0,15)}</div>
        </div>
        <div className="w-[80%] flex flex-col justify-around">
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl font-semibold">{reviewData.reviewTitle}</h1>
            <p className="text-md font-normal">{reviewData.review}</p>
          </div>
          <div className="flex flex-row justify-start items-center">
            <div
              className="flex flex-row items-center align-middle"
              onClick={() => {
                setHelpful((currState) => {
                  if (currState === 0 || currState === 2) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
              }}
            >
              {`Helpful (${reviewData.helpful.length})`}
              <div className="pl-2">
                {(helpful === 0 || helpful===2) && <FaRegThumbsUp />}
                {helpful === 1 && <FaThumbsUp />}
              </div>
            </div>
            <div
              className="flex flex-row items-center align-middle pl-8"
              onClick={() => {
                setHelpful((currState) => {
                  if (currState === 0 || currState === 1) {
                    return 2;
                  } else {
                    return 0;
                  }
                });
              }}
            >
              {`Unhelpful (${reviewData.unhelpful.length})`}
              <div className="pl-2">
                {(helpful === 0||helpful === 1) && <FaRegThumbsDown />}
                {helpful === 2 && <FaThumbsDown />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
