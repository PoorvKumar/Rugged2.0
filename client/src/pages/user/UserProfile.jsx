import React from "react";
import { useParams } from "react-router-dom";
// import Footer1 from '../../COMPONENTS/Footer/Footer1'
// import Footer2 from '../../COMPONENTS/Footer/Footer2'
// import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Navbar from "../../components/Navbar";
import UserSidebar from "../../components/UserProfile/UserSidebar";
import Footer from "../../components/Footer";
// import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import AccountSettings from "../../components/UserProfile/AccountSettings";
import "./UserProfile.css";
import ChangePassword from "../../components/UserProfile/ChangePassword";
// import YourOrders from '../../components/UserProfile/YourOrders'
import UserAddress from "../../components/UserProfile/UserAddress";
// import LegalNotice from '../../COMPONENTS/UserProfile/LegalNotice'

const UserProfile = () => {
  const { activepage } = useParams();

  // alert(activepage)
  return (
    <div className="userprofile">
      <Navbar />
      {/* <SingleBanner 
        heading={`My Profile`}
        bannerimage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
        /> */}

      {/* UserProfile , showing {activepage}
       */}
      <div className="userprofile-content">
        <div className="userprofilein">
          <div className="left">
            <UserSidebar activepage={activepage} />
          </div>
          <div className="right">
            {activepage === "accountsettings" && <AccountSettings />}
            {activepage === "changepassword" && <ChangePassword />}
            {/* {activepage === 'yourorders' && <YourOrders/>} */}
            {activepage === "address" && <UserAddress />}
            {/* {activepage === 'legalnotice' && <LegalNotice/>} */}
          </div>
        </div>
        {/* <Footer1/>
        <Footer2/> */}
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
