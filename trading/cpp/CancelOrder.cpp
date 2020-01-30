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

  orderId
      string, the id of the order, if You want to see all open orders use /trading/r/openOrders

  nonce
      number, seconds since epoche. Gives the time until this nonce is valid

  signature
      hex-string, the signature obtained by signing the nonce with Your private Ethereum key
  */
  std::string payload = "{\"orderId\": \"abcde\", \"nonce\": 1577836800000, \"signature\": \"0x1234abcd\"}";

  // set the url
  std::string url = "https://api.deversifi.dev/v1/trading/w/cancelOrder";

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
