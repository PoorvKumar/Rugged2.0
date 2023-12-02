import React from 'react'

const BlogCard = ({imgSrc,date,commentNo,title}) => {
  return (
    <div className='flex flex-col gap-2'>
        <img src={imgSrc} alt="blogImg" className='h-[35vh] object-cover'/>

        <div className='flex flex-col justify-center items-center gap-1'>
            <div className='flex gap-1'>
            <p className='uppercase text-sm text-slate-500 hover:text-cyan-500 hover:underline offset-2'>{date}</p> |
            <p className='uppercase text-sm text-slate-500 hover:text-cyan-500 hover:underline offset-2'>{commentNo} comments</p>
            </div>
            <p className='text-black font-bold hover:text-cyan-500 cursor-pointer'>{title}</p>
        </div>

        <a href="/" className='uppercase flex justify-center items-center text-sm hover:text-cyan-500 cursor-pointer'>
            read more.
        </a>
    </div>
  )
}

export default BlogCard