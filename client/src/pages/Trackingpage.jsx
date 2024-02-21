import { styled } from "@mui/material/styles";
import {Box} from '@mui/material'
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import Header from '../components/HeaderTitle'
import { useParams } from "react-router-dom";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
const steps = [
  "Waiting",
  "Started",
  "Shipping",
  "Delivered",
];
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));
function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
      3: <VideoLabelIcon />,
    4:<VideoLabelIcon/>,
    5:<VideoLabelIcon/>,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const OrderCard = ({ order }) => {
  const formatDate = date => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">Order ID: {order.id}</h2>
              <p className="text-sm text-gray-600 mb-4">Placed on {formatDate(order.date)}</p>
              <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2">Items:</h3>
                  {order.items.map(item => (
                      <div key={item.id} className="flex justify-between mb-1">
                          <span>{item.name}</span>
                          <span>{item.quantity} x ${item.price}</span>
                      </div>
                  ))}
              </div>
              <p className="text-sm font-medium mb-2">Total: ${order.total.toFixed(2)}</p>
              <p className="text-sm font-medium mb-2">Status: {order.status}</p>
              <p className="text-sm font-medium mb-2">Tracking Info: {order.trackingInfo}</p>
          </div>
      </div>
  );
};


const Trackingpage = () => {
    const { orderid,statusid} = useParams();

    const sampleOrders = [
      {
          id: 1,
          status: 'Shipped',
          trackingInfo: '1234567890',
          date: '2024-02-20',
          total: 59.99,
          items: [
              { id: 1, name: 'Product A', quantity: 1, price: 19.99 },
              { id: 2, name: 'Product B', quantity: 2, price: 20.00 },
              { id: 3, name: 'Product C', quantity: 1, price: 20.00 },
          ],
      },
      {
          id: 2,
          status: 'Delivered',
          trackingInfo: '9876543210',
          date: '2024-02-15',
          total: 45.00,
          items: [
              { id: 4, name: 'Product D', quantity: 1, price: 25.00 },
              { id: 5, name: 'Product E', quantity: 1, price: 20.00 },
          ],
      },
      // Add more sample orders as needed
  ];
  

  return (
    <>
      <Header title="Order Tracking page" subtitle="Order id" />
      <Box
        sx={{ display: "flex", justifyContent: "cenetr", alignItems: "center" }}
      >
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-8">Track My Orders</h1>
            {sampleOrders.length === 0 ? (
                <p className="text-lg">No orders to track</p>
            ) : (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {sampleOrders.map(order => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            )}
        </div>
      </Box>
    </>
  );
}

export default Trackingpage