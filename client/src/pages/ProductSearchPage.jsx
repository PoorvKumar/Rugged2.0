import React, { useEffect, useState } from "react";
import CustomCard from "../components/Common/CustomCard";
import BreadCrumb from "../components/ProductPage/BreadCrumb";
import { Button, Checkbox, Pagination, Rating } from "@mui/material";
import HeaderTitle from "../components/HeaderTitle";
// import { CirclePicker } from "react-color";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, changeSearchInput } from "../features/productReducer";
import api from "../api/api";

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
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);

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
      let response = await api.get(`products/search?q=${searchInput}&customerRating=${customerRating}&priceLL=0&priceUL=${priceSliderValue}&RuggedVerrified=${isRuggedVerrified}&colours=${color}&availability=${availability}&noOfResultsPerPage=12&pageNo=${page}&categories=${categories}&brands=${brands}`);
      let { productList,totalNumberOfPages } = response.data;
      setTotalNumberOfPages(totalNumberOfPages);
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
          count={totalNumberOfPages}
          page={page}
          onChange={handleChange}
        />
      </div>
      <div className="my-4"></div>
    </div>
  );
};

export default ProductSearchPage;
