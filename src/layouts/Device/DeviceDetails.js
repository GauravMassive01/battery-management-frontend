import React, { useState, useEffect } from "react";

import { Grid, Box, Button, ButtonBase } from "@mui/material";
import LinChartLayout from "../../components/Charts/LineCharts/DefaultLineChart";
import axios from "axios";
import EndPoints from "../../utils/Endpoints";
import { Link } from "react-router-dom";
import GaugeChartLayout from "../../components/Charts/GuageChart/GaugeChartLayout";
import moment from "moment/moment";
import TemperatureChart from "../../components/Charts/Temperature/TemperatureChart";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ResponsiveDateTimePickers from "../../components/DateTimePicker/ResponsiveDateTimePickers";

const DeviceDetails = () => {
  const [deviceRawData, setDeviceRawData] = useState([]);
  const [deviceInsight, setDeviceInsights] = useState([]);
  const [startTime, setStartTime] = useState(moment("2022-04-17T15:30"));
  const [endTime, setEndTime] = useState(moment("2022-04-17T16:30"));
  const fetchDeviceData = async () => {
    try {
      const response = await axios.get(`${EndPoints.getDeviceRawData}`);
      console.log("reponse", response);
      setDeviceRawData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchDeviceInsight = async () => {
    try {
      const data = await axios.get(
        `${
          EndPoints.getDeviceInsight
        }/:id?startTime=${startTime.valueOf()}&endTime=${endTime.valueOf()}`
      );
      // console.log("data", data);
      // setDeviceRawData(response.data.data);
      console.log("temperature", data);
      setDeviceInsights(data.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // useEffect(() => {
  //   fetchDeviceData();
  //   fetchDeviceInsight();
  // }, []);

  function handleOnClick() {
    console.log(startTime.valueOf(), endTime.valueOf());
    fetchDeviceData();
  }

  // console.log("data values", deviceInsight[0].records);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ maxWidth: "600px", display: "flex", flexDirection: "row" }}>
          {/* <DateTimeRangeLayout
            setStartTime={setStartTime}
            setEndTime={setEndTime}
          /> */}
          <ResponsiveDateTimePickers
            setStartTime={setStartTime}
            setEndTime={setEndTime}
          />
          <Button
            onClick={() => {
              handleOnClick();
            }}
            variant="outlined"
            sx={{
              width: "100px",
              color: "black",
              fontSize: "14px",
              marginLeft: "12px",
              background: "#4169E1",
              padding: "12px 16px",
              "&:hover": { background: "blue" },
            }}
          >
            Update
          </Button>
        </Box>

        <Button
          component={Link}
          to={`/device/live`}
          variant="outlined"
          sx={{
            width: "100px",
            color: "black",
            fontSize: "14px",
            background: "#4169E1",
            padding: "12px 16px",
            "&:hover": { background: "blue" },
          }}
        >
          Live
        </Button>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{ gap: "12px", display: "flex", alignItems: "flex-start" }}
      >
        <Box
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "32px",
            gap: "16px",
          }}
        >
          <Box sx={{ width: "400px" }}>
            <GaugeChartLayout data={50} label={"Current"} />
          </Box>
          <Box sx={{ width: "400px" }}>
            <GaugeChartLayout data={40} label={"Voltage"} />
          </Box>
          <Box sx={{ width: "400px" }}>
            <GaugeChartLayout data={60} label={"SOC"} />
          </Box>
        </Box>
        <Box
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "32px",
            gap: "42px",
          }}
        >
          <Box sx={{ background: "#fff", padding: "16px 16px 0px 16px" }}>
            <LinChartLayout
              data={deviceRawData}
              datakey={"V"}
              xlable={"Time"}
              ylable={"Voltage"}
            />
          </Box>
          <Box sx={{ background: "#fff", padding: "16px 16px 0px 16px" }}>
            <LinChartLayout
              data={deviceRawData}
              datakey={"I"}
              xlable={"Time"}
              ylable={"Current"}
            />
          </Box>
          <Box sx={{ background: "#fff", padding: "16px 16px 0px 16px" }}>
            <LinChartLayout
              data={deviceRawData}
              datakey={"SOC"}
              xlable={"Time"}
              ylable={"Soc"}
            />
          </Box>
        </Box>
      </Grid>

      {deviceInsight.length > 0 ? (
        <Box sx={{ background: "#fff", padding: "16px", marginLeft: "-14px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",

              marginTop: "48px",
            }}
          >
            <TemperatureChart
              data={deviceInsight.length > 0 && deviceInsight[0].records}
              datakey1={"T1"}
              datakey2={"T2"}
              datakey3={"T3"}
            />
          </Box>
          <Box
            sx={{
              display: "flex ",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginTop: "24px",
            }}
          >
            <Box sx={{ paddingTop: "40px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Box
                  sx={{
                    width: "12px",
                    height: "3px",
                    backgroundColor: "red",
                  }}
                ></Box>
                <Box>T_amb</Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Box
                  sx={{
                    width: "12px",
                    height: "3px",
                    backgroundColor: "red",
                  }}
                ></Box>
                <Box>T1</Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Box
                  sx={{
                    width: "12px",
                    height: "3px",
                    backgroundColor: "red",
                  }}
                ></Box>
                <Box>T2</Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Box
                  sx={{
                    width: "12px",
                    height: "3px",
                    backgroundColor: "red",
                  }}
                ></Box>
                <Box>T3</Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <Box>
                <Box>max</Box>
                <Box>{deviceInsight[0].maxTAmb}</Box>
                <Box>{deviceInsight[0].maxT1}</Box>
                <Box>{deviceInsight[0].maxT2}</Box>
                <Box>{deviceInsight[0].maxT3}</Box>
              </Box>
              <Box>
                <Box>min</Box>
                <Box>{deviceInsight[0].minTAmb}</Box>
                <Box>{deviceInsight[0].minT1}</Box>
                <Box>{deviceInsight[0].minT2}</Box>
                <Box>{deviceInsight[0].minT3}</Box>
              </Box>
              <Box>
                <Box>avg</Box>
                <Box>{deviceInsight[0].avgTAmb}</Box>
                <Box>{deviceInsight[0].avgT1}</Box>
                <Box>{deviceInsight[0].avgT2}</Box>
                <Box>{deviceInsight[0].avgT3}</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}
    </DashboardLayout>
  );
};

export default DeviceDetails;
