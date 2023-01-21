import React from "react";
import MapViews from "react-native-maps";

const Map = () => {
  return (
    <MapViews
      initialRegion={{
        latitude: 16.814765,
        longitude: 96.168578,
        latitudeDelta: 16.7196,
        longitudeDelta: 57.7644,
      }}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Map;
