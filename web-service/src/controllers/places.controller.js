const {
  getPlacesNotGeoJson,
  getPlacesGeoJson,
} = require("../models/places.model");

exports.getPlaces = async (req, res) => {
  try {
    const type = req.query.format;
    if (type !== "geojson") {
      const places = await getPlacesNotGeoJson();
      return res.json({
        success: true,
        message: "Places get successfully",
        data: places.rows,
      });
    } else {
      const places = await getPlacesGeoJson();
      return res.json({
        success: true,
        message: "Places get successfully",
        data: places.rows[0]["jsonb_build_object"],
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Places get unsuccessfully",
      message: `Error: err.message`,
    });
  }
};
