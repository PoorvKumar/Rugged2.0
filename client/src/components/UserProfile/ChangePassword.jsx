import React, { useState } from 'react'


const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const changePassword = async () => {
        const finalUser = await api.patch(
          "/users/updateProfile",
          { "oldPassword":oldPassword,"newPassword":newPassword },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log(finalUser);
      };
    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Change Password</h1>

            <div className='form'>
                <div className='form-group'>
                    <label htmlFor='oldpass'>Old Password <span>*</span></label>
                    <input type="password"
                    value={oldPassword}
                    onChange={(e)=>{setOldPassword(e.target.value)}}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='newpass'>New Password <span>*</span></label>
                    <input type="password"
                        value={newPassword}
                        onChange={(e)=>{setNewPassword(e.target.value)}}
                    />
                </div>


            </div>

            <button className='mainbutton1'
            onClick={changePassword}
            >Save Changes</button>
        </div>
    )
}

export default ChangePassword