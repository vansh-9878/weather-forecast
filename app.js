const express = require("express");
const app = express();
require("dotenv").config();
const apiKey = process.env.api_key;

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/Vansh/Web Developement/Small Projects/Weather/weather.html"
  );
});

app.listen(8080, () => {
  console.log("Server live....");
});

module.exports = { apiKey };
