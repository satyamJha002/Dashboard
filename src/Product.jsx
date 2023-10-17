import React from "react";
import Box from "@mui/material/Box";

import "./App.css";

function Product() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "7px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3>Product Shell</h3>
      <input
        type="text"
        name=""
        value="Search"
        placeholder="Search"
        style={{
          border: "none",
          padding: "4px",
          borderRadius: "5px",
        }}
      />
      <select name="" id="select-option">
        <option value="">Last 30 days</option>
        <option value="">Last 1 month</option>
        <option value="">Last 1 year</option>
      </select>
    </Box>
  );
}

export default Product;
