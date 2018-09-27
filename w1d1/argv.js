console.log(process.argv);

 var myArgs = process.argv.slice(2);
 console.log('myArgs: ', myArgs);

  switch (myArgs[0]) {
   case 'insult':
     console.log(myArgs[1], 'smells quite badly.');
     break;
   case 'compliment':
     console.log(myArgs[1], 'is really cool.');
     break;
   default:
     console.log('Sorry, that is not something I know how to do.');
 }
var day;
 switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day);