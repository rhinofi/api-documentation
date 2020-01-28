var request = require("request");
/*
set payload

starkKey 
    hex-string (wihtout leading 0x), the x-value of the 
    starkPublicKey
    
nonce
    number, any number, You can choose

signature
    hex-string, the signature obtained by signing the nonce with Your private Ethereum key
*/
const payload = {
    "starkKey": "abcdef",
    "nonce": 0,
    "signature": "0x1234abcd"
}
const url = "https://api.deversifi.dev/v1/trading/w/register";
// execute request and print result
request.post({url:url, formData:payload}, function(error, response, body) {
    console.log(JSON.parse(body));
});
