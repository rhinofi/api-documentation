import requests
import json

# set the url
url = "https://api.deversifi.com/v1/pub/event/{tx_hash}-{log_index}"

# set the parameters
url = url.format(
    tx_hash="0x1686cd265bf021a38f9a70531016e28cc8dabe41a6f9639eda5b2c3873cdb9d5",
    log_index="93")

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
