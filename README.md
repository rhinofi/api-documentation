# api-documentation


  The rhino.fi API allows trading of cryptocurrency tokens from an Ethereum wallet or smart-contract.
The available endpoints allow access to submit, cancel and query placed orders onto the rhino.fi order book, whilst keeping full custody of funds and authenticating only using an Ethereum account. By using this API anyone is able to create and integrate their own interfaces, or run trading algorithms whilst keeping secure control of their funds in a personal Ethereum wallet.

  The rhino.fi APIs can be interacted with directly as described by the endpoint documentation available on https://docs.rhino.fi/ or via a client library. The dvf-client-js library simplifies the interaction with the exchange and helps you get started quicker. The library itself and tutorial on how to use it can be found on the rhino.fi Github - https://github.com/rhinofi/

This documentation set is actively maintained and updated. If you would like to suggest any changes or find there is something missing, please reach out to us via email - feedback@rhino.fi - or leave a suggestion as a comment.

The base URL for requests is https://api.rhino.fi
Trading base url: https://api.rhino.fi/v1/trading/
Public volume data base url: https://api.rhino.fi/v1/pub/
Price data base url: https://api.rhino.fi/bfx/v2/
Price data websocket base url : https://api.rhino.fi/bfx/ws/2/

