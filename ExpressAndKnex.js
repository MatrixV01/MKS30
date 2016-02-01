//
// Express.js
//
// $ npm install --save express
//
var express = require('express')

var app = express()

// Middleware
app.use(function (request, response, next) {
  console.log("Handling:", request.method, request.url);
  next();
});

// Request body middleware
// app.use(function (request, response, next) {
//   var body = '';
//   request.on('data', function (dataChunk) { body += dataChunk });
//   request.on('end', function () {
//     request.body = JSON.parse(body);
//     next();
//   })
// })

var bodyParser = require('body-parser');
app.use( bodyParser.json() )

app.post('/comments', function (request, response) {
  request.body //=> "some content"
})

app.get('/', function (request, response) {
  response.status(200).send(`
    <h1>Hello, world!</h1>
    <script src="/my-app.js"></script>
  `);
});

var comments = [
  { id: 10, user_id: 1, content: 'hi' },
  { id: 11, user_id: 2, content: 'hello' }
];
app.get('/comments', function (request, response) {
  response.send(comments);
});


var port = 3000;
console.log("Listening on localhost:" + port);
app.listen(port);

// ----

var server = http.createServer(function (request, response) {
  console.log("Handling:", request.method, request.url)

  if ( request.method === 'GET' && request.url === '/' ) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(`
      <h1>Hello, world!</h1>
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

//
// Knex.js
//
// $ npm install --save knex sqlite3
//
var db = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: 'my-database.sqlite'
  }
});

db('users').select('*').where({ username: 'alice' })
  .then(function (users) {
    console.log("Got users:", users)
  })

// Model layer
var User = {}

User.findByUsername = function (username) {
  return db('users').select('*').where({ username: username }).limit(1)
    .then(function (users) {
      users //=>    [{ id: 10, username: 'alice' }]
            //=> OR []
      return users[0]
    })
}

// Elsewhere... This matches
// GET /users/alice
// GET /users/bob
// etc.
app.get('/users/:username', function (req, res) {
  var username = req.params.username;

  User.findByUsername(username)
    .then(function (user) {
      if (user) res.send(user)
      else      res.status(404).send({ reason: 'user_not_found' })
    })
})
