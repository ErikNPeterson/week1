

/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */


var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
var concepts = joinList(conceptList);

function joinList(array) {
  var list = '';
  for(var i = 0; i < array.length; i++){
    if(i + 1 < array.length){
      list += array[i] + ', ';
    } else {
      list += array[i];
    }
  }
  return list;
}

console.log("Today I learned about " + concepts + ".");

