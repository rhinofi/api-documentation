var request = require("request");

/*
set parameters

timeframe 
    string, available values: '1m', '5m', '15m', '30m', '1h', '3h', '6h','12h', '1D','7D', '14D', '1M'

symbol
    string, trading pair, funding, e.g.: tETHUSDT, fUSD, fETH

section
    string, available values: "last", "hist"

period
    string, funding period, only required for funding candles
*/
const timeframe = "1m"; 
const symbol = "tETHUSD";
const section = "hist";

// left out because in this example we use trading pair tETHUSD
// const period = "p30"; 

/*
set optional parameters, You can skp this step

limit
    integer, limits the amount of results

sort
    integer, determines if the results should be sorted
    if = 1 it sorts results returned with old > new

start
    integer, optional, in ms

end
    integer, optional, in ms
*/
const limit = "limit=100";
const sort = "sort=-1";
// optional time slice
// const start = 0;
// const end = 0;

// set url
var url = "https://api.deversifi.com/bfx/v2/candles/trade:" + timeframe + ":" + symbol + "/" + section;
// set optional url params, You can skip this step
url += "?" + limit + "&" + sort;

// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});
