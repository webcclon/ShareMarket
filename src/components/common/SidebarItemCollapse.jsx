import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarItem from "./SidebarItem";
import React from "react";
import './sidebarStyle.css';

const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    item.sidebarProps ? (
      <>
        <div
          onClick={() => setOpen(!open)}
          className="sidebar-item-child"
        >
          <div style={{
            color: '#eeeeee',
            marginRight: '15px'
          }}>
            {item.sidebarProps.icon && item.sidebarProps.icon}
          </div>
          <div style={{fontSize: '20px', marginRight: '50px'}}>
                {item.sidebarProps.displayText}
          </div>
          {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
        </div>
        <Collapse in={open} timeout="auto">
          <List>
            {item.child?.map((route, index) => (
              route.sidebarProps ? (
                route.child ? (
                  <SidebarItemCollapse item={route} key={index} />
                ) : (
                  <SidebarItem item={route} key={index} />
                )
              ) : null
            ))}
          </List>
        </Collapse>
      </>
    ) : null
  );
};

export default SidebarItemCollapse;