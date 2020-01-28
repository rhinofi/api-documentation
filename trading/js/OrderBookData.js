var request = require("request");
/*
set parameters

symbol
    string, trading pair

precision
    string, sets the precision of the calculated result
*/
const symbol = "tETHUSD";
const precision = "R0"; //P0-P4, R0
// set url
const url = "https://api.deversifi.com/bfx/v2/book/" + symbol + "/" + precision;
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});
