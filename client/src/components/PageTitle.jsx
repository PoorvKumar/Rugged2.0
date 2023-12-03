import React from 'react'

const PageTitle = ({imgUrl,title,subtitle}) => {
  return (
    <div className='relative bg-cover bg-center h-[65vh]' style={{backgroundImage: `url(${imgUrl})`}}>
        <div className='absolute flex flex-col gap-4 justify-center items-center'>
            <div className='text-white text-3xl'>{title}</div>
            <div className='text-white text-xl'>{subtitle}</div>
        </div>
    </div>
  )
}

export default PageTitle