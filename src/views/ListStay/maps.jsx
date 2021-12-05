import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// lat: -6.1091774,
// lng: 106.7403209,
// AIzaSyAQqI0lz9tX8YSBkZ1SvRWlAwkSbqepFCY
// AIzaSyCZQdWZWsNyakL30EbvVherj04c9HcqFc8

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

function Maps(props) {
  const [rooms, setRooms] = useState(props.room);
  const position = {
    lat: rooms.Latitude,
    lng: rooms.Longitude,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAQqI0lz9tX8YSBkZ1SvRWlAwkSbqepFCY",
  });

  const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker onLoad={onLoad} position={position} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
