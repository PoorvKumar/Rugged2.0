import React,{useState,useEffect} from 'react'
import Header from '../../../components/dashboard/Header';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { Typography, Button } from '@mui/material';
import { PaperClipIcon } from "@heroicons/react/20/solid";
import CustomUpdateProfileModal from '../../../components/dashboard/CustomUpdateProfileModal'
import CustomProductModal from '../../../components/dashboard/CustomProductModal';
import api from "../../../api/api"
const Profile = () => {
    const theme = useTheme()
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const isCustomer = JSON.parse(localStorage.getItem("user")).isCustomer;
  const isAdmin = JSON.parse(localStorage.getItem("user")).isAdmin;
  const isSeller = JSON.parse(localStorage.getItem("user")).isSeller;
  const isBlogger = JSON.parse(localStorage.getItem("user")).isBlogger;
  const [sellerDetails, setSellerDetails] = useState({});
  useEffect(() => {
     const getDetails = async () => {
       try {
         const response = await api.get("/seller/details", {
           headers: {
             Authorization: "Bearer " + localStorage.getItem("token"),
           },
         });
         console.log(response)
        setSellerDetails(response.data);
       } catch (error) {
         console.error(`Error fetching Details: ${error}`);
       }
     };
     
     getDetails();
  }, []);
  // console.log(sellerDetails)
  return (
    <>
      <Box m="1.5rem 2.5rem">
        <Header title="PROFILE" subtitle="See your Profile" />
        <div className="bg-white md:mx-auto rounded shadow-xl w-full overflow-hidden">
          <div
            className="h-[140px]"
            style={{ backgroundColor: theme.palette.secondary[900] }}
          ></div>
          <div className="px-5 py-2 flex flex-col gap-3 pb-6">
            <div className="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white">
              {/* <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="w-full h-full rounded-full object-center object-cover"
              /> */}
            </div>
            <div className="">
              <h3 className="text-xl text-slate-900 relative font-bold leading-6">
                {/* Dadda Hicham */}
              </h3>
              {/* <p className="text-sm text-gray-600">@daddasoft</p> */}
            </div>
            <div className="flex gap-3 flex-wrap">
              {isCustomer && (
                <span className="rounded-sm bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                  Customer
                </span>
              )}
              {isSeller && (
                <span className="rounded-sm bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                  Seller
                </span>
              )}
              {isBlogger && (
                <span className="rounded-sm bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
                  Blogger
                </span>
              )}
              {isAdmin && (
                <span className="rounded-sm bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                  Admin
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleOpenAdd}
                type="button"
                className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Add Product
              </button>
              <CustomProductModal
                open={openAdd}
                handleClose={handleCloseAdd}
                type={"Add"}
              >
                {/* </div> */}
              </CustomProductModal>
              <button
                type="button"
                className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={handleOpen}
              >
                Update Profile
              </button>
              <CustomUpdateProfileModal
                open={open}
                handleClose={handleClose}
              ></CustomUpdateProfileModal>
            </div>

            <h4 className="text-md font-medium leading-3">Information</h4>
            <div className="flex flex-col gap-3">
              <div className="bg-gray-100 py-12 px-6">
                <div className="max-w-screen-lg mx-auto">
                  <div>
                    <div className="px-4 sm:px-0">
                      <h3 className="text-2xl font-semibold leading-7 text-gray-900">
                        Seller Information
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                        Personal details
                      </p>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                      <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-xl font-medium leading-6 text-gray-900">
                            Phone Number
                          </dt>
                          <dd className="mt-1 text-base leading-6 text-cyan-950 font-bold sm:col-span-2 sm:mt-0">
                            {sellerDetails.phone}
                          </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-xl font-medium leading-6 text-gray-900">
                            Bank Account Number
                          </dt>
                          <dd className="mt-1 text-base leading-6 text-cyan-950 font-bold sm:col-span-2 sm:mt-0">
                            {sellerDetails.accountNumber}
                          </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-xl font-medium leading-6 text-gray-900">
                            UPI ID
                          </dt>
                          <dd className="mt-1 text-base leading-6 text-cyan-950 font-bold sm:col-span-2 sm:mt-0">
                            {sellerDetails.upiId}
                          </dd>
                        </div>
                        {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-xl font-medium leading-6 text-gray-900">
                            Total Earnings
                          </dt>
                          <dd className="mt-1 text-base leading-6 text-cyan-950 font-bold sm:col-span-2 sm:mt-0">
                            $120,000
                          </dd>
                        </div> */}
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-xl font-medium leading-6 text-gray-900">
                            About
                          </dt>
                          <dd className="mt-1 text-base leading-6 text-cyan-950 font-bold sm:col-span-2 sm:mt-0">
                            {sellerDetails.about}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Profile;