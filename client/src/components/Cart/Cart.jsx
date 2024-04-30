import CartItemCard from "./CartItemCard";
import CartCheck from "./CartCheck";
import api from "../../api/api";
function Cart({ cart, setCartChange }) {
  const Empty = async () => {
      await EmptyCart()
         setCartChange((prevCartChange) => !prevCartChange);
         setTimeout(() => {
           setCartChange((prevCartChange) => !prevCartChange);
         }, 0);
  }
      const EmptyCart = async () => {
        try {
        const response = await api.delete("/cart/emptycart", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
          // console.log(response.data)
        } catch (error) {
          console.error(`Error fetching blogs: ${error}`);
        } 
      };
  return (
    <div className=" min-h-screen">
      <div className="mx-16 gap-5 max-[1000px]:flex-col flex  justify-center items-center ">
        <div className="w-9/12 max-[1000px]:w-full">
          {cart.length ? (
            <div className="p-2 grid grid-cols-5 gap-x-1">
              <div className="col-span-2 pl-2 h-10 text-lg">Product</div>
              <div className=" flex justify-center">Price</div>
              <div className=" flex justify-center">Quantity</div>
              <div className=" grid grid-cols-2 gap-6">
                <div className="flex justify-end ">Total</div>
                <div></div>
              </div>
            </div>
          ) : (
            ""
          )}

          {cart.length ? (
            <div>
              {cart.map((item, _id) => (
                <CartItemCard key={_id} item={item} setCartChange={setCartChange} />
              ))}
              <div className="p-4">
                <button
                  className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                  onClick={Empty}
                >
                  clear
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className=" 3/12 flex pb-5 ">
          {cart.length ? <CartCheck /> : ""}
        </div>
      </div>
    </div>
  );
}
export default Cart;
