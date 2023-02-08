"use strict";
// make new XMLHttpRequest
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const request = new XMLHttpRequest()
// set the url
const url = "https://api.rhino.fi/v1/pub/24HoursVolume/2020/1/1"
// execute the request
request.open("GET", url)
request.send()

// print the result if request was successful
request.onreadystatechange=function(){
    if(this.readyState==4 && this.status == 200) {
        console.log(JSON.parse(request.responseText));
    }
}



