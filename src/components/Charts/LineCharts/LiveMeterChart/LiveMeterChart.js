import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import PropTypes from "prop-types";

const LiveMeterChart = ({ chartData }) => {
  return (
    <RadialBarChart width={300} height={300} innerRadius="10%" outerRadius="80%" data={chartData}>
      <RadialBar fill="#8884d8" background dataKey="V" />
      <Tooltip />
      <Legend />
    </RadialBarChart>
  );
};

LiveMeterChart.propTypes = {
  chartData: PropTypes.any,
};

export default LiveMeterChart;
