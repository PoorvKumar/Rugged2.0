import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useSelector, useDispatch } from "react-redux";
import HeaderTitle from "../components/HeaderTitle";
import CancelIcon from "@mui/icons-material/Cancel";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const { orders } = useSelector((state) => state.order);
  // const { cartQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  return (
    <div className="mb-40">
      <script src="https://cdn.tailwindcss.com"></script>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />
      <script
        defer
        src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
      ></script>

      {/* <!-- ====== Table Section Start --> */}
      <HeaderTitle title="Orders" subtitle="All Orders list" />
      <section className="bg-white">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-cyan-400 text-center">
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                      >
                        OrderID
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                      >
                        TotalPrice
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                      >
                        Quantity
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                      >
                        Status
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                      >
                        Details
                      </th>
                    </tr>
                  </thead>
                  {orders.length ? (
                    <tbody>
                      {orders.map((item) => (
                        <tr key={item.id}>
                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                          >
                            {item.id}
                          </td>
                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                          >
                            ${item.price}
                          </td>
                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                          >
                            {item.quantity}
                          </td>
                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                          >
                            <div className=" flex items-center justify-center">
                              {item.status === "1" && (
                                <button className="bg-cyan-600 text-white h-10 w-32 rounded hover:opacity-75 flex items-center justify-center p-5">
                                  <CancelIcon />
                                  <span className="ml-2">Placed</span>
                                </button>
                              )}
                              {item.status === "2" && (
                                <button className="bg-slate-500 text-white h-10 w-32 rounded hover:opacity-75 flex items-center justify-center p-5">
                                  <HourglassTopIcon/>
                                  <span className="ml-2">Shipping</span>
                                </button>
                              )}
                              {item.status === "3" && (
                                <button className="bg-green-600 text-white h-10 w-32 rounded hover:opacity-75 flex items-center justify-center p-5">
                                  <CheckCircleOutlineIcon />
                                  <span className="ml-2">Success</span>
                                </button>
                              )}
                            </div>
                          </td>
                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                          >
                            <div className=" flex items-center justify-center">
                              <button className="bg-cyan-600 text-white h-10 w-32 rounded hover:opacity-75 flex items-center justify-center p-5">
                                {/* <CheckCircleOutlineIcon /> */}
                                <span
                                  className="ml-2"
                                  onClick={() => navigate(`/order/${item.id}`)}
                                >
                                  ViewDetails
                                </span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <></>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Table Section End --> */}
    </div>
  );
};

export default Orders;
