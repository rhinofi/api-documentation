var request = require("request");

/*
set payload

token
    string, identifies a token

amount
    number, int or float

starkPublicKey
    dict, keys: [x,y], x and y of Your public stark key

starkSignature
    dict, keys: [r, s, recoveryParam]
    r: hex-string
    s: hex-string
    recoveryParam: number
    signature of this message

starkVaultId
    number, optional, the id of Your starkVault or the defaultStartVaultId
*/
const payload = {
    "token": "ZXR",
    "amount": 1,
    "starkPublicKey": {
        "x": "abcde1234",
        "y": "def123abc"
    },
    "starkSignature": {
        "r": "123abc",
        "s": "432bcad",
        "recoveryParam": 1
    }, 
    "starkVaultId": 0
};
const url = "https://api.deversifi.dev/v1/trading/w/deposit";
// execute request and print result
request.post({url:url, json:payload}, function(error, response, body) {
    console.log(body);
});
