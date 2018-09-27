function countLetters(string){
  var numberOfEachLetter = {}; //create an empty object to pass our information into
  var string = string.replace(/\s/g, '');
  var character = string [i] // should this be in the for loop ???
  for (var i = 0; i < string.length; i++) {
    if(numberOfEachLetter[string[i]] === undefined) {
      numberOfEachLetter[string[i]] = 1;
    } else {
      numberOfEachLetter[string[i]] +=1;
    }
}
return numberOfEachLetter;
}

console.log(countLetters("lighthouse in the house"))

