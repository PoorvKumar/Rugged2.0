import React, { useState } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import HeaderTitle from "@/components/HeaderTitle";
import { useAuthenticate } from "@/context/AuthContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import api from "@/api/api";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const { user } = useAuthenticate();
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.warn("You must be logged in to create a post", {
        position: "top-center"
      });
      return;
    }

    try {
      // First, upload the image
      const imageData = new FormData();
      imageData.append("files", image);
      const uploadResponse = await api.post("/uploads", imageData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data"
        }
      });

      // Extract the image URL from the response
      // const imageUrl = uploadResponse.data.url;

      // Then, create the blog post
      const blogData = {
        title,
        content,
        imageUrl: uploadResponse.data.images[0].name // Use the extracted image URL
      };
      const blogResponse = await api.post("/blogs", blogData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (blogResponse.status === 201) {
        toast.success("Blog post created successfully", {
          position: "top-center"
        });

        setTitle("");
        setContent("");
        setImage(null);

        navigate("/blogs");
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
    { name: "Create Blog Post", link: "/blogs/create-post" }
  ];

  return (
    <>
      <HeaderTitle title={"Create a Blog Post"} subtitle={"Where Adventures Speak: Stories, Gear, and Trails Shared"} />
      <BreadCrumb breadcrumbs={bc} style={`pc`} />
      <div className="max-w-6xl mx-auto mt-6 mb-4">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              accept="image/*"
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
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                  ["link", "image", "video"],
                  ["clean"]
                ]
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
