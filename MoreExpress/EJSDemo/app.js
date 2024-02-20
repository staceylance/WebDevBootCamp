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

app.get("/posts", function(req,res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
        ];
//first item in brackets is name inside of rendered ejs file.
    res.render("posts.ejs", {posts: posts});
})
app.listen(process.env.PORT, process.env.IP, function(){
 console.log("Server is listening!")   
});