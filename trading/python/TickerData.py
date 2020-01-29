import requests
import json

# set the url
url = "https://api.deversifi.com/bfx/v2/tickers?symbols={symbols}"

"""
set parameters

symbol
    string, trading pair

You can provide a list of symbols, optional, n>0
"""
symbols = ["tMKRETH", "fUSD", "tETHUSD"]

# set the parameters
url = url.format(
    symbols=",".join(symbols))

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
