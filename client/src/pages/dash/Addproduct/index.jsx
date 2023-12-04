import { Box, Button, TextField, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/dashboard/Header";
import React, { useState, forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Updateuser = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleFormSubmit = (values) => {};

  return (
    <Box m="20px">
      <Header title="ADD PRODUCT" subtitle="Change the value and submit" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ProductName}
                name="ProductName"
                error={!!touched.ProductName && !!errors.ProductName}
                helperText={touched.ProductName && errors.ProductName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Descrption"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Description}
                name="Description"
                error={!!touched.Description && !!errors.Description}
                helperText={touched.Description && errors.Description}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Brand"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Brand}
                name="Brand"
                error={!!touched.Brand && !!errors.Brand}
                helperText={touched.Brand && errors.Brand}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Price}
                name="Price"
                error={!!touched.Price && !!errors.Price}
                helperText={touched.Price && errors.Price}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Quantity}
                name="Quantity"
                error={!!touched.Quantity && !!errors.Quantity}
                helperText={touched.Quantity && errors.Quantity}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Discount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Discount}
                name="Discount"
                error={!!touched.Discount && !!errors.Discount}
                helperText={touched.Discount && errors.Discount}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Category}
                name="Category"
                error={!!touched.Category && !!errors.Category}
                helperText={touched.Category && errors.Category}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Imageurl"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Imageurl}
                name="Imageurl"
                error={!!touched.Imageurl && !!errors.Imageurl}
                helperText={touched.Imageurl && errors.Imageurl}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Weight"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Weight}
                name="Weight"
                error={!!touched.Weight && !!errors.Weight}
                helperText={touched.Weight && errors.Weight}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Length"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Length}
                name="Length"
                error={!!touched.Length && !!errors.Length}
                helperText={touched.Length && errors.Length}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="end"
              mt="20px"
              sx={{
                "& .MuiDialog-root": {
                  backgroundColor: theme.palette.background.alt,
                  color: theme.palette.secondary[100],
                },
              }}
            >
              <Button
                onClick={handleClickOpen}
                color="secondary"
                variant="contained"
              >
                ADD
              </Button>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Do you really want to Update
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>No</Button>
                  <Button type="submit" onClick={handleSubmit}>
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const nameRegEx = /^[A-Za-z]{4,}$/;
const checkoutSchema = yup.object().shape({
  ProductName: yup
    .string()
    .test(
      "start-with-alphabet",
      "Name should start with alphabet and have numbers at least 4 length",
      (value) => nameRegEx.test(value)
    )
    .min(3, "Name should be at least 3 characters")
    .max(20, "Name should be at most 20 characters")
    .required("Name is required"),
  Description: yup.string().required("required"),
  Brand: yup.string().required("required"),
  Price: yup
    .number()
    .typeError("Price must be a number")
    .min(0, "Weight must be a positive number")
    .required("Price is required"),
  Quantity: yup
    .number()
    .integer("Stock quantity must be a non-negative integer")
    .min(0, "Stock quantity must be non-negative")
    .required("Stock quantity is required"),
  Discount: yup
    .number()
    .typeError("Percentage must be a number")
    .min(0, "Percentage must be at least 0")
    .max(100, "Percentage must be at most 100")
    .required("Percentage is required"),
  Category: yup.string().required("required"),
  Imageurl: yup.string().required("required"),
  Weight: yup
    .number()
    .typeError("Weight must be a number")
    .min(0, "Weight must be a positive number")
    .required("Weight is required"),

  Length: yup
    .number()
    .typeError("Length must be a number")
    .min(0, "Length must be a positive number")
    .required("Length is required"),
});
const initialValues = {
  ProductName: "", // Initial value for ProductName
  Description: "", // Initial value for Description
  Brand: "", // Initial value for Brand
  Price: "", // Initial value for Price
  Quantity: "", // Initial value for Quantity
  Discount: "", // Initial value for Discount
  Category: "", // Initial value for Category
  Imageurl: "", // Initial value for Imageurl
  Weight: "", // Initial value for Weight
  Length: "", // Initial value for Length
};


export default Updateuser;
