import React, { useEffect, useState } from "react";
// import cartReducer from '../../reducers/cartReducer'
import { useSelector } from "react-redux/es/hooks/useSelector";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";
import HeaderTitle from "../HeaderTitle";
import BreadCrumb from "../BreadCrumb";
import api from "../../api/api";
import { setCart } from "../../features/cartReducer";
import { useDispatch } from "react-redux";
const Cart2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/cart", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = response.data;
        // console.log(response.data.items);
        setProducts(response.data.items);
        // dispatch(setCart(data));
      } catch (error) {
        console.error(`Error fetching blogs: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  // const { cart } = useSelector((state) => state.cart);
  // console.log(cart);

  const bc = [
    { name: "Cart", link: "/cart" },
    // { name: 'Default', link: '/product/Default' },
  ];

  return (
    <div className="min-h-screen">
      <HeaderTitle title={"Shopping Cart"} subtitle={"View your items"} />
      <BreadCrumb breadcrumbs={bc} style={`pc`} />
      {products.length > 0 ? <Cart cart={products} /> : <EmptyCart />}
    </div>
  );
};

export default Cart2;
