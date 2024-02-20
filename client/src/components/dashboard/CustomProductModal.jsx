import React,{useState} from "react";
import {
  Button,
  Modal,
  Rating,
  TextField,
  Box,
  Typography,
  styled,
  Stack,
  useTheme,
  Chip
} from "@mui/material";
import ReactQuill from "react-quill";
const CustomProductModal = ({ open, handleClose, children,type }) => {
  const theme = useTheme()
  const [images, setImages] = useState([{name:""}]);
  const handleAddImage = () => {
    setImages([...images, { name: "" }]);
  }
  const handleImageChange = (idx) => (e) => {
    const newImage = [
      ...images.slice(0, idx),
      { ...images[idx], name: e.target.value },
      ...images.slice(idx + 1)
    ];
    setImages(newImage);
  };
  const handleRemoveImage = (idx) => {
    setImages(images.filter((s, sidx) => idx !== sidx));
  }
  const [categories, setCategories] = useState([{ name: "" }]);
  const handleAddCategory = () => {
    setCategories([...categories, { name: "" }]);
  };
  const handleCategoryChange = (idx) => (e) => {
    const newCategory = [
      ...categories.slice(0, idx),
      { ...categories[idx], name: e.target.value },
      ...categories.slice(idx + 1),
    ];
    setCategories(newCategory);
  };
  const handleRemoveCategory= (idx) => {
    setCategories(categories.filter((s, sidx) => idx !== sidx));
  };
  const [colors, setColors] = useState([{ name: "" }]);
  const handleAddColor = () => {
    setColors([...colors, { name: "" }]);
  };
  const handleColorChange = (idx) => (e) => {
    const newColor = [
      ...colors.slice(0, idx),
      { ...colors[idx], name: e.target.value },
      ...colors.slice(idx + 1),
    ];
    setColors(newColor);
  };
  const handleRemoveColor = (idx) => {
    setColors(colors.filter((s, sidx) => idx !== sidx));
  };
  // 
  const [productName, setProductName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [description, setDescription] = useState("");
  //
  // 
  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleShortDescriptionChange = (e) => {
    setShortDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleStockQuantityChange = (e) => {
    setStockQuantity(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };
   const handleLengthChange = (e) => {
     setLength(e.target.value);
   };

   const handleWidthChange = (e) => {
     setWidth(e.target.value);
   };

   const handleHeightChange = (e) => {
     setHeight(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e)
  }

   const handleSubmit = () => {
     // Handle form submission logic here
     console.log("Form submitted!");
  };
  // 
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-review"
      aria-describedby="modal-write-a-review"
    >
      <Box
        className="overflow-y-scroll overflow-x-scroll"
        sx={{
          borderRadius: "6px",
          fontFamily: "Segoe UI,sans-serif,system-ui",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(255,255,255)",
          border: "1px solid rgb(208, 215, 222)",
          width: "100%",
          maxWidth: "600px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "90%",
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
            {type} Details
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
            padding: "15px 15px",
            width: "100%",
          }}
          spacing="15px"
        >
          <form className="w-full p-2 overflow-y-scroll overflow-x-scroll">
            <div style={{ display: "flex", gap: "20px", width: "100%" }}>
              <Stack
                sx={{ alignItems: "center", width: "100%" }}
                spacing="20px"
              >
                <input
                  className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Product Name"
                  onChange={handleProductNameChange}
                  value={productName}
                />
                <input
                  className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Short Description"
                  onChange={handleShortDescriptionChange}
                  value={shortDescription}
                />
                <input
                  className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Price"
                  onChange={handlePriceChange}
                  value={price}
                />
              </Stack>
              <Stack
                sx={{ alignItems: "center", width: "100%" }}
                spacing="20px"
              >
                <input
                  className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Stock Quantity"
                  onChange={handleStockQuantityChange}
                  value={stockQuantity}
                />
                <input
                  className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Discount"
                  onChange={handleDiscountChange}
                  value={discount}
                />
                <input
                  className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Brand"
                  onChange={handleBrandChange}
                  value={brand}
                />
              </Stack>
            </div>
            <Stack
              sx={{
                padding: "15px 15px",
                width: "100%",
              }}
            >
              <ReactQuill
                id="text"
                name="text"
                theme="snow"
                value={description}
                onChange={handleDescriptionChange}
                // className="mb-4"
                // style={{ width: "100%" }}
                className="rounded-lg border border-gray-300 bg-gray-100 text-gray-700 text-sm w-full outline-none focus:border-blue-500 h-1/2"
              />
            </Stack>
            <Stack
              sx={{
                padding: "15px 15px",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                <input
                  className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Length"
                  onChange={handleLengthChange}
                  value={length}
                />
                <input
                  className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Width"
                  onChange={handleWidthChange}
                  value={width}
                />
                <input
                  className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Height"
                  onChange={handleHeightChange}
                  value={height}
                />
              </div>
            </Stack>
            <Stack
              sx={{
                padding: "15px 15px",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", gap: "20px", width: "100%" }}>
                {images.map((image, idx) => (
                  <div
                    key={idx}
                    className="flex flex-row justify-between items-center"
                  >
                    <div className="flex-1 mr-2 relative min-w-[200px]">
                      <input
                        className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                        type="text"
                        placeholder="Images"
                        onChange={handleImageChange(idx)}
                        value={image.name}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(idx)}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white px-3 py-0.5 text-2xl rounded-sm"
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  className="bg-green-500 text-white px-2.5 text-2xl rounded-sm"
                  type="button"
                  onClick={handleAddImage}
                >
                  +
                </button>
              </div>
            </Stack>
            <Stack
              sx={{
                padding: "15px 15px",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                {categories.map((category, idx) => (
                  <div
                    key={idx}
                    className="flex flex-row justify-between items-center"
                  >
                    <div className="flex-1 mr-2 relative min-w-[200px]">
                      <input
                        className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                        type="text"
                        placeholder="Category"
                        onChange={handleCategoryChange(idx)}
                        value={category.name}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveCategory(idx)}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white px-3 py-0.5 text-2xl rounded-sm"
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  className="bg-green-500 text-white px-2.5 text-2xl rounded-sm"
                  type="button"
                  onClick={handleAddCategory}
                >
                  +
                </button>
              </div>
            </Stack>
            <Stack
              sx={{
                padding: "15px 15px",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                {colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="flex flex-row justify-between items-center"
                  >
                    <div className="flex-1 mr-2 relative min-w-[200px]">
                      <input
                        className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 text-sm w-full outline-none focus:border-blue-500"
                        type="text"
                        placeholder="Color"
                        onChange={handleColorChange(idx)}
                        value={color.name}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveColor(idx)}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white px-3 py-0.5 text-2xl rounded-sm"
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  className="bg-green-500 text-white px-2.5 text-2xl rounded-sm"
                  type="button"
                  onClick={handleAddColor}
                >
                  +
                </button>
              </div>
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
                    fontSize: "12px",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                    " @media(max-width:479px)": { fontSize: "12px" },
                  }}
                >
                  {type} Product
                </Typography>
              </Button>
            </Stack>
          </form>
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
              label={<>{type}</>}
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
};

export default CustomProductModal;
