export const tripSchema = {
  name: "trips",
  type: "document",
  title: "Trips",
  fields: [
    {
      name: "dropoff",
      type: "string",
      title: "Drop Off",
    },
    {
      name: "pickup",
      type: "string",
      title: "Pick Up",
    },
    {
      name: "rideCategory",
      type: "string",
      title: "Trip Type",
    },
    {
      name: "price",
      type: "number",
      title: "Trip price",
    },
    {
      name: "rideTimestamp",
      type: "datetime",
      title: "Trip timestamp",
    },
    {
      name: "passenger",
      type: "reference",
      title: "Trip passenger",
      to: [
        {
          name: "name",
          type: "string",
          title: "Name",
        },
      ],
    },
  ],
};
