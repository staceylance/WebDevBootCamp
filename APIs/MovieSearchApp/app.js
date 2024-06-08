
//dependancies / imports
var express = require("express");
var app = express();
var axios = require('axios');
var OMDBAPIKey = "c588ee6d";

app.set('view engine', 'ejs');
//Pages, etc
app.get("/", function(req,res){
    res.render("home")  
})

app.get("/results", async function(req,res){
//first item in brackets is name inside of rendered ejs file.
    var SearchString = req.query.Search;
    console.log(SearchString);
    var data = await fetchFromAPI(SearchString, OMDBAPIKey);
    res.render("results", {data: data["data"]["Search"]});
})



//function call
async function fetchFromAPI(search, OMDBAPIKey) {
    var searchString = "http://www.omdbapi.com/?s=" + search + "&apikey=" + OMDBAPIKey;
    console.log(searchString)
    return await axios.get(searchString)
};


//Setup for port listening

app.listen(process.env.PORT, process.env.IP, function(){
 console.log("Movie App is listening!")   
});