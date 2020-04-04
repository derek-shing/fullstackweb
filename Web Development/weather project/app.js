const express = require('express');
const https = require("https");


const endpoint = "https://api.openweathermap.org/data/2.5/weather";

var app = express();

const apiKey = "3e807ae7c345276231309ba84b9c3ead";
var param = "?zip=91748&appid=" + apiKey;

app.get("/", function(req, res) {
  https.get(endpoint + param, function(response) {
    response.on("data", function(data) {
      var weatherData = JSON.parse(data);
      console.log(weatherData);
      res.send(weatherData);
    })
  })
})

app.listen(3000, function() {
  console.log("Weather project server started at port 3000...");
  //console.log(endpoint+param);
})
