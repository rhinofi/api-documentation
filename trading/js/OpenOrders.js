var request = require("request");
/*
set payload

symbol
    string, optional, trading pair, separated by ":"

nonce
    number, seconds since epoche. Gives the time until this nonce is valid

signature
    hex-string, the signature obtained by signing the nonce with Your private Ethereum key
*/
const payload = {
    "symbol": "ETH:USDT",
    "nonce": 1577836800000,
    "signature": "0x1234abcd"
}
const url = "https://api.deversifi.dev/v1/trading/r/openOrders";
// execute request and print result
request.post({url:url, formData:payload}, function(error, response, body) {
    console.log(JSON.parse(body));
});
