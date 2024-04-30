import React, { useEffect, useState } from "react";
// import cartReducer from '../../reducers/cartReducer'
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";
import HeaderTitle from "../HeaderTitle";
import BreadCrumb from "../BreadCrumb";
import api from "../../api/api";
const Cart2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartChange, setCartChange] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/cart", {
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
  }, [cartChange]);

  const bc = [
    { name: "Cart", link: "/cart" },
    // { name: 'Default', link: '/product/Default' },
  ];

  return (
    <div className="min-h-screen">
      <HeaderTitle title={"Shopping Cart"} subtitle={"View your items"} />
      <BreadCrumb breadcrumbs={bc} style={`pc`} />
      {products.length > 0 ? <Cart cart={products} setCartChange={setCartChange} /> : <EmptyCart />}
    </div>
  );
};

export default Cart2;
