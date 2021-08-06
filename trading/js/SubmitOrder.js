var request = require("request");
/*
set payload

cid
    string, optional, client-id

gid
    string, optional, group-id

type
    string, the type of this order

symbol
    string, optional, trading pair, separated by ":"

amount
    number, the amount of this order

price
    number, price per unit

meta
    dict, optional, keys: [starkOrder, starkMessage, ethAddress, starkKey, starkSignature]
    starkOrder: dict, optional, keys: [vaultIdSell, vaultIdBuy, amountSell, amountBuy, tokenSell, tokenBuy, nonce, expirationTimestamp]
    starkMessage: hex-string
    ethAddress: hex-string, leading 0x
    starkKey: hex-string
    starkSignature: hex-string

protocol
    string, the protocol to use, for now "stark"

partnerId
    string, the partnerid

feeRate
    string

dynamicFeeRate
    string
*/
const payload = {
    "cid": "",
    "gid": "",
    "type": "EXCHANGE LIMIT",
    "symbol": "ETH:USDT",
    "amount": "1",
    "price": 140,
    "meta": {
        "starkOrder": {
            "vaultIdSell": 0,
            "vaultIdBuy": 1,
            "amountSell": "1",
            "amountBuy": "2",
            "tokenSell": "0x2",
            "tokenBuy": "0x1",
            "nonce": 0,
            "expirationTimestamp": 438947
        },
        "starkMessage": "0123abcd",
        "ethAddress": "0xabCDef0123",
        "starkKey": "43210efbac",
        "starkSignature": "1234abcd"
    },
    "protocol": "stark",
    "partnerId": "partner",
    "feeRate": "",
    "dynamicFeeRate": ""
}
const url = "https://api.deversifi.dev/v1/trading/w/submitOrder";
// execute request and print result
request.post({url:url, json:payload}, function(error, response, body) {
    console.log(body);
});
