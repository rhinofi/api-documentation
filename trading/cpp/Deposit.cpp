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

  token
      string, identifies a token

  amount
      number, int or float

  starkPublicKey
      dict, keys: [x,y], x and y of Your public stark key

  starkSignature
      dict, keys: [r, s, recoveryParam]
      r: hex-string
      s: hex-string
      recoveryParam: int
      signature of this message
  */
  std::string payload = "{\"token\": \"ETH\", \"amount\": 0, \"starkSignature\": \"{\"x\": \"abcde1234\", \"y\": \"def123abc\"}\", \"starkPublicKey\": \"{\"r\": \"123abc\", \"s\": \"432bcad\", \"recoveryParam\": 1}\"}";

  // set the url
  std::string url = "https://api.deversifi.dev/v1/trading/w/deposit";

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
