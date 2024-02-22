import React, { useState } from "react";
import "./UserAddress.css";
import api from "@/api/api";
import { toast } from "react-toastify";

const UserAddress = () => {
  const [show, setShow] = useState(false);

  const [name, setname] = useState("");
  const [Phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [state, setState] = useState("");
  const [PinCode, setPinCode] = useState();
  const [savedaddress, setSavedaddress] = useState(
    JSON.parse(localStorage.getItem("user")).addresses
  );
  const saveaddress = async () => {
    try {
        let addr = {
            name:name,
            phoneNumber:Phone,
            street:street,
            city:city,
            landmark:landmark,
            state:state,
            pincode:PinCode,
        };
        localStorage.setItem(
            "user",
            JSON.stringify({
              ...JSON.parse(localStorage.getItem("user")),
              addresses:[addr]
            })
          );
          const finalUser = await api.post(
            "/users/addAddress",
            { ...addr },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          if(finalUser.data._id){
            toast.success("Address Added Successfully!", {
              position: "top-center",
            });
          }
    } catch (error) {
      toast.error("Address couldn't be added. Please try again.", {
        position: "top-center",
      });
    }
  };
  const deleteAddress = async (id)=>{
    try {
        let addr = {
            _id:id,
            name:name,
            phoneNumber:Phone,
            street:street,
            city:city,
            landmark:landmark,
            state:state,
            pincode:PinCode,
        };
        localStorage.setItem(
            "user",
            JSON.stringify({
              ...JSON.parse(localStorage.getItem("user")),
              addresses:JSON.parse(localStorage.getItem("user")).addresses.filter((item)=> item._id !== addr._id )
            })
          );
          const finalUser = await api.post(
            "/users/deleteAddress",
            { ...addr },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          if(finalUser.data._id){
            toast.success("Address Deleted Successfully!", {
              position: "top-center",
            });
          }
    } catch (error) {
      toast.error("Address couldn't be Deleted. Please try again.", {
        position: "top-center",
      });
    }
  }
  return (
    <div className="useraddress">
      {!show && <h1 className="mainhead1">Your Address</h1>}
      {!show && (
        <div className="addressin">
          {savedaddress.map((item, index) => {
            return (
              <div className="address" key={index}>
                <span>{item.name}</span>,
                <span>{item.phoneNumber}</span>,
                <span>{item.street}</span>,
                <span>{item.landmark}</span>,
                <span>{item.city}</span>
                <span>{item.state}</span>
                <span>{item.pincode}</span>
                <div className="delbtn" onClick={()=>{deleteAddress(item._id)}} >  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!show && (
        <div className="p-4 px-6 hover:cursor-pointer bg-cyan-600 rounded-full text-3xl text-white" onClick={() => setShow(true)}>
          +
        </div>
      )}
      {show && (
        <div className="addnew">
          <h1 className="mainhead1">Add New Address</h1>
          <div className="form">
            <div className="form-group">
              <label htmlFor="addressline1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressline2">Phone Number</label>
              <input
                type="text"
                value={Phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressline3">Street</label>
              <input
                type="text"
                value={street}
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressline3">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressline3">Landmark</label>
              <input
                type="text"
                value={landmark}
                onChange={(e) => {
                  setLandmark(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressline3">State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressline3">PinCode</label>
              <input
                type="text"
                value={PinCode}
                onChange={(e) => {
                  setPinCode(e.target.value);
                }}
              />
            </div>
          </div>

          <button
            className="mainbutton1"
            onClick={() => {
              saveaddress();
              setShow(false);
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAddress;
