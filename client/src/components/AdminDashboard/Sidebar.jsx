import { LuMountainSnow } from "react-icons/lu";
import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "../../assets/banner-1.jpg";
import { useDispatch } from "react-redux";
import { customsetMode } from "../../features/dashboard/mode";

const navItems = [
  {
    text: "Admin",
    icon: null,
  },
  {
    text: "Users",
    icon: <HomeOutlined />,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Orders",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Complaints",
    icon: <Groups2Outlined />,
  },

  //   {
  //     text: "Seller",
  //     icon: null,
  //   },
  //   {
  //     text: "Products",
  //     icon: <ShoppingCartOutlined />,
  //   },
  //   {
  //     text: "Profile",
  //     icon: <Groups2Outlined />,
  //   },
  //   {
  //     text: "Blogger",
  //     icon: null,
  //   },
  //   {
  //     text: "Blogs",
  //     icon: <Groups2Outlined />,
  //   },
  //   {
  //     text: "CreateBlog",
  //     icon: <ShoppingCartOutlined />,
  //   },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  useEffect(() => {
    setActive(pathname.substring(11));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.primary[800],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.primary}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <div className="flex items-center">
                    <a href="/">
                      <div className="flex gap-1 items-center">
                        <span className="text-cyan-950 text-2xl font-bold">
                          <LuMountainSnow />
                        </span>
                        <h1 className="text-cyan-950 text-2xl font-bold">
                          {" "}
                          RUGGED
                        </h1>
                      </div>
                    </a>
                  </div>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }, index) => {
                  if (!icon) {
                    return (
                      <Typography key={text} sx={{ m: "1rem 0 1rem 3rem" }}>
                        {text}
                      </Typography>
                    );
                  }
                  const lcText = text.toLowerCase();

                  return (
                    <ListItem
                      key={text}
                      sx={{
                        "&:hover": {
                          backgroundColor: theme.palette.secondary[900],
                          color: theme.palette.primary[100],
                          "& .MuiButtonBase-root": {
                            // Select the ListItemButton on hover
                            backgroundColor: theme.palette.secondary[900],
                            color: theme.palette.grey[100],
                          },
                          "& .MuiListItemIcon-root": {
                            // Select the ListItemIcon on hover
                            color: theme.palette.grey[100],
                          },
                        },
                      }}
                      disablePadding
                    >
                      <ListItemButton
                        onClick={() => {
                          navigate(`/admin/${lcText}`);
                          setActive(lcText);
                        }}
                        sx={{
                          backgroundColor:
                            active === lcText
                              ? theme.palette.secondary[900]
                              : "transparent",
                          color:
                            active === lcText
                              ? theme.palette.grey[100]
                              : theme.palette.primary[800],
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            ml: "2rem",
                            color:
                              active === lcText
                                ? theme.palette.grey[100]
                                : theme.palette.primary[900],
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        {active === lcText && (
                          <ChevronRightOutlined sx={{ ml: "auto" }} />
                        )}
                      </ListItemButton>
                    </ListItem>
                  )
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="1rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.primary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.primary[800] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.primary[800],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
