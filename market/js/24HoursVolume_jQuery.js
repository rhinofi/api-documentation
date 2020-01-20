"use strict";
// setup jsdom
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
// setup jquery
var $ = require('jquery')(window);

// set the url
const url = "https://api.deversifi.com/v1/pub/24HoursVolume/2020/1/1"
// get and print the result on success
$.get(url).then(function(d) {
    console.log(d);
});
