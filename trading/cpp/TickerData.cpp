#include <sstream>
#include <cstdlib>
#include <curlpp/cURLpp.hpp>
#include <curlpp/Easy.hpp>
#include <curlpp/Options.hpp>
#include <curlpp/Exception.hpp>

int main()
{
  /*
  set parameters
  multiple values possible, just comma-separate them 
  t=trading, f=funding
  */
  std::string symbols = "tMKRETH,fUSD,tETHUSD"; 
  // set url
  std::string url = "https://api.deversifi.com/bfx/v2/tickers?symbols=" + symbols;

  try {
    // use the automatic cleanup of curlpp's used resources (RAII style)
    curlpp::Cleanup cleaner;

    // define the request and response variables
    curlpp::Easy request;
    std::ostringstream response;

    // set the request options
    request.setOpt(new curlpp::options::Url(url));
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
