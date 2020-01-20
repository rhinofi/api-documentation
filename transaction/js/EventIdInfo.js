var request = require("request");
// set parameters
const txHash = "0x1686cd265bf021a38f9a70531016e28cc8dabe41a6f9639eda5b2c3873cdb9d5";
const logIndex = "93";
// set url
const url = "https://api.deversifi.com/v1/pub/event/" + txHash + "-" + logIndex;
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});
