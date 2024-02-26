import fetch from 'node-fetch';

var results = await fetch ('http://www.wttr.in/Detroit?format=j1');
var body = await results.text();
var parsedData = JSON.parse(body)
console.log(parsedData);