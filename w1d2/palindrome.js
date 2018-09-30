
function isPalindrome(str) {
  var noSpaces = str.split(" ").join("");
  var readyForTesting = noSpaces.toUpperCase();
  var mid = Math.floor(readyForTesting.length/2);
  var last = readyForTesting.length - 1;
  var boolean = false;
    if (readyForTesting.length === 1){
      boolean = true;
      return boolean;
    }
  for (var i = 0; i < mid; i++){
    if (readyForTesting[i] !== readyForTesting[last - i]){
       boolean = false;
       return boolean;
    } else {
       boolean = true;
    }
  }
   return boolean
}

// Test driver code. These should all log true.
console.log(isPalindrome('estates') === false);
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);
