import fetch from 'node-fetch';

var results = await fetch ('http://www.wttr.in/Detroit?format=j1');
var body = await results.text();
var parsedData = JSON.parse(body)
var CurrentCondition = parsedData["current_condition"][0];

if (CurrentCondition.FeelsLikeF == CurrentCondition.temp_F) {
    var temperatureString = "it feels like " + CurrentCondition.FeelsLikeF + " because it is " + CurrentCondition.temp_F
} else {
    var temperatureString = "it feels like " + CurrentCondition.FeelsLikeF + ". But it is actually " + CurrentCondition.temp_F
};
console.log(temperatureString);
console.log("Temperatures taken at " + CurrentCondition.observation_time);
