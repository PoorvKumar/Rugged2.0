import React, { useEffect, useState } from "react";
import CustomCard from "../components/Common/CustomCard";
import BreadCrumb from "../components/ProductPage/BreadCrumb";
// import { Slider } from "@/components/ui/slider";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Checkbox, Pagination, Rating } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import PropTypes from "prop-types";
// import Slider, { SliderThumb } from "@mui/material/Slider";
// import MultipleSelectChip from "../components/ProductSearchPage/MultiAutoComplete";
import HeaderTitle from "../components/HeaderTitle";
import { CirclePicker } from "react-color";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, changeSearchInput } from "../features/productReducer";
import { string } from "yup";

// const productData = {
//   _id: "asdfghjkl123456789",
//   name: "Product Name",
//   price: 5000,
//   discount: 20,
//   shortDescription: "",
//   description:
//     "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
//   detailedDescription: {
//     heading: "heading_description",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta fugiat dolorum dolore repellendus quae laudantium consequatur explicabo quam beatae deleniti aut est necessitatibus saepe placeat unde accusantium veniam recusandae numquam ullam, amet nobis, sed quos ut? Odio provident at obcaecati molestiae veniam voluptatum optio nostrum suscipit, similique, architecto nam autem quidem? Fuga odit ratione eos fugit magni vel, est recusandae distinctio, deserunt asperiores tempora? Rem consectetur nulla magnam mollitia illum, natus eaque tempore doloribus non aliquid nostrum hic nemo iste, et libero nobis repellat iure. Ut iusto perferendis labore facere debitis asperiores et cum reiciendis necessitatibus at. Tempore exercitationem recusandae corporis quos, hic officia eos fuga nemo excepturi maiores quod vero quisquam quae nostrum ipsam porro. Optio modi iste aut asperiores quasi veritatis alias reprehenderit nostrum officiis odit consectetur unde, aliquid deserunt dolor, velit, tenetur hic ipsum ex minus? Porro nemo labore saepe eveniet dolor! Ipsa eligendi facilis commodi?",
//     bullets: ["Point 1", "Point 2", "Point 3"],
//   },
//   caro: [
//     [
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1924a2bc-a7c8-4780-a4a8-f3119f49cd28.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
//     ],
//     [
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7d3c13b3-9f53-41a7-8078-cd5ec4d26fdb.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0cbe9096-02e8-4a1f-a475-a17c3ef894f9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
//     ],
//     [
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3354aa20-d262-455a-a9e4-5e6b6dcf66f4.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/5d7d5e67-fd32-4791-8d44-fe8ab69d2b1e.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
//     ],
//     [
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1e940a98-92e9-4e1d-b43d-ae131692e0c4.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/37345542-96e2-45ac-b9c1-8f2ee8f770fb.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
//     ],
//     [
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fdd3b4bd-7e15-414d-8c2f-6495098a84df.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
//       "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d04b68c2-3584-422b-bff6-78e9fbcd3a38.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
//     ],
//   ],
//   colours: ["red", "blue", "green", "yellow"],
//   brand: "Rugged",
//   tags: ["New", "Top", "Trending", "Reliable"],
//   diaplayUrl: [
//     {
//       type: "image",
//       source:
//         "https://d-themes.com/react_asset_api/molla/uploads/product_5_1_300x300_3dbc9b1611.jpg",
//     },
//     {
//       type: "image",
//       source:
//         "https://d-themes.com/react_asset_api/molla/uploads/product_5_2_300x300_100e169228.jpg",
//     },
//     {
//       type: "image",
//       source:
//         "https://d-themes.com/react_asset_api/molla/uploads/product_5_3_300x300_39035ca6ee.jpg",
//     },
//   ],
//   quantity: 50,
//   seller: {
//     name: "Seller Name",
//     emailId: "Email ID",
//     contactNo: "9834947924",
//   },
//   offers: ["20% off", "pay with SBI to get additional 10% off"],
//   services: ["free delivery", "servhrt"],
//   categories: ["category1", "category2", "category3", "category2"],
//   table: {
//     title: "Product Details",
//     rows: [
//       {
//         title: "Special Features",
//         content:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
//       },
//       {
//         title: "title 2",
//         content:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
//       },
//       {
//         title: "title 3",
//         content:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
//       },
//       {
//         title: "title 4",
//         content:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
//       },
//       {
//         title: "title 5",
//         content:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
//       },
//       {
//         title: "title 6",
//         content:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
//       },
//       {
//         title: "title 7",
//         content:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
//       },
//       {
//         title: "title 8",
//         content:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aspernatur?",
//       },
//     ],
//   },
//   rating: {
//     avgValue: 4,
//     noOfRatings: 150,
//     Ratings: [
//       {
//         noOfStars: 1,
//         noOfRatings: 5,
//       },
//       {
//         noOfStars: 2,
//         noOfRatings: 40,
//       },
//       {
//         noOfStars: 3,
//         noOfRatings: 45,
//       },
//       {
//         noOfStars: 4,
//         noOfRatings: 40,
//       },
//       {
//         noOfStars: 5,
//         noOfRatings: 20,
//       },
//     ],
//     RecentRatings: [
//       {
//         name: "Akash Kulkarni",
//         stars: 5,
//         reviewTitle: "review title 1",
//         review: "Very Nice Product",
//         time: "4 days ago",
//         helpful: ["mongoDB ID of person 1", "mongoDB ID of person 2"],
//         unhelpful: ["mongoDB ID of person 3"],
//       },
//       {
//         name: "Divyank Khajuria",
//         stars: 3,
//         reviewTitle: "review title 2",
//         review: "Mediocre Product",
//         time: "5 days ago",
//         helpful: [
//           "mongoDB ID of person 1",
//           "mongoDB ID of person 2",
//           "mongoDB ID of person 3",
//           "mongoDB ID of person 4",
//         ],
//         unhelpful: ["mongoDB ID of person 5", "mongoDB ID of person 6"],
//       },
//     ],
//   },
//   influencersEndorsing: ["Virat Kohli", "SRK"],
// };
const ProductSearchPage = () => {
  const dispatch = useDispatch();

  let { products, searchInput } = useSelector((state) => state.products);
  const bc = [
    { name: "Search", link: "/products" },
    // { name: "Default", link: "/product/Default" },
  ];
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };
  const [priceSliderValue, setPriceSliderValue] = useState(10000);
  const [customerRating, setcustomerRating] = useState(0);
  const [availability, setAvailability] = useState(false);
  const [color, setColor] = useState("all");
  const [isRuggedVerrified, setIsRuggedVerrified] = useState(false);
  const [categories, setCategories] = useState("all");
  const [brands, setBrands] = useState("all");

  const handleCategoryClick = (category) => {
    let cat = categories.split(",");
    let i = 0;
    for (i = 0; i < cat.length; i++) {
      if (cat[i] === category) {
        cat.splice(i, 1);
        break;
      } else if (i === cat.length - 1) {
        if (cat[0] === "all") {
          cat.splice(0, 1);
        }
        cat.push(category);
        break;
      }
    }
    if(cat.length===0){
      cat.push("all");
    }
    setCategories(cat.join(","));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await fetch(
        `https://rugged2-0.onrender.com/api/products/search?q=${searchInput}&customerRating=${customerRating}&priceLL=0&priceUL=${priceSliderValue}&RuggedVerrified=${isRuggedVerrified}&colours=${color}&availability=${availability}&noOfResultsPerPage=12&pageNo=${page}&categories=${categories}&brands=${brands}`
      );
      let { productList } = await response.json();
      dispatch(addProducts({ products: productList }));
      dispatch(changeSearchInput({ searchInput: searchInput }));
    };
    fetchProducts();
  }, [
    customerRating,
    availability,
    color,
    isRuggedVerrified,
    categories,
    brands,
    priceSliderValue,
    page
  ]);

  return (
    <div className="flex flex-col mt-2">
      <HeaderTitle
        title={"Shop"}
        subtitle={"Explore from our range of Products"}
      />
      <BreadCrumb breadcrumbs={bc} style={`pc`} />
      <hr className="bg-gray-800 mt-2" />
      <div className="flex flex-row mx-[5%] h-full ">
        <div className="flex flex-col w-[15%] py-4">
          <div className="flex flex-row justify-between items-center align-middle ">
            <div>Filters:</div>
            <Button
              onClick={() => {
                setAvailability(false);
                setColor("all");
                setcustomerRating(0);
                setPriceSliderValue(10000);
                setIsRuggedVerrified(false);
                setAvailability(false);
                setCategories("all");
                setBrands("all");
              }}
            >
              <div className="text-cyan-600 text-sm font-semibold">
                Clean All
              </div>
            </Button>
          </div>
          <Accordion type="multiple" collapsible className="w-[195px]">
            {/* Customer Rating */}
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-cyan-600">
                Customer Rating
              </AccordionTrigger>
              <AccordionContent>
                {/* Higher customer rating equals better customer satisfaction. */}

                <Rating
                  value={customerRating}
                  onChange={(e, newVal) => {
                    setcustomerRating(newVal);
                  }}
                />
              </AccordionContent>
            </AccordionItem>

            {/* Price */}
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-cyan-600">
                Price
              </AccordionTrigger>
              <AccordionContent>
                Stick to a budget ?
                <div className="flex flex-col">
                  <div className="flex flex-row w-full justify-between">
                    <input type="number" disabled value={0} className="w-[20%]"/>
                    <input type="number" value={priceSliderValue} className="w-[35%]"onChange={(e)=>{setPriceSliderValue(e.target.value)}}/>
                  </div>
                  <input
                    type="range"
                    name=""
                    id=""
                    min={0}
                    max={10000}
                    value={priceSliderValue}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setPriceSliderValue(e.target.value);
                    }}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Rugged Verrified */}
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-cyan-600">
                Rugged Verrified
              </AccordionTrigger>
              <AccordionContent className="flex flex-row-reverse align-middle items-center">
                <div className="w-3/4">
                  <span className="text-xs leading-3 font-normal text-[rgba(55,55,55,1)]">
                    Rugged Verrified
                  </span>
                </div>
                <div className="w-1/4">
                  <Checkbox
                    checked={isRuggedVerrified}
                    onChange={(e, v) => {
                      setIsRuggedVerrified(v);
                    }}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Availability */}
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-cyan-600">
                Availability
              </AccordionTrigger>
              <AccordionContent className="flex flex-row-reverse align-middle items-center">
                <div className="w-3/4">
                  <span className="text-xs leading-3 font-normal text-[rgba(55,55,55,1)]">
                    Show only Available products
                  </span>
                </div>
                <div className="w-1/4">
                  <Checkbox
                    checked={availability}
                    onChange={(e, v) => {
                      setAvailability(v);
                    }}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Category */}
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-cyan-600">
                Categories
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row-reverse justify-end w-full">
                    <label htmlFor="Camping">Camping</label>
                    <input
                      type="checkbox"
                      name="Camping"
                      id="Camping"
                      onClick={() => {
                        handleCategoryClick("Camping");
                      }}
                    />
                  </div>
                  <div className="flex flex-row-reverse justify-end w-full">
                    <label htmlFor="Hiking">Hiking</label>
                    <input
                      type="checkbox"
                      name="Hiking"
                      id="Hiking"
                      onClick={() => {
                        handleCategoryClick("Hiking");
                      }}
                    />
                  </div>
                  <div className="flex flex-row-reverse justify-end w-full">
                    <label htmlFor="Trekking">Trekking</label>
                    <input
                      type="checkbox"
                      name="Trekking"
                      id="Trekking"
                      onClick={() => {
                        handleCategoryClick("Trekking");
                      }}
                    />
                  </div>
                  <div className="flex flex-row-reverse justify-end w-full">
                    <label htmlFor="Sports">Sports</label>
                    <input
                      type="checkbox"
                      name="Sports"
                      id="Sports"
                      onClick={() => {
                        handleCategoryClick("Sports");
                      }}
                    />
                  </div>
                  <div className="flex flex-row-reverse justify-end w-full">
                    <label htmlFor="Miscellaneous">Miscellaneous</label>
                    <input
                      type="checkbox"
                      name="Miscellaneous"
                      id="Miscellaneous"
                      onClick={() => {
                        handleCategoryClick("Miscellaneous");
                      }}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Brand
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-cyan-600">
                Brand
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem> */}

            {/* Colours */}
            {/* <AccordionItem value="item-7">
              <AccordionTrigger className="text-cyan-600">
                Colour
              </AccordionTrigger>
              <AccordionContent>
                <CirclePicker
                  colors={[
                    "red",
                    "blue",
                    "green",
                    "yellow",
                    "black",
                    "grey",
                    "purple",
                  ]}
                  color={color}
                  onChangeComplete={({ hex }) => {
                    setColor(hex);
                  }}
                  width="100%"
                  className="m-1"
                />
              </AccordionContent>
            </AccordionItem> */}
          </Accordion>
        </div>
        <div className="flex flex-col">
          <div>
            Showing{" "}
            <em>
              <b>{products.length}</b>
            </em>{" "}
            results
          </div>
          <div
            className={`flex flex-row flex-wrap justify-around gap-2 ${
              products.length === 1 ? "mt-[10%]" : ""
            }`}
          >
            {products.map((productData, index) => (
              <CustomCard productData={productData} id={productData._id} key={productData._id} />
            ))}
          </div>
        </div>
      </div>
      <div className="self-center mt-8 ">
        <Pagination
          color="primary"
          count={10}
          page={page}
          onChange={handleChange}
        />
      </div>
      <div className="my-4"></div>
    </div>
  );
};

export default ProductSearchPage;
