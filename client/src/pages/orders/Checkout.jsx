import React, { useState, useEffect } from 'react';
import AddAddressForm from './AddAddressForm';
import { useAuthenticate } from '@/context/AuthContext';
import api from '@/api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.addresses) {
      setAddresses(userData.addresses);
    }
  }, []);

  const navigate=useNavigate();

  const { cart }=useAuthenticate();

  const subtotal = cart.items.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
}, 0);

  const handleAddressChange = (address) => {
    setSelectedAddress(address);
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleProceedToCheckout = async () => {
    if (!selectedAddress || !selectedPaymentMethod) {
      // Check if address and payment method are selected
      alert('Please select both address and payment method');
      return;
    }

    const orderItems = cart.items.map(item => ({
      productId: item.product._id, // Assuming product ID is stored in _id field
      quantity: item.quantity,
      price: item.product.price
    }));

    const orderData = {
      items: orderItems,
      totalAmount: subtotal,
      shippingAddress: selectedAddress,
      paymentMode: selectedPaymentMethod
    };

    try
    {
      const response=await api.post('/orders',orderData,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      console.log("Order successfully created",response.data);
      navigate('/orders');
      toast.success("Order placed successfully",{
        position: "top-center"
      });
    }
    catch(err)
    {
      console.error("Order placing failed",err);
      toast.error("Unable to place order",{
        position: "top-center"
      });
    }
  };

  const handleAddAddress = () => {
    setShowAddAddressForm(true);
  };

  const handleCloseAddAddressForm = () => {
    setShowAddAddressForm(false);
  };

  const handleSaveAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-32 gap-y-10 lg:grid-cols-2">
        {/* Address Selection */}
        <div>
        <button
            onClick={handleAddAddress}
            className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Address
          </button>
          {showAddAddressForm && (
            <AddAddressForm onSave={handleSaveAddress} onClose={handleCloseAddAddressForm} />
          )}
          <div className="border-b border-gray-900/10 pb-12">
            {addresses.length > 0 ? (
              <>
                <p className="text-sm leading-6 text-gray-600 font-semibold mt-4 mb-4">
                  Choose From Existing Addresses
                </p>
                <ul>
                  {/* Mapping through addresses */}
                  {addresses.map((address, index) => (
                    <li
                      key={index}
                      className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                    >
                      {/* Input radio for selecting the address */}
                      <div className="flex gap-x-4 ">
                        <input
                          onChange={() => handleAddressChange(address)}
                          name="address"
                          type="radio"
                          value={index}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 "
                        />
                        {/* Displaying address information */}
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">{address.name}</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.street}</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.pincode}</p>
                        </div>
                      </div>
                      <div className="sm:flex sm:flex-col sm:items-end flex flex-col">
                        <p className="text-xs sm:text-sm leading-6 text-gray-900">Phone: {address.phoneNumber}</p>
                        <p className="text-xs sm:text-sm leading-6 text-gray-500">{address.city}</p>
                      </div>
                    </li>
                  ))}
                  
                </ul>
              </>
            ) : (
              <div className="flex justify-center items-center">
                <p>No addresses available. Please add an address.</p>
                
              </div>
            )}

             {/* Payment Method Selection */}
             <div className="mt-10 space-y-2">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">Payment Methods</legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">Choose One</p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="card"
                      name="paymentMethod"
                      type="radio"
                      value="card"
                      onChange={() => handlePaymentMethodChange("debit")}
                      className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-600"
                    />
                    <label htmlFor="card" className="block text-sm font-medium leading-6 text-gray-900">
                      Debit Card
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="card"
                      name="paymentMethod"
                      type="radio"
                      value="card"
                      onChange={() => handlePaymentMethodChange("credit")}
                      className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-600"
                    />
                    <label htmlFor="card" className="block text-sm font-medium leading-6 text-gray-900">
                      Credit Care
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="card"
                      name="paymentMethod"
                      type="radio"
                      value="card"
                      onChange={() => handlePaymentMethodChange("cod")}
                      className="h-4 w-4 border-gray-300 text-cyan-500 focus:ring-cyan-600"
                    />
                    <label htmlFor="card" className="block text-sm font-medium leading-6 text-gray-900">
                      Cash on Delivery(COD)
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
  <div className="border-t border-gray-200 px-0 py-6 sm:px-0">
    <h1 className="text-2xl my-5 font-bold tracking-tight text-gray-900">Order Summary</h1>
    {/* Render cart items */}
    {cart.items.map((item, index) => (
      <div key={index} className="flex items-center justify-between mb-4">
        {/* Product image */}
        {item.product.images && <img src={item?.product?.images[0]?.source} alt={item.product.name} className="w-20 h-20 object-cover rounded-md" />}
        {/* Product details */}
        <div className="flex-1 ml-4">
          <p className="text-lg font-semibold text-gray-900">{item.product.name}</p>
          <p className="text-gray-500">Price: ₹{item.product.price}</p>
          <p className="text-gray-500">Quantity: {item.quantity}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="border-t border-gray-200 px-2 py-6 sm:px-2">
    <div className="flex justify-between text-base font-medium text-gray-900">
      <p>Subtotal</p>
      <p>{`₹${subtotal.toFixed(2)}`}</p>
    </div>
    <div className="mt-6">
      {/* Proceed to Checkout Button */}
      <button
        className="ml-28 flex items-center justify-center rounded-md border border-transparent bg-cyan-500 hover:bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm"
        onClick={handleProceedToCheckout}
        // disabled={!selectedAddress || !selectedPaymentMethod}
        type="button"
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Checkout;
