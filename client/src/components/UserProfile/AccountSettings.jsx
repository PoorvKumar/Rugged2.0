import React, { useState } from "react";
import "./AccountSettings.css";
import api from "@/api/api";
import { toast } from "react-toastify";


const AccountSettings = () => {
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("user")).name
  );
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("user")).email
  );
  const [phone, setPhone] = useState(
    JSON.parse(localStorage.getItem("user")).phoneNumber
  );
  const saveChanges = async () => {
    try {
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("user")),
          name: userName,
          email: email,
          phoneNumber: phone,
        })
      );
      const finalUser = await api.patch(
        "/users/updateProfile",
        { name: userName, email: email, phoneNumber: phone },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if(finalUser.data._id){
        toast.success("Profile Changed Successfully!", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("Profile Changes unsuccessfull", {
        position: "top-center",
      });
    }
    
  };
  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Personal Information</h1>

      <div className="form">
        <div className="form-group">
          <label htmlFor="name">
            Your Name <span>*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone/Mobile <span>*</span>
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button className="mainbutton1" onClick={saveChanges}>
        Save Changes
      </button>
    </div>
  );
};

export default AccountSettings;
