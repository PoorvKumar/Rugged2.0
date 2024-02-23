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
          { name: "Product", link: "/products" },
          {
            name: `${productDataInside.name}`,
            link: `/products/${productDataInside._id}`,
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
              <InitialProductInfo productData={productData} id={productData._id} />
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
