import requests
import json

# set the url
url = "https://api.deversifi.com/bfx/v2/candles/trade:{timeframe}:{symbol}/{section}"

"""
set parameters

timeframe 
    string, available values: '1m', '5m', '15m', '30m', '1h', '3h', '6h','12h', '1D','7D', '14D', '1M'

symbol
    string, trading pair

section
    string, available values: "last", "hist"
"""
url = url.format(
    timeframe="1m",
    symbol="tETHUSD",
    section="hist")

"""
set optional parameters, You can skp this step

limit
    integer, limits the amount of results

sort
    integer, determines if the results should be sorted
"""
url += "?limit={limit}&sort={sort}"
url = url.format(limit=10, sort=-1)


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
