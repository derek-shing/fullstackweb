const express = require('express');
const https = require("https");


const endpoint = "https://api.openweathermap.org/data/2.5/weather";

var app = express();

const apiKey = "3e807ae7c345276231309ba84b9c3ead";
var param = "?units=metric&zip=91748&appid=" + apiKey;

app.get("/", function(req, res) {
  https.get(endpoint + param, function(response) {
    response.on("data", function(data) {
      var weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<h1>The current temperture is "+temp+"</h1>");
      res.write("<h1>The weather now is "+description+"</h1>");
      res.write('<img src="'+imageURL+'"/>');
      res.send();
    })
  })
})

app.listen(3000, function() {
  console.log("Weather project server started at port 3000...");
  //console.log(endpoint+param);
})
