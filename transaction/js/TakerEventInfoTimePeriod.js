var request = require("request");
// set parameters
const taker = "0xaf8ae6955d07776ab690e565ba6fbc79b8de3a5d";
const startDate = "startDate=1577836800000";
const endDate = "endDate=1577923200000";
// set url
const url = "https://api.deversifi.com/v1/pub/events/taker/" + taker + "?" + startDate + "&" + endDate;
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});
