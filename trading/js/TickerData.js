var request = require("request");
// set parameters
// multiple values possible, just comma-separate them 
// t=trading, f=funding
const symbols = "tMKRETH,fUSD,tETHUSD"; 
// set url
const url = "https://api.deversifi.com/bfx/v2/tickers?symbols=" + symbols;
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});
