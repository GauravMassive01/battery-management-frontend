import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = ({ coordinates }) => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA00C5oMIAZe3CQzg107eG1SgdPCdPyq5o" }} // Replace with your Google Maps API key
        defaultCenter={{ lat: 0, lng: 0 }} // Default center of the map
        defaultZoom={5} // Default zoom level
      >
        {/* Loop through the coordinates and display markers */}
        {coordinates.map((coordinate, index) => (
          <Marker key={index} lat={coordinate.lat} lng={coordinate.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

// Marker component
const Marker = () => <div style={{ color: "red" }}>Marker</div>;

export default GoogleMap;
