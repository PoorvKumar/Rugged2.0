import React from 'react'
import Review from './Review'

const Reviews = ({productData}) => {
  return (
    <div className='flex flex-col border-[2px] border-gray-200 rounded-3xl px-8 py-6 w-[80%] mb-8' >
        <h1 className='pb-2 font-bold text-cyan-900' >
            {`Customer Reviews (${productData.rating.noOfRatings})`}
        </h1>
        {productData.rating.RecentRatings.map((rating,index)=>(
            <Review key={index} reviewData={rating} />
        ))}
    </div>
  )
}

export default Reviews