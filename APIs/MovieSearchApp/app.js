
//dependancies / imports
var express = require("express");
var app = express();
var axios = require('axios');
var OMDBAPIKey = "c588ee6d";

app.set('view engine', 'ejs');
//Pages, etc
app.get("/results", async function(req,res){
//first item in brackets is name inside of rendered ejs file.
    var data = await fetchFromAPI("s=Harry+Potter", OMDBAPIKey);
    console.log(data["data"]);
    res.render("results", {data: data["data"]["Search"]});
})


//function call
async function fetchFromAPI(search, OMDBAPIKey) {
    var searchString = "http://www.omdbapi.com/?" + search + "&apikey=" + OMDBAPIKey;
    console.log(searchString)
    return await axios.get(searchString)
};


//Setup for port listening

app.listen(process.env.PORT, process.env.IP, function(){
 console.log("Movie App is listening!")   
});