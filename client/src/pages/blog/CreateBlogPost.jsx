import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlogPost = () => {

  const [text, setText] = useState('');

  const handleEditorChange = (content) => {
    setText(content);
  };

  return (
    <div className='flex flex-col mx-4 md:mx-16 lg:mx-32'>
      <ReactQuill
        id="text"
        name="text"
        value={text}
        onChange={handleEditorChange}
        theme='snow'
      // className="w-full border border-gray-300 rounded p-2"
      />
    </div>
  )
}

export default CreateBlogPost;