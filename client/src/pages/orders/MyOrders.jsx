import React,{useState,useEffect} from 'react'
import OrderCard from './OrderCard';
import HeaderTitle from '@/components/HeaderTitle';
import api from '../../api/api'

const MyOrders = () => {
  const sampleOrders = [
    {
      id: 1,
      status: "Shipped",
      trackingInfo: "1234567890",
      date: "2024-02-20",
      total: 59.99,
      items: [
        { id: 1, name: "Product A", quantity: 1, price: 19.99 },
        { id: 2, name: "Product B", quantity: 2, price: 20.0 },
        { id: 3, name: "Product C", quantity: 1, price: 20.0 },
      ],
    },
    {
      id: 2,
      status: "Delivered",
      trackingInfo: "9876543210",
      date: "2024-02-15",
      total: 45.0,
      items: [
        { id: 4, name: "Product D", quantity: 1, price: 25.0 },
        { id: 5, name: "Product E", quantity: 1, price: 20.0 },
      ],
    },
    // Add more sample orders as needed
  ];
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Make a request to your backend to fetch order data
        const response = await api.get("/orders/user", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }); // Change the URL as per your backend route
        console.log(response.data)
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <>
      <HeaderTitle title="Your Orders" subtitle="Order id" />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-8">Track My Orders</h1>
        {orders.length === 0 ? (
          <p className="text-lg">No orders to track</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {orders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MyOrders