import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { useGetTransactionsQuery } from "../../../features/dashboard/api";
import Header from "../../../components/dashboard/Header";
import DataGridCustomToolbar from "../../../components/dashboard/DataGridCustomToolBar";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api"
const Transactions = () => {
  const theme = useTheme();
  const navigate=useNavigate()
  // values to be sent to the backend
  // useEffect(())
  const [data, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await api.get("/orders/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log("Order successfully created", response.data);
        setOrders(response.data); // Save response data to state variable
        // navigate("/orders");
      } catch (err) {
        console.error("Order placing failed", err);
      }
    };

    getOrders(); // Call the function when the component mounts
  }, []); 
  console.log(data)
  const columns = [
    {
      field: "shippingAddress",
      headerName: "Ship Address",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "paymentMode",
      headerName: "Payment Mode",
      flex: 1,
    },
    {
      field: "totalAmount",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    // {
    //   field: "cost",
    //   headerName: "Cost",
    //   flex: 1,
    //   renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    // },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
      <Box
        height="80vh"
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
          // loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default Transactions;
