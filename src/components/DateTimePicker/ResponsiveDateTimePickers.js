import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import { Box } from "@mui/material";
const ResponsiveDateTimePickers = ({ setStartTime, setEndTime }) => {
  const handleStartTimeChange = (val) => {
    setStartTime(val);
  };
  const handleEndTimeChange = (val) => {
    setEndTime(val);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <MobileDateTimePicker
          label="Start Time"
          defaultValue={moment("2022-04-17T15:30")}
          onChange={handleStartTimeChange}
        />
        <MobileDateTimePicker
          defaultValue={moment("2022-04-17T15:30")}
          label="End Time"
          onChange={handleEndTimeChange}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default ResponsiveDateTimePickers;
