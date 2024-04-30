import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import WishListCard from "./WishListCard";
import api from "../../api/api";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HeaderTitle from "../HeaderTitle";
import BreadCrumb from "../BreadCrumb";

function WishList() {
  const [products, setProducts] = useState([])
  const [loading,setLoading]=useState("")
  const [wishListChange, setWishListChange] = useState(false);
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await api.get("/wishlist", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          setProducts(response.data.items);
        } catch (error) {
          console.error(`Error fetching blogs: ${error}`);
        } finally {
          setLoading(false);
        }
      };
      fetchProducts();
    }, [wishListChange]);
  const bc = [
    { name: 'Wishlist', link: '/wishlist' },
    // { name: 'Default', link: '/product/Default' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-12">
    <HeaderTitle title={"Your Wishlist"} subtitle={"View your favorites"}/>
      <BreadCrumb breadcrumbs={bc} style={`pc`} />
      {products.length ? (
        <>
          <div className="grid grid-cols-5 pt-10">
            <div className="col-span-2 pl-4 h-10 text-lg ">


              
                <h2>Product</h2>
              
            </div>


            <div className=" flex justify-center">
              <h2>Price</h2>
            </div>
            <div className=" flex justify-center">
              <h2>Stock</h2>
            </div>
          </div>
          {products.map((item) => (
            <WishListCard key={ item._id} item={item} setWishListChange={setWishListChange} />
          ))}
        </>
      ) : (
        <div>
          <div className="flex justify-center items-center h-[60vh] overflow-scroll">
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"></img>

              {/* <h1 className="flex justify-center text-lg animate-bounce text-red-400 font-semibold">
                WishList is Empty !
              </h1> */}

              <Link to='/products' className='flex justify-center pt-5'><button className='bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-xl'>Go Shop</button></Link>


              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WishList;
