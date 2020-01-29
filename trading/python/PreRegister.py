import requests
import json

# set the url
url = "https://api.deversifi.dev/v1/trading/w/preRegister"

"""
set payload

starkKey 
    hex-string (wihtout leading 0x), the x-value of the 
    starkPublicKey
    
ethAddress
    hex-string, Your Ethereum Address. 
    Be sure that You have access to its private key, 
    You will need to sign data with it for other 
    requests to this api
"""
payload = {
    "starkKey": "abcdef",
    "ethAddress": "0xabcDEF"
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
