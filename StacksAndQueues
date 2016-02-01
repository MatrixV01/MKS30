//
// In general, these two are equivalent:
// 1.
setTimeout(function task () {
  console.log('done')
}, 1000)

// 2.
function task () {
  console.log('done')
  // return undefined
}
setTimeout(task, 1000)


//
// Keyword `this` with async (setTimeout)
//
window.name = 'window'

var Person = function (name) {
  var person = {}
  person.name = name
  person.greet = function () {
    console.log(this.name + ' says hi')
  }
  return person
}

var alice = Person('Alice')
alice.greet() //=> Immediately logs: 'Alice says hi'

// After 1 second, logs: 'Alice says hi'
setTimeout(function () {
  alice.greet()
}, 1000)

// After 1 second, logs: 'window says hi'
setTimeout(alice.greet, 1000)
// Equivalent to:
// setTimeout(function () {
//   console.log(this.name + ' says hi')
// }, 1000)

// Immediately logs: 'Alice says hi'
setTimeout(alice.greet(), 1000)
// Equivalent to:
// setTimeout(undefined, 1000)



//
// Function Binding
//
var Person = function (name) {
  var person = {}
  person.name = name
  person.greet = function () {
    return this.name + ' says hi'
  }
  return person
}

var alice = Person('Alice')
alice.greet() //=> 'Alice says hi'

//
// A bound function is bound forever.
//
var boundGreet = alice.greet.bind(alice)

boundGreet()                     //=> 'Alice says hi'
window.boundGreet()              //=> 'Alice says hi'
boundGreet.call({ name: 'Bob' }) //=> 'Alice says hi'
