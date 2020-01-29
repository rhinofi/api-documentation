import requests
import json

# set the url
url = "https://api.deversifi.com/bfx/v2/book/{symbol}/{precision}"

"""
set parameters

symbol
    string, trading pair

precision
    string, sets the precision of the calculated result
"""
url = url.format(
    symbol="tETHUSD",
    precision="P0")  # P0-P4, R0

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
