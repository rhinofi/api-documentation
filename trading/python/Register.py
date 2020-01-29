import requests
import json

# set the url
url = "https://api.deversifi.dev/v1/trading/w/register"

"""
set payload

starkKey 
    hex-string (wihtout leading 0x), the x-value of the 
    starkPublicKey
    
nonce
    number, any number, You can choose

signature
    hex-string, the signature obtained by signing the nonce with Your private Ethereum key
"""
payload = {
    "starkKey": "abcdef",
    "nonce": 0,
    "signature": "0x1234abcd"
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
