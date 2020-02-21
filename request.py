import requests
import json

headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

params = {
    "Payload": "{\"token\":\"ZRX\",\"amount\":1,\"starkKey\":{\"x\":\"6d840e6d0ecfcbcfa83c0f704439e16c69383d93f51427feb9a4f2d21fbe075\",\"y\":\"58f7ce5eb6eb5bd24f70394622b1f4d2c54ebca317a3e61bf9f349dccf166cf\"},\"starkSignature\":{\"r\":\"1f38f551d798562c16d28733c7e3ff6850898d82f0ac9ccd39d373303b1778c\",\"s\":\"518560420e52a37e9f580f024fc0fe8572cb2f5437a839075bbf4b2b123d572\",\"recoveryParam\":1},\"starkVaultId\":1000003}",
}

url = f"https://api.deversifi.dev/v1/trading/w/deposit"

response = requests.request(
    "POST",
    url,
    headers=headers,
    data=params["Payload"],
)

print(json.dumps(response.json(), indent=2))