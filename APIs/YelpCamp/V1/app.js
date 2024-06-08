//dependencies and setup
var express = require("express");
var app = express();

//default settings
app.set('view engine', 'ejs');

//pages
app.get("/", function(req,res){
    res.render("home")  
});

//Setup port for listening
app.listen(process.env.PORT, process.env.IP, function(){
 console.log("YelpCamp is online!")   
});