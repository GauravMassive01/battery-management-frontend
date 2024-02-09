import React from "react";
import GaugeChart from "react-gauge-chart";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

function GaugeChartLayout({ data, label }) {
  return (
    <Box>
      <Box
        sx={{
          background: "white",
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          height: "266px",
        }}
      >
        <GaugeChart
          percent={data / 100}
          textColor="black"
          colors={["#3CB043", "#FFC371", "#FF5F6D"]}
        />
      </Box>

      <Typography variant="h6" component="h2" sx={{ textAlign: "center"}}>
        {label}
      </Typography>
    </Box>
  );
}

GaugeChartLayout.propTypes = {
  data: PropTypes.any,
  label: PropTypes.string,
};

export default GaugeChartLayout;
