//
// Mixins: Alternative to inheritance
//
var Animal = function (species) {
  var animal = {}
  animal.species = species
  animal.speak = function () {
    return "The " + animal.species + " says something."
  }
  return animal
}

// A mixin
var catlike = function (animal) {
  animal.speak = function () {
    return "The " + animal.species + " says meow"
  }
  return animal
}

// Another mixin
var stuffed = function (animal) {
  animal.material = 'cotton'
  return animal
}

var cat = stuffed( catlike( Animal('cat') ) )
cat.material //=> 'cotton'
cat.speak()  //=> 'The cat says meow'


//
// Purely Functional
// Decouple functions from data
//
var Cat = function (name, hobby) {
  return { name: name, hobby: hobby }
}

var cat = Cat('kittymittens', 'sleeping')

function doCatHobby (cat) {
  return cat.name + ' likes to ' + cat.hobby
}

doCatHobby(cat) //=> 'kittymittens likes to sleeping'
