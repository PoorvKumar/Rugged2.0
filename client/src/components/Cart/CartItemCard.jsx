import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useAuthenticate } from "@/context/AuthContext";
function CartItemCard({ item,setCartChange }) {
  console.log(item);
  const product=item.product;
  const quantity=item.quantity;
  // const {id,name,price,desc,image,brand,quantity}=item.item;
  const { addToCart } = useAuthenticate();
  const handleAddToCart = (id, quan) => {
    addToCart({ productId: id, quantity: quan });
      setCartChange((prevCartChange) => !prevCartChange);
      setTimeout(() => {
        setCartChange((prevCartChange) => !prevCartChange);
      }, 0);
  };
  return (
    <div>
      <div className=" grid grid-cols-5 gap-2 p-2  items-center  border-y border-gray-300 border-collapse">
        <div className="box-border h-28 col-span-2  flex justify-start gap-9">
          <img src={product.images[0].source}></img>
          <div className="grid grid-cols-1 justify-center items-center">
            <div>{product.name}</div>
            <div>{product.shortDescription}</div>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          ₹{product.price}
        </div>
        <div className="flex justify-center items-center ">
          <div className="box-border w-20 max-h-10  p-4 border-solid border border-gray-400 rounded flex justify-center items-center gap-3">
            <button className="" onClick={() => { handleAddToCart(product._id, -1) }}>
              -
            </button>
            <div className="">{quantity}</div>
            <button className="" onClick={() => { handleAddToCart(product._id, 1) }}>
              +
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className=" flex items-center justify-end">
            ${quantity * product.price}
          </div>
          <div className="opacity-22 flex justify-center items-center ">
            <button
              className=""
              onClick={()=>{handleAddToCart(product._id, -quantity-1);}}
            >
              <DeleteOutlineOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;

