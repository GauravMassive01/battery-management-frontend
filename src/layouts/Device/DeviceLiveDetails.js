import React, { useEffect, useState } from "react";

import useWebSocket from "react-use-websocket";
import { Grid, Box } from "@mui/material";
import GaugeChartLayout from "../../components/Charts/GuageChart/GaugeChartLayout";
import RealTimeChart from "../../components/Charts/LineCharts/RealTimeChart/RealTimeChart";
import EndPoints from "../../utils/Endpoints";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
const DeviceLive = () => {
  const [liveData, setLiveData] = useState([]);
  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(`${EndPoints.websocket1}/frontend`, {
    onOpen: () => console.log(`${EndPoints.websocket1}/frontend`),
    onMessage: (msg) => {
      const parsedData = JSON.parse(msg.data);
      console.log("parsed data", parsedData);
      setLiveData((prevData) => [...prevData, parsedData]);
    },
    onError: (error) => console.log("error", error),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => false,
  });
  return (
    <DashboardLayout>
      <Grid container>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {liveData.length > 0 ? (
            <>
              <Box sx={{ width: "400px" }}>
                <GaugeChartLayout
                  data={liveData[liveData.length - 1].I}
                  label={"Current"}
                />
              </Box>
              <Box sx={{ width: "400px" }}>
                <GaugeChartLayout
                  data={liveData[liveData.length - 1].V}
                  label={"Voltage"}
                />
              </Box>
              <Box sx={{ width: "400px" }}>
                <GaugeChartLayout
                  data={liveData[liveData.length - 1].SOC}
                  label={"SOC"}
                />
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ width: "400px" }}>
                <GaugeChartLayout data={0} label={"Current"} />
              </Box>
              <Box sx={{ width: "400px" }}>
                <GaugeChartLayout data={0} label={"Voltage"} />
              </Box>
              <Box sx={{ width: "400px" }}>
                <GaugeChartLayout data={0} label={"SOC"} />
              </Box>
            </>
          )}
        </Grid>

        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "42px"
          }}
        >
          <Box sx={{ background: "#fff", padding: "16px 16px 0px 16px" }}>
            <RealTimeChart data={liveData} datakey={"V"} />
          </Box>
          <Box sx={{ background: "#fff", padding: "16px 16px 0px 16px" }}>
            <RealTimeChart data={liveData} datakey={"I"} />
          </Box>
          <Box sx={{ background: "#fff", padding: "16px 16px 0px 16px" }}>
            <RealTimeChart data={liveData} datakey={"SOC"} />
          </Box>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default DeviceLive;
