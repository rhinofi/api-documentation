var request = require("request");
/*
set payload

starkKey 
    hex-string (wihtout leading 0x), the x-value of the 
    starkPublicKey
    
ethAddress
    hex-string, Your Ethereum Address. 
    Be sure that You have access to its private key, 
    You will need to sign data with it for other 
    requests to this api
*/
const payload = {
    "starkKey": "abcdef",
    "ethAddress": "0xabcDEF"
}
const url = "https://api.deversifi.dev/v1/trading/w/preRegister";
// execute request and print result
request.post({url:url, formData:payload}, function(error, response, body) {
    console.log(JSON.parse(body));
});
