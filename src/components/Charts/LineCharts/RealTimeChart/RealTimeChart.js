import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

export default function RealTimeChart({ data, datakey }) {
  const formatTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp); // Assuming timeStamp is in milliseconds
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };
  console.log("line chart", data, datakey);
  return (
    <LineChart
      width={700}
      height={250}
      data={data}
      // margin={{
      //   top: 5,
      //   right: 30,
      //   left: 20,
      //   bottom: 5,
      // }}
    >
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis
        dataKey="time_stamp"
        // interval={Math.ceil(data.length / 10)}
        tickFormatter={formatTimeStamp}
        overflow="auto"
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={datakey} stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

RealTimeChart.propTypes = {
  data: PropTypes.any,
  datakey: PropTypes.any,
};
