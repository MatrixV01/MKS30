var m = require('mithril');


var Shop = module.exports;


//
// jQuery version
//
Shop.fetch = function (callback) {
  $.ajax({
    method: 'GET',
    url: 'http://pet-shop.api.mks.io/shops/1',
    success: callback
  });
}

Shop.fetchPets = function (callback) {
  $.ajax({
    method: 'GET',
    url: 'http://pet-shop.api.mks.io/shops/1/pets',
    success: callback
  });
}

var shop = null // Goal: { name: "Joe's Pet Shack", id: 1, pets: [...] }

Shop.fetch(function(shopData) {
  shop = shopData
  Shop.fetchPets(function(petData) {
    shop.pets = petData
  })
})

shop //=> null


//
// Promise version
//
Shop.fetch = function () {
  return m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1' });
}
Shop.fetchPets = function () {
  return m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1/pets' })
}

var shop = null // Goal: { name: "Joe's Pet Shack", id: 1, pets: [...] }

Shop.fetchWithPets = function () {
  return Promise.all([
    Shop.fetch(),
    Shop.fetchPets()
  ])
    .then(function(results) {
      var shop  = results[0]
      shop.pets = results[1]
      return shop
    })
}

Shop.fetchWithPets().then(function(theShop) {
  theShop.id   //=> 1
  theShop.pets //=> [...]
})

//
// Example of model code preparing data
//
Shop.fetchCats = function () {
  return m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1/pets' })
    .then(function(petData) {
      return petData.filter(function(pet) { return pet.species === "cat" })
    })
}


Shop.fetchCats().then(function(cats) {
  cats //=> [...] where all objects have .species === "cat"
})




  //
  // Error handling with .catch
  //
  var errorPromise = m.request({ method: 'POST', url: 'http://pet-shop.api.mks.io/signin' })

  // .then handles resolved promises, while .catch handles rejected promises
  errorPromise
    .then(function(result) {
      console.log("One", result)
      return "x"
    })
    .catch(function(error) {
      console.log("Two:", error)
      return "y"
    })
    .then(function(result) {
      console.log("Three:", result)
    })
    .catch(function(result) {
      console.log("Four:", result)
    })
  // One   does not run
  // Two   RUNS
  // Three RUNS
  // Four  does not run
