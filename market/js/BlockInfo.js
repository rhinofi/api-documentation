var request = require("request");
// set parameters
const blockNumber = "9278374";
// set url
const url = "https://api.rhino.fi/v1/pub/block/" + blockNumber;
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});