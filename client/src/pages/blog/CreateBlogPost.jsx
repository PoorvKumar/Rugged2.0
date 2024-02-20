import React, { useState } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import HeaderTitle from "@/components/HeaderTitle";
import { useAuthenticate } from "@/context/AuthContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import api from "@/api/api";
import { redirect } from "react-router-dom";

const BlogPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { user }=useAuthenticate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    if(!user)
    {
      toast.warn("You must be logged in to create post",{
        position: "top-center"
      });
      return ;
    }

    try {
      const response = await api.post("/api/blogs", {
        title,
        content
      });
  
      // Check if the blog post was created successfully
      if (response.status === 201) {
        toast.success("Blog post created successfully", {
          position: "top-center"
        });
  
        setTitle("");
        setContent("");
  
        return redirect("/blogs");
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
      toast.error("Failed to create blog post. Please try again later", {
        position: "top-center"
      });
    }
  };

  const bc = [
    { name: "Blogs", link: "/blogs" },
    { name: "Create Blog Post", link: "/blogs/create-post" },
  ];

  return (
    <>
      <HeaderTitle title={"Create a Blog Post"} subtitle={"Where Adventures Speak: Stories, Gear, and Trails Shared"} />
      <BreadCrumb breadcrumbs={bc} style={`pc`} />
    <div className="max-w-4xl mx-auto mt-6 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
            Content
          </label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContentChange}
            className="bg-white mb-2"
            modules={{
              toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{size: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, 
                {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image', 'video'],
                ['clean']
              ],
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default BlogPage;
