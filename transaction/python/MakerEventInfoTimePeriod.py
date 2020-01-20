import requests
import json

# set the url
url = "https://api.deversifi.com/v1/pub/events/maker/{maker}"

# set the parameters
url = url.format(
    maker="0xfc898b18a70ce49579f8d79a32e29928c15b4bc8")

# give start- and enddates as params
params = {
    "startDate": "1577836800000",
    "endDate": "1577923200000"
}

# standard headers
headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

# execute the request and load into dictionary
response = json.loads(requests.request(
    "GET", url, headers=headers, params=params).text)

# print the response from dictionary
print(json.dumps(response, indent=2))
