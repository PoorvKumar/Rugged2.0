import React from 'react'

const OrderCard = ({ order }) => {
    const formatDate = date => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };
  
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-lg font-semibold mb-2">Order ID: {order.id}</h2>
                <p className="text-sm text-gray-600 mb-4">Placed on {formatDate(order.date)}</p>
                <div className="mb-4">
                    <h3 className="text-sm font-medium mb-2">Items:</h3>
                    {order.items.map(item => (
                        <div key={item.id} className="flex justify-between mb-1">
                            <span>{item.name}</span>
                            <span>{item.quantity} x ${item.price}</span>
                        </div>
                    ))}
                </div>
                <p className="text-sm font-medium mb-2">Total: ${order.total.toFixed(2)}</p>
                <p className="text-sm font-medium mb-2">Status: {order.status}</p>
                <p className="text-sm font-medium mb-2">Tracking Info: {order.trackingInfo}</p>
            </div>
        </div>
    );
  };

export default OrderCard