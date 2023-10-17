import React from "react";
import { Link } from "react-router-dom";
import './sidebarStyle.css';
const SidebarItem = ({ item }) => {
  return (
    item.sidebarProps && item.path ? (
      <div
        component={Link}
        to={item.path}
        className="sidebar-item"
      >
        <div style={{
          color: '#eeeeee'
        }}>
          <div style={{margin: '0 10px'}}>{item.sidebarProps.icon && item.sidebarProps.icon}</div>
        </div>
        <div style={{fontSize: '20px', margin: '0 5px'}}>{item.sidebarProps.displayText}</div>
      </div>
    ) : null
  );
};

export default SidebarItem;