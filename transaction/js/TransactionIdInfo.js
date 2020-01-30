var request = require("request");
// set parameters
const txHash = "0x450a8e0db4966a9b05bcbba038a4b1d74c30b0b178ff76f325dc7da9c56f305a";
// set url
const url = "https://api.deversifi.com/v1/pub/transaction/" + txHash;
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});
