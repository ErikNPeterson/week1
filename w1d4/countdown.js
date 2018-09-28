var countdownGenerator = function (x) { //because the function is assigned as a variable
  //it can actually keep track of the count. Otherwise it will reset each time!
   var countdown = ['T-minus 3', 'T-minus 2', 'T-minus 1','Blast Off!', 'Rockets already gone, bub!']
   var count = 0; // creates our count marker for our countdown array
   // if the count is not located outside of the closure function each time it is called
   //it will be reset.

  return function (){
    var countdownList = countdown[count];
    count += 1;
      if(count === countdown.length){ // when i === array.length this will set i back to 0
        count = countdown.length - 1; // we us .length -1 because the END counter would be 4
      }                               // while the length would be 5 so we -1 to make it 4
      console.log(countdownList);     // this part makes the function continue to run countdown[4]
      return countdownList;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();