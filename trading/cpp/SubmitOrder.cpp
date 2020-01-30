#include <sstream>
#include <cstdlib>
#include <curlpp/cURLpp.hpp>
#include <curlpp/Easy.hpp>
#include <curlpp/Options.hpp>
#include <curlpp/Exception.hpp>

int main()
{
  /*
  set payload

  cid
      string, optional, client-id

  gid
      string, optional, group-id

  type
      string, the type of this order

  symbol
      string, optional, trading pair, separated by ":"

  amount
      number, the amount of this order

  price
      number, price per unit

  meta
      dict, optional, keys: [starkOrder, starkMessage, ethAddress, starkKey, starkSignature]
      starkOrder: dict, optional, keys: [vaultIdSell, vaultIdBuy, amountSell, amountBuy, tokenSell, tokenBuy, nonce, expirationTimestamp]
      starkMessage: hex-string
      ethAddress: hex-string, leading 0x
      starkKey: hex-string
      starkSignature: hex-string

  protocol
      string, the protocol to use, for now "stark"

  partnerId
      string, the partnerid

  feeRate
      string

  dynamicFeeRate
      string
  */
  std::string starkOrder = "{\"vaultIdSell\": 0,\"vaultIdBuy\": 1,\"amountSell\": \"1\",\"amountBuy\": \"2\",\"tokenSell\": \"0x2\",\"tokenBuy\": \"0x1\",\"nonce\": 0,\"expirationTimestamp\": 438947}";
  std::string meta = "{\"starkOrder\":" + starkOrder + ",\"starkMessage\": \"0123abcd\",\"ethAddress\": \"0xabCDef0123\",\"starkKey\": \"43210efbac\",\"starkSignature\": \"1234abcd\"}";
  std::string payload = "{\"cid\": \"\", \"gid\": \"\", \"type\": \"EXCHANGE LIMIT\", \"symbol\": \"ETH:USD\", \"amount\": \"1\", \"price\": 140, \"meta\":" + meta + ", \"protocol\": \"stark\", \"partnerId\": \"partner\", \"feeRate\": \"\", \"dynamicFeeRate\": \"\"}";
  // set the url
  std::string url = "https://api.deversifi.dev/v1/trading/w/submitOrder";

  try {
    // use the automatic cleanup of curlpp's used resources (RAII style)
    curlpp::Cleanup cleaner;

    // define the request and response variables
    curlpp::Easy request;
    std::ostringstream response;
    std::list<std::string> header;
    header.push_back("Content-Type: application/json");

    // set the request options
    request.setOpt(new curlpp::options::Url(url));
    request.setOpt(new curlpp::options::HttpHeader(header));
    request.setOpt(new curlpp::options::PostFields(payload));
    request.setOpt(new curlpp::options::PostFieldSize(payload.length()));
    request.setOpt(new curlpp::options::WriteStream(&response));

    // perform the request
    request.perform();

    // print the result 
    std::cout << response.str() << std::endl;
  
    return EXIT_SUCCESS;
  }
  catch ( curlpp::LogicError & e ) {
    std::cout << e.what() << std::endl;
  }
  catch ( curlpp::RuntimeError & e ) {
    std::cout << e.what() << std::endl;
  }
  return EXIT_FAILURE;
}
