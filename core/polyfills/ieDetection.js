/* eslint-disable */

var ua = window.navigator.userAgent;
var msie = ua.indexOf('MSIE ');

var browser = msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./) ? 'ie' : '';

// Add class to root html
var html = document.documentElement;

html.className += browser;
