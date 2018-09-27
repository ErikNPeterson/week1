function countLetters(string){
  var numberOfEachLetter = {};
  var string = string.replace(/\s/g, '');
  for (var i = 0; i < string.length; i++) {
    var character = string [i]
    if(numberOfEachLetter[character] === undefined) {
      numberOfEachLetter[character] = [i];
    } else {
      numberOfEachLetter[character].push(i);
    }
}
return numberOfEachLetter;
}

console.log(countLetters("lighthouse in the house"))


/* old version
 *
function countLetters(string){
  var numberOfEachLetter = {};
  var string = string.replace(/\s/g, '');
  var character = string [i] // Dave: This should definitley be inside the for loop, then instead of using string[i] everywhere you can just use character
  for (var i = 0; i < string.length; i++) {
    if(numberOfEachLetter[string[i]] === undefined) {
      numberOfEachLetter[string[i]] = [i];
    } else {
      numberOfEachLetter[string[i]] += i;
    }
}
return numberOfEachLetter;
}

console.log(countLetters("lighthouse in the house"))
