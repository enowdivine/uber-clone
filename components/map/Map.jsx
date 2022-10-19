import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const style = {
  wrapper: `flex-1 h-full w-full`,
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerClassName={style.wrapper}
      center={{ lat: 44, lng: -80 }}
      zoom={10}
    >
      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
};

export default Map;
