var request = require("request");

/*
set payload

orderId
    string, the id of the order, if You want to see all open orders use /trading/r/openOrders

nonce
    number, seconds since epoche. Gives the time until this nonce is valid

signature
    hex-string, the signature obtained by signing the nonce with Your private Ethereum key
*/
const payload = {
    "orderId": "abcde",
    "nonce": 1577836800000,
    "signature": "0x1234abcd"
}
const url = "https://api.deversifi.dev/v1/trading/w/cancelOrder";

// execute request and print result
request.post({url:url, formData:payload}, function(error, response, body) {
    console.log(JSON.parse(body));
});
