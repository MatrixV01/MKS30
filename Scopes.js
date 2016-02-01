//
// Lexical scoping
//
var x = 10

function getX () {
  // function scope A

  var test = function () {
    // function scope B
    // CAN access x from here
    var y = x + 20
    return y
  }
  // Cannot access y from here
  // CAN access x from here
  return x + test()
}

getX() //=> 40

// Cannot access y from here
// Cannot access x from here


//
// IIFE
// Immediately-Invoking Function Expression
//
(function () {

  // Create a local variable
  var x = 11

  // Intentionally create a global variable
  window.y = 22
  // Don't do this
  // y = 22

})()


//
// Module Pattern
//
var MyModule = (function () {

  var x = 11

  return {
    getX: function () { return x }
  }

})()

MyModule.x //=> undefined
MyModule.getX //=> 11
