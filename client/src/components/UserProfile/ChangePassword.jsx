import api from "@/api/api";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(0);
  const changePassword = async () => {
    try {
      const finalUser = await api.post(
        "/users/changePassword",
        { oldPassword: oldPassword, newPassword: newPassword },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (finalUser.data._id) {
        toast.success("Password Changed Successfully!", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("Password change unsuccessfull", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Change Password</h1>

      <div className="form">
        <div className="form-group">
          <label htmlFor="oldpass">
            Old Password <span>*</span>
          </label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="newpass">
            New Password <span>*</span>
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>
      </div>

      <button className="mainbutton1" onClick={changePassword}>
        Save Changes
      </button>
    </div>
  );
};

export default ChangePassword;
