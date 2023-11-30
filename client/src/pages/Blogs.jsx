import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { blogCard1 } from '../assets'
import BlogPostCard from '../components/blogs/BlogPostCard'

const Blogs = () => {
  return (
    <div className='flex flex-col'>
        <HeaderTitle title={"Blogs"} subtitle={"Where Adventures Speak: Stories, Gear, and Trails Shared"}/>

        <div className='mt-4 mx-48 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        <BlogPostCard imgSrc={blogCard1} date={"Sep 22, 2023"} commentNo={3} title={"Explore from a range of clothes"} category={"Lifestyle"}/>
        <BlogPostCard imgSrc={blogCard1} date={"Sep 22, 2023"} commentNo={3} title={"Explore from a range of clothes"} category={"Lifestyle"}/>
        <BlogPostCard imgSrc={blogCard1} date={"Sep 22, 2023"} commentNo={3} title={"Explore from a range of clothes"} category={"Lifestyle"}/>
        <BlogPostCard imgSrc={blogCard1} date={"Sep 22, 2023"} commentNo={3} title={"Explore from a range of clothes"} category={"Lifestyle"}/>
        </div>
    </div>
  )
}

export default Blogs