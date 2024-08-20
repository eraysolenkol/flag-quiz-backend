const db = require("../database/index.js")

class CountryService {
    collection = db.collection("countries");

    async getCountryByName(name) {
        try {
        const country = await this.collection.findOne({name: name});
        return country;
        } catch(err) {
            throw err;
        }
    }

    async getCountryByCode(code) {
        try {
            const country = await this.collection.findOne({"code2l": code})
            return country;
        } catch (err) {
            throw err;
        }
    }

    async getRandomCountry(count) {
        if (count > 250) {
            throw Error("Random country count can't be more than 250")
        }
        try {
            let countries = await this.collection.find({}).toArray();
            let randomCountries = [];
            for (let i = 0; i < count; i++) {
                let randomNumber = Math.floor(Math.random() * countries.length);
                if (randomCountries.includes(countries[randomNumber])) {
                    i--;
                    continue;
                }
                randomCountries.push(countries[randomNumber])
            }
            return randomCountries;
        } catch (error) {
            throw err;
        }
    }

}

module.exports = new CountryService();