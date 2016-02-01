//
// Prototypal Inheritance
//
var personMethods = {
  greet: function () {
    return this.name + " says hi"
  }
}
var Person = function (name) {
  var person = Object.create(personMethods)
  person.name = name
  return person
}

var doctorMethods = Object.create(personMethods)

doctorMethods.heal = function () {
  return this.name + ' is healing you'
}

var Doctor = function (name, specialty) {
  var doctor = Object.create(doctorMethods)
  doctor.name = name
  doctor.specialty = specialty
  return doctor
}

var alice = Doctor('Alice', 'ENT')
alice.heal()  //=> 'Alice is healing you'
alice.greet() //=> 'Alice says hi'



//
// Pseudo-classical Inheritance
//
var Person = function (name) {
  this.name = name
}

Person.prototype.greet = function () {
  return this.name + " says hi"
}

var Doctor = function (name, specialty) {
  Person.call(this, name)
  this.specialty = specialty
}

Doctor.prototype = Object.create(Person.prototype)

Doctor.prototype.heal = function () {
  return this.name + ' is healing you'
}

var alice = new Doctor('Alice', 'ENT')
// Equivalent to:
var alice = Object.create(Doctor.prototype)
alice //=> {} ~~~~~> Doctor.prototype
Doctor.call(alice, 'Alice', 'ENT')
