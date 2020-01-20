var request = require("request");
// set url
const url = "https://api.deversifi.com/v1/pub/last24HoursVolume";
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});