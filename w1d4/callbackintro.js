// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr);   // I don't understand why I put 'arr' here
    }
  }
}
//need a input in found() and actionWhenFound()
function actionWhenFound(arr) {
  for (var i; i < arr.length ; i++){
  if (arr[i] === "Waldo")
   var WaldoPos = i;
   console.log("Found Waldo at index " + i + "!");
  }

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

////
var myFn = function() {
  console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

runner(myFn);

Modify the callback function in the previous example so that logs the index of the array
where Waldo is found, ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound
  to receive the index.)
Once you have this working, remember to commit your changes using Git. A good commit message
should be concise and descriptive of the changes you have made. An example
 commit message: Print the index of Waldo when found.