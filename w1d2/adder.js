

 function convertToNumbers(arrayOfNumbers){
   var numbers = [];

    for (var i = 0; i < args.length; i++) {
     var number = parseInt(args[i], 10);
     if(Number.isInteger(number)){
     numbers.push(number);
    }
 return numbers;
 }


// adding our array together below

function sumOfNumbers(array) {
var total = 0;
  for (var i = 0; i < array.length; i++) {
    var number = numbers[i];
    total += number;
  }
  return total;
}

// below are our functions
var args = process.argv.slice(2); // slice(2) keep it from printing unnecessary information

console.log("args",args);

var numbers = convertToNumbers(args);

console.log("numbers", numbers);

var sum = sumOfNumbers(args);

console.log("Sum:", sum);
