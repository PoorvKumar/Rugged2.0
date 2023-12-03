import React, { useState } from "react";
import CustomCard from "../components/Common/CustomCard";
import BreadCrumb from "../components/ProductPage/BreadCrumb";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Checkbox, Pagination, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import MultipleSelectChip from "../components/ProductSearchPage/MultiAutoComplete";
import HeaderTitle from '../components/HeaderTitle';

const productData = {
  _id: "asdfghjkl123456789",
  name: "Product Name",
  price: 5000,
  discount: 20,
  shortDescription: "",
  description:
    "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
  detailedDescription: {
    heading: "heading_description",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta fugiat dolorum dolore repellendus quae laudantium consequatur explicabo quam beatae deleniti aut est necessitatibus saepe placeat unde accusantium veniam recusandae numquam ullam, amet nobis, sed quos ut? Odio provident at obcaecati molestiae veniam voluptatum optio nostrum suscipit, similique, architecto nam autem quidem? Fuga odit ratione eos fugit magni vel, est recusandae distinctio, deserunt asperiores tempora? Rem consectetur nulla magnam mollitia illum, natus eaque tempore doloribus non aliquid nostrum hic nemo iste, et libero nobis repellat iure. Ut iusto perferendis labore facere debitis asperiores et cum reiciendis necessitatibus at. Tempore exercitationem recusandae corporis quos, hic officia eos fuga nemo excepturi maiores quod vero quisquam quae nostrum ipsam porro. Optio modi iste aut asperiores quasi veritatis alias reprehenderit nostrum officiis odit consectetur unde, aliquid deserunt dolor, velit, tenetur hic ipsum ex minus? Porro nemo labore saepe eveniet dolor! Ipsa eligendi facilis commodi?",
    bullets: ["Point 1", "Point 2", "Point 3"],
  },
  caro: [
    [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1924a2bc-a7c8-4780-a4a8-f3119f49cd28.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    ],
    [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7d3c13b3-9f53-41a7-8078-cd5ec4d26fdb.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0cbe9096-02e8-4a1f-a475-a17c3ef894f9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    ],
    [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3354aa20-d262-455a-a9e4-5e6b6dcf66f4.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5d7d5e67-fd32-4791-8d44-fe8ab69d2b1e.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    ],
    [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1e940a98-92e9-4e1d-b43d-ae131692e0c4.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/37345542-96e2-45ac-b9c1-8f2ee8f770fb.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    ],
    [
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fdd3b4bd-7e15-414d-8c2f-6495098a84df.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d04b68c2-3584-422b-bff6-78e9fbcd3a38.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    ],
  ],
  colours: ["red", "blue", "green", "yellow"],
  brand: "Rugged",
  tags: ["New", "Top", "Trending", "Reliable"],
  diaplayUrl: [
    {
      type: "image",
      source:
        "https://d-themes.com/react_asset_api/molla/uploads/product_5_1_300x300_3dbc9b1611.jpg",
    },
    {
      type: "image",
      source:
        "https://d-themes.com/react_asset_api/molla/uploads/product_5_2_300x300_100e169228.jpg",
    },
    {
      type: "image",
      source:
        "https://d-themes.com/react_asset_api/molla/uploads/product_5_3_300x300_39035ca6ee.jpg",
    },
  ],
  quantity: 50,
  seller: {
    name: "Seller Name",
    emailId: "Email ID",
    contactNo: "9834947924",
  },
  offers: ["20% off", "pay with SBI to get additional 10% off"],
  services: ["free delivery", "servhrt"],
  categories: ["category1", "category2", "category3", "category2"],
  table: {
    title: "Product Details",
    rows: [
      {
        title: "Special Features",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
      },
      {
        title: "title 2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
      },
      {
        title: "title 3",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
      },
      {
        title: "title 4",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
      },
      {
        title: "title 5",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
      },
      {
        title: "title 6",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
      },
      {
        title: "title 7",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
      },
      {
        title: "title 8",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
      },
    ],
  },
  rating: {
    avgValue: 4,
    noOfRatings: 150,
    Ratings: [
      {
        noOfStars: 1,
        noOfRatings: 5,
      },
      {
        noOfStars: 2,
        noOfRatings: 40,
      },
      {
        noOfStars: 3,
        noOfRatings: 45,
      },
      {
        noOfStars: 4,
        noOfRatings: 40,
      },
      {
        noOfStars: 5,
        noOfRatings: 20,
      },
    ],
    RecentRatings: [
      {
        name: "Akash Kulkarni",
        stars: 5,
        reviewTitle: "review title 1",
        review: "Very Nice Product",
        time: "4 days ago",
        helpful: ["mongoDB ID of person 1", "mongoDB ID of person 2"],
        unhelpful: ["mongoDB ID of person 3"],
      },
      {
        name: "Divyank Khajuria",
        stars: 3,
        reviewTitle: "review title 2",
        review: "Mediocre Product",
        time: "5 days ago",
        helpful: [
          "mongoDB ID of person 1",
          "mongoDB ID of person 2",
          "mongoDB ID of person 3",
          "mongoDB ID of person 4",
        ],
        unhelpful: ["mongoDB ID of person 5", "mongoDB ID of person 6"],
      },
    ],
  },
  influencersEndorsing: ["Virat Kohli", "SRK"],
};
const ProductSearchPage = () => {
  const bc = [
    { name: "Search", link: "/search" },
    { name: "Default", link: "/product/Default" },
  ];
  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: "rgb(6,182,212)",
    height: 5,
    padding: "13px 0",
    "& .MuiSlider-thumb": {
      height: 27,
      width: 27,
      backgroundColor: "#fff",
      border: "1px solid currentColor",
      "&:hover": {
        boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.15)",
      },
      "& .airbnb-bar": {
        height: 9,
        width: 1,
        backgroundColor: "currentColor",
        marginLeft: 1,
        marginRight: 1,
      },
    },
    "& .MuiSlider-track": {
      height: 3,
    },
    "& .MuiSlider-rail": {
      color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
      opacity: theme.palette.mode === "dark" ? undefined : 1,
      height: 3,
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 1,
      width: 48,
      height: 48,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: 'rgba(6,182,212,1)',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  }));
  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
  };
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [priceSliderValue, setPriceSliderValue] = useState([200, 4000]);
  const [customerRating, setcustomerRating] = useState(0);
  const [availability, setAvailability] = useState();
  function valueLabelFormat(value) {
    return `₹ ${value}`;
  }
  return (
    <div className="flex flex-col mt-2">
      <HeaderTitle title={'Shop'} subtitle={'Explore from our range of Products'} />
      <BreadCrumb breadcrumbs={bc} style={`pc`} />
      <hr className="bg-gray-800 mt-2" />
      <div className="flex flex-row mx-[5%] h-full ">
        <div className="flex flex-col w-2/5 mr-4 py-4">
          <div className="flex flex-row justify-between items-center align-middle ">
            <div>Filters:</div>
            <Button onClick={() => {}}>
              <div className="text-cyan-600 text-sm font-semibold">
                Clean All
              </div>
            </Button>
          </div>
          {/* Customer Rating */}
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><span className="text-cyan-600">Customer Rating</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-[rgba(55,55,55,1)]" >Higher customer rating equals better customer satisfaction.</Typography>
              <Rating onChange={(e,newVal)=>{setcustomerRating(newVal)}} />
            </AccordionDetails>
          </Accordion>
          {/* Price */}
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><span className="text-cyan-600" >Price</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Stick to a budget ?</Typography>

              <AirbnbSlider
                slots={{ thumb: AirbnbThumbComponent }}
                getAriaLabel={(index) =>
                  index === 0 ? "Minimum price" : "Maximum price"
                }
                // defaultValue={[200, 4000]}
                valueLabelDisplay="on"
                className="mt-20"
                min={0}
                valueLabelFormat={valueLabelFormat}
                max={10000}
                onChangeCommitted={(e,newVal)=>{setPriceSliderValue(newVal)}}
                value={priceSliderValue}
              />
            </AccordionDetails>
          </Accordion>
          {/* Influencers Choice */}
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><span className="text-cyan-600" >Influencers Choice</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Fan of someone ? Follow their style .</Typography>
              <MultipleSelectChip/>
            </AccordionDetails>
          </Accordion>
          {/* Rugged Verrified */}
          {/* <Accordion
            style={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Rugged Verrified</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion> */}
          {/* Availability */}
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography><span className="text-cyan-600" >Availability</span></Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-row" >
              <div className="w-3/4" >
              <Typography><span className="text-xs leading-3 font-semibold text-[rgba(55,55,55,1)]" >Show only Available products</span></Typography>
              </div>
              <div className="w-1/4" >
              <Checkbox onChange={(e,v)=>{setAvailability(v)}} />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="flex flex-col">
          <div>
            Showing <em><b>12</b></em> of <em><b>52</b></em> results
          </div>
          <div className="flex flex-row flex-wrap justify-around gap-2">
            <CustomCard productData={productData} />
            <CustomCard productData={productData} />
            <CustomCard productData={productData} />
            <CustomCard productData={productData} />
            <CustomCard productData={productData} />
            <CustomCard productData={productData} />
            <CustomCard productData={productData} />
            <CustomCard productData={productData} />
            <CustomCard productData={productData} />
            <CustomCard productData={productData} />
            <CustomCard productData={productData} />
            <CustomCard productData={productData} />
          </div>
        </div>
      </div>
      <div className="self-center mt-8 ">
      <Pagination color="primary" count={10} page={page} onChange={handleChange} />
      </div>
      <div className="my-4" ></div>
    </div>
  );
};

export default ProductSearchPage;
