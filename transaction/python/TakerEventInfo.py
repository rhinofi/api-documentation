import requests
import json

# set the url
url = "https://api.deversifi.com/v1/pub/events/taker/{taker}"

# set the parameters
url = url.format(
    taker="0xaf8ae6955d07776ab690e565ba6fbc79b8de3a5d")

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
