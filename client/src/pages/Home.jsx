import React, { useState } from 'react';
import { Modal } from "@mui/material";
import LoginModal from '../components/auth/LoginModal';

const Home = () => {

    const [open,setOpen]=useState(false);
    const handleOpenLogin=()=>setOpen(true);
    const handleCloseLogin=()=>setOpen(false);

  return (
    <div>
        This is home
        <button onClick={handleOpenLogin}>Click here to login</button>
        <Modal open={open} onClose={handleCloseLogin} className='min-h-screen flex justify-center items-center'>
            <div>
            <LoginModal onClose={handleCloseLogin} />
            </div>
        </Modal>
    </div>
  )
}

export default Home