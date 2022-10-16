const places = require("express").Router();

const placesController = require("../controllers/places.controller");

places.get("/", placesController.getPlaces);

module.exports = places;
