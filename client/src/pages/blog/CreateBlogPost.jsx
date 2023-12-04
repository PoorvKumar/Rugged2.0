import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import HeaderTitle from '../../components/HeaderTitle';
import BreadCrumb from '../../components/BreadCrumb';

const CreateBlogPost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleEditorChange = (content) => {
    setText(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call using Axios
      const response = await axios.post('YOUR_API_ENDPOINT', {
        title,
        image,
        author,
        content: text // Assuming the API expects the content in 'content' field
      });

      // Handle the response or any other logic here
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  const handleClear = () => {
    setText('');
  };

  const bc = [
    { name: "Blogs", link: "/blogs" },
    { name: "Create Blog Post", link: "/blogs/create-post" },
    // { name: "Default", link: "/product/Default" },
  ];

  return (
    <div className='flex flex-col '>
      <HeaderTitle title={"Create a Blog Post"} subtitle={"Where Adventures Speak: Stories, Gear, and Trails Shared"} />
      <BreadCrumb breadcrumbs={bc} style={`pc`} />
      <div className='flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit} className=' max-w-2xl w-full  p-2 md:p-4'>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={handleTitleChange}
          className='border border-gray-300 rounded p-2 mb-4 w-full'
        />
        <input
          type='text'
          placeholder='Image URL'
          value={image}
          onChange={handleImageChange}
          className='border border-gray-300 rounded p-2 mb-4 w-full'
        />
        <input
          type='text'
          placeholder='Author'
          value={author}
          onChange={handleAuthorChange}
          className='border border-gray-300 rounded p-2 mb-4 w-full'
        />
        <ReactQuill
          id='text'
          name='text'
          value={text}
          onChange={handleEditorChange}
          theme='snow'
          className='mb-4'
          style={{ width: '100%' }}
        />
        <div className='flex justify-between'>
          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-4'
          >
            Submit
          </button>
          <button
            type='button'
            onClick={handleClear}
            className='bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400'
          >
            Clear
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default CreateBlogPost;
