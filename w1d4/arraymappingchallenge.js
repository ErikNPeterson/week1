
var listOfTriangles = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];                    // what goes into triangle. Map takes one element of the input array and tranforms it according to your function.
var result = listOfTriangles.map(function(triangle) {  // input.map creates a brand new array of Z or (5,13,17)
  return Math.sqrt(triangle.x * triangle.x + triangle.y * triangle.y)
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);