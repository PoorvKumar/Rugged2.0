import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Modal, Rating, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { FaCloudUploadAlt } from "react-icons/fa";
import api from "@/api/api";
const Ratings = ({ dataset,productData }) => {
  let dataset2=[];
  let index=0;
  for(index=0;index<5;index++){
    dataset2[index]={"noOfRatings":dataset[index+1],"noOfStars":index+1};
  }
  const chartSetting = {
    xAxis: [
      {
        label: "Number of Reviews",
      },
    ],
    width: 400,
    height: 300,
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const valueFormatter = (value) => `${value} persons`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [reviewStars, setReviewStars] = useState(0);
  const [reviewWritten, setReviewWritten] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const postReview = async()=>{
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(reviewTitle);
    console.log(reviewWritten);
    let newReview = {
      userEmail:user.email,
      name:user.name ,
      rating: reviewStars,
      reviewTitle: reviewTitle,
      review: reviewWritten,
      date: new Date(),
      helpful: [],
      unhelpful: []
    }
    const prd = await api.post('/reviews/addReview',{
      productData,
      newReview
    },
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
    )
  };
  return (
    <div className="flex flex-col justify-start items-center">
      <BarChart
        series={[
          {
            dataKey: "noOfRatings",
            label: "no of reviews",
            color:'#79eaf9',
            valueFormatter,
          },
        ]}
        dataset={dataset2}
        yAxis={[
          { scaleType: "band", dataKey: "noOfStars", label: "no of stars" },
        ]}
        
        layout="horizontal"
        {...chartSetting}
      />
      <div
        className="text-lg bg-[rgba(155,155,155,0.8)] border-[2px] rounded-2xl px-4 py-2 cursor-pointer hover:bg-[rgba(200,200,200,1)]"
        onClick={handleOpen}
      >
        Write a Review
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-review"
        aria-describedby="modal-write-a-review"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Write your Review
          </Typography>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">
              Overall Rating of the product ?
            </Typography>
            <Rating
              name="simple-controlled"
              value={reviewStars}
              onChange={(event, newValue) => {
                setReviewStars(newValue);
              }}
              className=""
            />
          </Box>
          <TextField
            id="outlined-textarea"
            // label="Title"
            placeholder="Write Review Title here"
            value={reviewTitle}
            onChange={(event) => {
              setReviewTitle(event.target.value);
            }}
            className="w-full"
          />
          <TextField
            id="outlined-textarea"
            // label="review"
            placeholder="Write your Review details here"
            multiline
            value={reviewWritten}
            onChange={(event) => {
              setReviewWritten(event.target.value);
            }}
            className="w-full"
            rows={4}
          />
          <div className="mt-4 flex flex-row justify-start">
            {/* <div>
              <Button
                component="label"
                variant="text"
                startIcon={<FaCloudUploadAlt />}
              >
                Upload Image
                <VisuallyHiddenInput type="file" />
              </Button>
            </div> */}
            <div className="" >
              <Button variant="contained" onClick={postReview}>Post Review</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Ratings;
