import React from 'react'
import {
    Button,
    Modal,
    Rating,
    TextField,
    Box,
    Typography,
    styled,
  } from "@mui/material";
const CustomCardModal = ({open,handleClose,children}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-review"
        aria-describedby="modal-write-a-review"
      >
        <Box sx={style} className="rounded-3xl overflow-y-scroll ">
          {children}
        </Box>
      </Modal>
  )
}

export default CustomCardModal