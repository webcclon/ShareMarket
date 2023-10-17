import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Sidebar from "../components/common/Sidebar";
import { AppBar } from "../components/common/AppBar";

const Layout = ({children}) => {

  const sidebarWidth = "15rem";
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{
          width: `${sidebarWidth}`,
          flexShrink: 0
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          padding: '0 10px',
          flexGrow: 1,
          width: `calc(100% - ${sidebarWidth})`,
          minHeight: "100vh",
          backgroundColor: '#f5f5f5'
        }}
      >
        <AppBar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;