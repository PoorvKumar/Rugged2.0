import React, { useEffect, useState } from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { FaPinterest, FaTwitter } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { AiFillYoutube } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import api from '@/api/api';
import { toast } from 'react-toastify';

const SinglePostBlog = () => {

  const { blogId } = useParams();
  // console.log(blogId);

  const navigate=useNavigate();

  const [comment, setComment] = useState('');

  // const [post,setPost]=useState(null);
  const [content,setContent]=useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`/blogs/${blogId}`);
        console.log(response.data);

        // setPost(response.data);
        setContent(response.data.content);
      }
      catch (err) {
        console.error("Error fetching blog details:", err);
        toast.error("Error while fetching blog details", {
          position: "top-center"
        });
        navigate('/blogs');
      }
    }

    fetchBlog();
  }, [blogId]);

  const post = {
    id: 1,
    title: 'Embracing the Thrill: A Dive into the World of Adventure Sports',
    imgSrc: 'https://picsum.photos/800/600', // Random image from Lorem Picsum
    date: '2023-12-05',
    commentNo: 24,
    category: 'Artificial Intelligence',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur arcu a urna eleifend, sit amet auctor purus bibendum. Vestibulum sit amet efficitur risus. Morbi ut justo vel nulla vehicula bibendum. Nullam luctus nibh nec felis auctor eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas tincidunt turpis at mi posuere, in sodales metus tristique. Ut fringilla lectus at enim suscipit placerat. Sed dignissim metus vel diam feugiat, ac lacinia mi luctus. Nam vitae bibendum nisi. Nulla eget ligula vitae nisi euismod vehicula sit amet ac odio. Phasellus tincidunt ex non lectus lobortis, vel ultricies justo tincidunt. Vivamus blandit erat eu erat fermentum, ac tempus justo suscipit.`,
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic
    console.log('Submitted Comment:', comment);
    // Clear the comment input after submission
    setComment('');
  };

  return (
    <div className='flex flex-col'>
      {
        post ? (
          <>
          <div className='bg-cover bg-center h-[35vh]' style={{ backgroundImage: `url(https://picsum.photos/800/600)` }} />
      <div className='flex mx-8 md:mx-16 lg:mx-[12vw] gap-4 p-4'>
        <div className='hidden lg:flex flex-col gap-2'>
          <p className='uppercase text-slate-500 mb-1'>share:</p>
          <RiFacebookFill className='rounded-full hover:text-purple-500 hover:border border-purple-500 bg-purple-500 hover:bg-white text-white text-4xl p-2' />
          <BiLogoInstagramAlt className='rounded-full hover:text-pink-500 hover:border border-pink-500 bg-pink-500 hover:bg-white text-white text-4xl p-2' />
          <FaTwitter className='rounded-full hover:text-blue-400 hover:border border-blue-400 bg-blue-400 hover:bg-white text-white text-4xl p-2' />
          <AiFillYoutube className='rounded-full hover:text-red-500 hover:border border-red-500 bg-red-500 hover:bg-white text-white text-4xl p-2' />
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl font-semibold'>{post.title}</h2>
          {/* Render other blog details like date, commentNo, category */}
          <p className='text-sm text-gray-500'>Date: {post.date}</p>
          <p className='text-sm text-gray-500'>Comments: {post.commentNo}</p>
          <div className='prose lg:prose-lg'>
            {/* <p>{post.content}</p> */}
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            <p>{post.content}</p>
            {/* Add more paragraphs of blog content as needed */}
          </div>
          <form onSubmit={handleCommentSubmit} className='flex flex-col gap-4'>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              className='border rounded-lg p-2 w-3/4 resize-none focus:outline-none focus:border-blue-500'
              placeholder='Add your comment...'
              rows={4}
            ></textarea>
            <button
              type='submit'
              className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mb-4'
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>
          </>
        ) : (
          <p className='flex justify-center items-center'>Loading...</p>
        )
      }
      
    </div>
  );
};

export default SinglePostBlog;
