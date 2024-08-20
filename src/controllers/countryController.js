const countryService = require("../services/countryService.js")

class CountryController {
    async getCountryByName(req, res) {
        try {
            let country = await countryService.getCountryByName(req.params.countryName);
            res.json(country);
        } catch (error) {
            res.status(500).json({"error":"an error occured"});
        }
    }

    async getCountryByCode(req,res) {
        try {
            let country = await countryService.getCountryByCode(req.params.code);
            res.json(country);
        } catch (error) {
            res.status(500).json({"error":"an error occured"});
        }
    }

    async getRandomCountry(req,res) {
        try {
            let country = await countryService.getRandomCountry(req.params.count);
            res.json(country);
        } catch (error) {
            res.status(500).json({"error":error.toString()})
        }
    }

}

module.exports = new CountryController();