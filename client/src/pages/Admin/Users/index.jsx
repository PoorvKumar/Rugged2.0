import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, useTheme, Button } from "@mui/material";
import { useGetTransactionsQuery } from "../../../features/dashboard/api";
import Header from "../../../components/dashboard/Header";
import DataGridCustomToolbar from "../../../components/dashboard/DataGridCustomToolBar";
import { useNavigate } from "react-router-dom";
import UpdateUserModal from '../../../components/AdminDashboard/UpdateUserModal'
import { toast } from "react-toastify";
import api from "../../../api/api";
const Orders = () => {
    const theme = useTheme();
    const [openUserId, setOpenUserId] = useState(null);
    const handleOpenModal = (userId) => {
      setOpenUserId(userId); // Set the ID of the user for which the modal should be open
    };
     const handleCloseModal = () => {
       setOpenUserId(null); // Reset the modal state when closing the modal
     };
  const [datausers, setUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await api.get("/users/nolimitUser", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUsers(response.data);
      } catch (err) {
        console.error("Order placing failed", err);
      }
    };
    getAllUsers(); // Call the function when the component mounts
  }, [datausers]);
  //   console.log(data);
  const columns = [
    {
      field: "_id",
      headerName: "Make Changes",
      flex: 0.3,
      renderCell: (params) => (
        <div className="flex flex-row">
          <Button
            variant="contained"
            onClick={() => handleOpenModal(params.value)}
          >
            Update
          </Button>
          {openUserId === params.value && ( // Render the modal only if openUserId matches the current user ID
            <UpdateUserModal
              open={true} // Always open the modal when openUserId matches
              handleClose={handleCloseModal}
              id={params.value}
            />
          )}
        </div>
      ),
    },
    {
      field: "name",
      headerName: "User Name",
      flex: 0.2,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.2,
    },
    {
      field: "phoneNumber",
      headerName: "Phone",
      flex: 0.2,
    },
    {
      field: "roles",
      headerName: "Roles",
      flex: 0.5,
      renderCell: (params) => (
        <div className="flex flex-row">
          {params.value.map((role, index) => (
            <div key={index} style={{ margin: "0 15px" }}>
              <div
                style={{
                  backgroundColor: "#2DD4BF", // Cyan-950 color
                  color: "#FFFFFF", // White text color
                  padding: "4px 8px", // Adjust padding for small size
                  borderRadius: "4px", // Optional: Add border radius for button-like appearance
                  display: "inline-block", // Ensure it behaves like an inline element
                }}
              >
                {role}
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];
  return (
    <Box m="0.1rem 2.5rem">
      <Header title="All Users" subtitle="List all Registered Users" />
      <Box
        height="80vh"
        width="160vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: "15px",
            color: theme.palette.grey[50],
            backgroundColor: "#3498db",
            fontWeight: "500",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.secondary[900],
            color: theme.palette.grey[50],
            fontSize: "15px",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.secondary[900],
            color: theme.palette.grey[50],
            fontSize: "15px",
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[900]} !important`,
          },
        }}
      >
        <DataGrid
          //   loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={datausers || []}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default Orders;
