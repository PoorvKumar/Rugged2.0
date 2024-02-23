import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { redirect } from "react-router-dom";
import ReactQuill from "react-quill";
import { useAuthenticate } from "@/context/AuthContext";
// import HeaderTitle from "../components/HeaderTitle";
// import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../api/api";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleMarkdownChange = (event) => {
    setContent(event);
  };
   const { user } = useAuthenticate();
  const navigate = useNavigate();
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
   const handleSubmit = async (e) => {
     e.preventDefault();

     if (!user) {
       toast.warn("You must be logged in to create post", {
         position: "top-center",
       });
       return;
     }

     try {
       const response = await api.post(
         "/blogs",
         {
           title,
           content,
         },
         {
           headers: {
             Authorization: `Bearer ${localStorage.getItem("token")}`,
           },
         }
       );

       // Check if the blog post was created successfully
       if (response.status === 201) {
         toast.success("Blog post created successfully", {
           position: "top-center",
         });

         setTitle("");
         setContent("");

         return redirect("/dashboard/blogs");
       }
     } catch (error) {
       console.error("Error creating blog post:", error);
       toast.error("Failed to create blog post. Please try again later", {
         position: "top-center",
       });
     }
   };
  return (
    <div className="relative flex flex-col min-h-screen m-24">
      {/* <HeaderTitle
        title={"Seller Registration"}
        subtitle={"Explore the Selling Feature at RUGGED"}
      /> */}
      <div className="w-1/2 ml-64">
        <Stack
          sx={{
            alignItems: "center",
            backgroundColor: "rgb(246, 248, 250)",
            justifyContent: "space-between",
            padding: "6px 20px",
            borderRadius: "6px 6px 0px 0px",
            borderBottom: "1px solid rgb(208, 215, 222)",
          }}
          spacing="10px"
          direction="row"
        >
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            Create Blog Posts
          </Typography>
        </Stack>
        <form onSubmit={handleSubmit} className="m-0 p-0">
          <Stack
            sx={{
              alignItems: "flex-start",
              padding: "15px 20px",
              width: "100%",
            }}
            spacing="15px"
          >
            <Stack sx={{ alignItems: "center", width: "100%" }} spacing="10px">
              <input
                className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
              />
              <ReactQuill
                theme="snow"
                value={content}
                onChange={handleMarkdownChange}
                className="bg-white mb-2"
                modules={{
                  toolbar: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    ["link", "image", "video"],
                    ["clean"],
                  ],
                }}
              />
            </Stack>
            <Stack sx={{ alignItems: "center", width: "100%" }} spacing="15px">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  borderRadius: "6px",
                  fontFamily: "Segoe UI,sans-serif,system-ui",
                  backgroundColor: "#111827",
                  border: "1px solid #111827",
                  color: "rgb(255,255,255)",
                  fontSize: "12px",
                  fontWeight: "500",
                  padding: "10px",
                  whiteSpace: "nowrap",
                  maxWidth: "320px",
                  width: "100%",
                  justifyContent: "center",
                  "@media(max-width:479px)": { padding: "8px" },
                  textTransform: "none",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                    "@media(max-width:479px)": { fontSize: "13px" },
                  }}
                >
                  Create Blog
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </form>
        <Stack
          sx={{
            fontWeight: "500",
            backgroundColor: "rgb(246, 248, 250)",
            padding: "8px 15px 8px 20px",
            alignItems: "center",
            borderRadius: "0px 0px 6px 6px",
            borderTop: "1px solid rgb(208, 215, 222)",
            "@media(max-width:479px)": { flexDirection: "column" },
          }}
          spacing="6px"
          direction="row"
        ></Stack>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default CreateBlog;
