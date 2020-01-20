import requests
import json

# set the url
url = "https://api.deversifi.com/v1/pub/block/{block_nr}"

# set the parameters
url = url.format(block_nr=9278374)

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
