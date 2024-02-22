import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../features/cartReducer";
import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthenticate } from "@/context/AuthContext";

function CartCheck() {
  // const { cartTotal, cart, cartQuantity } = useSelector((state) => state.cart);

  const { cart }=useAuthenticate();

  const totalPrice = cart.items.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
}, 0);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  const [ltotal, setLtotal] = useState(0);

  return (
    <div className="w-full ">
      <div className="px-5 bg-gray-100 sm:max-md:w-full border border-stone-300 rounded">
        <div className="">
          <div>
            <h3 className="decoration-solid text-2xl p-3 border-y bottom-1">
              Cart Total
            </h3>
          </div>
          <table className="border-y border-collapse">
            <tbody>
              <tr className="p-3">
                <td>Subtotal:</td>
                <td>₹{totalPrice}</td>
              </tr>
              <tr className="summary-shipping p-4">
                <td>Shipping:</td>
                <td>&nbsp;</td>
              </tr>
              <tr className="p-3">
                <td>
                  <div className="custom-control custom-radio">
                    <Button onClick={() => setLtotal(0)}>
                      <input
                        type="radio"
                        id="free-shipping"
                        name="shipping"
                        className="custom-control-input"
                        checked=""
                      />
                    </Button>
                    <label
                      className="custom-control-label"
                      htmlFor="free-shipping"
                    >
                      Free Shipping
                    </label>
                  </div>
                </td>
                <td>₹0.00</td>
              </tr>
              <tr className="">
                <td>
                  <div className="">
                    <Button onClick={() => setLtotal(10)}>
                      <input
                        type="radio"
                        id="standard-shipping"
                        name="shipping"
                        className="custom-control-input"
                      />
                    </Button>
                    <label
                      className="custom-control-label"
                      htmlFor="standard-shipping"
                    >
                      Standard:
                    </label>
                  </div>
                </td>
                <td>₹10.00</td>
              </tr>
              <tr className="p-3">
                <td>
                  <div className="">
                    <Button onClick={() => setLtotal(20)}>
                      <input
                        type="radio"
                        id="express-shipping"
                        name="shipping"
                        className="custom-control-input"
                      />
                    </Button>
                    <label
                      className="custom-control-label"
                      htmlFor="express-shipping"
                    >
                      Express:
                    </label>
                  </div>
                </td>
                <td>₹20.00</td>
              </tr>
              <div className="py-2">
                {/* <tr>
                  <td>
                    <Link to="/" className="text-sky-500 pt-3">
                      Change address
                    </Link>
                  </td>
                </tr> */}
              </div>

              <tr className="py-5">
                <td className="text-lg">Total:</td>
                <td className="text bg-blend-color-burn">
                ₹{totalPrice + ltotal}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pt-5 pb-3">
            <div className="flex  justify-center borde">
              <button
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-xl"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-4 flex justify-center ">
        <Link to="/" className="text-sky-500 hover:bg-slate-100 ">
          <span>CONTINUE SHOPPING</span>
        </Link>
      </div> */}
    </div>
  );
}

export default CartCheck;
