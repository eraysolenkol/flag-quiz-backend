const express = require("express");
const countryService = require("./services/countryService.js")

const PORT = "8080";
const app = express();
const countryRoute = require("./routes/countryRoute.js")

app.use("/api/country", countryRoute)



app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}/`);
});