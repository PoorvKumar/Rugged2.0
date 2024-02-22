import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import HeaderTitle from "../components/HeaderTitle";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/api"
const Home = () => {
  const [phone, setPhone] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [upiId, setUpiID] = useState("");
  const [about, setAbout] = useState("");
  const navigate=useNavigate()
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };

  const handleUpiIDChange = (event) => {
    setUpiID(event.target.value);
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
             const res = await api.post(
               "/seller/become",
               {
                 phone,accountNumber,upiId,about
               },
               {
                 headers: {
                   Authorization: "Bearer " + localStorage.getItem("token"),
                 },
               }
      );
      console.log(res)
      if (res.status === 201) {
        toast.success("Congratulation on Becoming Seller", {
          position: "top-center",
        });
        let userData = JSON.parse(
          '{"name":"Divyank","email":"divyank@cf.com","isCustomer":true,"isSeller":false,"isBlogger":true,"isAdmin":false}'
        );
        userData.isSeller = true;
        let updatedUserData = JSON.stringify(userData);
        localStorage.setItem("user", updatedUserData);
        navigate("/dashboard/analytics");
      }
    }
    catch(e){
       console.error("Error adding product", e);
       toast.error("Error Adding Product", {
         position: "top-center",
       });
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <HeaderTitle
        title={"Seller Registration"}
        subtitle={"Explore the Selling Feature at RUGGED"}
      />
      <div className="w-1/2 ml-96">
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
            Become Seller
          </Typography>
        </Stack>
        <form onSubmit={handleSubmit}>
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
                placeholder="Phone Number"
                value={phone}
                onChange={handlePhoneChange}
              />
              <input
                className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                type="text"
                placeholder="Account Number"
                value={accountNumber}
                onChange={handleAccountNumberChange}
              />
              <input
                className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                type="text"
                placeholder="UPI ID"
                value={upiId}
                onChange={handleUpiIDChange}
              />
              <textarea
                className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500 resize-none"
                rows="3"
                placeholder="About"
                value={about}
                onChange={handleAboutChange}
              ></textarea>
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
                  Become Seller
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

      <Footer />
    </div>
  );
};

export default Home;
