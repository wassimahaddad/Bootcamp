const input = require('readline-sync');
let num = input.question("Please choose a number larger than 10: ");
while (num <= 10 || Number.isNaN(num*1) || (num-Math.floor(num))>0 ) {
     num = input.question("Please choose a number LARGER than 10: "); 
}
console.log('\n','Thank You','\n')