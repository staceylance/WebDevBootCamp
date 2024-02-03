var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hi there, Welcome to my Demo!");
});

app.get("/speak/pig", function (req, res) {
  res.send("The pig says 'Oink'");
});

app.get("/speak/cow", function (req, res) {
  res.send("The cow says 'Moo'");
});

app.get("/speak/dog", function (req, res) {
  res.send("The Dog says 'Woof'");
});

app.get("/repeat/hello/3", function (req, res) {
  res.send("Hello Hello Hello");
});

app.get("/repeat/hello/5", function (req, res) {
  res.send("Hello Hello Hello Hello Hello");
});

app.get("/repeat/blah/2", function (req, res) {
  res.send("blah blah");
});

app.listen(8080, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 8080);
})