import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Input } from "@mui/material";
import { TextField } from "@mui/material";
import { Chip } from "@mui/material";
import { Link } from "@mui/material";
import { Box,Modal } from "@mui/material";
import {useTheme} from "@mui/material";

export default function CreateListModal({ open, handleClose, children }) {
    const theme=useTheme()
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
                placeholder="Branch Code"
              />
              <input
                className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                type="text"
                placeholder="Bank Account Number"
              />
              <input
                className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                type="text"
                placeholder="Email Address"
              />
              <textarea
                className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500 resize-none"
                rows="3"
                placeholder="About"
              ></textarea>
            </Stack>
            <Stack sx={{ alignItems: "center", width: "100%" }} spacing="15px">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "6px",
                  fontFamily: "Segoe UI,sans-serif,system-ui",
                  backgroundColor: theme.palette.secondary[900],
                  border: `1px solid ${theme.palette.secondary[800]}`,
                  color: "rgb(255,255,255)",
                  fontSize: "12px",
                  fontWeight: "500",
                  padding: "10px",
                  whiteSpace: "nowrap",
                  maxWidth: "320px",
                  width: "100%",
                  justifyContent: "center",
                  " @media(max-width:479px)": { padding: "8px" },
                  textTransform: "none",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                    " @media(max-width:479px)": { fontSize: "13px" },
                  }}
                >
                  Update Profile
                </Typography>
              </Button>
            </Stack>
          </Stack>
          <Stack
            sx={{
              fontWeight: "500",
              backgroundColor: "rgb(246, 248, 250)",
              padding: "8px 15px 8px 20px",
              alignItems: "center",
              borderRadius: "0px 0px 6px 6px",
              borderTop: "1px solid rgb(208, 215, 222)",
              " @media(max-width:479px)": { flexDirection: "column" },
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
        </Box>
      </Modal>
    );
}
