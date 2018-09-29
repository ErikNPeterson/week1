var string = process.argv[2] // allows the function to take the string input from terminal

function obfuscate(string){
  var newPassword = ''; // when this was inside of the loop it didn't work.
  for (var i = 0; i < string.length; i++) {
    if(string[i].toUpperCase() === 'A'){
      newPassword += 4;
      } else if(string[i].toUpperCase() === 'E'){
      newPassword += 3;
      } else if(string[i].toUpperCase() === 'O'){
      newPassword += 0;
      } else if(string[i].toUpperCase() === 'L'){
      newPassword += 1;
      } else {
      newPassword += string[i];
  }
}
  return newPassword;
}

console.log(obfuscate(string));


// function obfuscate(string){
//   var newPassword = ''; // when this was inside of the loop it didn't work.
//   for (var i = 0; i < string.length; i++) {
//     if(string[i] === 'a'){
//       newPassword += 4;
//       } else if(string[i] === 'e'){
//       newPassword += 3;
//       } else if(string[i] === 'o'){
//       newPassword += 0;
//       } else if(string[i] === 'l'){
//       newPassword += 1;
//       } else {
//       newPassword += string[i];
//   }
// }
//   return newPassword;
// }

// console.log(obfuscate(string));

// console.log(obfuscate('password')) //p4ssw0rd
// console.log(obfuscate('abracadabra')) // 4br4c4d4br4
// console.log(obfuscate('audaciously')) // 4ud4ci0us1y

