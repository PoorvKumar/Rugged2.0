import React from 'react'
import HeaderTitle from '../../components/HeaderTitle'
import { blogCard1 } from '../../assets'
import BlogPostCard from '../../components/blogs/BlogPostCard'
import BreadCrumb from '../../components/BreadCrumb'

const Blogs = () => {

  const bc = [
    { name: "Blogs", link: "/blogs" },
    // { name: "Default", link: "/product/Default" },
  ];

  return (
    <div className='flex flex-col'>
        <HeaderTitle title={"Blogs"} subtitle={"Where Adventures Speak: Stories, Gear, and Trails Shared"}/>
        <BreadCrumb breadcrumbs={bc} style={`pc`} />
        <div className='mt-4 px-8 md:px-32 flex flex-wrap justify-center gap-4'>
        <BlogPostCard imgSrc={blogCard1} date={"Sep 22, 2023"} commentNo={3} title={"Explore from a range of clothes"} category={"Lifestyle"}/>
        <BlogPostCard imgSrc={blogCard1} date={"Sep 22, 2023"} commentNo={3} title={"Explore from a range of clothes"} category={"Lifestyle"}/>
        <BlogPostCard imgSrc={blogCard1} date={"Sep 22, 2023"} commentNo={3} title={"Explore from a range of clothes"} category={"Lifestyle"}/>
        <BlogPostCard imgSrc={blogCard1} date={"Sep 22, 2023"} commentNo={3} title={"Explore from a range of clothes"} category={"Lifestyle"}/>
        </div>
    </div>
  )
}

export default Blogs