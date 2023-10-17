import React from "react";
import product from "../assest/nature/simon-berger-aZjw7xI3QAA-unsplash.jpg";
import { Typography } from "@mui/material";

const Product = () => {
  return (
    <div style={{padding: '10px 0'}}>
      <img className="product-image" src={product} alt="image" />
      <div style={{margin: '0 10px'}}>
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Abstract 3D
      </Typography>
      <Typography sx={{ color: "gray" }}>Nature Image</Typography>
      </div>
    </div>
  );
};

export default Product;
