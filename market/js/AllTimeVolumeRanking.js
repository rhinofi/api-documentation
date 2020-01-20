var request = require("request");
// set parameters
const currency = "ETH";
// set url
const url = "https://api.deversifi.com/v1/pub/tokenRanking/" + currency
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});