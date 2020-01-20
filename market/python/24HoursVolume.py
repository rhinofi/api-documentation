import requests
import json

# set the url
url = "https://api.deversifi.com/v1/pub/24HoursVolume/{year}/{month}/{day}"

# set the parameters
url = url.format(year=2020, month=1, day=1)

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
