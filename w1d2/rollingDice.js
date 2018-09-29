// I used Math.Round in this work apparently this ends up creating
// an unequal idstribution of numbers which is not truly random
// in future I would change this. check out
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// create a variable to take a single parameter (num) from command line
var howManyTimes = process.argv[2] // is this because it's like [node, rollingDice.js, (ourNumber)]??


var diceRoll = function(){
  var result = 0;
  result += Math.round(Math.random() * (6 - 1) + 1 );
  return result;
}

var arrayIntoString = function(arr){
  return arr.join();
}


function diceRoller(howManyTimes){
var diceRolls = []; // we will need to .join this array before output
  for (var i = 0; i < howManyTimes; i++) {
    diceRolls.push(diceRoll());
  }
  return "Rolled " + howManyTimes + " dice: " + arrayIntoString(diceRolls)
}

console.log(diceRoller(howManyTimes));
