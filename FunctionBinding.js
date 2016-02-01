Function binding; subl command

var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.bind(alice), 1000);

setTimeout(function() {
  alert(alice.name + " says hi");
}, 1000);

var f = alice.sayHi.bind(bob)

f()         //=> alerts: "Bob says hi"
window.f()  //=> alerts: "Bob says hi"
f.call(bob) //=> alerts: "Bob says hi"

alice.sayHi() //=> alerts: "Alice says hi"

alice.sayHi.call({ name: 'anon' }) //=> alerts: "Anon says hi"

//
// 1. Learn what $PATH is
// 2. Google and add `subl` command (make sure you put it in a folder in your PATH)
// 3. Run `subl ~/.bash_profile`
// 4. Add: `export GIT_EDITOR='subl -w'`
//
