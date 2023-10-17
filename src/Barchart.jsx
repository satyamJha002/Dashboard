import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Piechart from "./Piechart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Barchart() {
  const data = [
    {
      name: "Jan",
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      pv: 2800,
      amt: 2290,
    },
    {
      name: "Apr",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      pv: 2300,
      amt: 2500,
    },
    {
      name: "Jul",
      pv: 4000,
      amt: 2100,
    },
    {
      name: "Aug",
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Sep",
      pv: 3400,
      amt: 2100,
    },
    {
      name: "Oct",
      pv: 4100,
      amt: 2100,
    },
    {
      name: "Nov",
      pv: 1300,
      amt: 2100,
    },
    {
      name: "Dec",
      pv: 4320,
      amt: 2100,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            {" "}
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              Overview <br />{" "}
              <span style={{ fontSize: "12px" }}>Monthly Earnings</span>
            </p>
            <div className="charts">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            {" "}
            <Piechart />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
