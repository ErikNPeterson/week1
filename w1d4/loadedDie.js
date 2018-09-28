function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0 // sets our counter to 0

  return function(){
      var number = list[i]; // creates a variable so that we can print the numbers in array
      i += 1 // counter that adds 1 to i each time the function is run
      //(^^^^this adds after list[i] is run the first time otherwise it will start at i = 1
      if(i === list.length){ // when i === array.length this will set i back to 0
        i = 0;
      }
      return number;
  }
}



var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
