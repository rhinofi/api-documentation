var request = require("request");

/*
set parameters

timeframe 
    string, available values: '1m', '5m', '15m', '30m', '1h', '3h', '6h','12h', '1D','7D', '14D', '1M'

symbol
    string, trading pair

section
    string, available values: "last", "hist"
*/
const timeframe = "1m"; 
const symbol = "tETHUSD";
const section = "hist";

/*
set optional parameters, You can skp this step

limit
    integer, limits the amount of results

sort
    integer, determines if the results should be sorted
*/
const limit = "limit=100"
const sort = "sort=-1"

// set url
var url = "https://api.deversifi.com/bfx/v2/candles/trade:" + timeframe + ":" + symbol + "/" + section;
// set optional url params, You can skip this step
url += "?" + limit + "&" + sort;

// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});
