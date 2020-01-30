import requests
import json

# set the url
url = "https://api.deversifi.dev/v1/trading/w/submitOrder"

"""
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
"""
payload = {
    "cid": '',
    "gid": '',
    "type": 'EXCHANGE LIMIT',
    "symbol": 'ETH:USD',
    "amount": '0.1',
    "price": 1000,
    "meta": {
        "starkOrder": {
            "vaultIdSell": 1000002,
            "vaultIdBuy": 1000001,
            "amountSell": '97400000',
            "amountBuy": '100000000000000000',
            "tokenSell": '0x2',
            "tokenBuy": '0x1',
            "nonce": 0,
            "expirationTimestamp": 438947
        },
        "starkMessage": '597f31e19f2273413833ed1408edd7a2c60e9f82422852a1be7d11049be3268',
        "ethAddress": '0x341E46a49F15785373edE443Df0220DEa6a41Bbc',
        "starkKey": '77a3b314db07c45076d11f62b6f9e748a39790441823307743cf00d6597ea43',
        "starkSignature": 'b07c45076d1177a3b314db07c45076d11f62b6f9e748a39790441823307743cf00d6597ea43'
    },
    "protocol": 'stark',
    "partnerId": '',
    "feeRate": '',
    "dynamicFeeRate": ''
}

# standard headers
headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

# execute the request and load into dictionary
response = json.loads(requests.request(
    "POST", url, headers=headers, json=payload).text)

# print the response from dictionary
print(json.dumps(response, indent=2))
