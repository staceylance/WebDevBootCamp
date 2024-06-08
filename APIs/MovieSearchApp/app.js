
//dependancies / imports
var express = require("express");
var app = express();
var axios = require('axios');
// OMDB uses individual API key. That key is used in this variable. See website for more info.
var OMDBAPIKey = "";

app.set('view engine', 'ejs');
//Pages, etc
app.get("/", function(req,res){
    res.render("home")  
})

app.get("/results", async function(req,res){
//first item in brackets is name inside of rendered ejs file.
    var SearchString = req.query.Search;
    var data = await fetchFromAPI(SearchString, OMDBAPIKey);
    res.render("results", {data: data["data"]["Search"]});
})



//function call
async function fetchFromAPI(search, OMDBAPIKey) {
    var searchString = "http://www.omdbapi.com/?s=" + search + "&apikey=" + OMDBAPIKey;
    return await axios.get(searchString)
};


//Setup for port listening

app.listen(process.env.PORT, process.env.IP, function(){
 console.log("Movie App is listening!")   
});