// this document contains 2 solutions

var listOfData = [];

var sorting = function() { //function for sorting the list of data above in numerical order
  return listOfData.sort(function(a,b){ // this return sends our sorted list of data out of the function
    return a - b; // compares the numbers in the listOfData to one another
    }
  )};

module.exports = { //this objects functions can be called by another file via their key
  collectData: function(inputData){ // this function takes an number and pushes it to listOfData array
    listOfData.push(inputData);
   },
  sortedDataList: function () { // this function console logs our sorting function which outputs our list of data sorted
    console.log(sorting());
  }
}

// The following is an alternate solution

// var list = [];/*Empty array that receives pushed values everytime a function
// is executed*/

// function sortList (a,b){ //Array now becomes sorted ascendingly
//     return a - b;
// }

// //Module exports
// module.exports = {
//   addNumber: function (num) {//Updates list with num each time it is called
//     list.push(num);
//   },
//   returnList: function () {//Returns sorted list ascendingly
//     console.log(list.sort(sortList));//Be careful there is a callback "sortList"
//     //being called
//   }

// }








// Create a module that exports a function that takes a
// number as a parameter and stores it in a list. The list should
// not be accessible from outside the module.

// Export another function that returns a version of the data
//  list that is sorted in ascending order. The function you use
//  to sort the data correctly should not be accessible from outside
//  the module. (Think back to the Custom Sorting Exercise when handling sorting)

// Implement a Node.js script that imports the functionality of your module,
// adds at least 5 different data points to the module's data list, and outputs the sorted list.