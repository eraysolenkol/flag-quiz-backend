const router = require("express").Router()
const countryController = require("../controllers/countryController.js")

router.get("/name/:countryName", countryController.getCountryByName);
router.get("/code/:code", countryController.getCountryByCode);
router.get("/random/:count", countryController.getRandomCountry);

module.exports = router;