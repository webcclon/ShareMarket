import React from "react";
import MarketStatus from "../components/MarketStatus";
import "./dashboard.css";
import earningIcon from "../assest/icons/us-dollar-coin-color-icon.png";
import balaceIcon from "../assest/icons/wallet-to-bank-icon.png";
import salesIcon from "../assest/icons/worldwide-icon.png";
import orderIcon from "../assest/icons/pending-order-icon.png";
import { Card, Grid, Typography } from "@mui/material";
import BarChart from "../components/graph/BarChart";
import PieChartGraph from "../components/graph/PieChart";
import EnhancedTable from "../components/table/Table";

const Dashboard = () => {
  const cardItems = [
    {
      name: "Earning",
      icon: earningIcon,
      amount: "$198K",
      up: true,
      percentage: "37.8%",
      time: "this month",
      backgroundColor: "#d0ffca",
      id: 1,
    },
    {
      name: "Orders",
      icon: orderIcon,
      amount: "$2.5K",
      up: false,
      percentage: "2%",
      time: "this month",
      backgroundColor: "#e7caff9e",
      id: 2,
    },
    {
      name: "Balance",
      icon: balaceIcon,
      amount: "$2.4K",
      up: false,
      percentage: "2%",
      time: "this month",
      backgroundColor: "#70b8df9c",
      id: 3,
    },
    {
      name: "Total Sales",
      icon: salesIcon,
      amount: "$89K",
      up: true,
      percentage: "11%",
      time: "this week",
      backgroundColor: "#df70c985",
      id: 4,
    },
  ];
  return (
    <div>
      <div className="card-collection">
        {cardItems.map((item) => (
          <MarketStatus
            key={item.id}
            name={item.name}
            icon={item.icon}
            amount={item.amount}
            up={item.up}
            percentage={item.percentage}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </div>
      <div className="graph-section">
      <Card className="parent-barchart">
        <div className="heading">
          <div className="overview">
          <Typography sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div">
                Overview
              </Typography>
            <Typography sx={{ color: "gray" }}>Monthly Earning</Typography>

          </div>
          <div>
          <Typography sx={{ color: "gray" }}>Quaterly</Typography>
          </div>
        </div>
        <div className="barchart">
          <BarChart />
        </div>

      </Card>
      <Card className="pie-chart">
      <Typography sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div">
                Customers
              </Typography>
            <Typography sx={{ color: "gray" }}>Customers that buy products</Typography>
        <PieChartGraph />
      </Card>
      </div>
      <div  className='table'>
      <EnhancedTable />
      </div>
    </div>
  );
};

export default Dashboard;
