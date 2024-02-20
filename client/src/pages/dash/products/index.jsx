import {useState} from "react";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Card, useTheme } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
import { Avatar } from "@mui/material";
import AddProductForm from "../../../components/dashboard/AddProductForm";
import CustomProductModal from "../../../components/dashboard/CustomProductModal";

export default function Products() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  return (
    <Box
      sx={{
        fontFamily: "sans-serif",
        width: "100%",
        maxWidth: "1300px",
        padding: "15px 5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1180px",
          margin: "0 auto",
          gap: "1.5rem",
          paddingBottom: "1rem",
          " @media(max-width:479px)": { gap: "0.8rem" },
        }}
      >
        <Stack
          sx={{
            alignItems: "flex-start",
            gap: "0.5rem",
            width: "100%",
            " @media(max-width:991px)": { padding: "0px 0.5rem" },
            " @media(max-width:479px)": { padding: "0px 0.5rem" },
          }}
          spacing="0px"
        >
          {/* <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Ik0yMiAxMUg0LjQxNGw1LjI5My01LjI5M2ExIDEgMCAxIDAtMS40MTQtMS40MTRsLTcgN2ExIDEgMCAwIDAgMCAxLjQxNGw3IDdhMSAxIDAgMCAwIDEuNDE0LTEuNDE0TDQuNDE0IDEzSDIyYTEgMSAwIDAgMCAwLTJ6IiBmaWxsPSIjODU5Mjk3IiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
            width="28px"
            height="28px"
          /> */}
          <Box
            sx={{
              display: "flex",
              width: "76%",
              justifyContent: "space-between",
              marginLeft: "auto",
              alignItems: "center",
              " @media(max-width:991px)": {
                width: "100%",
                flexDirection: "column",
              },
              " @media(max-width:479px)": {
                width: "100%",
                flexDirection: "column",
              },
            }}
          ></Box>
        </Stack>
        <Box
          sx={{
            boxShadow: "0px 0px 0px 0px #0000",
            backgroundColor: theme.palette.secondary[900],
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "16px 36px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            // opacity: "0.6",
            gap: "15px",
            color: theme.palette.grey[50],
            " @media(max-width:991px)": { padding: "0.7rem 1.8rem" },
            " @media(max-width:479px)": {
              alignItems: "flex-start",
              padding: "0.5rem 0.8rem",
            },
          }}
        >
          <Typography variant="subtitle1" sx={{ fontSize: "15px" }}>
            List of the products
          </Typography>
        </Box>
        <Stack sx={{ width: "100%", alignItems: "center" }} spacing="0px">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 2fr))",
              gridGap: "24px",
              width: "100%",
              padding: "10px",
              " @media(max-width:991px)": { gridGap: "1rem" },
              " @media(max-width:479px)": { gridGap: "0.8rem" },
            }}
          >
            <div>
              <Card
                sx={{
                  maxWidth: "320px",
                  boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  borderRadius: "1rem",
                  backgroundColor: "inherit",
                  border: "1px solid rgb(105, 121, 128)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "16px",
                  width: "100%",
                  " @media(max-width:479px)": {
                    padding: "0.7rem",
                    gap: "0.7rem",
                  },
                }}
              >
                <Box sx={{ maxHeight: "240px" }}>
                  <img
                    src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/1f29c7e8-e849-4023-aaa0-21aa9bcdd084-27513630-ff00-11ed-9b95-a751e8cba36f-next.jpg"
                    style={{ borderRadius: "0.75rem", objectFit: "cover" }}
                    height="100%"
                    width="100%"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                    " @media(max-width:991px)": {
                      flexDirection: "column",
                      alignItems: "flex-start",
                    },
                    " @media(max-width:479px)": {
                      flexDirection: "column",
                      alignItems: "flex-start",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: theme.palette.secondary[900],
                      fontSize: "20px",
                      width: "55%",
                      " @media(max-width:991px)": { width: "100%" },
                      " @media(max-width:479px)": { width: "100%" },
                    }}
                  >
                    Product one
                  </Typography>
                  <Stack
                    sx={{ alignItems: "center", flexWrap: "wrap" }}
                    spacing="6px"
                    direction="row"
                    gap={1}
                  >
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTExIDJINmE0IDQgMCAwIDAtNCA0djEyYTQgNCAwIDAgMCA0IDRoMTJhNCA0IDAgMCAwIDQtNHYtNWExIDEgMCAwIDAtMiAwdjVhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDVhMSAxIDAgMCAwIDAtMnptNy41ODYgMkgxNWExIDEgMCAwIDEgMC0yaDZhMSAxIDAgMCAxIDEgMXY2YTEgMSAwIDAgMS0yIDBWNS40MTRsLTcuMjkzIDcuMjkzYTEgMSAwIDAgMS0xLjQxNC0xLjQxNHoiIGZpbGw9IiM1YzZhNzAiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                      style={{ minWidth: "18px" }}
                      width="18px"
                      height="18px"
                    />
                  </Stack>
                </Box>
                <Typography
                  variant="p"
                  sx={{ color: theme.palette.secondary[900], fontSize: "15px" }}
                >
                  Showcase your Next projects and write blog posts with this
                  powered developer portfolio template.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    rowGap: "8px",
                    " @media(max-width:479px)": { flexDirection: "column" },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.secondary[900],
                      color: theme.palette.grey[50],
                      border: "none",
                      font: "600 14px sans-serif",
                      padding: "8px 16px",
                      alignItems: "center",
                      justifyContent: "center",
                      whiteSpace: "nowrap",
                      textTransform: "none",
                    }}
                    onClick={handleOpen}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "rgb(255, 50, 50)",
                      color: theme.palette.grey[50],
                      border: "1px solid rgb(41, 171, 226)",
                      font: "600 14px sans-serif",
                      padding: "8px",
                      alignItems: "center",
                      justifyContent: "center",
                      whiteSpace: "nowrap",
                      textTransform: "none",
                    }}
                  >
                    Delete
                  </Button>
                </Box>
              </Card>
              <CustomProductModal open={open} handleClose={handleClose} type={"Update"}>
                {/* </div> */}
              </CustomProductModal>
            </div>
            <Card
              sx={{
                maxWidth: "320px",
                boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                borderRadius: "1rem",
                backgroundColor: "inherit",
                border: "1px solid rgb(105, 121, 128)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "16px",
                padding: "16px",
                width: "100%",
                " @media(max-width:479px)": {
                  padding: "0.7rem",
                  gap: "0.7rem",
                },
              }}
            >
              <Box sx={{ maxHeight: "240px" }}>
                <img
                  src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/1f29c7e8-e849-4023-aaa0-21aa9bcdd084-27513630-ff00-11ed-9b95-a751e8cba36f-next.jpg"
                  style={{ borderRadius: "0.75rem", objectFit: "cover" }}
                  height="100%"
                  width="100%"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                  " @media(max-width:991px)": {
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                  " @media(max-width:479px)": {
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: theme.palette.secondary[900],
                    fontSize: "20px",
                    width: "55%",
                    " @media(max-width:991px)": { width: "100%" },
                    " @media(max-width:479px)": { width: "100%" },
                  }}
                >
                  Product one
                </Typography>
                <Stack
                  sx={{ alignItems: "center", flexWrap: "wrap" }}
                  spacing="6px"
                  direction="row"
                  gap={1}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTExIDJINmE0IDQgMCAwIDAtNCA0djEyYTQgNCAwIDAgMCA0IDRoMTJhNCA0IDAgMCAwIDQtNHYtNWExIDEgMCAwIDAtMiAwdjVhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDVhMSAxIDAgMCAwIDAtMnptNy41ODYgMkgxNWExIDEgMCAwIDEgMC0yaDZhMSAxIDAgMCAxIDEgMXY2YTEgMSAwIDAgMS0yIDBWNS40MTRsLTcuMjkzIDcuMjkzYTEgMSAwIDAgMS0xLjQxNC0xLjQxNHoiIGZpbGw9IiM1YzZhNzAiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                    style={{ minWidth: "18px" }}
                    width="18px"
                    height="18px"
                  />
                </Stack>
              </Box>
              <Typography
                variant="p"
                sx={{ color: theme.palette.secondary[900], fontSize: "15px" }}
              >
                Showcase your Next projects and write blog posts with this
                powered developer portfolio template.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  rowGap: "8px",
                  " @media(max-width:479px)": { flexDirection: "column" },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.secondary[900],
                    color: theme.palette.grey[50],
                    border: "none",
                    font: "600 14px sans-serif",
                    padding: "8px 16px",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                    textTransform: "none",
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgb(255, 50, 50)",
                    color: theme.palette.grey[50],
                    border: "1px solid rgb(41, 171, 226)",
                    font: "600 14px sans-serif",
                    padding: "8px",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                    textTransform: "none",
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Card>
            <Card
              sx={{
                maxWidth: "320px",
                boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                borderRadius: "1rem",
                backgroundColor: "inherit",
                border: "1px solid rgb(105, 121, 128)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "16px",
                padding: "16px",
                width: "100%",
                " @media(max-width:479px)": {
                  padding: "0.7rem",
                  gap: "0.7rem",
                },
              }}
            >
              <Box sx={{ maxHeight: "240px" }}>
                <img
                  src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/1f29c7e8-e849-4023-aaa0-21aa9bcdd084-27513630-ff00-11ed-9b95-a751e8cba36f-next.jpg"
                  style={{ borderRadius: "0.75rem", objectFit: "cover" }}
                  height="100%"
                  width="100%"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                  " @media(max-width:991px)": {
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                  " @media(max-width:479px)": {
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: theme.palette.secondary[900],
                    fontSize: "20px",
                    width: "55%",
                    " @media(max-width:991px)": { width: "100%" },
                    " @media(max-width:479px)": { width: "100%" },
                  }}
                >
                  Product one
                </Typography>
                <Stack
                  sx={{ alignItems: "center", flexWrap: "wrap" }}
                  spacing="6px"
                  direction="row"
                  gap={1}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTExIDJINmE0IDQgMCAwIDAtNCA0djEyYTQgNCAwIDAgMCA0IDRoMTJhNCA0IDAgMCAwIDQtNHYtNWExIDEgMCAwIDAtMiAwdjVhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDVhMSAxIDAgMCAwIDAtMnptNy41ODYgMkgxNWExIDEgMCAwIDEgMC0yaDZhMSAxIDAgMCAxIDEgMXY2YTEgMSAwIDAgMS0yIDBWNS40MTRsLTcuMjkzIDcuMjkzYTEgMSAwIDAgMS0xLjQxNC0xLjQxNHoiIGZpbGw9IiM1YzZhNzAiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                    style={{ minWidth: "18px" }}
                    width="18px"
                    height="18px"
                  />
                </Stack>
              </Box>
              <Typography
                variant="p"
                sx={{ color: theme.palette.secondary[900], fontSize: "15px" }}
              >
                Showcase your Next projects and write blog posts with this
                powered developer portfolio template.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  rowGap: "8px",
                  " @media(max-width:479px)": { flexDirection: "column" },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.secondary[900],
                    color: theme.palette.grey[50],
                    border: "none",
                    font: "600 14px sans-serif",
                    padding: "8px 16px",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                    textTransform: "none",
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgb(255, 50, 50)",
                    color: theme.palette.grey[50],
                    border: "1px solid rgb(41, 171, 226)",
                    font: "600 14px sans-serif",
                    padding: "8px",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                    textTransform: "none",
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Card>
            <div>
              <Card
                sx={{
                  maxWidth: "320px",
                  boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  borderRadius: "1rem",
                  backgroundColor: "inherit",
                  border: "1px solid rgb(105, 121, 128)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "16px",
                  width: "100%",
                  " @media(max-width:479px)": {
                    padding: "0.7rem",
                    gap: "0.7rem",
                  },
                }}
              >
                <Box sx={{ maxHeight: "240px" }}>
                  <img
                    src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/1f29c7e8-e849-4023-aaa0-21aa9bcdd084-27513630-ff00-11ed-9b95-a751e8cba36f-next.jpg"
                    style={{ borderRadius: "0.75rem", objectFit: "cover" }}
                    height="100%"
                    width="100%"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                    " @media(max-width:991px)": {
                      flexDirection: "column",
                      alignItems: "flex-start",
                    },
                    " @media(max-width:479px)": {
                      flexDirection: "column",
                      alignItems: "flex-start",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: theme.palette.secondary[900],
                      fontSize: "20px",
                      width: "55%",
                      " @media(max-width:991px)": { width: "100%" },
                      " @media(max-width:479px)": { width: "100%" },
                    }}
                  >
                    Product one
                  </Typography>
                  <Stack
                    sx={{ alignItems: "center", flexWrap: "wrap" }}
                    spacing="6px"
                    direction="row"
                    gap={1}
                  >
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTExIDJINmE0IDQgMCAwIDAtNCA0djEyYTQgNCAwIDAgMCA0IDRoMTJhNCA0IDAgMCAwIDQtNHYtNWExIDEgMCAwIDAtMiAwdjVhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDVhMSAxIDAgMCAwIDAtMnptNy41ODYgMkgxNWExIDEgMCAwIDEgMC0yaDZhMSAxIDAgMCAxIDEgMXY2YTEgMSAwIDAgMS0yIDBWNS40MTRsLTcuMjkzIDcuMjkzYTEgMSAwIDAgMS0xLjQxNC0xLjQxNHoiIGZpbGw9IiM1YzZhNzAiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                      style={{ minWidth: "18px" }}
                      width="18px"
                      height="18px"
                    />
                  </Stack>
                </Box>
                <Typography
                  variant="p"
                  sx={{ color: theme.palette.secondary[900], fontSize: "15px" }}
                >
                  Showcase your Next projects and write blog posts with this
                  powered developer portfolio template.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    rowGap: "8px",
                    " @media(max-width:479px)": { flexDirection: "column" },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.secondary[900],
                      color: theme.palette.grey[50],
                      border: "none",
                      font: "600 14px sans-serif",
                      padding: "8px 16px",
                      alignItems: "center",
                      justifyContent: "center",
                      whiteSpace: "nowrap",
                      textTransform: "none",
                    }}
                    onClick={handleOpen}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "rgb(255, 50, 50)",
                      color: theme.palette.grey[50],
                      border: "1px solid rgb(41, 171, 226)",
                      font: "600 14px sans-serif",
                      padding: "8px",
                      alignItems: "center",
                      justifyContent: "center",
                      whiteSpace: "nowrap",
                      textTransform: "none",
                    }}
                  >
                    Delete
                  </Button>
                </Box>
              </Card>
            </div>
            <Card
              sx={{
                maxWidth: "320px",
                boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                borderRadius: "1rem",
                backgroundColor: "inherit",
                border: "1px solid rgb(105, 121, 128)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "16px",
                padding: "16px",
                width: "100%",
                " @media(max-width:479px)": {
                  padding: "0.7rem",
                  gap: "0.7rem",
                },
              }}
            >
              <Box sx={{ maxHeight: "240px" }}>
                <img
                  src="https://objectstorage.me-dubai-1.oraclecloud.com/n/axwzijd5v1vn/b/DSL_IMAGES/o/IMAGE/1f29c7e8-e849-4023-aaa0-21aa9bcdd084-27513630-ff00-11ed-9b95-a751e8cba36f-next.jpg"
                  style={{ borderRadius: "0.75rem", objectFit: "cover" }}
                  height="100%"
                  width="100%"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                  " @media(max-width:991px)": {
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                  " @media(max-width:479px)": {
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: theme.palette.secondary[900],
                    fontSize: "20px",
                    width: "55%",
                    " @media(max-width:991px)": { width: "100%" },
                    " @media(max-width:479px)": { width: "100%" },
                  }}
                >
                  Product one
                </Typography>
                <Stack
                  sx={{ alignItems: "center", flexWrap: "wrap" }}
                  spacing="6px"
                  direction="row"
                  gap={1}
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTExIDJINmE0IDQgMCAwIDAtNCA0djEyYTQgNCAwIDAgMCA0IDRoMTJhNCA0IDAgMCAwIDQtNHYtNWExIDEgMCAwIDAtMiAwdjVhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDVhMSAxIDAgMCAwIDAtMnptNy41ODYgMkgxNWExIDEgMCAwIDEgMC0yaDZhMSAxIDAgMCAxIDEgMXY2YTEgMSAwIDAgMS0yIDBWNS40MTRsLTcuMjkzIDcuMjkzYTEgMSAwIDAgMS0xLjQxNC0xLjQxNHoiIGZpbGw9IiM1YzZhNzAiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                    style={{ minWidth: "18px" }}
                    width="18px"
                    height="18px"
                  />
                </Stack>
              </Box>
              <Typography
                variant="p"
                sx={{ color: theme.palette.secondary[900], fontSize: "15px" }}
              >
                Showcase your Next projects and write blog posts with this
                powered developer portfolio template.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  rowGap: "8px",
                  " @media(max-width:479px)": { flexDirection: "column" },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.secondary[900],
                    color: theme.palette.grey[50],
                    border: "none",
                    font: "600 14px sans-serif",
                    padding: "8px 16px",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                    textTransform: "none",
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgb(255, 50, 50)",
                    color: theme.palette.grey[50],
                    border: "1px solid rgb(41, 171, 226)",
                    font: "600 14px sans-serif",
                    padding: "8px",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                    textTransform: "none",
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Card>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
