import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import earningIcon from "../assest/icons/us-dollar-coin-color-icon.png";
import balaceIcon from "../assest/icons/wallet-to-bank-icon.png";
import salesIcon from "../assest/icons/worldwide-icon.png";
import orderIcon from "../assest/icons/pending-order-icon.png";
import "./style.css";
import { List } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function  MarketStatus({name, icon, amount, up, percentage, backgroundColor}) {
  return (
    <Card className="card">
          <CardContent className="icon-image" style={{backgroundColor: backgroundColor}}>
            <img src={icon} alt="icon" className="card-icon" />
          </CardContent>
          <List>
            <div className="card-list">
              <Typography sx={{ color: "gray" }}>{name}</Typography>
              <Typography variant="h5">
                <b>{amount}</b>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    color: up ? "#27ae1f" :  'red', 
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                    {
                        up ? <ArrowUpwardIcon sx={{ height: "20px" }} /> : <ArrowDownwardIcon sx={{ height: "20px", color: 'red' }} />
                    }
                  <span>{percentage} </span>{" "}
                </span>
                <span
                  style={{
                    fontWeight: "400",
                    color: "gray",
                    marginLeft: "5px",
                  }}
                >
                  this month
                </span>
              </Typography>
            </div>
          </List>
    </Card>
  );
}
