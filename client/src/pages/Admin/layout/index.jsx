import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../../components/dashboard/Navbar";
import Sidebar from "../../../components/AdminDashboard/Sidebar";
import { useGetUserQuery } from "../../../features/dashboard/api";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../../../components/dashboard/theme";
import { useMemo } from "react";
const Layout = () => {
  const mode = useSelector((state) => state.mode.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.mode.userId);
  const { data } = useGetUserQuery(userId);
  // console.log(data)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
        <Sidebar
          user={data || {}}
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1}>
          <Navbar
            user={data || {}}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          {/* <Sidebar /> */}
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
