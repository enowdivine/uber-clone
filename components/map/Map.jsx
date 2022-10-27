import { useEffect, useContext } from "react";
import { UberContext } from "../../context/uberContext";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const style = {
  wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);

  useEffect(() => {
    const mapbox = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/enowdivine/cl9oox5ws000a14kh3a2hvbi3",
      center: [5.705370387292239, 12.421155230486574],
      zoom: 5,
    });

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      if (map.current) {
        map.current.fitBounds([dropoffCoordinates, pickupCoordinates], {
          padding: 400,
        });
      }
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map.current);
  };

  return <div className={style.wrapper} id="map" />;
};

export default Map;
