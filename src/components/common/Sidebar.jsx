import { Avatar, Drawer, List, Stack, Toolbar, Typography } from "@mui/material";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import React from "react";
import appRoutes from "../../routes/route";

const Sidebar = () => {
  const sidebarWidth = "15rem";
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${sidebarWidth}`,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: '#233044',
          color:'#eeeeee'
        }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar src={`./images/typescript-logo-240.png`} />
            <Typography sx={{fontSize: '24px', marginLeft: '10px'}}>Dashboard</Typography>
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;