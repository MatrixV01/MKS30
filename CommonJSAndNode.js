//
// Assume you have this file in lib/my-module.js
//
console.log("-=-=- Loading my module -=-=-")

module.exports.x = 10
module.exports.y = function() {}

var myLocalVariable = 'something'
// global.myGlobalVariable = 'something' // no


//
// How to require things:
//

// 1. Requiring a local file
var helper = require('./lib/my-module.js')
helper //=> { x: 10, y: function() {} }

// 2. Requiring a built-in node module

var url = require('url')
var result = url.parse('http://example.com/p?x=1&y=2')

// 3. Requiring a npm-installed node module

var renderMarkdown = require('marked')
var result = renderMarkdown('## Hi')




//
// Simple node.js server
//
var http = require("http");

var server = http.createServer(function (request, response) {
  console.log("Handling:", request.method, request.url)

  // Look up: How to get request body

  if ( request.method === 'GET' && request.url === '/' ) {
    // Server home page
  }
  else if ( request.method === 'GET' && request.url === '/users' ) {
    // Send back users
  }
  else {
    response.writeHead(404)
    response.end('')
  }
});

var port = 3000;
console.log("Listening on localhost:" + port);
server.listen(port);
