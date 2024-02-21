import React from 'react'
import OrderCard from './OrderCard';
import HeaderTitle from '@/components/HeaderTitle';

const MyOrders = () => {
    const sampleOrders = [
        {
            id: 1,
            status: 'Shipped',
            trackingInfo: '1234567890',
            date: '2024-02-20',
            total: 59.99,
            items: [
                { id: 1, name: 'Product A', quantity: 1, price: 19.99 },
                { id: 2, name: 'Product B', quantity: 2, price: 20.00 },
                { id: 3, name: 'Product C', quantity: 1, price: 20.00 },
            ],
        },
        {
            id: 2,
            status: 'Delivered',
            trackingInfo: '9876543210',
            date: '2024-02-15',
            total: 45.00,
            items: [
                { id: 4, name: 'Product D', quantity: 1, price: 25.00 },
                { id: 5, name: 'Product E', quantity: 1, price: 20.00 },
            ],
        },
        // Add more sample orders as needed
    ];
    
  
    return (
      <>
        <HeaderTitle title="Your Orders" subtitle="Order id" />
        
          <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-semibold mb-8">Track My Orders</h1>
              {sampleOrders.length === 0 ? (
                  <p className="text-lg">No orders to track</p>
              ) : (
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {sampleOrders.map(order => (
                          <OrderCard key={order.id} order={order} />
                      ))}
                  </div>
              )}
          </div>
      </>
    );
}

export default MyOrders