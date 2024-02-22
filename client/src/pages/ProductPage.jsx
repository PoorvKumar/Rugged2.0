import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/ProductPage/BreadCrumb";
import VerticalImageCarousel from "../components/ProductPage/VerticalImageCarousel";
import InitialProductInfo from "../components/ProductPage/InitialProductInfo";
// import TabsMenu from "../../components/ProductPage/TabsMenu";
import Description from "../components/ProductPage/Description";
import Reviews from "../components/ProductPage/Reviews";
import Ratings from "../components/ProductPage/Ratings";
import { useParams } from "react-router-dom";
import api from "../api/api";
const ProductPage = () => {
  const [tabNo, setTabNo] = useState(0);
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
  //   categories: ["category1", "category2"],
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
  // {
  //   name: "Akash Kulkarni",
  //   stars: 5,
  //   reviewTitle: "review title 1",
  //   review: "Very Nice Product",
  //   time: "4 days ago",
  //   helpful: ["mongoDB ID of person 1", "mongoDB ID of person 2"],
  //   unhelpful: ["mongoDB ID of person 3"],
  // },
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
  const params = useParams();
  const prodId = params.id;
  const [productData, setProductData] = useState(null);
  const [bc, setBc] = useState([]);
  useEffect(() => {
    console.log("inside");
    const getIndProduct = async () => {
      try {
        let response = await api.get(
          `products/productByID?productId=${prodId}`
        );
        const productDataInside = response.data;
        console.log(productDataInside);
        setProductData(productDataInside);
        setBc([
          { name: "Product", link: "/product" },
          {
            name: `${productDataInside.name}`,
            link: `/product/${productDataInside._id}`,
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    };
    getIndProduct();
  }, []);

  return (
    <div className="main px-2">
      <BreadCrumb breadcrumbs={bc} style={`pc`} />
      {productData === null ? (
        <div>loading...</div>
      ) : (
        <div>
          <div className="lg:grid grid-cols-2 gap-4 px-10 py-4">
            <div className="col-span-1">
              <VerticalImageCarousel
                data={productData.images}
                txtList={productData.tags}
              />
            </div>
            <div className="col-span-1">
              <InitialProductInfo productData={productData} />
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* <TabsMenu tabNo={tabNo} setTabNo={setTabNo} /> */}
            <Description productData={productData} />
          </div>

          <div className="flex flex-row justify-between items-start">
            <Ratings  productData={productData} dataset={productData.ratingCounts} />
            <Reviews productData={productData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
