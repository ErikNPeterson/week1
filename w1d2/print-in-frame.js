function printInFrame(list) {
  var list = list.split(' '); // splitting the string into an array
  var longest = longestStr(list).length; // length of our longest word in a array
  var longestWordLine = ('* ' + longestStr(list) + ' *');
  var borderLineLength = longestWordLine.length;
  var border = repeat('*', borderLineLength); //

console.log(border);
  for (var word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length + 1) + '*');
  }
  console.log(border);
}

// function codes located below.

function repeat(str, times) {
  var result = str;

  for (var i = 0; i < times - 1 ; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {
  var longest = list[0];

  for (var str of list) {
    if (str.length >= longest.length){
      longest = str;
    }
  }
  return longest;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
