var person = {
  name: 'Alice',
  greet: function () {
    return this.name + "says hi"
  }
}

person.greet() //=> 'Alice says hi'

var otherPerson = {
  name: 'Bob'
  // greet: person.greet
}

otherPerson.greet() //=> 'Bob says hi'
