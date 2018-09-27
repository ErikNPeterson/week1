function findWaldo(arrayOfNames, found) {
  arrayOfNames.forEach(function(element, i){
    if(element === "Waldo"){
      found(i);
    }
  }) // this hints to a callback
}
function actionWhenFound(foundIndex) {
   console.log("Found Waldo at index " + foundIndex + "!");
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
