var samplePlayers = [
  { name: 'Alice', score: 100 },
  { name: 'Bob', score: 100 },
  { name: 'Carly', score: 105 },
  { name: 'Dan', score: 110 }
]

function calculatesAverageScore (players) {
  return getTotalScore(players) / players.length
}

function getTotalScore (players) {
  // return players.reduce(function(total, player) {
  //   return total + player.score
  // }, 0)
  return sumProperty(player, 'score', 0)
  // var player, total = 0
  // while ( player = players.pop() ) { // <-- BAD
  //   total += player.score
  // }
  // return total
}

function sumProperty (array, propName, initialValue) {
  return array.reduce(function (total, elem) {
    return total + elem[propName]
  }, initialValue)
}

calculatesAverageScore(samplePlayers)

//
// Goal: Increment all player scores by 50
//

// Mutative version
samplePlayers.forEach(function (player) {
  player.score += 50
})

// Non-mutative version
var newPlayers = samplePlayers.map(function (player) {
  return _.extend({}, player, { score: player.score + 50 })
})
