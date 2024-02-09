import React, { useState, useEffect } from "react";
import axios from "axios";
import EndPoints from "../../utils/Endpoints";
import { Link } from "react-router-dom";
import { Button, Grid, Box } from "@mui/material";
import AddDeviceForm from "../../components/Form/AddDeviceForm";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Add } from "@mui/icons-material";

const Device = () => {
  const [devices, setDevices] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const response = await axios.get(`${EndPoints.getAllDevice}`);
        console.log("reponse", response);
        setDevices(response.data.data);
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

    fetchDeviceData();
  }, []);
  console.log(devices);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={handleOpen}
          variant="outlined"
          size="small"
          color="dark"
          sx={{ background: "#4169E1", padding: "12px 16px", "&:hover": { background: "blue" } }}
        >
          Create Device
        </Button>
        <AddDeviceForm
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          setDevices={setDevices}
        />
      </Box>
      <Grid container display="flex" justify="center" mt={"16px"}>
        {devices.map((device) => (
          <Grid item md={3} key={device._id}>
            <Button
              component={Link}
              to={`/device/${device._id}`}
              variant="outlined"
              size="small"
              color="dark"
              sx={{
                padding: "32px",
                margin: "4px",
                width: "98%",
                background: "#434343",
                "&:hover": { background: "#434343" },
              }}
            >
              {device._id}
            </Button>
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

export default Device;
