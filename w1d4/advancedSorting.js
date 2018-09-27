var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


var sortedArray = students.sort(function(a, b){
//console.log({a, b})// this can test how our sorting is being done.
  var nameA = a.name.toUpperCase(); // this is so that we ignore upper and lowercase inconsistencies
  var nameB = b.name.toUpperCase(); // this is so that we ignore upper and lowercase inconsistencies
  if(nameA < nameB){ // comparison line
    return -1; // moves the item - 1 in the array(position)
  }
  if (nameA > nameB) { //moves the item
    return 1;
   }  // at this point we know the names must be equal
  if (a.age < b.age) { // we then compare the age: and move the smaller + 1 in the array(position)
  return 1;
}
});

console.log(sortedArray)




// - we need to compare names first
// - then if name a === name b
//     - compare age
// - we need an if statement to evaluate the age after the name
// -


// Say we have a list of students that we would like to
// sort in alphabetical order. If students have the same name, then we prioritize the older student first.

// Write a sorting function (sometimes called a custom comparator), that sorts the
// above array first by the name ascending alphabetically, and in cases where the names
// are equal sort by descending age.

// Read about the Array.prototype.sort() function on MDN in order to implement your solution

// Did you notice that the sort() function modifies the array being sorted, whereas filter() and map() functions produced new arrays?

