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

export default function TemperatureChart({ data, datakey1, datakey2, datakey3 }) {
  const formatTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp); // Assuming timeStamp is in milliseconds
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };
  //   console.log("line chart", data, datakey);
  return (
    <LineChart
      width={1100}
      height={300}
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
      <Line type="monotone" dataKey={datakey1} stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey={datakey2} stroke="#32DD45" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey={datakey3} stroke="#FFD200" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

TemperatureChart.propTypes = {
  data: PropTypes.any,
  datakey1: PropTypes.any,
  datakey2: PropTypes.any,
  datakey3: PropTypes.any,
  datakey4: PropTypes.any,
  datakey5: PropTypes.any,
};
