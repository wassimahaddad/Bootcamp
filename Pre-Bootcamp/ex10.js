const input = require('readline-sync');
let str = input.question("please enter a sentence containing at least 3 words: ");
let strArr = str.split(' ');
let len = strArr.length;
let counter = 0;
while (counter < len){
str=str.replace(" ","*")
counter += 1;
}
console.log('\n',str,'\n');
