// 1. What is a Process?
//    > Limited resources (memory, processing power)

// Web process accepts user input, saves to a TODO: ARCHIVE file
// Archive process reads from TODO: ARCHIVE file,
// fetches html via HTTP, saves html to new file.

// 2. A Browser's Life
//    > JavaScript
//    > HTTP requests


//
// Browser Request Cycle Example
//
var http = require("http");
var fs = require('fs');

var server = http.createServer(function (request, response) {
  console.log("Handling:", request.method, request.url)

  if ( request.method === 'GET' && request.url === '/' ) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(`
      <h1>Hello, world!</h1>
      <link rel="stylesheet" type="text/css" href="/my-app.css">
      <img src="hello.png" />
      <script src="/my-app.js"></script>
    `)
  }
  else if ( request.method === 'GET' && request.url === '/my-app.js' ) {
    response.writeHead(200, { 'Content-Type': 'text/javascript' })

    fs.readFile('./random-javascript.js', 'utf8', function (err, contents) {
      if (err) throw err;
      console.log("Got file contents:", contents)
      response.end(contents)
    })
  }
  else {
    response.writeHead(404)
    response.end('')
  }
});

var port = 3000;
console.log("Listening on localhost:" + port);
server.listen(port);
