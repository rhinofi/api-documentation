import requests
import json

# set the url
url = "https://api.deversifi.com/v1/pub/30DaysVolume/{address}"

# set the parameters
url = url.format(address="0xf63246f4df508eba748df25daa8bd96816a668ba")

# standard headers
headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

# execute the request and load into dictionary
response = json.loads(requests.request(
    "GET", url, headers=headers).text)

# print the response from dictionary
print(json.dumps(response, indent=2))
