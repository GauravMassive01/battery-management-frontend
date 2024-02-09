import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import axios from "axios";
import EndPoints from "../../utils/Endpoints";

const AddDeviceForm = ({ open, handleClose, setDevices }) => {
  const [batteryId, setBatteryId] = useState("");
  const [userId, setUserId] = useState("");
  const [gpsId, setGpsId] = useState("");

  async function saveDeviceDetails() {
    const savedDevice = await axios.post(`${EndPoints.createDevice}`, {
      battery_id: batteryId,
      user_id: userId,
      gps_id: gpsId,
    });
    console.log(savedDevice);
    setDevices((prevState) => [...prevState, savedDevice.data.data]);
    handleClose();
  }

  const handleBatteryIdChange = (event) => {
    setBatteryId(event.target.value);
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleGpsIdChange = (event) => {
    setGpsId(event.target.value);
  };

  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "600px",
              width: { xs: "360px", md: "100%" },
              bgcolor: "background.paper",
              boxShadow: 24,
              display: "flex",
              flexDirection: "column",
              border: "none !important",
              borderRadius: "16px !important",
            }}
          >
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ mb: 2, textAlign: "center", marginTop: "12px" }}
            >
              Add Devices
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <TextField
                id="batteryId"
                label="Battery ID"
                variant="outlined"
                onChange={handleBatteryIdChange}
                fullWidth
                sx={{ width: "50%", mb: 2 }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <TextField
                id="userId"
                label="User ID"
                variant="outlined"
                onChange={handleUserIdChange}
                sx={{ width: "50%", mb: 2 }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <TextField
                id="gpsId"
                label="GPS ID"
                variant="outlined"
                fullWidth
                onChange={handleGpsIdChange}
                sx={{ width: "50%", mb: 2 }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={saveDeviceDetails}
                sx={{
                  width: "30%",
                  color: "black",
                  backgroundColor: "background.paper",
                  marginBottom: "12px",
                  "&:hover": {
                    color: "#fff", // Change to the desired hover color
                  },
                }}
              >
                Create Device
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

AddDeviceForm.propTypes = {
  open: PropTypes.any,
  handleClose: PropTypes.any,
  setDevices: PropTypes.any,
};

export default AddDeviceForm;
