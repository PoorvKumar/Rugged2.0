import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../api/api";
import {
  Typography,
  Button,
  Stack,
  Input,
  TextField,
  Chip,
  Box,
  Modal,
  useTheme,
} from "@mui/material";

export default function CreateListModal({ open, handleClose,id,children }) {
  const theme = useTheme();
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        const fillDetails = async () => {
            try {
                const userDetail = await api.get(
                  `/admin/userbyid?userId=${id}`,
                  {
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  }
                );
                const curuser = userDetail.data;
                if (curuser.name) {
                    setUserName(curuser.name);
                }
                else {
                     setUserName("Not Initialized");
                }
                if (curuser.email) {
                    setEmail(curuser.email);
                }
                else {
                     setEmail("Not Initialized");
                }
                if (curuser.phone) {
                    setPhone(curuser.phone);
                }
                else {
                    setPhone("Not Initialized");
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        fillDetails()
    }, [])
    
const saveChanges = async () => {
    try {
        const finalUser = await api.patch(
            "/admin/updateProfile",
            {id:id,update:{ name: userName, email: email, phoneNumber: phone }},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (finalUser.data._id) {
      toast.success("Profile Changed Successfully!", {
        position: "top-center",
      });
    }
  } catch (error) {
    toast.error("Profile Changes unsuccessfull", {
      position: "top-center",
    });
  }
};

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-review"
      aria-describedby="modal-write-a-review"
    >
      <Box
        sx={{
          borderRadius: "6px",
          fontFamily: "Segoe UI,sans-serif,system-ui",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(255,255,255)",
          border: "1px solid rgb(208, 215, 222)",
          width: "100%",
          maxWidth: "450px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "70%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
        <Stack spacing="15px">
          {/* Modal Header */}
          <Stack
            sx={{
              alignItems: "center",
              backgroundColor: "rgb(246, 248, 250)",
              justifyContent: "space-between",
              padding: "6px 20px",
              borderRadius: "6px 6px 0px 0px",
              borderBottom: "1px solid rgb(208, 215, 222)",
            }}
            spacing="0px"
            direction="row"
          >
            <Typography variant="h4" sx={{ fontWeight: "600" }}>
              Update Details
            </Typography>
            <Button
              variant="contained"
              sx={{
                border: "none",
                backgroundColor: "transparent",
                color: "white",
                textTransform: "none",
              }}
              onClick={handleClose}
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhcmlhLWhpZGRlbj0idHJ1ZSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNiIgZGF0YS12aWV3LWNvbXBvbmVudD0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi14Ij4KICAgIDxwYXRoIGQ9Ik0zLjcyIDMuNzJhLjc1Ljc1IDAgMCAxIDEuMDYgMEw4IDYuOTRsMy4yMi0zLjIyYS43NDkuNzQ5IDAgMCAxIDEuMjc1LjMyNi43NDkuNzQ5IDAgMCAxLS4yMTUuNzM0TDkuMDYgOGwzLjIyIDMuMjJhLjc0OS43NDkgMCAwIDEtLjMyNiAxLjI3NS43NDkuNzQ5IDAgMCAxLS43MzQtLjIxNUw4IDkuMDZsLTMuMjIgMy4yMmEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0Mkw2Ljk0IDggMy43MiA0Ljc4YS43NS43NSAwIDAgMSAwLTEuMDZaIiBmaWxsPSIjNjU2RDc2Ij48L3BhdGg+Cjwvc3ZnPg=="
                width="16px"
                height="16px"
              />
            </Button>
          </Stack>
          {/* Form */}
          <form
            onSubmit={saveChanges}
            className="w-full p-2 overflow-y-scroll overflow-x-scroll"
          >
            <div style={{ display: "flex", gap: "20px", width: "100%" ,height:"100%"}}>
              <Stack spacing="15px">
                <Input
                  name="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="User Name"
                />
                <Input
                  name="accountNumber"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <Input
                  name="upiId"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                />
              </Stack>
            </div>
            {/* Submit Button */}
            <Button variant="contained" type="submit">
              Update Profile
            </Button>
          </form>
          {/* Footer */}
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
          >
            <Stack sx={{ alignItems: "center" }} spacing="6px" direction="row">
              <Chip
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "rgb(255,255,255)",
                  border: "1px solid rgb(31, 136, 61)",
                  color: "rgb(31, 136, 61)",
                  fontSize: "11px",
                  fontWeight: "600",
                  padding: "1px 6px",
                }}
                label={<>Update</>}
              />
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "13px", color: "rgb(108,119,125)" }}
              >
                Change the fields you want to update and click on update
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}
