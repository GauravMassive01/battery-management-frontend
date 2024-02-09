// const baseurl = "http://13.201.69.26:3000/api/v1/";
// const websocket1 = "ws:13.201.69.26:3001";
// const websocket2 = "ws:13.201.69.26:3002";
const websocket1 = "ws:localhost:3001";
const websocket2 = "ws:host:3002";
const baseurl = "http://localhost:3000/api/v1/";

const EndPoints = {
  websocket1: websocket1,
  websocket2: websocket2,
  getAllDevice: baseurl + "device",
  getDeviceRawData: baseurl + "battery/raw",
  getDeviceInsight: baseurl + "battery/insight",
  createDevice: baseurl + "device",
};

export default EndPoints;
