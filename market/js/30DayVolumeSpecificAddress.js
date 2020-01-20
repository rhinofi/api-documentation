var request = require("request");
// set parameters
const address = "0xf63246f4df508eba748df25daa8bd96816a668ba";
// set url
const url = "https://api.deversifi.com/v1/pub/30DaysVolume/" + address;
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});