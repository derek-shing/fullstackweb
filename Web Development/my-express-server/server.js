const express = require('express');

const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.send("<h1>hello World!</h1>");
});

function getHtml(){
  return __dirname+"/index.html"
}

app.get("/html",function(req, res){
  res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  console.log(req.body);
  res.send("The result is " + result);
})



app.listen(3000,function(){
  console.log("Server start...");
});
