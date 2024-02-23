import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import api from "../api/api";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    setUploading(true);
    const formData = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append("files", e.target.files[i]);
    }
    try {
      const response = await api.post("/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with your authentication token
        },
      });

      const { imageUrls } = response.data;
      console.log(imageUrls)
      setImages(imageUrls); // Assuming you have a state to store image URLs
      setUploading(false);
    } catch (error) {
      console.error("Error uploading images: ", error);
      setUploading(false);
    }
  };
  // console.log(imageUrls)

  const handleContentChange = (content) => {
    setDescription(content);
  };

  const handleSubmit = () => {
   
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-2">
          <label className="block mb-2">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-2">
          <label className="block mb-2">Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-2">
          <label className="block mb-2">Short Description</label>
          <textarea
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-2">
          <label className="block mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/3 px-2 mb-2">
          <label className="block mb-2">Length</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
        <div className="w-full md:w-1/3 px-2 mb-2">
          <label className="block mb-2">Width</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
        <div className="w-full md:w-1/3 px-2 mb-2">
          <label className="block mb-2">Height</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-2">
          <label className="block mb-2">Categories</label>
          <input
            type="text"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-2">
          <label className="block mb-2">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
      </div>
      {/* Description */}
      <label className="block mb-2">Description</label>
      <ReactQuill
        theme="snow"
        value={description}
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
       {/* Upload Images */}
       <div className="mb-4">
        <label className="block mb-2">Upload Images</label>
        <input type="file" multiple onChange={handleImageUpload} />
        <button
          disabled={uploading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
      {/* Submit Button */}
      <div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
