var request = require("request");
// set parameters
const txHash = "0x6a502fab01e83e41b1f0dba0448800ccee7e8a379823b938ecf6e12e5491a110";
// set url
const url = "https://api.deversifi.com/v1/pub/transaction/" + txHash;
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});
