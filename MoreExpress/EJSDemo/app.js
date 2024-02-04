var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.render("home.ejs"); 
});


//the brackets in the render allows transferance of objects.
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thing: thing});
})

app.listen(process.env.PORT, process.env.IP, function(){
 console.log("Server is listening!")   
});