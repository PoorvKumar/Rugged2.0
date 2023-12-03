import React from 'react'
import { Modal } from '@mui/material';

import Box from '@mui/material/Box';
// import Typography from '@mui/material';
import { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';



function RentForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Submitted form data:');
  //   handleClose();
  //};
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    
    border:
   
  '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [deliveryOption, setDeliveryOption] = useState('selfPickup'); // default to selfPickup


  const [pickUpDate, setPickUpDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convert string dates to Date objects
    const pickUpDateObj = new Date(pickUpDate);
    const returnDateObj = new Date(returnDate);

    // Calculate the difference in milliseconds
    const timeDifference = returnDateObj.getTime() - pickUpDateObj.getTime();

    // Calculate the number of days
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24))};

    // Now, you can use the `daysDifference` in your logic}
  

  return (
    <div className='min h-screen flex justify-center items-center'>


    



    <button
 
 onClick={handleOpen}>Open Modal</button>

<Modal

        
open={open}

        
onClose={handleClose}

        
aria-labelledby="modal-title"

        
aria-describedby="modal-description"
      >

        
<Box
 
sx={style}>

          
<h2 className='pb-4 text-lg font-semibold'
 
id="modal-title">Give the following details</h2>
          <div className=" p-4 bg-gray-200 shadow-md rounded-md">
      <h2 className="text-xl font-semibold text-center">Rent Product</h2>



       <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4 flex justify-between gap-2">
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">PickUp Date:</label>
        <input
          type="date"
          value={pickUpDate}
          onChange={(event) => setPickUpDate(event.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
        </div>
<div>
        <label className="block text-gray-700 text-sm font-medium mb-2">Return Date:</label>
        <input
          type="date"
          value={returnDate}
          onChange={(event) => setReturnDate(event.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
        </div>
      </div>

      <div className="mb-4">

      
      <div className="mb-4">
        <p>Delivery Option:</p>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              value="selfPickup"
              checked={deliveryOption === 'selfPickup'}
              onChange={() => setDeliveryOption('selfPickup')}
            />
            Self Pickup
          </label>
          <label>
            <input
              type="radio"
              value="delivery"
              checked={deliveryOption === 'delivery'}
              onChange={() => setDeliveryOption('delivery')}
            />
            Delivery
          </label>
          </div>
      </div>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Rent Product
      </button>


    </form>
    </div>
        </Box>
      </Modal>


    


     

     
    </div>
  )
}

export default RentForm;
         
