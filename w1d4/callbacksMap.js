var words = ["ground", "control", "to", "major", "tom"];

// reformatt below

function wordLength (names){
  return names = names.length
}; // what do we put in here

function upperCase (names){
  return names = names.toUpperCase();
};

function wordsInReverse (names){
  return names = names.split('').reverse().join('');
};

function manipulateWords (wordsArray, manipulation){
  var manipulatedArray = [];
  for (var i = 0; i < wordsArray.length; i++) {
    //call the function on each of the words in the array
    manipulatedArray.push(manipulation(wordsArray[i]));
  }
  return manipulatedArray;
}

console.log(manipulateWords(words, wordLength));
console.log(manipulateWords(words, upperCase));
console.log(manipulateWords(words, wordsInReverse));
// implement .splice in our function


// Implement your own version of the built-in array map function.
// Yours will take in two arguments. The first will be an array
// to map and the second will be a callback function.
// The function will return a new array based on the results of the callback function.

// Our function should return the following

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ] // reverses the order of the letters














// var infoAboutWords = words.map(function(word) {
//   var numberOfLetters = [];
//   var wordsInUppercase = [];
//   var wordsInReverse = [];
//   numberOfLetters.push(word.length);
//   console.log("numbers: ",numberOfLetters);
//   wordsInUppercase.push(word.toUpperCase());
//   console.log(wordsInUppercase);
//   wordsInReverse.push(word.split('').reverse().join(''));
//   console.log(wordsInReverse);
// });

// infoAboutWords(words);