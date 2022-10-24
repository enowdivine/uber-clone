const getLocationCoordinates = async (req, res) => {
  const mapUrl = `${process.env.NEXT_PUBLIC_MAP_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(mapUrl);

    const data = await response.json();

    res.status(200).send({ message: "success", data: data.features[0].center });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getLocationCoordinates;
