const input = require('readline-sync');
let str = input.question("please enter a string: ");
let strArr = str.split('');
let len = strArr.length;
let counter = 0;
while (counter < len) {
if ( (strArr[counter] ==  'a') || (strArr[counter] ==  'e') || (strArr[counter] ==  'i') || (strArr[counter] ==  'o') || (strArr[counter] ==  'u') ) {
    strArr[counter] = strArr[counter].toUpperCase();
}
counter += 1;
}
console.log('\n', strArr.join(''), '\n');