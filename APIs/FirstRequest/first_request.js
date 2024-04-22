import fetch from 'node-fetch';

try {
    var response = await fetch('http://www.googlaoubfeb.com');
    var body = await response.text();
    console.log(body);
} catch (error) {
    console.log("Something has gone wrong!");
}