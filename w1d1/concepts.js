

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
    if(i + 1 < array.length){ // here we're making sure that the commas only go inbetween and not at the end
      list += array[i] + ', '; // inserting our array values into string list
    } else {
      list += array[i]; // the last value will be added without a ", "
    }
  }
  return list;
}

console.log("Today I learned about " + concepts + ".");

