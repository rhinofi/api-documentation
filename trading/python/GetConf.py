import requests
import json

# set the url
url = "https://api.deversifi.dev/v1/trading/r/getConf"

# standard headers
headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

# execute the request and load into dictionary
response = json.loads(requests.request(
    "POST", url, headers=headers).text)

# print the response from dictionary
print(json.dumps(response, indent=2))
