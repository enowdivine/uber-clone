export const ridesSchema = {
  name: "rides",
  type: "Rides",
  title: "Users",
  fields: [
    {
      name: "orderById",
      type: "number",
      title: "Order by Id",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "priceMultiplier",
      type: "number",
      title: "Price Multiplier",
    },
    {
      name: "icon",
      type: "image",
      title: "Icon",
    },
  ],
};
