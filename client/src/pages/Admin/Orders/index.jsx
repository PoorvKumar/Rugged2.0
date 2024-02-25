import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, useTheme,Button } from "@mui/material";
import { useGetTransactionsQuery } from "../../../features/dashboard/api";
import Header from "../../../components/dashboard/Header";
import DataGridCustomToolbar from "../../../components/dashboard/DataGridCustomToolBar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../api/api";
const Orders = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  // values to be sent to the backend
  // useEffect(())
    const [dataPlaced, setOrdersPlaced] = useState([]);
    const [dataShipped, setOrdersShipped] = useState([]);
    const [dataCancelled, setOrdersCancelled] = useState([]);
    const shipOrder = async (id) => {
      try {
        const response = await api.post(
          "/orders/ship-order",
          { id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        toast.success("Order Shipped Successfully", {
          position: "top-center",
        });
          navigate("/admin/orders");
      } catch (err) {
        toast.error("Order shipping failed", {
          position: "top-center",
        });
        console.error("Order shipping failed", err);
      }
    };
    const cancelOrder = async (id) => {
      try {
        const response = await api.post(
          "/orders/cancel-order",
          { id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        toast.success("Order Cancelled Successfully", {
          position: "top-center",
        });
          navigate('/admin/orders')
      } catch (err) {
        toast.error("Order cancelling failed", {
          position: "top-center",
        });
        console.error("Order cancelling failed", err);
      }
    };
  useEffect(() => {
    const getPlacedOrders = async () => {
      try {
        const response = await api.get("/orders/placed-orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log("Order successfully created", response.data);
        setOrdersPlaced(response.data);
      } catch (err) {
        console.error("Order placing failed", err);
      }
      };
      const getShippedOrders = async () => {
        try {
          const response = await api.get("/orders/shipped-orders", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          console.log("Order successfully created", response.data);
          setOrdersShipped(response.data);
        } catch (err) {
          console.error("Order placing failed", err);
        }
      };
      const getCancelledOrders = async () => {
        try {
          const response = await api.get("/orders/cancelled-orders", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          console.log("Order successfully created", response.data);
          setOrdersCancelled(response.data);
        } catch (err) {
          console.error("Order placing failed", err);
        }
      };

    getPlacedOrders(); // Call the function when the component mounts
    getShippedOrders(); // Call the function when the component mounts
    getCancelledOrders(); // Call the function when the component mounts
  }, [dataPlaced,dataShipped,dataCancelled]);
//   console.log(data);
  const columns = [
    {
      field: "shippingAddress",
      headerName: "User Name",
      flex: 0.5,
    },
    {
      field: "_id",
      headerName: "Ship/Cancel",
      flex: 0.5,
      renderCell: (params) => (
        <div className="flex flex-row">
          <Button
            variant="contained"
            color="success"
            onClick={async() => shipOrder(params.value)}
          >
            Ship
          </Button>
          <div style={{ margin: "0 15px" }}></div>{" "}
          {/* Add space between buttons */}
          <Button
            variant="contained"
            color="error"
            onClick={async() => cancelOrder(params.value)}
          >
            Cancel
          </Button>
        </div>
      ),
    },
    {
      field: "paymentMode",
      headerName: "Payment Mode",
      flex: 0.5,
    },
    {
      field: "totalAmount",
      headerName: "Cost",
      flex: 0.5,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];
   const columns1 = [
     {
       field: "shippingAddress",
       headerName: "User Name",
       flex: 0.5,
     },
     {
       field: "_id",
       headerName: "Ship/Cancel",
       flex: 0.5,
       renderCell: (params) => (
         <div className="flex flex-row">
           <Button
             variant="contained"
             color="success"
             disabled
           >
             Shipped
           </Button>
         </div>
       ),
     },
     {
       field: "paymentMode",
       headerName: "Payment Mode",
       flex: 0.5,
     },
     {
       field: "totalAmount",
       headerName: "Cost",
       flex: 0.5,
       renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
     },
    ];
    const columns2 = [
      {
        field: "shippingAddress",
        headerName: "User Name",
        flex: 0.5,
      },
      {
        field: "_id",
        headerName: "Ship/Cancel",
        flex: 0.5,
        renderCell: (params) => (
          <div className="flex flex-row">
            <Button
              variant="contained"
              color="error"
              disabled
            >
              Cancelled
            </Button>
          </div>
        ),
      },
      {
        field: "paymentMode",
        headerName: "Payment Mode",
        flex: 0.5,
      },
      {
        field: "totalAmount",
        headerName: "Cost",
        flex: 0.5,
        renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
    ];
  return (
    <Box m="0.1rem 2.5rem">
      <Header title="Placed Orders" subtitle="You can Ship or Cancel" />
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
          rows={dataPlaced || []}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
      <Header title="Shipped Orders" subtitle="List of Shipped transactions" />
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
          rows={dataShipped || []}
          columns={columns1}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
      <Header title="Cancelled Orders" subtitle="You can Cancelled Transactions" />
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
          rows={dataCancelled || []}
          columns={columns2}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default Orders;
