import React from 'react'
import Review from './Review'

const Reviews = ({productData}) => {
  let totalNumberOfRatingCounts=0;
  let average=0;
  let index=0;
  for(index=0;index<5;index++){
    totalNumberOfRatingCounts+=productData.ratingCounts[`${index+1}`];
    average+=((index+1)*productData.ratingCounts[`${index+1}`]);
  }
  average/=totalNumberOfRatingCounts;
  return (
    <div className='flex flex-col border-[2px] border-gray-200 rounded-3xl px-8 py-6 w-[80%] mb-8' >
        <h1 className='pb-2 font-bold text-cyan-900' >
            {`Customer Reviews (${totalNumberOfRatingCounts})`}
        </h1>
        {productData.reviews.map((rating,index)=>(
            <Review key={index} reviewData={rating} />
        ))}
    </div>
  )
}

export default Reviews