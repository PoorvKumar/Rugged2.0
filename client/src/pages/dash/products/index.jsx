import {useState,useEffect} from "react";
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
import api from '../../../api/api'
import { useSelector,useDispatch } from "react-redux";
import CustomProductUpdateModal from "../../../components/dashboard/CustomProductUpdateModal";
import { addToCart } from "../../../features/cartReducer";
import { toast } from "react-toastify";

export default function Products() {
  const theme = useTheme();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await api.get("/seller/products",{
           headers: {
            Authorization:"Bearer "+localStorage.getItem("token")
           },
         });
          console.log(response);
          const data = response.data;
          setProducts(data);
        } catch (error) {
          console.error(`Error fetching blogs: ${error}`);
        } finally {
          setLoading(false)
        }
      };
      fetchProducts();
    }, [products]);
  const handleDelete = async (id,sellid) => {
    const seller_id=sellid
    try {
      const response = await api.patch(
        "/seller/deleteProduct",
        { id ,seller_id},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      toast.success("Product Deleted Successfully!", {
        position: "top-center",
      });
    } catch (err) {
      toast.error("Product Deletion unsuccessfull", {
        position: "top-center",
      });
      console.error("Deletion of product failed", err);
    }
  };
  const [openUserId, setOpenUserId] = useState(null);
  const handleOpenModal = (userId) => {
    setOpenUserId(userId); // Set the ID of the user for which the modal should be open
  };
  const handleCloseModal = () => {
    setOpenUserId(null); // Reset the modal state when closing the modal
  };
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
            {loading ? (
              <p>Loading...</p>
            ) : products.length > 0 ? (
              products.map((product, index) => (
                <div key={index}>
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
                      "@media(max-width:479px)": {
                        padding: "0.7rem",
                        gap: "0.7rem",
                      },
                    }}
                  >
                    <Box sx={{ maxHeight: "240px" }}>
                      <img
                        src={product.images[0].source}
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
                        "@media(max-width:991px)": {
                          flexDirection: "column",
                          alignItems: "flex-start",
                        },
                        "@media(max-width:479px)": {
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
                          "@media(max-width:991px)": { width: "100%" },
                          "@media(max-width:479px)": { width: "100%" },
                        }}
                      >
                        {product.name}
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
                      sx={{
                        color: theme.palette.secondary[900],
                        fontSize: "15px",
                      }}
                    >
                      {product.shortDescription}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        rowGap: "8px",
                        "@media(max-width:479px)": { flexDirection: "column" },
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
                        onClick={() => handleOpenModal(product._id)}
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
                        onClick={() => handleDelete(product._id,product.seller)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Card>
                  {openUserId === product._id && ( // Render the modal only if openUserId matches the current user ID
                    <CustomProductUpdateModal
                      open={true} // Always open the modal when openUserId matches
                      handleClose={handleCloseModal}
                      productDetails={product}
                    />
                  )}
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
