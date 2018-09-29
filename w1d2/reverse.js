var input = process.argv[2]; // this turns our string into input

if (input)
  console.log(reverse(input));

function reverse(original) {
  var word = original.split('').reverse().join('');
  return word;
}



