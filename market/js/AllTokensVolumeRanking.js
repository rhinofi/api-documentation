var request = require("request");
// set url
const url = "https://api.rhino.fi/v1/pub/USDRanking";
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});