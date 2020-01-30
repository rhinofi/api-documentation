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

  timeframe 
      string, available values: '1m', '5m', '15m', '30m', '1h', '3h', '6h','12h', '1D','7D', '14D', '1M'

  symbol
      string, trading pair, funding, e.g.: tETHUSDT, fUSD, fETH

  section
      string, available values: "last", "hist"

  period
      string, funding period, only required for funding candles
  */
  std::string timeframe = "1m"; 
  std::string symbol = "tETHUSD";
  std::string section = "hist";

  // left out because in this example we use trading pair tETHUSD
  // std::string period = "p30"; 

  /*
  set optional parameters, You can skp this step

  limit
      integer, limits the amount of results

  sort
      integer, determines if the results should be sorted
      if = 1 it sorts results returned with old > new

  start
      integer, optional, in ms

  end
      integer, optional, in ms
  */
  std::string limit = "limit=100";
  std::string sort = "sort=-1";
  // optional time slice
  // std::string start = 0;
  // std::string end = 0;

  // set the url
  std::string url = "https://api.deversifi.com/bfx/v2/candles/trade:" + timeframe + ":" + symbol + "/" + section;
  // set optional url params, You can skp this part
  url += "?" + limit + "&" + sort;

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
