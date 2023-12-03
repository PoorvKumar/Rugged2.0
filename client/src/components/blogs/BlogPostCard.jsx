import React from 'react'

const BlogPostCard = ({ id, imgSrc, date, commentNo, title, category }) => {
  return (
    <div className='relative bg-cover bg-center h-[55vh] w-[50vh] mb-4 overflow-hidden' style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 transition duration-300 ease-in-out hover:opacity-80'></div>
      <div className='absolute bottom-6 left-8 flex flex-col gap-1'>
        <div className='flex gap-2'>
          <p className='text-white text-sm hover:text-cyan-500 hover:underline offset-2'>{date}</p> |
          <p className='text-white text-sm hover:text-cyan-500 hover:underline offset-2'>{commentNo} comments</p>
        </div>
        <a href={`/blogs/${id}`}>
          <h1 className='text-white text-2xl hover:text-cyan-500 font-bold'>{title}</h1>
        </a>
        <div className='flex gap-2'>
          <span className='text-white text-sm'>in</span>
          <span className='text-white text-sm hover:text-cyan-500 hover:underline offset-2'>{category}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard;