import React, { useEffect, useState } from 'react'
import BlogPostCard from "../../../components/blogs/BlogPostCard";
import { blogCard1 } from "../../../assets";
import api from "../../../api/api";
const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchBlogPosts = async () => {
        try {
          const response = await api.get("/blogs");
          console.log(response);
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
    <>
      <div className="mt-4 px-8 md:px-32 flex flex-wrap justify-center gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <BlogPostCard
              id={post._id}
              key={post._id}
              imgSrc={blogCard1}
              date={new Date(post.createdAt).toLocaleDateString()}
              commentNo={post.comments.length}
              title={post.title}
              category={"Sports"}
            />
          ))
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </>
  );
}
export default Blogs