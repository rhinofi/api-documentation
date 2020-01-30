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

  starkKey 
      hex-string (wihtout leading 0x), the x-value of the 
      starkPublicKey
      
  ethAddress
      hex-string, Your Ethereum Address. 
      Be sure that You have access to its private key, 
      You will need to sign data with it for other 
      requests to this api
  */
  std::string payload = "{\"starkKey\": \"abcdef\", \"ethAddress\": \"0xabcDEF\"}";

  // set the url
  std::string url = "https://api.deversifi.dev/v1/trading/w/preRegister";

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
