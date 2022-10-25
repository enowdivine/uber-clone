import { createContext, useState, useEffect } from "react";

export const UberContext = createContext();

export const UberProvider = ({ children }) => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const createLocationCoordinatePromise = (locationName, locationType) => {
    return new Promise(async (resolve, reject) => {
      const responses = await fetch("api/map/getLocationCoordinates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location: locationName,
        }),
      });

      const data = await responses.json();

      if ((data.message = "success")) {
        switch (locationType) {
          case "pickup":
            setPickupCoordinates(data.data);
            break;
          case "dropoff":
            setDropoffCoordinates(data.data);
            break;

          default:
            break;
        }
        resolve();
      } else {
        reject();
      }
    });
  };

  console.log(pickupCoordinates, dropoffCoordinates);

  useEffect(() => {
    if (pickup && dropoff) {
      (async () => {
        await Promise.all([
          createLocationCoordinatePromise(pickup, "pickup "),
          createLocationCoordinatePromise(dropoff, "dropoff "),
        ]);
      })();
    } else return;
  }, [pickup, dropoff]);

  return (
    <UberContext.Provider
      value={{
        pickup,
        setPickup,
        dropoff,
        setDropoff,
        pickupCoordinates,
        setPickupCoordinates,
        dropoffCoordinates,
        setDropoffCoordinates,
      }}
    >
      {children}
    </UberContext.Provider>
  );
};
