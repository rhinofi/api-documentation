var request = require("request");
// set parameters
const year = "2020";
const month = "01";
const day = "01";
// set url
const url = "https://api.rhino.fi/v1/pub/24HoursVolume/" + year + "/" + month + "/" + day;
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});