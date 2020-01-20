var request = require("request");
// set parameters
const maker = "0xfc898b18a70ce49579f8d79a32e29928c15b4bc8";
// set url
const url = "https://api.deversifi.com/v1/pub/events/maker/" + maker;
// execute request and print result
request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});
