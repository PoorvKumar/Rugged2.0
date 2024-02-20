import { Box, Button, TextField,useTheme} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/dashboard/Header";
import React,{useState,forwardRef} from "react";
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
  const handleFormSubmit = (values) => {
      
  };

  return (
    <Box m="20px">
      <Header title="UPDATE USER" subtitle="Change the value and submit" />

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
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="end"
              mt="20px"
              sx={{
                "& .MuiDialog-root": {
                  backgroundColor: theme.palette.background.alt,
                  color: theme.palette.secondary[900],
                },
              }}
            >
              <Button
                onClick={handleClickOpen}
                color="secondary"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.secondary[900],
                  color: theme.palette.grey[50],
                  "&:hover": {
                    color: theme.palette.secondary[800],
                    backgroundColor:theme.palette.secondary[900]
                  },
                }}
              >
                Update
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
                  <Button sx={{backgroundColor:theme.palette.secondary[900]}}onClick={handleClose}>No</Button>
                  <Button sx={{backgroundColor:theme.palette.secondary[900]}}type="submit" onClick={handleSubmit}>
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

const phoneRegExp = /^[0-9]+(\.[0-9]+)?$/;
const nameRegEx = /^[A-Za-z]{4,}$/;
const emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i;
const checkoutSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(
      nameRegEx,
      "Name should start with alphabet and has atleast 4 charcters"
    )
    .required("required"),
  lastName: yup
    .string()
    .matches(
      nameRegEx,
      "Name should start with alphabet and has atleast 4 charcters"
    )
    .required("required"),
  email: yup.string().matches(emailRegEx, "Invalid Email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Updateuser;
