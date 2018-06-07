
let numPlayers = 5;

var player1 = jQuery.extend(true, {}, person);
var player2 = jQuery.extend(true, {}, person);

player1.state.currentTurn = false;

console.log(player1.state.currentTurn)
console.log(player2.state.currentTurn)

console.log(locations);
console.log(bonusCards);

let rollCount = 0;
let doublesCount = 0;

// Run the roll function on click
document.getElementById("rollBtn").onclick = function() {roll()};
    
function roll() {
  let dice1 = singleRoll(); let dice2 = singleRoll();
  let diceTotal = dice1 + dice2;
  let gotDoubles = false;

  if (dice1 == dice2) {
    gotDoubles = true;
    doublesCount = doublesCount + 1
  }

  console.log("You rolled two dice. Dice#1 = " + dice1 + " Dice#2 = " + dice2)
  console.log("For a total of " + diceTotal);
  console.log("Got doubles? " + gotDoubles);
  console.log("Doubles count is " + doublesCount);

}

function singleRoll() {
    let min = 1; let max = 6;
    return Math.floor(Math.random() * (max - min + 1) + min);
    //return 6;
};

function playerMove() {

};

function propertyPurchase() {

};




