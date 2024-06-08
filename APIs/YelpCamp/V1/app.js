//dependencies and setup
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//default settings
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

//pages
app.get("/", function(req,res){
    res.render("home")  
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds")
});

app.get("/campgrounds/new", function(req,res){
   res.render("new") 
});

app.post("/campgrounds", function(req,res){
    //TODO add posting for creation of new campground.
});

//Setup port for listening
app.listen(process.env.PORT, process.env.IP, function(){
 console.log("YelpCamp is online!")   
});