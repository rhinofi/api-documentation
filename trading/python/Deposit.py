import requests
import json

# set the url
url = "https://api.deversifi.dev/v1/trading/w/deposit"

"""
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
"""
payload = {
    "token": "ZXR",
    "amount": 0,
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
