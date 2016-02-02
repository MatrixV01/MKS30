//
// Setting a cookie
//
var express = require('express')
var app = express()
// var cookieParser = require('cookie-parser')

app.get('/', function (req, res) {
  console.log("Headers:", req.headers)
  res.setHeader('Set-Cookie', 'x=y')
  res.send('hi')
})

console.log("Listening on 8080")
app.listen(8080)


//
// Using cookies & sessions in express
//
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')
var uuid = require('uuid')

app.use( cookieParser() )


var sessionStorage = {}

app.post('/sign-in', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;

  User.findByUsername(username)
    .then(function (user) {
      // Pretend password is correct
      if ( passwordIsCorrect(user, password) ) {
        var newSession = { id: uuid(), userId: user.id }
        sessionStorage[ newSession.id ] = newSession

        response.setHeader('Set-Cookie', 'sessionId=' + newSession.id)
        response.end()
      }
    })
})

app.post('/comments', function (request, response) {
  // User must be signed in
  var sessionId = req.cookies.sessionId

  if ( ! sessionId ) {
    return response.sendStatus(401)
  }

  var userSession = sessionStorage[sessionId]
  if ( ! userSession ) {
    return response.sendStatus(401)
  }

  User.find( userSession.userId )
    .then(function (user) {
      return Comment.create({ author_id: user.id, content: req.params.content })
    })
    .then(function (newComment) {
      res.status(201).send(newComment)
    })
})
