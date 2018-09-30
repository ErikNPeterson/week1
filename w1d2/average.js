function average(list) {
  var sum = 0;

  for (var num of list) { // this is like a forEach() num represents each item list[i];
    sum += num ;
  }

  return sum / list.length;
}
console.log(average([3, 5, 7]));