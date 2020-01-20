var request = require("request");
// set parameters
const startDate = "startDate=1577836800000";
const endDate = "endDate=1577923200000";
// set url
const url = "https://api.deversifi.com/v1/pub/USDRanking?" + startDate + "&" + endDate;
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});