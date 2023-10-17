import { Container, TextField, Typography } from "@mui/material";
import React from "react";
import "./sidebarStyle.css";

export const AppBar = () => {
  return (
    <div className="app-bar">
      <Typography variant="h5" ClassName="logo">
        <b>Shahrukh Khan👋</b>
      </Typography>
      <input className="text-field" placeholder="search..." />
    </div>
  );
};
