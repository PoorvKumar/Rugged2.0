import React, { useState, useEffect } from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import { blogCard1 } from '../../assets';
import BlogPostCard from '../../components/blogs/BlogPostCard';
import BreadCrumb from '../../components/BreadCrumb';
import api from '../../api/api';

const Blogs = () => {
  const bc = [
    { name: 'Blogs', link: '/blogs' },
    // { name: 'Default', link: '/product/Default' },
  ];

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await api.get('/blogs');
        const data = response.data;
        setPosts(data);
      } catch (error) {
        console.error(`Error fetching blogs: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className='flex flex-col'>
      <HeaderTitle title={'Blogs'} subtitle={'Where Adventures Speak: Stories, Gear, and Trails Shared'} />
      <BreadCrumb breadcrumbs={bc} style={`pc`} />
      <div className='flex justify-center items-center'>
        <a href='/blogs/create-post' className='py-4 px-8 bg-cyan-400 hover:bg-cyan-500 text-white rounded-full'>
          Create Post
        </a>
      </div>
      <div className='mt-4 px-8 md:px-32 flex flex-wrap justify-center gap-4'>
        {loading ? (
          <p>Loading...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <BlogPostCard
              key={post.id} // Using unique post id as the key
              imgSrc={blogCard1}
              date={post.date}
              commentNo={post.commentNo}
              title={post.title}
              category={post.category}
            />
          ))
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
